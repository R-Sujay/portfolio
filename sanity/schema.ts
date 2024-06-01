import blockContent from "./schemaTypes/blockContent";
import hero from "./schemaTypes/hero";
import skills from "./schemaTypes/skills";
import { SchemaPluginOptions } from "sanity";
import services from "./schemaTypes/services";
import projects from "./schemaTypes/projects";
import contact from "./schemaTypes/contact";

export const singletonTypes = new Set(["hero", "services"]);

export const schema: SchemaPluginOptions = {
  types: [skills, hero, services, blockContent, projects, contact],

  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
