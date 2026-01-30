export interface ProjectDataType {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

export const projectsOneData: ProjectDataType[] = [
  {
    id: 1,
    image: "/public/img/project/school-management.webp",
    title: "School Management",
    description:
      "We are an education service provider supporting public and private schools with management and reform implementation.",
    link: "/school-management",
  },
  {
    id: 2,
    image: "/public/img/project/teacher-development.jpeg",
    title: "Teacher Professional Development",
    description:
      "Tailored training, mentoring, and lesson observations to improve teaching quality rapidly.",
    link: "/teacher-development",
  },
  {
    id: 3,
    image: "/public/img/project/nurseries.jpg",
    title: "Nurseries / Preschools",
    description:
      "Managing nurseries and preschools focusing on cognitive, language, physical, and wellness development.",
    link: "/nurseries",
  },
  {
    id: 4,
    image: "/public/img/project/monitoring-evaluation.png",
    title: "Monitoring and Evaluation",
    description:
      "A multidisciplinary approach to monitoring and evaluation, combining quantitative analysis with qualitative insights.",
    link: "/monitoring-evaluation",
  },
  {
    id: 5,
    image: "/public/img/project/surveys-research.webp",
    title: "Surveys Research",
    description:
      "Cutting-edge survey research built on proven methodologies and best practices across industries.",
    link: "/surveys-research",
  },
  {
    id: 6,
    image: "/public/img/project/data-collection.webp",
    title: "Data Collection",
    description:
      "Applying the right survey tools for each project, including face-to-face, phone, web, and mail data collection.",
    link: "/data-collection",
  },
  {
    id: 7,
    image: "/public/img/project/data-analysis-reporting.webp",
    title: "Data Analysis & Reporting",
    description:
      "Transforming raw data into meaningful insights through accurate analysis and professional reporting.",
    link: "/data-analysis-reporting",
  },
  {
    id: 8,
    image: "/public/img/project/technology-research.webp",
    title: "Technology in Research",
    description:
      "Leveraging modern technology to enhance survey efficiency, reduce costs, and improve data accuracy.",
    link: "/technology-research",
  },
  {
    id: 9,
    image: "/public/img/project/quality-security.webp",
    title: "Quality & Security",
    description:
      "Ensuring the highest standards of data quality, privacy, and security across all research projects.",
    link: "/quality-security",
  },
];
