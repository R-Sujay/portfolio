"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { theme } from "https://themer.sanity.build/api/hues?default=3b82f6;darkest:13192d";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema, singletonTypes } from "./sanity/schema";
import { inlineSvgInput } from "./sanity/lib/sanitySVGPlugin";

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
            S.listItem()
              .title("Hero")
              .id("hero")
              .child(S.document().schemaType("hero").documentId("hero")),

            S.listItem()
              .title("Services")
              .id("services")
              .child(
                S.document().schemaType("services").documentId("services"),
              ),

            S.listItem()
              .title("Profile")
              .id("profile")
              .child(S.document().schemaType("profile").documentId("profile")),

            // Regular document types
            S.documentTypeListItem("skills").title("Skills"),
            S.documentTypeListItem("projects").title("Projects"),
            S.documentTypeListItem("contact").title("Contact"),
          ]),
    }),

    visionTool({ defaultApiVersion: apiVersion }),
    inlineSvgInput(),
  ],

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
