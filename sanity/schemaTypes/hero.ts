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
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (rule) => rule.email(),
    }),

    defineField({
      name: "linkedinURL",
      title: "Linkedin URL",
      type: "url",
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
