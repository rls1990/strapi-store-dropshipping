import type { Schema, Struct } from '@strapi/strapi';

export interface HomeItem extends Struct.ComponentSchema {
  collectionName: 'components_home_items';
  info: {
    displayName: 'Item';
    icon: 'grid';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    cover: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeNew extends Struct.ComponentSchema {
  collectionName: 'components_home_news';
  info: {
    displayName: 'new';
    icon: 'apps';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    message: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.item': HomeItem;
      'home.new': HomeNew;
    }
  }
}
