import { client } from "@/sanity/lib/client";
import {
  HeroType,
  SkillType,
  ProjectsType,
  ServicesType,
  ProfileType,
  DetailsType,
} from "@/typings";

async function getData() {
  const hero: HeroType = await client.fetch(
    `*[_type == "hero"][0] {
  _id,
  name,
  desc,
  profile,
  skills,
  tags,
  "resumePdf": resumePdf.asset->url,
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
    `*[_type == "projects"] | order(id asc) {
  title,
  id,
  URL,
  bio,
  'tech': tech[]-> {
    title
  },
  image,
  isMobile
}`,
  );

  const details: DetailsType = await client.fetch(
    `*[_type == "details"] | order(_createdAt asc) {
  detailHeader,
  detailItem,
  isUrl
}`,
  );

  return { hero, skills, services, projects, profile, details };
}

export default getData;
