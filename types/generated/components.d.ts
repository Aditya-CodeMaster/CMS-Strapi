import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_blocks';
  info: {
    displayName: 'Content Block';
  };
  attributes: {
    content: Schema.Attribute.Text;
    cta: Schema.Attribute.Component<'elements.link', false>;
    featured_image: Schema.Attribute.Media<'images'>;
    Heading: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
  };
}

export interface BlocksFaqBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_blocks';
  info: {
    displayName: 'Faq Block';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'elements.faq', true>;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksFeaturesBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features_blocks';
  info: {
    displayName: 'Features Block';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    features: Schema.Attribute.Component<'elements.card', true>;
    footer_text: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFullImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_full_images';
  info: {
    displayName: 'Full Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    content: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Block';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    layout: Schema.Attribute.Enumeration<['default', 'centered', 'split']> &
      Schema.Attribute.DefaultTo<'default'>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface BlocksHomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_home_banners';
  info: {
    displayName: 'homeBanner';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_cards';
  info: {
    displayName: 'Info Block';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    features: Schema.Attribute.Component<'elements.feature', true>;
    heading: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
  };
}

export interface BlocksMessagesBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_messages_blocks';
  info: {
    displayName: 'messages block';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.String;
    messages: Schema.Attribute.Component<'elements.message', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface BlocksParagraphWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraph_with_images';
  info: {
    displayName: 'Paragraph with Image';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    imageLandscape: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksTeamBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_blocks';
  info: {
    displayName: 'Team Block';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    team_memebers: Schema.Attribute.Component<'elements.team-member', true>;
  };
}

export interface BlocksTestimonialBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonial_blocks';
  info: {
    displayName: 'Testimonial Block';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'elements.link', false>;
    Heading: Schema.Attribute.String;
    Testimonials: Schema.Attribute.Component<'elements.testimonial', true>;
  };
}

export interface ElementsBadge extends Struct.ComponentSchema {
  collectionName: 'components_elements_badges';
  info: {
    displayName: 'Badge';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['Primary', 'Secondary', 'Custom']>;
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface ElementsBanner extends Struct.ComponentSchema {
  collectionName: 'components_elements_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    isBublished: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    tittle: Schema.Attribute.String;
  };
}

export interface ElementsBasicCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_basic_cards';
  info: {
    displayName: 'basic card';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    text: Schema.Attribute.String;
  };
}

export interface ElementsCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_elements_call_to_actions';
  info: {
    displayName: 'Call to Action';
  };
  attributes: {};
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    order: Schema.Attribute.Integer & Schema.Attribute.Unique;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ElementsCta extends Struct.ComponentSchema {
  collectionName: 'components_elements_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    action: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsFaq extends Struct.ComponentSchema {
  collectionName: 'components_elements_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    isBublished: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    question: Schema.Attribute.String;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_s';
  info: {
    displayName: 'Feature ';
  };
  attributes: {
    content: Schema.Attribute.String;
    footer_text: Schema.Attribute.String;
    header: Schema.Attribute.Component<'elements.badge', false>;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsMessage extends Struct.ComponentSchema {
  collectionName: 'components_elements_messages';
  info: {
    displayName: 'Message';
  };
  attributes: {
    order: Schema.Attribute.Integer;
    text: Schema.Attribute.String;
  };
}

export interface ElementsSeo extends Struct.ComponentSchema {
  collectionName: 'components_elements_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface ElementsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    platform: Schema.Attribute.Enumeration<
      ['linkedin, twitter, facebook, instagram, website, youtube']
    >;
    url: Schema.Attribute.String;
  };
}

export interface ElementsTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_elements_team_members';
  info: {
    displayName: 'Team member';
  };
  attributes: {
    backround_colour: Schema.Attribute.Enumeration<
      ['Orange/Yellow', 'Purple Blue', 'Light Blue', 'Light Green']
    >;
    isPublished: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    name: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    picture: Schema.Attribute.Media<'images'>;
    role: Schema.Attribute.String;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    author: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images'>;
    content: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    footer_links_1: Schema.Attribute.Component<'elements.link', true>;
    footer_links_2: Schema.Attribute.Component<'elements.link', true>;
    info_text: Schema.Attribute.Component<'elements.banner', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    social_links: Schema.Attribute.Component<'elements.social-links', true>;
    top_footer_cta: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Logo: Schema.Attribute.Component<'elements.logo', false>;
    navigations: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface SectionHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_section_how_it_works';
  info: {
    displayName: 'How it works';
  };
  attributes: {
    heading: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'elements.basic-card', true>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface SectionProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_section_process_sections';
  info: {
    displayName: 'Process section';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'elements.link', false>;
    footer_text: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    images: Schema.Attribute.Media<'images', true>;
    Process: Schema.Attribute.Component<'blocks.heading', true>;
    subtitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.content-block': BlocksContentBlock;
      'blocks.faq-block': BlocksFaqBlock;
      'blocks.features-block': BlocksFeaturesBlock;
      'blocks.full-image': BlocksFullImage;
      'blocks.heading': BlocksHeading;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.home-banner': BlocksHomeBanner;
      'blocks.info-card': BlocksInfoCard;
      'blocks.messages-block': BlocksMessagesBlock;
      'blocks.paragraph': BlocksParagraph;
      'blocks.paragraph-with-image': BlocksParagraphWithImage;
      'blocks.team-block': BlocksTeamBlock;
      'blocks.testimonial-block': BlocksTestimonialBlock;
      'elements.badge': ElementsBadge;
      'elements.banner': ElementsBanner;
      'elements.basic-card': ElementsBasicCard;
      'elements.call-to-action': ElementsCallToAction;
      'elements.card': ElementsCard;
      'elements.cta': ElementsCta;
      'elements.faq': ElementsFaq;
      'elements.feature': ElementsFeature;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.message': ElementsMessage;
      'elements.seo': ElementsSeo;
      'elements.social-links': ElementsSocialLinks;
      'elements.team-member': ElementsTeamMember;
      'elements.testimonial': ElementsTestimonial;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'section.how-it-works': SectionHowItWorks;
      'section.process-section': SectionProcessSection;
    }
  }
}
