import { defineField, defineType } from "sanity";

export default defineType({
  name: "services",
  title: "Services",
  type: "document",

  fields: [
    defineField({
      name: "desc",
      title: "Title Desc",
      type: "string",
    }),

    defineField({
      name: "I",
      title: "Service 1",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "desc", title: "Desc", type: "string" },
        { name: "icon", title: "Icon", type: "inlineSvg" },
      ],
    }),
    defineField({
      name: "II",
      title: "Service 2",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "desc", title: "Desc", type: "string" },
        { name: "icon", title: "Icon", type: "inlineSvg" },
      ],
    }),
    defineField({
      name: "III",
      title: "Service 3",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "desc", title: "Desc", type: "string" },
        { name: "icon", title: "Icon", type: "inlineSvg" },
      ],
    }),
  ],
});
