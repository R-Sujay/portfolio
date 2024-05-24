import blockContent from "./schemaTypes/blockContent";
import hero from "./schemaTypes/hero";
import skills from "./schemaTypes/skills";
import author from "./schemaTypes/author";
import { SchemaPluginOptions, Template } from "sanity";

export const singletonTypes = new Set(["hero"]);

export const schema: SchemaPluginOptions = {
  types: [skills, author, hero, blockContent],

  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
