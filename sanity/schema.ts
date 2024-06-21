import blockContent from "./schemaTypes/blockContent";
import hero from "./schemaTypes/hero";
import skills from "./schemaTypes/skills";
import { SchemaPluginOptions } from "sanity";
import services from "./schemaTypes/services";
import projects from "./schemaTypes/projects";
import contact from "./schemaTypes/contact";
import profile from "./schemaTypes/profile";
import details from "./schemaTypes/details";

export const singletonTypes = new Set(["hero", "services", "profile"]);

export const schema: SchemaPluginOptions = {
  types: [
    skills,
    hero,
    services,
    blockContent,
    projects,
    contact,
    profile,
    details,
  ],

  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
