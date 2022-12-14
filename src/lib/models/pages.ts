export const pages = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Sidebar',
    url: '/sidebar',
  },
  {
    name: 'Blog',
    url: '/blog',
  },

  {
    name: 'Dox',
    url: '/docs',
    children: [
      {
        name: 'NPM',
        url: 'https://www.npmjs.com/package/stroopwafels',
        target: '_blank',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/bmehder/stroopwafels',
        target: '_blank',
      },
      { name: 'Svelte', url: 'https://svelte.dev', target: '_blank' },
      { name: 'SvelteKit', url: 'https://kit.svelte.dev', target: '_blank' },
    ],
  },
  {
    name: 'Playground',
    url: '/playground',
    children: [
      { name: 'Draggables', url: '/playground/drag' },
      { name: 'Dialogue', url: '/playground/dialogue' },
      { name: 'Random Number API', url: '/api' },
    ],
  },
  {
    name: 'Contact',
    url: '/contact',
  },
]
