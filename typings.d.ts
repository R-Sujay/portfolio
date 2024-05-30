import { BlockDefinition, Image } from "sanity";

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt: string;
}

interface HeroType {
  _id: string;
  status: string;
  skills: string;
  name: string;
  profile: Image;
  location: string;
  desc: SanityBlock[];
  tags: string[];
  emailAdd: string;
}

interface ServicesType {
  web: string;
  dashboard: string;
  _id: string;
  desc: string;
  mobile: string;
}

type SkillType = {
  _id: string;
  width: number;
  light: Image;
  dark: Image;
}[];

type ProjectsType = {
  title: string;
  URL: string;
  bio: SanityBlock[];
  tech: {
    title: string;
  }[];
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}[];

type SanityBlock = {
  _type: "block";
  style: string;
  _key: string;
  children: {
    _type: "span";
    marks: string[];
    text: string;
    _key?: string;
  }[];
};
