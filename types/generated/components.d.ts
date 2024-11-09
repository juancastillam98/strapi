import type { Schema, Attribute } from '@strapi/strapi';

export interface FoodPlate extends Schema.Component {
  collectionName: 'components_food_plates';
  info: {
    displayName: 'Plate';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
      }>;
    price: Attribute.Decimal & Attribute.Required;
    photo: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface FoodMenuPlate extends Schema.Component {
  collectionName: 'components_food_menu_plates';
  info: {
    displayName: 'Menu Plate';
    icon: 'priceTag';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Photo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'food.plate': FoodPlate;
      'food.menu-plate': FoodMenuPlate;
    }
  }
}
