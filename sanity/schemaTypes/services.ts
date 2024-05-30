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
      name: "mobile",
      title: "Mobile Design Desc",
      type: "string",
    }),

    defineField({
      name: "web",
      title: "Responsive Web Desc",
      type: "string",
    }),

    defineField({
      name: "dashboard",
      title: "Dashboard Design Desc",
      type: "string",
    }),
  ],
});
