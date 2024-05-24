"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { theme } from "https://themer.sanity.build/api/hues?default=3b82f6;darkest:13192d";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema, singletonTypes } from "./sanity/schema";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  theme,
  basePath: "/studio",
  projectId,
  dataset,

  schema,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title("Hero").id("hero").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType("hero").documentId("hero"),
            ),

            // Regular document types
            S.documentTypeListItem("skills").title("Skills"),
            S.documentTypeListItem("author").title("Authors"),
          ]),
    }),

    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
