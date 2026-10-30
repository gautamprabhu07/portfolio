// app/_data/project-screens.js
/**
 * Screens shown in the Projects section, grouped into the three scrolling rows.
 *
 * The order is deliberate: inside each row, neighbours alternate between dark
 * and light interfaces and never come from the same project, and each row
 * mixes a different set of palettes. `ratio` is the card's width / height
 * (the screenshots are about 2.07 : 1, so smaller ratios show a cropped,
 * more compact view anchored by `position`).
 *
 * @type {{ title: string; src: string; alt: string; ratio: number; position: string }[][]}
 */
export const projectScreens = [
  [
    {
      title: 'Eventory',
      src: '/images/projects/screens/eventory-trending.webp',
      alt: 'Eventory: trending event packages in red and gold',
      ratio: 2,
      position: 'center top',
    },
    {
      title: 'Windscapes',
      src: '/images/projects/screens/windscapes-dashboard.webp',
      alt: 'Windscapes Landscaping: admin dashboard with a green header and revenue cards',
      ratio: 1.5,
      position: 'left top',
    },
    {
      title: 'ResParse AI',
      src: '/images/projects/screens/resparse-jobs.webp',
      alt: 'ResParse AI: dark page of AI-matched job opportunities',
      ratio: 1.85,
      position: 'center top',
    },
    {
      title: 'UrbanLuxe',
      src: '/images/projects/screens/urbanluxe-profile.webp',
      alt: 'UrbanLuxe: user profile page with listings, saved properties and messages',
      ratio: 1.45,
      position: 'left top',
    },
  ],
  [
    {
      title: 'LoR Portal',
      src: '/images/projects/screens/lor-portal.webp',
      alt: 'LoR Management Portal: faculty view of letter of recommendation requests',
      ratio: 1.9,
      position: 'left top',
    },
    {
      title: 'OutSource',
      src: '/images/projects/screens/outsource-dashboard.webp',
      alt: 'OutSource: seller dashboard with a dark sidebar, revenue chart and orders',
      ratio: 1.5,
      position: 'left top',
    },
    {
      title: 'Eventory',
      src: '/images/projects/screens/eventory-home.webp',
      alt: 'Eventory: home page with the search event form',
      ratio: 2.07,
      position: 'center top',
    },
    {
      title: 'ResParse AI',
      src: '/images/projects/screens/resparse-loading.webp',
      alt: 'ResParse AI: loading state while jobs are matched to a resume',
      ratio: 1.6,
      position: 'center center',
    },
  ],
  [
    {
      title: 'OutSource',
      src: '/images/projects/screens/outsource-home.webp',
      alt: 'OutSource: multi-vendor marketplace home page',
      ratio: 2.07,
      position: 'center top',
    },
    {
      title: 'Eventory',
      src: '/images/projects/screens/eventory-blogs.webp',
      alt: 'Eventory: blog section with ideas for your next event',
      ratio: 1.55,
      position: 'left top',
    },
    {
      title: 'Windscapes',
      src: '/images/projects/screens/windscapes-login.webp',
      alt: 'Windscapes Landscaping: login screen over a golf course illustration',
      ratio: 1.75,
      position: 'center center',
    },
    {
      title: 'UrbanLuxe',
      src: '/images/projects/screens/urbanluxe-home.webp',
      alt: 'UrbanLuxe: property home page with a villa photo',
      ratio: 1.9,
      position: 'center top',
    },
  ],
];
