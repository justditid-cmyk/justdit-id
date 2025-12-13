import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Information",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main heading for contact section",
      validation: (Rule) => Rule.required().max(100),
      initialValue: "Mari Terhubung",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      description: "Subheading text",
      rows: 2,
      validation: (Rule) => Rule.required().max(200),
      initialValue:
        "Dapatkan penawaran eksklusif dan dukungan terbaik untuk kebutuhan digital Anda",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "Format: 628123456789 (with country code, no +)",
      validation: (Rule) =>
        Rule.required().regex(/^[0-9]{10,15}$/, {
          name: "phone",
          invert: false,
        }),
    }),
    defineField({
      name: "telegramUsername",
      title: "Telegram Username",
      type: "string",
      description: "Without @ symbol",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "instagramUsername",
      title: "Instagram Username",
      type: "string",
      description: "Without @ symbol",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      description: "Contact email address",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "whatsappResponseTime",
      title: "WhatsApp Response Time",
      type: "string",
      description: "E.g., '< 5 menit'",
      initialValue: "< 5 menit",
    }),
    defineField({
      name: "telegramMembers",
      title: "Telegram Members Count",
      type: "string",
      description: "E.g., '1000+ Members'",
      initialValue: "1000+ Members",
    }),
    defineField({
      name: "emailResponseTime",
      title: "Email Response Time",
      type: "string",
      description: "E.g., '< 24 jam'",
      initialValue: "< 24 jam",
    }),
    defineField({
      name: "instagramBadge",
      title: "Instagram Badge Text",
      type: "string",
      description: "E.g., 'Daily Updates'",
      initialValue: "Daily Updates",
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Toggle to show/hide contact section",
      initialValue: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Contact Information",
      };
    },
  },
});
