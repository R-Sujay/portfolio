import blockContent from "./schemaTypes/blockContent";
import hero from "./schemaTypes/hero";
import post from "./schemaTypes/post";
import author from "./schemaTypes/author";
import { SchemaPluginOptions, Template } from "sanity";

export const singletonTypes = new Set(["hero"]);

export const schema: SchemaPluginOptions = {
  types: [post, author, hero, blockContent],

  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
