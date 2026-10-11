import fs from 'node:fs';
import { spawn } from 'node:child_process';
// Called with credentials over stdin from a session. Never write credentials to disk.
let input='';
for await(const chunk of process.stdin)input+=chunk;
const credentials=JSON.parse(input);
if(!credentials.apiToken||!credentials.accountId)throw new Error('Session credentials required.');
const project=JSON.parse(fs.readFileSync('reports/pages-project.json','utf8'));
const audit=JSON.parse(fs.readFileSync('reports/build-seo-audit.json','utf8'));
if(audit.failures.length||audit.origin!==`https://${project.subdomain}`)throw new Error('Build SEO gate failed or origin differs.');
const args=['.tools/wrangler/node_modules/wrangler/bin/wrangler.js','pages','deploy','dist','--project-name',project.name,'--branch','main','--commit-dirty=false'];
if(credentials.commit)args.push('--commit-hash',credentials.commit);
const child=spawn(process.execPath,args,{env:{...process.env,CLOUDFLARE_API_TOKEN:credentials.apiToken,CLOUDFLARE_ACCOUNT_ID:credentials.accountId,WRANGLER_SEND_METRICS:'false'},windowsHide:true});
const redact=text=>text.replaceAll(credentials.apiToken,'[redacted]').replace(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi,'[email redacted]');
let output='';
for(const stream of [child.stdout,child.stderr])stream.on('data',chunk=>{const safe=redact(chunk.toString());output+=safe;process.stdout.write(safe);});
child.on('error',()=>{process.stderr.write('Unable to launch Wrangler.\n');process.exitCode=1;});
child.on('close',code=>{fs.writeFileSync('reports/logs/deploy.txt',output);process.exitCode=code??1;});
