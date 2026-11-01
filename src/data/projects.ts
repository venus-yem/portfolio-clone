export interface ProjectItem {
  slug: string;
  title: string;
  primaryTag: string;
  tags: { label: string; slug: string }[];
  date: string;
  client: string;
  category: string;
  tools: string[];
  startDate: string;
  endDate: string;
  heroImage: string;
  cardImage: string;
  bentoColClass?: string;
  featuredOnHome?: boolean;
  homeCardImage?: string;
  galleryImages: [string, string];
  overviewParagraphs: string[];
  highlights: string[];
  typographyBody: string;
  conclusionColumns: [string, string];
}

const DEFAULT_OVERVIEW = [
  'Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.',
  'That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.',
];

const DEFAULT_HIGHLIGHTS = [
  'Advantage',
  'Accomplished',
  'Marketplace startups',
  'SaaS startups',
];

const DEFAULT_TYPOGRAPHY =
  'The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy.';

const DEFAULT_CONCLUSION: [string, string] = [
  'The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy.',
  'The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe.',
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'website-design',
    title: 'Website design',
    primaryTag: 'Website',
    tags: [
      { label: 'App', slug: 'app' },
      { label: 'Development', slug: 'development' },
    ],
    date: '22 July 2024',
    client: 'Website',
    category: 'User Experience',
    tools: ['Figma', 'Webflow'],
    startDate: '15/12/2023',
    endDate: '30/12/2023',
    heroImage: '/assets/wp-content/uploads/2024/07/project-1-e1721616512459.jpg',
    cardImage: '/assets/wp-content/uploads/2024/07/project1-1.png',
    bentoColClass: 'col-12 col-md-6 col-lg-5',
    galleryImages: [
      '/assets/wp-content/uploads/2024/07/post1.png',
      '/assets/wp-content/uploads/2024/07/post2.png',
    ],
    overviewParagraphs: DEFAULT_OVERVIEW,
    highlights: DEFAULT_HIGHLIGHTS,
    typographyBody: DEFAULT_TYPOGRAPHY,
    conclusionColumns: DEFAULT_CONCLUSION,
  },
  {
    slug: 'webflow-development',
    title: 'Webflow development',
    primaryTag: 'Development',
    tags: [
      { label: 'App', slug: 'app' },
      { label: 'Development', slug: 'development' },
    ],
    date: '22 July 2024',
    client: 'Website',
    category: 'Admin Experience',
    tools: ['Webflow'],
    startDate: '09/01/2024',
    endDate: '09/02/2024',
    heroImage: '/assets/wp-content/uploads/2024/07/project-2-e1721616630725.jpg',
    cardImage: '/assets/wp-content/uploads/2024/07/project6.png',
    bentoColClass: 'col-12 col-md-6 col-lg-7',
    galleryImages: [
      '/assets/wp-content/uploads/2024/07/post1.png',
      '/assets/wp-content/uploads/2024/07/post2.png',
    ],
    overviewParagraphs: DEFAULT_OVERVIEW,
    highlights: DEFAULT_HIGHLIGHTS,
    typographyBody: DEFAULT_TYPOGRAPHY,
    conclusionColumns: DEFAULT_CONCLUSION,
  },
  {
    slug: 'brand-identity',
    title: 'Brand identity',
    primaryTag: 'App',
    tags: [
      { label: 'App', slug: 'app' },
      { label: 'Development', slug: 'development' },
    ],
    date: '22 July 2024',
    client: 'Dashboard',
    category: 'Admin Experience',
    tools: ['Figma'],
    startDate: '15/10/2023',
    endDate: '10/02/2024',
    heroImage: '/assets/wp-content/uploads/2024/07/project-5-e1721616765299.jpg',
    cardImage: '/assets/wp-content/uploads/2024/07/project3-1.png',
    bentoColClass: 'col-12 col-md-6 col-lg-4',
    galleryImages: [
      '/assets/wp-content/uploads/2024/07/post1.png',
      '/assets/wp-content/uploads/2024/07/post2.png',
    ],
    overviewParagraphs: DEFAULT_OVERVIEW,
    highlights: DEFAULT_HIGHLIGHTS,
    typographyBody: DEFAULT_TYPOGRAPHY,
    conclusionColumns: DEFAULT_CONCLUSION,
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX design',
    primaryTag: 'UI/UX design',
    tags: [
      { label: 'App', slug: 'app' },
      { label: 'Development', slug: 'development' },
    ],
    date: '22 July 2024',
    client: 'UI/UX',
    category: 'User Experience',
    tools: ['UI/UX'],
    startDate: '15/10/2023',
    endDate: '10/02/2024',
    heroImage: '/assets/wp-content/uploads/2024/07/project-3-e1721616350432.jpg',
    cardImage: '/assets/wp-content/uploads/2024/07/project4-1.png',
    bentoColClass: 'col-12 col-md-6 col-lg-4',
    galleryImages: [
      '/assets/wp-content/uploads/2024/07/post1.png',
      '/assets/wp-content/uploads/2024/07/post2.png',
    ],
    overviewParagraphs: DEFAULT_OVERVIEW,
    highlights: DEFAULT_HIGHLIGHTS,
    typographyBody: DEFAULT_TYPOGRAPHY,
    conclusionColumns: DEFAULT_CONCLUSION,
  },
  {
    slug: 'oxilex-apps',
    title: 'Oxilex Apps',
    primaryTag: 'App',
    tags: [
      { label: 'App', slug: 'app' },
      { label: 'Development', slug: 'development' },
    ],
    date: '22 July 2024',
    client: 'Finance',
    category: 'User Experience',
    tools: ['Figma'],
    startDate: '15/12/2023',
    endDate: '10/02/2024',
    heroImage: '/assets/wp-content/uploads/2024/07/video-1.png',
    cardImage: '/assets/wp-content/uploads/2024/07/project5.png',
    bentoColClass: 'col-12 col-md-6 col-lg-4',
    galleryImages: [
      '/assets/wp-content/uploads/2024/07/post1.png',
      '/assets/wp-content/uploads/2024/07/post2.png',
    ],
    overviewParagraphs: DEFAULT_OVERVIEW,
    highlights: DEFAULT_HIGHLIGHTS,
    typographyBody: DEFAULT_TYPOGRAPHY,
    conclusionColumns: DEFAULT_CONCLUSION,
  },
  {
    slug: 'mendero-fintech-dashboard-design',
    title: 'Mendero fintech dashboard design',
    primaryTag: 'UI Design',
    tags: [
      { label: 'App', slug: 'app' },
      { label: 'Development', slug: 'development' },
    ],
    date: '17 July 2024',
    client: 'Mashorom',
    category: 'User Experience',
    tools: ['Figma', 'Webflow'],
    startDate: '09/01/2024',
    endDate: '09/02/2024',
    heroImage: '/assets/wp-content/uploads/2024/07/banner.png',
    cardImage: '/assets/wp-content/uploads/2024/07/project6.png',
    bentoColClass: 'col-12 col-md-6 col-lg-7',
    galleryImages: [
      '/assets/wp-content/uploads/2024/07/post1.png',
      '/assets/wp-content/uploads/2024/07/post2.png',
    ],
    overviewParagraphs: DEFAULT_OVERVIEW,
    highlights: DEFAULT_HIGHLIGHTS,
    typographyBody: DEFAULT_TYPOGRAPHY,
    conclusionColumns: DEFAULT_CONCLUSION,
  },
  {
    slug: 'basinik-finance-app',
    title: 'Basinik Finance App',
    primaryTag: 'App',
    tags: [
      { label: 'App', slug: 'app' },
      { label: 'Development', slug: 'development' },
    ],
    date: '18 July 2024',
    client: 'Finance',
    category: 'User Experience',
    tools: ['Figma', 'Unity'],
    startDate: '15/12/2023',
    endDate: '10/02/2024',
    heroImage: '/assets/wp-content/uploads/2024/07/2.png',
    cardImage: '/assets/wp-content/uploads/2024/07/project7.png',
    bentoColClass: 'col-12 col-md-6 col-lg-5',
    featuredOnHome: true,
    homeCardImage: '/assets/wp-content/uploads/2024/07/project1-2.png',
    galleryImages: [
      '/assets/wp-content/uploads/2024/07/post1.png',
      '/assets/wp-content/uploads/2024/07/post2.png',
    ],
    overviewParagraphs: DEFAULT_OVERVIEW,
    highlights: DEFAULT_HIGHLIGHTS,
    typographyBody: DEFAULT_TYPOGRAPHY,
    conclusionColumns: DEFAULT_CONCLUSION,
  },
  {
    slug: 'oxilex-dashboard-design',
    title: 'Oxilex Dashboard Design',
    primaryTag: 'App',
    tags: [
      { label: 'App', slug: 'app' },
      { label: 'Development', slug: 'development' },
    ],
    date: '18 July 2024',
    client: 'Dashboard',
    category: 'Admin Experience',
    tools: ['Figma', 'Webflow'],
    startDate: '15/10/2023',
    endDate: '30/12/2023',
    heroImage: '/assets/wp-content/uploads/2024/07/post-1.jpg',
    cardImage: '/assets/wp-content/uploads/2024/07/project4.png',
    featuredOnHome: true,
    homeCardImage: '/assets/wp-content/uploads/2024/07/project2-1.png',
    galleryImages: [
      '/assets/wp-content/uploads/2024/07/post1.png',
      '/assets/wp-content/uploads/2024/07/post2.png',
    ],
    overviewParagraphs: DEFAULT_OVERVIEW,
    highlights: DEFAULT_HIGHLIGHTS,
    typographyBody: DEFAULT_TYPOGRAPHY,
    conclusionColumns: DEFAULT_CONCLUSION,
  },
  {
    slug: 'mobile-apps-design',
    title: 'Mobile Apps design',
    primaryTag: 'App',
    tags: [{ label: 'App', slug: 'app' }],
    date: '22 July 2024',
    client: 'Mobile App',
    category: 'User Experience',
    tools: ['Figma'],
    startDate: '09/01/2024',
    endDate: '09/02/2024',
    heroImage: '/assets/wp-content/uploads/2024/07/project-4-e1721616403602.jpg',
    cardImage: '/assets/wp-content/uploads/2024/07/project3.png',
    galleryImages: [
      '/assets/wp-content/uploads/2024/07/post1.png',
      '/assets/wp-content/uploads/2024/07/post2.png',
    ],
    overviewParagraphs: DEFAULT_OVERVIEW,
    highlights: DEFAULT_HIGHLIGHTS,
    typographyBody: DEFAULT_TYPOGRAPHY,
    conclusionColumns: DEFAULT_CONCLUSION,
  },
  {
    slug: 'interaction-design',
    title: 'Interaction design',
    primaryTag: 'Development',
    tags: [{ label: 'Development', slug: 'development' }],
    date: '22 July 2024',
    client: 'Mashorom',
    category: 'Admin Experience',
    tools: ['Figma'],
    startDate: '15/12/2023',
    endDate: '30/12/2023',
    heroImage: '/assets/wp-content/uploads/2024/07/project-6-e1721616888877.jpg',
    cardImage: '/assets/wp-content/uploads/2024/07/project4.png',
    galleryImages: [
      '/assets/wp-content/uploads/2024/07/post1.png',
      '/assets/wp-content/uploads/2024/07/post2.png',
    ],
    overviewParagraphs: DEFAULT_OVERVIEW,
    highlights: DEFAULT_HIGHLIGHTS,
    typographyBody: DEFAULT_TYPOGRAPHY,
    conclusionColumns: DEFAULT_CONCLUSION,
  },
];

export const BENTO_PROJECTS = PROJECTS.filter((p) => Boolean(p.bentoColClass));

export const HOME_FEATURED_PROJECTS = PROJECTS.filter((p) => p.featuredOnHome);

export function getProjectBySlug(slug?: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string): ProjectItem[] {
  const candidates = [
    PROJECTS.find((p) => p.slug === 'basinik-finance-app'),
    PROJECTS.find((p) => p.slug === 'oxilex-dashboard-design'),
    PROJECTS.find((p) => p.slug === 'mendero-fintech-dashboard-design'),
  ].filter((p): p is ProjectItem => Boolean(p) && p!.slug !== currentSlug);
  return candidates.slice(0, 2);
}

export function getProjectsByTag(tagSlug?: string): ProjectItem[] {
  const normalized = (tagSlug || '').toLowerCase();
  const matches = PROJECTS.filter(
    (p) =>
      p.tags.some((t) => t.slug.toLowerCase() === normalized) ||
      p.primaryTag.toLowerCase().replace(/[^a-z0-9]+/g, '-') === normalized
  );
  return matches.length > 0 ? matches : PROJECTS.slice(0, 4);
}
