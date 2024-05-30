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
      name: "status",
      title: "Status",
      type: "string",
    }),

    defineField({
      name: "skills",
      title: "Skills Description",
      type: "string",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "emailAdd",
      title: "Email Address",
      type: "string",
      validation: (rule) => rule.email(),
    }),

    defineField({
      name: "desc",
      title: "Description",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
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

    defineField({
      name: "tags",
      title: "Short Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
