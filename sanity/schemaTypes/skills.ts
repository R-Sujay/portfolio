import { defineField, defineType } from "sanity";

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "width",
      title: "Width",
      type: "number",
    }),

    defineField({
      name: "light",
      title: "Light",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),

    defineField({
      name: "dark",
      title: "Dark",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
});
