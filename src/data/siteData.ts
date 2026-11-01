export interface NavItem {
  label: string;
  to: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Project', to: '/projects' },
  { label: 'Project Detail', to: '/projects/mendero-fintech-dashboard-design' },
  { label: 'Contact', to: '/contact' },
];

export const SOCIAL_LINKS = [
  { name: 'Behance', url: 'https://www.behance.net/', iconClass: 'fab fa-behance' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/', iconClass: 'fab fa-linkedin-in' },
  { name: 'Dribbble', url: 'https://dribbble.com/', iconClass: 'fab fa-dribbble' },
  { name: 'GitHub', url: 'https://github.com/', iconClass: 'fab fa-github' },
];

export const PROFILE = {
  firstName: 'Mark',
  lastName: 'Henry',
  fullName: 'Mark Henry',
  role: 'Product Designer',
  tagline: 'Product Designer | Based in Germany',
  locationLabel: 'Based in Germany',
  email: 'hello@henry.com',
  phone: '+598 6879 9874',
  contactPhones: '+1 234 567 890 | +1 234 567 890',
  officeAddress: '14/A, Kilix Home Tower, NYC',
  resumePdfUrl: '/assets/wp-content/uploads/2024/07/perez.pdf',
  youtubeVideoEmbed: 'https://www.youtube.com/embed/mSC6GwizOag?autoplay=1',
  stats: [
    { value: '08', label: 'Award winner' },
    { value: '1.2k', label: 'Worldwide client' },
    { value: '3.5k', label: 'Job done successfully' },
  ],
};

export interface ServiceCardData {
  line1: string;
  line2: string;
  projectSlug: string;
  iconIndex: number;
}

export const SERVICES: ServiceCardData[] = [
  { line1: 'Mobile Apps', line2: 'design', projectSlug: 'mobile-apps-design', iconIndex: 0 },
  { line1: 'UI/UX', line2: 'design', projectSlug: 'ui-ux-design', iconIndex: 1 },
  { line1: 'Website', line2: 'design', projectSlug: 'website-design', iconIndex: 2 },
  { line1: 'Webflow', line2: 'development', projectSlug: 'webflow-development', iconIndex: 3 },
  { line1: 'Brand', line2: 'identity', projectSlug: 'brand-identity', iconIndex: 4 },
  { line1: 'Interaction', line2: 'design', projectSlug: 'interaction-design', iconIndex: 5 },
];

export const PERSONAL_DETAILS = [
  { label: 'Name', value: 'Mark Henry' },
  { label: 'Nationality', value: 'Germany' },
  { label: 'Phone', value: '+(2) 870 174 302' },
  { label: 'Email', value: 'hello@henry.com' },
  { label: 'Experience', value: '12+ years' },
  { label: 'Freelance', value: 'Available' },
  { label: 'Skype', value: 'henry.halk23' },
  { label: 'Language', value: 'German, English' },
];

export const EXPERIENCE_ITEMS = [
  { period: '03/2023 – Running', company: 'Axtra', role: 'Lead digital marketer', projectSlug: 'website-design' },
  { period: '03/2023 – 07/2023', company: 'Axtra', role: 'JavaScript developer', projectSlug: 'webflow-development' },
  { period: '03/2024 – 07/2024', company: 'Axtra', role: 'Product designer', projectSlug: 'oxilex-dashboard-design' },
  { period: '03/2023 – 07/2024', company: 'Axtra', role: 'UX researcher', projectSlug: 'ui-ux-design' },
];

export const EDUCATION_ITEMS = [
  { period: '03/2022 – 07/2024', institution: 'Axtra', degree: 'BA Business Management' },
  { period: '03/2022 – 07/2023', institution: 'Axtra', degree: 'BA Business Management' },
  { period: '03/2023 – 07/2024', institution: 'Axtra', degree: 'BA Business Management' },
];

export const SKILL_ITEMS = [
  { name: 'React JS', percent: '(90%)', iconIndex: 0, lightIcon: '/assets/wp-content/uploads/2024/10/vs-code.png' },
  { name: 'Figma', percent: '(70%)', iconIndex: 1, lightIcon: '/assets/wp-content/uploads/2024/10/figma.png' },
  { name: 'Framer', percent: '(80%)', iconIndex: 2, lightIcon: '/assets/wp-content/uploads/2024/10/framer.png' },
  { name: 'WordPress', percent: '(80%)', iconIndex: 3, lightIcon: '/assets/wp-content/uploads/2024/10/wordpress-1.png' },
  { name: 'Framer', percent: '(40%)', iconIndex: 4, lightIcon: '/assets/wp-content/uploads/2024/10/framer.png' },
  { name: 'Sketch', percent: '(50%)', iconIndex: 5, lightIcon: '/assets/wp-content/uploads/2024/10/figma.png' },
];

export const AWARD_ITEMS = [
  { year: '2023', status: 'Winner', title: '01X Developer Award', iconIndex: 0, lightIcon: '/assets/wp-content/uploads/2024/10/w-dot.png' },
  { year: '2024', status: 'Winner', title: '01X Developer Award', iconIndex: 1, lightIcon: '/assets/wp-content/uploads/2024/10/webby.png' },
  { year: '2024', status: 'Winner', title: '01X Developer Award', iconIndex: 2, lightIcon: '/assets/wp-content/uploads/2024/10/fwa.png' },
  { year: '2024', status: 'Winner', title: '01X Developer Award', iconIndex: 3, lightIcon: '/assets/wp-content/uploads/2024/10/wordpress-1.png' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    author: 'John Smith',
    quote:
      '“Energistically build “Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”',
  },
  {
    id: 2,
    author: 'John Smith',
    quote:
      '“Energistically build “Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”',
  },
  {
    id: 3,
    author: 'John Smith',
    quote:
      '“Energistically build “Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”',
  },
  {
    id: 4,
    author: 'John Smith',
    quote:
      '“Energistically build “Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”',
  },
];

export const BRAND_LOGOS_DARK = [
  '/assets/wp-content/uploads/2024/07/logo-white1.png',
  '/assets/wp-content/uploads/2024/07/logo-white2.png',
  '/assets/wp-content/uploads/2024/07/logo-white3.png',
  '/assets/wp-content/uploads/2024/07/logo-white4.png',
  '/assets/wp-content/uploads/2024/07/logo-white5.png',
  '/assets/wp-content/uploads/2024/07/logo-white6.png',
  '/assets/wp-content/uploads/2024/07/logo-white1.png',
  '/assets/wp-content/uploads/2024/07/logo-white2.png',
  '/assets/wp-content/uploads/2024/07/logo-white3.png',
  '/assets/wp-content/uploads/2024/07/logo-white4.png',
  '/assets/wp-content/uploads/2024/07/logo-white5.png',
  '/assets/wp-content/uploads/2024/07/logo-white6.png',
];

export const BRAND_LOGOS_LIGHT = [
  '/assets/wp-content/uploads/2024/07/logo1.svg',
  '/assets/wp-content/uploads/2024/07/logo2.svg',
  '/assets/wp-content/uploads/2024/07/logo3.svg',
  '/assets/wp-content/uploads/2024/07/logo4.svg',
  '/assets/wp-content/uploads/2024/07/logo5.svg',
  '/assets/wp-content/uploads/2024/07/logo6.svg',
  '/assets/wp-content/uploads/2024/07/logo1.svg',
  '/assets/wp-content/uploads/2024/07/logo2.svg',
  '/assets/wp-content/uploads/2024/07/logo3.svg',
  '/assets/wp-content/uploads/2024/07/logo4.svg',
  '/assets/wp-content/uploads/2024/07/logo5.svg',
  '/assets/wp-content/uploads/2024/07/logo6.svg',
];

export const PRICING_PLANS = [
  { name: 'Basic', rate: '$48/h', hours: '20 hrs', subtitle: '10 hours per week', to: '/about' },
  { name: 'Premium', rate: '$60/h', hours: '30 hrs', subtitle: '15 hours per week', to: '/projects' },
  { name: 'Platinum', rate: '$60/h', hours: '20 hrs', subtitle: '80 hours per week', to: '/contact' },
];
