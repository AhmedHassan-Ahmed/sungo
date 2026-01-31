import LayoutFour from "@/layout/layoutFour";
import LayoutThree from "@/layout/layoutThree";
import LayoutTwo from "@/layout/layoutTwo";
import RootLayout from "@/layout/root";
import Error from "@/pages/404";
import About from "@/pages/about";
import BlogDetails from "@/pages/blog-details";
import BlogStandard from "@/pages/blog-standard";
import Contact from "@/pages/contact";
import QualitySecurity from "@/pages/QualitySecurity";
import Home from "@/pages/home";
import HomeFour from "@/pages/home-four";
import HomeFourSingle from "@/pages/home-four-single";
import HomeOneSingle from "@/pages/home-one-single";
import HomeThree from "@/pages/home-three";
import HomeThreeSingle from "@/pages/home-three-single";
import HomeTwo from "@/pages/home-two";
import HomeTwoSingle from "@/pages/home-two-single";
import Pricing from "@/pages/pricing";
import DataCollection from "@/pages/DataCollection";
import SurveysResearch from "@/pages/SurveysResearch";
import ProjectDetails from "@/pages/project-details";
import Service from "@/pages/service";
import TeacherDevelopmentDetails from "@/pages/TeacherDevelopmentDetails";
// import ServiceDetails from "@/pages/Nurseriespreschools";
import Team from "@/pages/team";
import TeamCarousel from "@/pages/team-carousel";
import TeamDetails from "@/pages/team-details";
import { createBrowserRouter } from "react-router-dom";
import AboutMission from "@/components/sections/about/AboutMission";
import Nurseriespreschools from "@/pages/Nurseriespreschools";
import DataAnalysisReporting from "@/pages/DataAnalysisReporting";
import TechnologyinResearch from "@/pages/TechnologyinResearch";
import Careers from "@/pages/careers"; 
import MonitoringEvaluation from "@/pages/MonitoringEvaluation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home-one-single",
        element: <HomeOneSingle />,
      },
      {
        path: "/about",
        children: [
          {
            index: true,
            element: <About />, 
          },
          {
            path: "about-mission",
            element: <AboutMission />,
          },
          {
            path: "team",
            element: <Team />,
          },
        ],
      },
      {
        path: "/school-management",
        element: <Service />,
      },
      {
        path: "/TeacherDevelopmentDetails",
        element: <TeacherDevelopmentDetails />,
      },
      {
        path: "/nurseries-preschools",
        element: <Nurseriespreschools />,
      },
      {
        path: "/DataCollection",
        element: <DataCollection />,
      },
      {
        path: "/SurveysResearch",
        element: <SurveysResearch />,
      },
      {
        path: "/project-details",
        element: <ProjectDetails />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/team-carousel",
        element: <TeamCarousel />,
      },
      {
        path: "/team-details",
        element: <TeamDetails />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/Quality&Security",
        element: <QualitySecurity />,
      },
      {
        path: "/DataAnalysis&Reporting",
        element: <DataAnalysisReporting />,
      },
      {
        path: "/TechnologyinResearch",
        element: <TechnologyinResearch />,
      },
      {
        path: "/monitoringEvaluation",
        element: <MonitoringEvaluation />,
      },
      {
        path: "/news",
        element: <Error />,
      },
      {
        path: "/news-standard",
        element: <BlogStandard />,
      },
      {
        path: "/news-details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <LayoutTwo />,
    children: [
      {
        path: "/home-two",
        element: <HomeTwo />,
      },
      {
        path: "/home-two-single",
        element: <HomeTwoSingle />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutThree />,
    children: [
      {
        path: "/home-three",
        element: <HomeThree />,
      },
      {
        path: "/home-three-single",
        element: <HomeThreeSingle />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutFour />,
    children: [
      {
        path: "/home-four",
        element: <HomeFour />,
      },
      {
        path: "/home-four-single",
        element: <HomeFourSingle />,
      },
    ],
  },
]);
