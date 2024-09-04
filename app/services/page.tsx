import React from "react";
import { Card } from "../components/card";
import Link from "next/link";
import { Navigation } from "../components/nav";
import {
  Wrench,
  Lightbulb,
  Megaphone,
  Layout,
  Globe,
  Settings,
  PenTool,
  FlaskConical,
  Users,
  ArrowRight
} from 'lucide-react';

// const services = [
//   {
//     name: "CAD / CAE Services",
//     description:
//       "We specialize in designing and creating custom mechanical components for various industries.",
//     image: "/images/mechanical-design.jpg",
//   },
//   {
//     name: "New Product Development",
//     description:
//       "We help businesses develop innovative products that meet their customers' needs.",
//     image: "/images/new-product-development.jpg",
//   },
//   {
//     name: "Digital Marketing",
//     description:
//       "We help businesses create strong online presence and attract customers.",
//     image: "/images/marketing-promotion.jpg",
//   },
//   {
//     name: "Interior Design",
//     description:
//       "We create visually appealing and functional interior spaces that enhance the overall look and feel of a home.",
//     image: "/images/interior-design.jpg",
//   },
//   {
//     name: "Web Developement",
//     description:
//       "We help businesses create engaging and user-friendly websites that meet their customers' needs.",
//     image: "/images/web-development.jpg",
//   },
//   {
//     name: "Part Manufaturing",
//     description:
//       "We help businesses create and maintain custom parts that meet their customers' needs.",
//     image: "/images/part-manufacturing.jpg",
//   },
//   {
//     name: "Graphic Designing",
//     description:
//       "We help businesses create visually appealing and functional marketing materials that attract customers.",
//     image: "/images/graphic-designing.jpg",
//   },
//   {
//     name: "R & D Projects",
//     description:
//       "We help businesses develop innovative solutions for various industries.",
//     image: "/images/research-and-development.jpg",
//   },
//   {
//     name: "Talent Acquisition",
//     description:
//       "We help businesses acquire and develop talent that meets their customers' needs.",
//     image: "/images/talent-acquisition.jpg",
//   },
// ];
const services = [
  {
    name: "CAD / CAE Services",
    description:
      "We specialize in designing and creating custom mechanical components for various industries.",
    image: "/images/mechanical-design.jpg",
    icon: <Wrench size={20} />, // Icon for mechanical design services
    href:"cad"
  },
  {
    name: "New Product Development",
    description:
      "We help businesses develop innovative products that meet their customers' needs.",
    image: "/images/new-product-development.jpg",
    icon: <Lightbulb size={20} />, // Icon representing innovation and new ideas,
    href:"npd"
  },
  {
    name: "Digital Marketing",
    description:
      "We help businesses create strong online presence and attract customers.",
    image: "/images/marketing-promotion.jpg",
    icon: <Megaphone size={20} />, // Icon for promotion and marketing,
    href:"dm"
  },
  {
    name: "Interior Design",
    description:
      "We create visually appealing and functional interior spaces that enhance the overall look and feel of a home.",
    image: "/images/interior-design.jpg",
    icon: <Layout size={20} />, // Icon representing design and layout,
    href:"id"
  },
  {
    name: "Web Development",
    description:
      "We help businesses create engaging and user-friendly websites that meet their customers' needs.",
    image: "/images/web-development.jpg",
    icon: <Globe size={20} />, // Icon representing the web and online presence,
    href:"wd"
  },
  {
    name: "Part Manufacturing",
    description:
      "We help businesses create and maintain custom parts that meet their customers' needs.",
    image: "/images/part-manufacturing.jpg",
    icon: <Settings size={20} />, // Icon for settings and mechanical parts,
    href:"pm"
  },
  {
    name: "Graphic Designing",
    description:
      "We help businesses create visually appealing and functional marketing materials that attract customers.",
    image: "/images/graphic-designing.jpg",
    icon: <PenTool size={20} />, // Icon representing graphic design tools,
    href:"gd"
  },
  {
    name: "R & D Projects",
    description:
      "We help businesses develop innovative solutions for various industries.",
    image: "/images/research-and-development.jpg",
    icon: <FlaskConical size={20} />, // Icon representing research and development,
    href:"rd"
  },
  {
    name: "Talent Acquisition",
    description:
      "We help businesses acquire and develop talent that meets their customers' needs.",
    image: "/images/talent-acquisition.jpg",
    icon: <Users size={20} />, // Icon representing people and talent,
    href:"ta"
  },
];

const servicesPage = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 py-32 w-full h-full min-h-screen">

      <Navigation/>

      <div className="gap-5 flex flex-col md:grid md:grid-cols-2 px-10 md:px-0 w-full max-w-[1200px]">
        <div className="col-span-2">
          <h2 className="font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight">Services</h2>
          <p className="mt-4 text-zinc-400">
            We offer a wide range of services to help businesses achieve their goals.
          </p>
        </div>
        <div className="col-span-2 bg-zinc-800 mt-10 mb-8 w-full h-px"></div>
        {services.map((service, index) => (
          <div className="relative">
            <Card key={index}>
              <div className="p-5 text-[#f4f4f5]">
                <h2 className="font-semibold text-3xl flex items-center gap-5"> {service.icon}  {service.name} </h2>
                <p className="mt-5 text-zinc-300"> {service.description} </p>
                <Link
                  className="flex items-center gap-3 mt-5 text-sm text-zinc-400 underline underline-offset-2"
                  href={""}
                >
                  more details <ArrowRight size={15} />{" "}
                </Link>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default servicesPage;
