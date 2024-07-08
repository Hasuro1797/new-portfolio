/* eslint-disable @next/next/no-img-element */
"use client";
import { usePathname } from "next/navigation";
import { AiOutlineDisconnect } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";
import { FaGithub, FaLink, FaReact, FaWordpressSimple } from "react-icons/fa";
import { GiSightDisabled } from "react-icons/gi";
import { GrGraphQl } from "react-icons/gr";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiRedux,
  SiStrapi,
  SiStyledcomponents,
} from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { ProjectType } from "../../../declaration";
import Button from "./Button";
import Chip from "./Chip";

export const ProjectCard = ({
  image,
  title,
  type,
  technologies,
  description,
  state,
  code,
  link,
}: ProjectType) => {
  const pathname = usePathname();
  const selectIcon = (state: string) => {
    switch (state) {
      case "Active":
        return <CgMediaLive />;
      case "Disable":
        return <GiSightDisabled />;
      default:
        return <AiOutlineDisconnect />;
    }
  };
  const techIcons = [
    <FaReact key="1" className="text-[16px]" />,
    <RiTailwindCssFill key={"2"} className="text-[16px]" />,
    <FaWordpressSimple key={"3"} className="text-[16px]" />,
    <RiNextjsLine key={"4"} className="text-[16px]" />,
    <SiStyledcomponents key={"5"} className="text-[16px]" />,
    <GrGraphQl key={"6"} className="text-[16px]" />,
    <SiStrapi key={"7"} className="text-[16px]" />,
    <SiExpress key={"8"} className="text-[16px]" />,
    <SiRedux key={"9"} className="text-[16px]" />,
    <TbBrandCss3 key={"10"} className="text-[16px]" />,
  ];
  return (
    <li className="grid md:grid-cols-2 gap-4">
      <div className="rounded-2xl overflow-clip aspect-auto sm:aspect-[432/244] border border-primary-400/30">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="rounded-2xl object-cover object-top md:scale-110 h-auto sm:h-full w-full hover:scale-105 transition duration-500"
        />
      </div>
      <article className="p-4 relative">
        <div className="absolute top-2 right-0 md:right-2">
          {
            <Chip
              icon={selectIcon(state)}
              label={state}
              styles={`${
                state === "Active"
                  ? "bg-secondary"
                  : state === "Dead"
                  ? "bg-tertiary"
                  : "bg-slate-400"
              }`}
            />
          }
        </div>
        <small className="text-primary-200/70">{type}</small>
        <div className="flex flex-col gap-2">
          <h3 className="text-primary-400 font-semibold text-[24px]">
            {title}
          </h3>
          <div className="gap-2 flex flex-wrap">
            {technologies.map((technology) => (
              <Chip
                key={technology.id}
                icon={techIcons[technology.id]}
                label={technology.label}
                styles={technology.value}
              />
            ))}
          </div>
          <p className="text-primary-200/70 text-pretty pt-2">
            {pathname.substring(1) === "en" ? description.en : description.es}
          </p>
          <footer className="flex gap-x-4 justify-start">
            {code !== null && (
              <Button
                icon={<FaGithub className="text-[16px]" />}
                link={code}
                title="Code"
              />
            )}
            {link !== null && (
              <Button
                icon={<FaLink className="text-[16px]" />}
                link={link}
                title="Preview"
              />
            )}
          </footer>
        </div>
      </article>
    </li>
  );
};
