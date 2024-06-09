import { defineField, defineType } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",

  fields: [
    defineField({
      name: "desc",
      title: "Description",
      type: "file",
      options: {
        accept: "application/json",
      },
    }),

    defineField({
      name: "I",
      title: "Service 1",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "icon", title: "Icon", type: "inlineSvg" },
      ],
    }),
    defineField({
      name: "II",
      title: "Service 2",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "icon", title: "Icon", type: "inlineSvg" },
      ],
    }),
    defineField({
      name: "III",
      title: "Service 3",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "icon", title: "Icon", type: "inlineSvg" },
      ],
    }),
    defineField({
      name: "IV",
      title: "Service 4",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "icon", title: "Icon", type: "inlineSvg" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "",
    },
  },
});
