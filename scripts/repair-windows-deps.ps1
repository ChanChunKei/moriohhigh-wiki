# Optional Windows repair for native packages skipped by pnpm. No tracked source is changed.
$ErrorActionPreference = 'Stop'
$taskProjectRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$taskNodeModules = Join-Path $taskProjectRoot 'node_modules'
$taskNativePackages = @(
  @{ Name = '@rolldown/binding-win32-x64-msvc'; Version = '1.2.8'; Archive = 'rolldown-win.tgz' },
  @{ Name = '@pagefind/windows-x64'; Version = '1.5.2'; Archive = 'pagefind-win.tgz' }
)
foreach ($taskNativePackage in $taskNativePackages) {
  $taskMetadataUrl = 'https://registry.npmjs.org/' + $taskNativePackage.Name + '/' + $taskNativePackage.Version
  $taskMetadata = Invoke-RestMethod -Uri $taskMetadataUrl
  $taskArchivePath = Join-Path $taskProjectRoot ('.tools/cache/' + $taskNativePackage.Archive)
  New-Item -ItemType Directory -Force -Path (Split-Path $taskArchivePath) | Out-Null
  if (-not (Test-Path -LiteralPath $taskArchivePath)) {
    Invoke-WebRequest -Uri $taskMetadata.dist.tarball -OutFile $taskArchivePath
  }
  $taskHasher = [Security.Cryptography.SHA512]::Create()
  $taskStream = [IO.File]::OpenRead($taskArchivePath)
  try { $taskIntegrity = 'sha512-' + [Convert]::ToBase64String($taskHasher.ComputeHash($taskStream)) }
  finally { $taskStream.Dispose(); $taskHasher.Dispose() }
  if ($taskIntegrity -ne $taskMetadata.dist.integrity) { throw "Integrity mismatch for $($taskNativePackage.Name)" }
  $taskTargetPath = [IO.Path]::GetFullPath((Join-Path $taskNodeModules $taskNativePackage.Name))
  if (-not $taskTargetPath.StartsWith($taskNodeModules + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw 'Native package target escaped node_modules' }
  $taskMembers = & tar -tf $taskArchivePath
  if ($LASTEXITCODE -ne 0) { throw 'Cannot list package archive' }
  foreach ($taskMember in $taskMembers) {
    if (-not $taskMember.StartsWith('package/') -or $taskMember -match '(^|/)\.\.(/|$)') { throw "Unexpected archive member: $taskMember" }
  }
  New-Item -ItemType Directory -Force -Path $taskTargetPath | Out-Null
  & tar -xf $taskArchivePath -C $taskTargetPath --strip-components 1
  if ($LASTEXITCODE -ne 0) { throw 'Package extraction failed' }
  Write-Output "Verified SHA512 and restored $($taskNativePackage.Name)@$($taskNativePackage.Version) locally."
}
