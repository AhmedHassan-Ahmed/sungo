type MenuLink = {
  title: string;
  link: string;
};

export type MegaMenuDataType = {
  image: string;
  title: string;
  links: MenuLink[];
};

export type SubMenuDataType = {
  title: string;
  link: string;
  submenu?: MenuLink[];
};

export type MenuItemDataType = {
  title: string;
  link: string;
  megamenu?: MegaMenuDataType[];
  submenu?: SubMenuDataType[];
};

export const menuData: MenuItemDataType[] = [
  {
    title: 'Home',
    link: '/', 
  },
  {
  title: 'About us',
  link: '#',
  submenu: [
    { title: 'Who We Are', link: '/about' },
    { title: 'Our Mission', link: '/about/about-mission' },
    { title: 'Values', link: '/team' },
  ],
},
  {
    title: 'Education',
    link: '#',
    submenu: [
      { title: 'School Management', link: '/school-management' },
      { title: 'Teacher professional Development', link: '/TeacherDevelopmentDetails' },
      { title: 'Nurseries/Preschools', link: '/nurseries-preschools' },
    ],
  },
  {
    title: 'Research',
    link: '#',
    submenu: [
      {
        title: 'Projects',
        link: '/project',
        submenu: [
          { title: 'Project', link: '/project' },
          { title: 'Project Carousel', link: '/project-carousel' },
          { title: 'Project Details', link: '/project-details' },
        ],
      },
      {
        title: 'Team',
        link: '/team',
        submenu: [
          { title: 'Our Team', link: '/team' },
          { title: 'Team Carousel', link: '/team-carousel' },
          { title: 'Team Details', link: '/team-details' },
        ],
      },
      { title: "Pricing", link: '/pricing' },
      { title: "Faq's", link: '/faq' },
      { title: '404 Page', link: '/404' },
    ],
  },
  {
    title: 'Lastest News',
    link: '/news',
    submenu: [
      { title: 'Blog Grid', link: '/news' },
      { title: 'Blog Standard', link: '/news-standard' },
      { title: 'Blog Details', link: '/news-details' },
    ],
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];
