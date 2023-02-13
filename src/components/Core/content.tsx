import LinkedCardGrid from '@/components/Core/LinkedCardGrid'
import TextGrid from '@/components/Core/TextGrid'

export const coreContent = [
  {
    title: 'The most complete and secure account abstraction stack',
    items: [
      {
        icon: {
          src: '/images/Core/blob-1.svg',
          alt: 'Safe blob 1',
        },
        title: 'Safe {CORE} AA SDK',
        text: 'Easily level up your application and empower your users with the most advanced account abstraction SDK. Cutting-edge functionality and the best UX.',
      },
      {
        icon: {
          src: '/images/Core/blob-2.svg',
          alt: 'Safe blob 2',
        },
        title: 'Safe {CORE} API',
        text: 'Easily level up your application and empower your users with the most advanced account abstraction SDK. Cutting-edge functionality and the best UX.',
      },
      {
        icon: {
          src: '/images/Core/blob-3.svg',
          alt: 'Safe blob 3',
        },
        title: 'Safe {CORE} PROTOCOL',
        text: 'Discover and contribute to a growing ecosystem of technological breakthroughs based on Safe with the Safe{Core} Protocol.',
      },
    ],
    component: LinkedCardGrid,
  },
  {
    textBlock: {
      caption: 'Safe Core API',
      title: 'Immediate Access to all account information to power your interface',
      link: { text: 'Get started', href: '#' },
    },
    gist: {
      // TODO: replace for a definitive gist
      id: '10a395880c30867601515560a4e5854d',
    },
    grid: {
      title: 'Features',
      items: [
        {
          title: 'Increased security',
          text: 'Top-notch security and custom access control for you and for your users',
        },
        {
          title: 'Lower complexity',
          text: 'Bundle painful blockchain click-heavy user flows in one click',
        },
        {
          title: 'Infinite flexibility',
          text: 'Fully leverage the composability of the stack using the Core SDK',
        },
      ],
    },
    component: TextGrid,
  },
  {
    textBlock: {
      caption: 'Safe core protocol',
      title: 'Build any use case with the battle-tested security of Safe{Core} Protocol',
      text: 'Tap into the ecosystem’s cutting-edge plug-ins or write your own custom logic to plug into the Safe core contracts.',
      link: { text: 'Get started', href: '#' },
    },
    image: {
      src: '/images/Core/safe-core-protocol.png',
      alt: 'Safe core protocol',
    },
    grid: {
      title: 'Benefits',
      items: [
        {
          title: 'Improve the UX of your product with account abstraction',
        },
        {
          title: 'Customize access control to Safe accounts',
        },
        {
          title: 'Build on battle tested  security',
        },
        {
          title: 'Build any use case by extending the on-chain logic of core contracts',
        },
      ],
    },
    component: TextGrid,
  },
]
