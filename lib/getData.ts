import { client } from "@/sanity/lib/client";
import { HeroType, SkillType } from "@/typings";

async function getData() {
  const hero: HeroType = await client.fetch(
    `*[_type == "hero"][0] {
  _id,
  status,
  name,
  profile,
  location,
  desc
}`,
  );

  const skills: SkillType = await client.fetch(
    `*[_type == "skills"] {
  _id,
  width,
  light,
  dark
}`,
  );

  return { hero, skills };
}

export default getData;
