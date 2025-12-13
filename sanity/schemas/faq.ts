import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQ (Frequently Asked Questions)",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      description: "The FAQ question",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      description: "The answer to the question",
      rows: 4,
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Display order (0 = first)",
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Toggle to show/hide this FAQ",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "answer",
      order: "order",
    },
    prepare(selection) {
      const { title, subtitle, order } = selection;
      return {
        title: `${order}. ${title}`,
        subtitle: subtitle ? subtitle.substring(0, 60) + "..." : "",
      };
    },
  },
});
