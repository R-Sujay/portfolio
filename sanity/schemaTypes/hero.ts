import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "desc",
      title: "Description",
      type: "string",
    }),

    defineField({
      name: "skills",
      title: "Skills Description",
      type: "string",
    }),

    defineField({
      name: "resumePdf",
      title: "Resume PDF",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),

    defineField({
      name: "tags",
      title: "Short Tags",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "profile",
      title: "Profile",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
