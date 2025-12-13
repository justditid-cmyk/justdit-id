import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage Settings",
  type: "document",
  fields: [
    // Hero Section
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      description: "Main headline on hero section",
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroButtonText",
      title: "Hero Button Text",
      type: "string",
    }),
    defineField({
      name: "heroButtonLink",
      title: "Hero Button Link",
      type: "string",
    }),

    // Why Us Section
    defineField({
      name: "whyUsHeading",
      title: "Why Us Heading",
      type: "string",
      initialValue: "Kenapa Harus Pilih Kami?",
    }),
    defineField({
      name: "whyUsSubheading",
      title: "Why Us Subheading",
      type: "text",
      rows: 2,
      initialValue:
        "Kami menyediakan layanan terbaik dengan harga terjangkau dan support 24/7",
    }),
    defineField({
      name: "whyUsFeatures",
      title: "Why Us Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Icon name (e.g., shield, clock, wallet, headset)",
            },
            { name: "title", title: "Title", type: "string" },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            },
          ],
        },
      ],
    }),

    // Popular Products Section
    defineField({
      name: "productsHeading",
      title: "Products Section Heading",
      type: "string",
      initialValue: "Produk Terlaris",
    }),
    defineField({
      name: "productsSubheading",
      title: "Products Section Subheading",
      type: "text",
      initialValue: "Pilihan favorit pelanggan kami",
    }),

    // Bundling Section
    defineField({
      name: "bundlingHeading",
      title: "Bundling Section Heading",
      type: "string",
      initialValue: "Paket Bundling Hemat",
    }),
    defineField({
      name: "bundlingSubheading",
      title: "Bundling Section Subheading",
      type: "text",
      initialValue: "Dapatkan lebih banyak dengan harga lebih murah",
    }),

    // Tips & Tricks Section
    defineField({
      name: "tipsHeading",
      title: "Tips & Tricks Heading",
      type: "string",
      initialValue: "Tips & Trik",
    }),
    defineField({
      name: "tipsSubheading",
      title: "Tips & Tricks Subheading",
      type: "text",
      initialValue: "Panduan lengkap untuk memaksimalkan pengalaman Anda",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Homepage Settings",
      };
    },
  },
});
