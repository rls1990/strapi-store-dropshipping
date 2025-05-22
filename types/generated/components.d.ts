import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalLogo extends Struct.ComponentSchema {
  collectionName: 'components_global_logos';
  info: {
    description: '';
    displayName: 'logo';
    icon: 'globe';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.logo': GlobalLogo;
    }
  }
}
