import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",

  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.email(),
    }),

    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
    }),

    defineField({
      name: "message",
      title: "Message",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "company",
    },
  },
});
