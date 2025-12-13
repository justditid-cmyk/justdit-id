import { defineField, defineType } from "sanity";

export default defineType({
  name: "cta",
  title: "Call-to-Action (CTA)",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "CTA Heading",
      type: "string",
      description: "Main heading for the call-to-action section",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "description",
      title: "CTA Description",
      type: "text",
      description: "Description text for the call-to-action",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "Text displayed on the CTA button",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      description: "Link for the CTA button (e.g., #contact, /register)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Toggle to show/hide this CTA",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "buttonText",
    },
  },
});
