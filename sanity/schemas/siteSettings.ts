import { defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'primaryColors',
      title: 'Primary Colors',
      type: 'object',
      fields: [
        {
          name: 'primaryColor',
          title: 'Primary Color',
          type: 'string',
        },
        {
          name: 'secondaryColor',
          title: 'Secondary Color',
          type: 'string',
        },
      ],
    },
    {
      name: 'bannerText',
      title: 'Banner Text',
      type: 'string',
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    },
  ],
});