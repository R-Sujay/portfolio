import { defineField, defineType } from "sanity";

export default defineType({
  name: "details",
  title: "Details",
  type: "document",

  fields: [
    defineField({
      name: "detailHeader",
      title: "Detail Header",
      type: "string",
    }),
    defineField({
      name: "detailItem",
      title: "Detail Item",
      type: "string",
    }),
    defineField({
      name: "isUrl",
      title: "URL",
      type: "boolean",
    }),
  ],
});
