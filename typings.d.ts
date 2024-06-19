import type { BlockDefinition, Image } from "sanity";
import type { SanityDocument } from "next-sanity";

interface Children {
  children: React.ReactNode;
}

interface FormData {
  company: string;
  email: string;
  subject: string;
  message: string;
}

type FormState = {
  message: string;
  status: number;
  res?: SanityDocument<{
    company: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
    subject: FormDataEntryValue | null;
    message: FormDataEntryValue | null;
    time: string;
    _type: string;
  }>;
};

interface ContactType {
  _id?: string;
  company: string;
  subject: string;
  message: string;
  email: string;
}

interface HeroType {
  _id: string;
  status: string;
  secProfile: Image;
  resumePdf: string;
  skills: string;
  name: string;
  profile: Image;
  location: string;
  desc: string;
  tags: string[];
  email: string;
  dateOfBirth: string;
  linkedinURL: string;
}

type Service = {
  icon: string;
  title: string;
}[];

interface ProfileType {
  _id: string;
  desc: string;
  services: service;
}

interface ServicesType {
  _id: string;
  desc: string;
  serviceItems: {
    icon: string;
    title: string;
    desc: string;
  }[];
}

type SkillType = {
  _id: string;
  width: number;
  light: Image;
  dark: Image;
}[];

type ProjectType = {
  title: string;
  id: number;
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
  isMobile: boolean;
};

type ProjectsType = ProjectType[];

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
