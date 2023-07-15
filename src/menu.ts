const items = {
  highlights: [
    { label: 'Docs', href: 'https://docs.zemit.com', icon: '', target: '_blank', },
    { label: 'Getting Started', href: 'https://docs.zemit.com/quick-start', icon: '', target: '_blank', },
    { label: 'About', to: { name: 'about' }, icon: '', },
  ],
  apps: [
    { label: 'Core', href: 'https://github.com/zemit-cms/core', icon: 'mdi-state-machine', target: '_blank', },
    { label: 'Admin', href: 'https://github.com/zemit-cms/admin', icon: 'mdi-account-tie', target: '_blank', },
    { label: 'SDK', href: 'https://github.com/zemit-cms/sdk-js', icon: 'mdi-api', target: '_blank', },
  ],
  social: [
    { label: 'Github', href: 'https://github.com/zemit-cms', icon: 'mdi-github', target: '_blank', },
    { label: 'Twitter', href: 'https://twitter.com/ZemitOfficial', icon: 'mdi-twitter', target: '_blank', },
    { label: 'Discord', href: 'https://discord.zemit.com', icon: 'mdi-discord', target: '_blank', },
    { label: 'Youtube', href: 'https://youtube.zemit.com', icon: 'mdi-youtube', target: '_blank', },
  ],
  support: [
    { label: 'File bug report', href: 'https://github.com/zemit-cms/core/issues/new', icon: 'mdi-bug-outline', target: '_blank', },
    { label: 'Github issues', href: 'https://github.com/zemit-cms/core/issues', icon: 'mdi-clipboard-list-outline', target: '_blank', },
    { label: 'Latest releases', href: 'https://github.com/zemit-cms/core/tags', icon: 'mdi-tag-multiple', target: '_blank', },
  ],
}

const principal = [
  items.highlights[0],
  { label: 'Ecosystem', children: [
      { label: 'Apps', children: items.apps },
      { label: 'Social', children: items.social },
      { label: 'Documentation', children: [
          { label: '1.x (stable)', href: 'https://docs.zemit.com', icon: 'mdi-book-open', target: '_blank', },
      ] },
  ] },
  { label: 'Support', children: items.support },
  items.highlights[2],
]

export {
  principal,
}

export default items;
