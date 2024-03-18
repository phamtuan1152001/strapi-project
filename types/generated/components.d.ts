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

export interface ComponentsExpertSection extends Schema.Component {
  collectionName: 'components_components_expert_sections';
  info: {
    displayName: 'expertSection';
  };
  attributes: {
    title: Attribute.String;
    expert_lists: Attribute.Relation<
      'components.expert-section',
      'oneToMany',
      'api::expert.expert'
    >;
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

export interface ComponentsQualificationSection extends Schema.Component {
  collectionName: 'components_components_qualification_sections';
  info: {
    displayName: 'qualificationSection';
  };
  attributes: {
    title: Attribute.String;
    qualifications: Attribute.Relation<
      'components.qualification-section',
      'oneToMany',
      'api::qualification.qualification'
    >;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.card': ComponentsCard;
      'components.expert-section': ComponentsExpertSection;
      'components.header-title': ComponentsHeaderTitle;
      'components.qualification-section': ComponentsQualificationSection;
      'components.section': ComponentsSection;
      'components.title': ComponentsTitle;
    }
  }
}
