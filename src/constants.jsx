import { Icon } from '@iconify/react';

export const SIDENAV_ITEMS = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Series',
    path: '/series',
    icon: <Icon icon="ph:video-bold" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/series' },
      { title: 'Animation', path: '/series/web-design' },
      { title: 'Action', path: '/series/graphic-design' },
    ],
  },
  {
    title: 'Upcoming',
    path: '/upcoming',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Movies',
    path: '/movies',
    icon: <Icon icon="fluent:movies-and-tv-20-regular" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'New', path: '/movies' },
      { title: 'Top rated', path: '/movies/top-rated' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];