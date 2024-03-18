import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsCard extends Schema.Component {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
    icon: 'medium';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    link: Attribute.String;
    image: Attribute.Media;
    subTitle: Attribute.String;
  };
}

export interface ComponentsHeaderTitle extends Schema.Component {
  collectionName: 'components_components_header_titles';
  info: {
    displayName: 'HeaderTitle';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    icon: 'bold';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    headerImage: Attribute.Component<'components.card', true>;
  };
}

export interface ComponentsMotivationList extends Schema.Component {
  collectionName: 'components_components_motivation_lists';
  info: {
    displayName: 'MotivationList';
    icon: 'bulletList';
  };
  attributes: {
    Card: Attribute.Component<'components.card', true>;
  };
}

export interface ComponentsSection extends Schema.Component {
  collectionName: 'components_components_sections';
  info: {
    displayName: 'Section';
    icon: '';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'components.header-title'>;
    listCart: Attribute.Component<'components.card', true>;
  };
}

export interface ComponentsTitle extends Schema.Component {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'title';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ComponentsTrustList extends Schema.Component {
  collectionName: 'components_components_trust_lists';
  info: {
    displayName: 'TrustList';
    icon: 'bold';
  };
  attributes: {
    Trust: Attribute.Component<'components.card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.card': ComponentsCard;
      'components.header-title': ComponentsHeaderTitle;
      'components.header': ComponentsHeader;
      'components.motivation-list': ComponentsMotivationList;
      'components.section': ComponentsSection;
      'components.title': ComponentsTitle;
      'components.trust-list': ComponentsTrustList;
    }
  }
}
