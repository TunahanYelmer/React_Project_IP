import React from "react";
import Image from "next/image";
import Link from "next/link";
import fbIcon from "../static/images/fb.png";
import twitterIcon from "../static/images/twitter.png";
import linkedinIcon from "../static/images/linkedin.png";
import instaIcon from "../static/images/insta.png";

export interface Team {
  name: string;
  description: string;
  image: string;
  link_fb: string;
  link_tw: string;
  link_linkedin: string;
  link_insta: string;
}

const TeamProps: Team[] = [
  {
    name: "John Doe",
    description: "CEO",
    image: "images/team1.png",
    link_fb: "#",
    link_tw: "#",
    link_linkedin: "#",
    link_insta: "#",
  },
  {
    name: "John Doe",
    description: "CEO",
    image: "images/team1.png",
    link_fb: "#",
    link_tw: "#",
    link_linkedin: "#",
    link_insta: "#",
  },
  {
    name: "John Doe",
    description: "CEO",
    image: "images/team1.png",
    link_fb: "#",
    link_tw: "#",
    link_linkedin: "#",
    link_insta: "#",
  },
  // Add more team objects if needed
];

const Team: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center  py-12">
      <div className="m-10">
        <div className="flex flex-row items-center justify-center">
          <div className="flex items-center justify-center text-center">
            <h1 className="font-bold text-3xl text-black">Meet The Team</h1>
            <h2 className="bg-custom-yellow h-5 w-5 rounded-full m-2"></h2>
          </div>
          <h3 className="text-base text-center"></h3>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {TeamProps.map((team, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <div className="flex justify-center items-center bg-custom-blue h-40   w-72  rounded-2xl m-10 -rotate-12">
              <div className="flex items-center justify-center rotate-12 w-60 h-60">
                {/* Here you can replace this text with your backend image */}
                <Image src={fbIcon} height={225} width={225} alt="" />
              </div>
            </div>
            <div className="container mx-auto flex flex-col items-center justify-center text-black">
              <div className="font-bold text-xl text-center">{team.name}</div>
              <div className="text-base text-center">{team.description}</div>
              <div className="flex items-center justify-center mt-4">
                <div className="flex m-1">
                  <a href={team.link_fb}>
                    <Image src={fbIcon} height={33} width={33} alt="" />
                  </a>
                </div>
                <div className="flex m-1">
                  <a href={team.link_tw}>
                    <Image src={twitterIcon} height={33} width={33} alt="" />
                  </a>
                </div>
                <div className="flex m-1">
                  <a href={team.link_insta}>
                    <Image src={instaIcon} height={33} width={33} alt="" />
                  </a>
                </div>
                <div className="flex m-1">
                  <a href={team.link_linkedin}>
                    <Image src={linkedinIcon} height={33} width={33} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
