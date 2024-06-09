import { client } from "@/sanity/lib/client";
import {
  HeroType,
  SkillType,
  ProjectsType,
  ServicesType,
  ProfileType,
} from "@/typings";

async function getData() {
  const hero: HeroType = await client.fetch(
    `*[_type == "hero"][0] {
  _id,
  status,
  name,
  desc,
  secProfile,
  profile,
  location,
  skills,
  tags,
  "resumePdf": resumePdf.asset->url,
  email,
  linkedinURL
}`,
  );

  const profile: ProfileType = await client.fetch(
    `*[ _type == "profile"][0] {
  _id,
  "desc": desc.asset->url,
  "services": [I, II, III, IV],
}
`,
  );

  const skills: SkillType = await client.fetch(
    `*[_type == "skills"] {
  _id,
  width,
  light,
  dark
}`,
  );

  const services: ServicesType = await client.fetch(
    `*[ _type == "services"][0] {
  _id,
  desc,
  "serviceItems": [I, II, III],
}`,
  );

  const projects: ProjectsType = await client.fetch(
    `*[_type == "projects"] {
  title,
  URL,
  bio,
  'tech': tech[]-> {
    title
  },
  image
}`,
  );

  return { hero, skills, services, projects, profile };
}

export default getData;
