import { defineField, defineType } from "sanity";

export default defineType({
  name: "promo",
  title: "Promo Carousel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'Main promo title (e.g., "Flash Sale Netflix Premium")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: 'Subtitle text (e.g., "Diskon 50% - Hanya Hari Ini!")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "promoTitle",
      title: "Promo Title (Bottom Bar)",
      type: "string",
      description: "Title shown in the bottom info bar",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "validUntil",
      title: "Valid Until",
      type: "date",
      description: "Promo expiration date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Promo Image",
      type: "image",
      description: "Upload promo background image (recommended: 1920x1080px)",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bgColor",
      title: "Background Gradient",
      type: "string",
      description:
        'Tailwind gradient classes (e.g., "from-red-600 to-red-800")',
      initialValue: "from-blue-600 to-blue-800",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "url",
      description: 'Link when "Dapatkan" button is clicked',
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which this promo appears (lower numbers first)",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Toggle to show/hide this promo",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "validUntil",
      media: "image",
    },
  },
});
