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
        title: 'Data-Collection',
        link: '/DataCollection',
        
      },
      
      { title: "Surveys Research", link: '/SurveysResearch' },
      { title: "Quality & Security", link: '/Quality&Security' },
      { title: 'Data Analysis & Reporting', link: '/DataAnalysis&Reporting' },
      { title: 'Technology in Research', link: '/TechnologyinResearch' },
    ],
  },
  {
    title: 'Lastest News',
    link: '/news',
   
  },
  {
    title: 'careers',
    link: '/careers',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];
