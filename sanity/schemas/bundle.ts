import { defineField, defineType } from "sanity";

export default defineType({
  name: "bundle",
  title: "Bundles",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Bundle Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "includedProducts",
      title: "Included Products",
      type: "array",
      of: [{ type: "string" }],
      description: "List of products included in this bundle",
    }),
    defineField({
      name: "features",
      title: "Bundle Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "price",
      title: "Bundle Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "originalPrice",
      title: "Original Price",
      type: "number",
      description: "Total price if bought separately",
    }),
    defineField({
      name: "discount",
      title: "Discount Percentage",
      type: "number",
      description: "e.g., 40 for 40%",
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "e.g., 1 Bulan, 1 Tahun",
    }),
    defineField({
      name: "image",
      title: "Bundle Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bgColor",
      title: "Background Gradient",
      type: "string",
      description: "Tailwind gradient classes",
    }),
    defineField({
      name: "isPopular",
      title: "Mark as Popular",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "duration",
      media: "image",
    },
  },
});
