// One-time content/configuration setup. The user research baseline is never read or modified.
import { readFileSync, writeFileSync } from 'node:fs';

const file = 'src/locales/en.json';
const ui = JSON.parse(readFileSync(file, 'utf8'));
ui.nav.guides = 'Player guide';
ui.nav.resources = 'Game & community';
ui.shared.defaultListDescription =
  'Source-checked information and useful links for Morioh High players.';
ui.overview.guides = {
  overviewTitle: 'Morioh High Player Guide',
  overviewDescription:
    'Find the correct Roblox experience and learn how to launch Morioh High, with game identity checked against official Roblox data.',
};
ui.overview.resources = {
  overviewTitle: 'Morioh High Game & Community Resources',
  overviewDescription:
    'Check Roblox availability, release information, developer links, and the Morioh High Discord invite with clear source notes.',
};
ui.home = {
  meta: {
    title: 'Morioh High Wiki | Roblox Game & Player Resources',
    description:
      'Find the verified Morioh High Roblox game, release information, and community links. Independent player wiki with clear sources and verification dates.',
  },
  hero: {
    badge: 'ROBLOX · INDEPENDENT PLAYER WIKI',
    title: 'Morioh High Wiki',
    description:
      'School life in Morioh, with a bizarre twist. Find the right Roblox game, check its release information, and get connected with other players. Sources checked October 11, 2026.',
    ctaPrimary: 'Play on Roblox',
    ctaSecondary: 'Game & community links',
  },
  updates: { title: 'Read the field guide' },
  popular: {
    badge: 'At a glance',
    title: 'Useful links',
    quickLinks: [
      { label: 'How to play on Roblox', href: '/guides/how-to-play/' },
      { label: 'Release & availability', href: '/resources/release-information/' },
      { label: 'Discord & Trello resources', href: '/resources/community-links/' },
      { label: 'Common questions', href: '/faq/' },
    ],
  },
  start: {
    badge: 'Start here',
    title: 'Find your way into Morioh',
    cards: [
      {
        number: '01',
        title: 'Open the correct game',
        description:
          'Morioh High by Not A Stand Game. The Roblox link and game IDs have been checked.',
        icon: 'lucide:play',
        href: '/guides/how-to-play/',
      },
      {
        number: '02',
        title: 'Check availability',
        description:
          'See what the live Roblox listing confirms and how to read release-date claims.',
        icon: 'lucide:calendar-days',
        href: '/resources/release-information/',
      },
      {
        number: '03',
        title: 'Find the community',
        description: 'Developer group, a checked Discord invite, and clear notes on Trello.',
        icon: 'lucide:users',
        href: '/resources/community-links/',
      },
    ],
  },
  explore: {
    title: 'What is Morioh High?',
    description:
      'The developer describes a school life experience with classes, relationships, groups, exploration, and interactive NPCs. These are game-description facts; detailed routes and rewards need separate evidence.',
    modules: [
      {
        order: 1,
        name: 'The Roblox experience',
        description: 'Confirm the game before following a guide.',
        href: '/guides/how-to-play/',
        displayType: 'labeled-cards',
        highlights: [
          { label: 'Developer', detail: 'Not A Stand Game' },
          { label: 'Platform', detail: 'Roblox' },
          { label: 'Setting', detail: 'Morioh, Japan' },
          { label: 'Focus', detail: 'School life and player interaction' },
        ],
      },
      {
        order: 2,
        name: 'Know where information comes from',
        description: 'Use source notes to distinguish confirmed details from community reports.',
        href: '/resources/community-links/',
        displayType: 'labeled-cards',
        highlights: [
          { label: 'Roblox group', detail: 'Linked to the recorded game developer' },
          { label: 'Discord invite', detail: 'Destination checked; ownership unverified' },
          { label: 'Trello', detail: 'No verified board linked here' },
          { label: 'Game guides', detail: 'Mechanics require same-game evidence' },
        ],
      },
    ],
  },
  closingCta: {
    title: 'Ready for your first school day?',
    description:
      'Open the verified Roblox experience. Keep this guide bookmarked for the game link and source-checked resources.',
    primary: 'Play Morioh High',
    secondary: '',
  },
  faq: {
    title: 'Morioh High FAQ',
    description:
      'Quick answers about the Roblox game, its developer, availability, community links, and how this independent wiki verifies information.',
    items: [
      {
        question: 'What is Morioh High on Roblox?',
        answer:
          'Morioh High is a Roblox experience by Not A Stand Game. Its official description focuses on school life: attending classes, building relationships, joining groups, exploring, and interacting with NPCs.',
      },
      {
        question: 'Who made Morioh High?',
        answer:
          'Roblox lists Not A Stand Game as the developer group. The experience Place ID is 111838814545019 and its Universe ID is 10768944846.',
      },
      {
        question: 'Is Morioh High available?',
        answer:
          'The official Roblox API recorded active players on October 11, 2026. That confirms activity at the check time; access for a particular account or device depends on the current Roblox listing.',
      },
      {
        question: 'What is the Morioh High release date?',
        answer:
          'BloxInformer lists October 10, 2026, but that exact public release date has not been independently confirmed through a developer announcement here. Roblox records the experience object as created October 2; creation is a different event.',
      },
      {
        question: 'Is there a Morioh High Discord?',
        answer:
          'The invite discord.com/invite/moriohhigh resolved to a server named Morioh High when checked on October 11, 2026. It is shared by game-related sources. Developer ownership has not been verified here.',
      },
      {
        question: 'Where is the Morioh High Trello?',
        answer:
          'This wiki has not obtained an independently verified board URL. No Trello link is listed as official. Check the developer Roblox community for confirmed resource announcements.',
      },
      {
        question: 'Where are the Stand and codes guides?',
        answer:
          "Stand acquisition, the Stand roster, and code redemption have not passed this wiki's evidence checks. No untested code, drop chance, or mechanic is presented as confirmed. Use the developer community while those details remain unverified.",
      },
      {
        question: 'Is this an official wiki?',
        answer:
          'No. This is an independent player guide, unaffiliated with Not A Stand Game, Roblox Corporation, and the JoJo rights holders. Sources and check dates explain exactly what each page can support.',
      },
    ],
  },
};
ui.footer.officialDiscord = 'Community Discord';
ui.footer.officialYoutube = 'Game-related YouTube';
ui.footer.copyrightText =
  '© 2026 Morioh High Wiki. Independent player guide. Built with AnvilWiki (MIT).';
writeFileSync(file, JSON.stringify(ui, null, 2) + '\n');
console.log('Configured English homepage, navigation copy, FAQ and category metadata.');
