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
    displayName: 'Features';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'elements.card', true>;
    footer_text: Schema.Attribute.String;
    heading: Schema.Attribute.String;
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

export interface BlocksTypeOfTherapyFaqBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_type_of_therapy_faq_blocks';
  info: {
    displayName: 'Type of therapy FAQ Block';
  };
  attributes: {
    Faqs: Schema.Attribute.Component<'section.types-of-therapy-faq', true>;
    Heading: Schema.Attribute.String;
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

export interface ElementsRichQa extends Struct.ComponentSchema {
  collectionName: 'components_elements_rich_qas';
  info: {
    displayName: 'richQA';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.String;
  };
}

export interface ElementsSeo extends Struct.ComponentSchema {
  collectionName: 'components_elements_seos';
  info: {
    displayName: 'MetaTags';
  };
  attributes: {
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
    titleTemplate: Schema.Attribute.Text;
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

export interface ElementsText extends Struct.ComponentSchema {
  collectionName: 'components_elements_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Schema.Attribute.Text;
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

export interface PagesectionsAccessTherapyAnywhere
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_access_therapy_anywhere';
  info: {
    displayName: 'Access Anywhere';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    imageSrc: Schema.Attribute.Media & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsAffordableOptions extends Struct.ComponentSchema {
  collectionName: 'components_blocks_affordable_options';
  info: {
    displayName: 'Affordable';
  };
  attributes: {
    cta: Schema.Attribute.Component<'pagesections.cta', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'pagesections.feature', true> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_article';
  info: {
    displayName: 'Article';
    icon: 'file-text';
  };
  attributes: {
    article_image: Schema.Attribute.Media;
    mobileStyle: Schema.Attribute.String;
    read_minutes: Schema.Attribute.Integer;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    theme: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsBenefitsOfTherapyMessage
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_messages';
  info: {
    description: 'A single chat/message bubble';
    displayName: 'Message';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsBenefitsOnlineTherapy
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_benefits_online_therapy';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    messages: Schema.Attribute.Component<
      'pagesections.benefits-of-therapy-message',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsBlogCarousel extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blog_carousel';
  info: {
    displayName: 'Blog Carousel';
    icon: 'carousel';
  };
  attributes: {
    articles: Schema.Attribute.Component<'pagesections.article', true>;
    background: Schema.Attribute.String;
  };
}

export interface PagesectionsBookerSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_booker_section';
  info: {
    displayName: 'Booker';
    icon: 'play';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    videoUrl: Schema.Attribute.String;
  };
}

export interface PagesectionsCheckQualifications
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_check_qualifications';
  info: {
    description: 'Block to show therapist qualifications and profiles';
    displayName: 'Check Quals';
    icon: 'check-circle';
  };
  attributes: {
    description: Schema.Attribute.String;
    footerText: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsClientStories extends Struct.ComponentSchema {
  collectionName: 'components_blocks_client_stories';
  info: {
    displayName: 'Stories';
    icon: 'comments';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    customClass: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'pagesections.client-story', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsClientStory extends Struct.ComponentSchema {
  collectionName: 'components_blocks_client_stories_items';
  info: {
    displayName: 'Client Story';
    icon: 'quote';
  };
  attributes: {
    avatar: Schema.Attribute.Media;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    year: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface PagesectionsColorBox extends Struct.ComponentSchema {
  collectionName: 'components_blocks_color_box';
  info: {
    displayName: 'Color Box';
    icon: 'square';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsColorBoxCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_color_box_cards';
  info: {
    description: 'Single colored card for ThreeColorBoxes block';
    displayName: 'ColorBoxCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsContactUsHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_us_heroes';
  info: {
    description: 'Hero section for contact us page';
    displayName: 'ContactUsHeroBlock';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    footerText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsCoreValueBox extends Struct.ComponentSchema {
  collectionName: 'components_blocks_core_value_box';
  info: {
    displayName: 'Core Value Box';
    icon: 'grid';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsCoreValues extends Struct.ComponentSchema {
  collectionName: 'components_blocks_core_values';
  info: {
    displayName: 'Core Values';
    icon: 'star';
  };
  attributes: {
    boxes: Schema.Attribute.Component<'pagesections.core-value-box', true>;
    ctaText: Schema.Attribute.String;
    customButtonClass: Schema.Attribute.String;
    subtitle: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    description: 'Call to action with text and link';
    displayName: 'CTA';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsCtaType extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_type';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    actionHref: Schema.Attribute.String;
    actionText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
  };
}

export interface PagesectionsDriversSeat extends Struct.ComponentSchema {
  collectionName: 'components_blocks_drivers_seat';
  info: {
    displayName: 'Driver\u2019s Seat';
    icon: 'dashboard';
  };
  attributes: {
    ctaLink: Schema.Attribute.String & Schema.Attribute.Required;
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
    howItWorksCards: Schema.Attribute.Component<
      'pagesections.how-it-works-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsEligibilityFeature extends Struct.ComponentSchema {
  collectionName: 'components_blocks_eligibility_features';
  info: {
    description: 'Single feature item for the eligibility section';
    displayName: 'EligibilityFeature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsEligibilitySection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_eligibility_sections';
  info: {
    description: 'Section block for eligibility details';
    displayName: 'Eligibility';
  };
  attributes: {
    ctaLink: Schema.Attribute.String & Schema.Attribute.Required;
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
    features: Schema.Attribute.Component<
      'pagesections.eligibility-feature',
      true
    > &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsFancyFreeTherapy extends Struct.ComponentSchema {
  collectionName: 'components_blocks_fancy_free_therapy';
  info: {
    displayName: 'Free Therapy';
    icon: 'star';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_section';
  info: {
    displayName: 'FAQ';
    icon: 'question-circle';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    padding: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'pagesections.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    description: 'A feature with heading, optional subheading, and icon';
    displayName: 'Feature';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media;
    subHeading: Schema.Attribute.String;
  };
}

export interface PagesectionsFeatureBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_block';
  info: {
    displayName: 'Feature Block';
    icon: 'star';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsFeatureItems extends Struct.ComponentSchema {
  collectionName: 'components_pagesections_feature_items';
  info: {
    description: 'Single feature inside How To Choose Therapy block';
    displayName: 'Feature Item';
  };
  attributes: {
    heading: Schema.Attribute.Text;
  };
}

export interface PagesectionsFeaturesBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_blocks';
  info: {
    description: 'A block with title, subtitle, CTA, and background color';
    displayName: 'FeaturesBlock';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsGettingStartedSection
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_getting_started_sections';
  info: {
    description: 'Block for Getting Started section with multiple color boxes';
    displayName: 'GettingStartedBlock';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String & Schema.Attribute.Required;
    colorBoxes: Schema.Attribute.Component<
      'pagesections.single-color-box',
      true
    > &
      Schema.Attribute.Required;
    ctaLink: Schema.Attribute.String & Schema.Attribute.Required;
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
    footerText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsGiveItTime extends Struct.ComponentSchema {
  collectionName: 'components_blocks_give_it_time';
  info: {
    description: 'Block about giving therapy time to work';
    displayName: 'Give Time';
    icon: 'clock';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    features: Schema.Attribute.Component<'pagesections.therapy-feature', true>;
    footerText: Schema.Attribute.RichText;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsGuideToOnlineTherapy
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_guide_to_online_therapy';
  info: {
    displayName: 'Guide';
  };
  attributes: {
    className: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    desktopImage: Schema.Attribute.Media & Schema.Attribute.Required;
    heading: Schema.Attribute.String;
    illustration: Schema.Attribute.Media & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
  };
}

export interface PagesectionsHelpSomeoneInstructions
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_help_someone_instructions';
  info: {
    description: 'Block with steps to help someone instructions';
    displayName: 'Help Someone';
  };
  attributes: {
    cards: Schema.Attribute.Component<
      'pagesections.help-someone-instructions-card',
      true
    > &
      Schema.Attribute.Required;
    ctaLink: Schema.Attribute.String & Schema.Attribute.Required;
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
    footerText: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsHelpSomeoneInstructionsCard
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_help_someone_instructions_cards';
  info: {
    description: 'Single instruction card for Help Someone Instructions block';
    displayName: 'Help Someone';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero';
  info: {
    displayName: 'Hero';
    icon: 'image';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    customButtonClass: Schema.Attribute.String;
    customSubtitleClass: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    inputImageTitle: Schema.Attribute.String;
    mobileImage: Schema.Attribute.Media<'images'>;
    negativeMargin: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.Text;
    textBoxClass: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsHeroWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_with_images';
  info: {
    description: 'Hero section with center image and cursor icon';
    displayName: 'Hero Image';
  };
  attributes: {
    centerImage: Schema.Attribute.Media & Schema.Attribute.Required;
    cursorIcon: Schema.Attribute.Media & Schema.Attribute.Required;
    image: Schema.Attribute.Media & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsHomeBannerBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_home_banner_blocks';
  info: {
    description: 'Banner section with heading and content';
    displayName: 'HomeBannerBlock';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface PagesectionsHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_blocks_how_it_works';
  info: {
    description: 'Block showing steps of how it works';
    displayName: 'How It Works';
  };
  attributes: {
    heading: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'pagesections.step', true> &
      Schema.Attribute.Required;
    subHeading: Schema.Attribute.String;
  };
}

export interface PagesectionsHowItWorksCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_how_it_works_cards';
  info: {
    displayName: 'How It Works Card';
    icon: 'id-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsHowToChooseTherapy extends Struct.ComponentSchema {
  collectionName: 'components_blocks_how_to_choose_therapy';
  info: {
    displayName: 'Choose Therapy';
  };
  attributes: {
    banner: Schema.Attribute.Component<'pagesections.home-banner-block', false>;
    desktopIllustration: Schema.Attribute.Media;
    features: Schema.Attribute.Component<
      'pagesections.how-to-choose-therapy-feature',
      false
    >;
    mobileIllustration: Schema.Attribute.Media;
  };
}

export interface PagesectionsHowToChooseTherapyFeature
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_how_to_choose_therapy_feature';
  info: {
    description: 'Block for How to Choose Therapy section';
    displayName: 'How To Choose Therapy Feature';
  };
  attributes: {
    features: Schema.Attribute.Component<'pagesections.feature-items', true>;
    footerText: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsHumanTouchTherapy extends Struct.ComponentSchema {
  collectionName: 'components_blocks_human_touch_therapy';
  info: {
    displayName: 'Human Touch';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsInPersonTherapy extends Struct.ComponentSchema {
  collectionName: 'components_blocks_in_person_therapy';
  info: {
    displayName: 'In Person';
  };
  attributes: {
    cta: Schema.Attribute.Component<'pagesections.cta', true> &
      Schema.Attribute.Required;
    features: Schema.Attribute.Component<'pagesections.feature', true> &
      Schema.Attribute.Required;
    footerText: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsKnowWhatAreYouLooking
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_know_what_are_you_looking';
  info: {
    description: 'Block showing content and CTA for We Know What Is Like section';
    displayName: 'Know You Need';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    whiteBoxes: Schema.Attribute.Component<
      'pagesections.white-color-block',
      true
    >;
  };
}

export interface PagesectionsMakingTherapyFit extends Struct.ComponentSchema {
  collectionName: 'components_blocks_making_therapy_fit';
  info: {
    displayName: 'Fit Therapy';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'pagesections.feature', true> &
      Schema.Attribute.Required;
    footerText: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsMessage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_message';
  info: {
    displayName: 'Message';
    icon: 'quote';
  };
  attributes: {
    order: Schema.Attribute.Integer;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsNotAllTheSame extends Struct.ComponentSchema {
  collectionName: 'components_blocks_not_all_the_same';
  info: {
    displayName: 'Not the Same';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface PagesectionsOurTeam extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_team';
  info: {
    displayName: 'Our Team';
    icon: 'users';
  };
  attributes: {
    members: Schema.Attribute.Component<'pagesections.team-member', true>;
    subtitle: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsPerk extends Struct.ComponentSchema {
  collectionName: 'components_blocks_perks';
  info: {
    description: 'Single perk for WhyEmoteCare block';
    displayName: 'Perk';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsPrioritiseYou extends Struct.ComponentSchema {
  collectionName: 'components_blocks_prioritise_you';
  info: {
    description: 'Block: Prioritise yourself in finding therapy';
    displayName: 'Prioritise You';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'pagesections.therapy-feature', true>;
    footerText: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsReduceStress extends Struct.ComponentSchema {
  collectionName: 'components_blocks_reduce_stress';
  info: {
    displayName: 'Reduce Stress';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsRightTherapist extends Struct.ComponentSchema {
  collectionName: 'components_blocks_right_therapist';
  info: {
    displayName: 'Right Therapist';
  };
  attributes: {
    cta: Schema.Attribute.Component<'pagesections.cta', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'pagesections.feature', true> &
      Schema.Attribute.Required;
    footerText: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsSingleColorBox extends Struct.ComponentSchema {
  collectionName: 'components_blocks_color_boxes';
  info: {
    description: 'Single color box inside GettingStarted block';
    displayName: 'ColorBox';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.Required;
    ctaLink: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media & Schema.Attribute.Required;
    mobileImageClass: Schema.Attribute.String;
    mobileTextClass: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsStep extends Struct.ComponentSchema {
  collectionName: 'components_blocks_steps';
  info: {
    description: 'Single step for How It Works block';
    displayName: 'Step';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    image: Schema.Attribute.Media;
    order: Schema.Attribute.Integer & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String;
  };
}

export interface PagesectionsStepSimple extends Struct.ComponentSchema {
  collectionName: 'components_blocks_step_simples';
  info: {
    description: 'Single step for Steps section';
    displayName: 'Step';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsStepsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_steps_sections';
  info: {
    description: 'Steps section with multiple steps';
    displayName: 'Steps';
  };
  attributes: {
    className: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'pagesections.step-simple', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_member';
  info: {
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    color: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    picture: Schema.Attribute.Media & Schema.Attribute.Required;
    position: Schema.Attribute.String;
  };
}

export interface PagesectionsTheOnlyCommitment extends Struct.ComponentSchema {
  collectionName: 'components_blocks_the_only_commitment';
  info: {
    displayName: 'Commitment';
    icon: 'lock';
  };
  attributes: {
    floatingText: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    whiteBoxes: Schema.Attribute.JSON;
  };
}

export interface PagesectionsTherapistPreview extends Struct.ComponentSchema {
  collectionName: 'components_blocks_therapist_preview';
  info: {
    displayName: 'Therapist Preview';
    icon: 'user-md';
  };
  attributes: {
    avatarUrl: Schema.Attribute.Media;
    bio: Schema.Attribute.Text;
    fifteenMinutesNextAvailableDate: Schema.Attribute.String;
    firstName: Schema.Attribute.String;
    header: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    price: Schema.Attribute.String;
    qualifications: Schema.Attribute.Component<
      'pagesections.therapist-qualification-preview',
      true
    >;
    rateId: Schema.Attribute.String;
    therapyAreas: Schema.Attribute.JSON;
    topAreas: Schema.Attribute.JSON;
    userId: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
    yearsOfExperience: Schema.Attribute.Integer;
  };
}

export interface PagesectionsTherapistPreviewBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_therapist_preview_block';
  info: {
    displayName: 'Therapist Preview Block';
    icon: 'id-card';
  };
  attributes: {
    badges: Schema.Attribute.JSON;
    bio: Schema.Attribute.Text;
    firstName: Schema.Attribute.String;
    hasFreeConsultation: Schema.Attribute.Boolean;
    index: Schema.Attribute.Integer;
    isMobile: Schema.Attribute.Boolean;
    lastName: Schema.Attribute.String;
    price: Schema.Attribute.String;
    qualifications: Schema.Attribute.String;
    therapist: Schema.Attribute.Component<
      'pagesections.therapist-preview',
      false
    >;
    therapistExperience: Schema.Attribute.String;
  };
}

export interface PagesectionsTherapistQualificationPreview
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_therapist_qualification_preview';
  info: {
    displayName: 'Therapist Qualification Preview';
    icon: 'certificate';
  };
  attributes: {
    membershipBody: Schema.Attribute.String;
    membershipBodyAbbreviation: Schema.Attribute.String;
    profession: Schema.Attribute.String;
  };
}

export interface PagesectionsTherapistsPreviewSection
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_therapists_preview_section';
  info: {
    displayName: 'Therapists Preview Section';
    icon: 'users';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    therapists: Schema.Attribute.Component<
      'pagesections.therapist-preview-block',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsTherapyFaq extends Struct.ComponentSchema {
  collectionName: 'components_blocks_therapy_faq';
  info: {
    displayName: 'Therapy FAQ';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'pagesections.therapy-faq-item', true> &
      Schema.Attribute.Required;
  };
}

export interface PagesectionsTherapyFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_therapy_faq_items';
  info: {
    description: 'FAQ item with multiple sections about online therapy';
    displayName: 'TherapyFaqItem';
  };
  attributes: {
    cta: Schema.Attribute.Component<'pagesections.cta', false>;
    howItWorksOnline: Schema.Attribute.Text;
    intro: Schema.Attribute.Component<
      'pagesections.therapy-reason-item',
      false
    >;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    whyPeopleChooseIt: Schema.Attribute.Component<
      'pagesections.therapy-reason-item',
      true
    >;
    worksWell: Schema.Attribute.Component<
      'pagesections.therapy-reason-item',
      true
    >;
  };
}

export interface PagesectionsTherapyFeature extends Struct.ComponentSchema {
  collectionName: 'components_blocks_therapy_feature';
  info: {
    displayName: 'Therapy Feature';
    icon: 'circle';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    subheading: Schema.Attribute.String;
  };
}

export interface PagesectionsTherapyQaHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_therapy_qa_heroes';
  info: {
    description: 'Hero section for therapy Q&A pages';
    displayName: 'TherapyQAHeroBlock';
  };
  attributes: {
    alt: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    name: Schema.Attribute.String;
    picture: Schema.Attribute.Media & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
  };
}

export interface PagesectionsTherapyReasonItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_therapy_reason_items';
  info: {
    description: 'A reason used inside Therapy FAQ answers';
    displayName: 'TherapyReasonItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface PagesectionsThreeColorBoxes extends Struct.ComponentSchema {
  collectionName: 'components_blocks_three_color_boxes';
  info: {
    description: 'Block with three colored cards';
    displayName: 'Color Boxes';
  };
  attributes: {
    cards: Schema.Attribute.Component<'pagesections.color-box-card', true> &
      Schema.Attribute.Required;
  };
}

export interface PagesectionsTryFreeIntroCall extends Struct.ComponentSchema {
  collectionName: 'components_blocks_try_free_intro_call';
  info: {
    description: 'Block encouraging users to try a free intro call';
    displayName: 'Intro Call';
    icon: 'phone';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    features: Schema.Attribute.Component<'pagesections.therapy-feature', true>;
    footerText: Schema.Attribute.RichText;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsUnderstandDifferentTherapy
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_understand_different_therapy';
  info: {
    description: 'Section explaining why finding the right therapist matters';
    displayName: 'Understand';
    icon: 'heartbeat';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    features: Schema.Attribute.Component<'pagesections.therapy-feature', true>;
    footerText: Schema.Attribute.RichText;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsUnsureWhereToStart extends Struct.ComponentSchema {
  collectionName: 'components_blocks_unsure_where_to_start';
  info: {
    displayName: 'Get Started';
    icon: 'help';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsWeGetIt extends Struct.ComponentSchema {
  collectionName: 'components_blocks_we_get_it';
  info: {
    displayName: 'We Get It';
    icon: 'comment';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    messages: Schema.Attribute.Component<'pagesections.message', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsWeKnowWhatIsLike extends Struct.ComponentSchema {
  collectionName: 'components_blocks_we_know_what_is_like';
  info: {
    description: 'Block showing content and CTA for We Know What Is Like section';
    displayName: 'We Know';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
    mobileTitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsWhatMakesYouConfortable
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_what_makes_you_comfortable';
  info: {
    description: 'What You Need section';
    displayName: 'Comfort';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    footerText: Schema.Attribute.String;
    image: Schema.Attribute.Media;
    mobileImage: Schema.Attribute.Media;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whiteBoxes: Schema.Attribute.Component<
      'pagesections.white-color-block',
      true
    >;
  };
}

export interface PagesectionsWhatYouNeed extends Struct.ComponentSchema {
  collectionName: 'components_blocks_what_you_need';
  info: {
    description: 'What You Need section';
    displayName: 'What You Need';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    footerText: Schema.Attribute.String;
    image: Schema.Attribute.Media;
    mobileImage: Schema.Attribute.Media;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whiteBoxes: Schema.Attribute.Component<
      'pagesections.white-color-block',
      true
    >;
  };
}

export interface PagesectionsWhiteColorBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_white_color_block';
  info: {
    displayName: 'White Color Block';
    icon: 'align-left';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface PagesectionsWhyEmoteCare extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_emote_care';
  info: {
    description: 'Block showing why users should choose EmoteCare';
    displayName: 'Why Us';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
    perks: Schema.Attribute.Component<'pagesections.perk', true> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsWhyFlexibilityMatters
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_flexibility_matters';
  info: {
    displayName: 'Flexibility';
    icon: 'list';
  };
  attributes: {
    listOfReasons: Schema.Attribute.JSON;
    paragraphs: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsWhyFreeTherapy extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_free_therapy';
  info: {
    description: 'Section block for Why Free Therapy';
    displayName: 'Why Free';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    features: Schema.Attribute.Component<
      'pagesections.why-free-therapy-feature',
      true
    >;
    footerText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsWhyFreeTherapyFeature
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_free_therapy_feature';
  info: {
    description: 'Single feature with title and description';
    displayName: 'WhyFreeTherapyFeature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsWhyItMatters extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_it_matters';
  info: {
    displayName: 'Why It Matters';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media;
    subtitle: Schema.Attribute.String;
  };
}

export interface PagesectionsWhyPayAsYouGo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_pay_as_you_go';
  info: {
    displayName: 'Why Pay';
    icon: 'credit-card';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    colorBoxes: Schema.Attribute.Component<'pagesections.color-box', true>;
    contentRotatedClass: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    customBoxClass: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    desktopCardsSection: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PagesectionsWhyTherapyMatters extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_therapy_matters';
  info: {
    displayName: 'Why Therapy';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'pagesections.feature', true> &
      Schema.Attribute.Required;
    footerText: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesectionsWhyWeAreHere extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_we_are_here';
  info: {
    displayName: 'Why We Are Here';
    icon: 'information';
  };
  attributes: {
    image: Schema.Attribute.Media;
    story: Schema.Attribute.JSON & Schema.Attribute.Required;
    subtitle: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SectionRichTextFaq extends Struct.ComponentSchema {
  collectionName: 'components_section_rich_text_faqs';
  info: {
    displayName: 'Rich text Faq';
  };
  attributes: {
    Faqs: Schema.Attribute.Component<'elements.rich-qa', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionTypesOfTherapyFaq extends Struct.ComponentSchema {
  collectionName: 'components_section_types_of_therapy_faqs';
  info: {
    displayName: 'Types Of therapy faq Item';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    howItWorksOnline: Schema.Attribute.Text;
    Intro: Schema.Attribute.Component<'elements.text', false>;
    question: Schema.Attribute.String;
    whyPeopleChooseIt: Schema.Attribute.Component<'elements.text', true>;
    worksWell: Schema.Attribute.Component<'elements.text', true>;
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
      'blocks.type-of-therapy-faq-block': BlocksTypeOfTherapyFaqBlock;
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
      'elements.rich-qa': ElementsRichQa;
      'elements.seo': ElementsSeo;
      'elements.social-links': ElementsSocialLinks;
      'elements.team-member': ElementsTeamMember;
      'elements.testimonial': ElementsTestimonial;
      'elements.text': ElementsText;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'pagesections.hero': PagesectionsHero;
      'pagesections.we-get-it': PagesectionsWeGetIt;
      'pagesections.the-only-commitment': PagesectionsTheOnlyCommitment;
      'pagesections.why-pay-as-you-go': PagesectionsWhyPayAsYouGo;
      'pagesections.why-flexibility-matters': PagesectionsWhyFlexibilityMatters;
      'pagesections.client-stories': PagesectionsClientStories;
      'pagesections.unsure-where-to-start': PagesectionsUnsureWhereToStart;
      'pagesections.features-block': PagesectionsFeaturesBlock;
      'pagesections.fancy-free-therapy': PagesectionsFancyFreeTherapy;
      'pagesections.drivers-seat': PagesectionsDriversSeat;
      'pagesections.booker-section': PagesectionsBookerSection;
      'pagesections.faq-section': PagesectionsFaqSection;
      'pagesections.we-know-what-is-like': PagesectionsWeKnowWhatIsLike;
      'pagesections.know-what-are-you-looking': PagesectionsKnowWhatAreYouLooking;
      'pagesections.what-you-need': PagesectionsWhatYouNeed;
      'pagesections.what-makes-you-confortable': PagesectionsWhatMakesYouConfortable;
      'pagesections.cta-type': PagesectionsCtaType;

      'pagesections.how-it-works': PagesectionsHowItWorks;
      'pagesections.why-emote-care': PagesectionsWhyEmoteCare;
      'pagesections.three-color-boxes': PagesectionsThreeColorBoxes;
      'pagesections.steps-section': PagesectionsStepsSection;

      'pagesections.help-someone-instructions': PagesectionsHelpSomeoneInstructions;
      'pagesections.eligibility-section': PagesectionsEligibilitySection;
      'pagesections.why-free-therapy': PagesectionsWhyFreeTherapy;

      'pagesections.hero-with-image': PagesectionsHeroWithImage;
      'pagesections.why-therapy-matters': PagesectionsWhyTherapyMatters;
      'pagesections.access-therapy-anywhere': PagesectionsAccessTherapyAnywhere;
      'pagesections.benefits-online-therapy': PagesectionsBenefitsOnlineTherapy;
      'pagesections.making-therapy-fit': PagesectionsMakingTherapyFit;
      'pagesections.right-therapist': PagesectionsRightTherapist;
      'pagesections.reduce-stress': PagesectionsReduceStress;
      'pagesections.in-person-therapy': PagesectionsInPersonTherapy;
      'pagesections.affordable-options': PagesectionsAffordableOptions;
      'pagesections.human-touch-therapy': PagesectionsHumanTouchTherapy;

      'pagesections.guide-to-online-therapy': PagesectionsGuideToOnlineTherapy;
      'pagesections.not-all-the-same': PagesectionsNotAllTheSame;
      'pagesections.therapy-faq': PagesectionsTherapyFaq;
      'pagesections.how-to-choose-therapy': PagesectionsHowToChooseTherapy;
      'pagesections.why-it-matters': PagesectionsWhyItMatters;
      'pagesections.understand-different-therapy': PagesectionsUnderstandDifferentTherapy;
      'pagesections.check-qualifications': PagesectionsCheckQualifications;
      'pagesections.try-free-intro-call': PagesectionsTryFreeIntroCall;
      'pagesections.give-it-time': PagesectionsGiveItTime;
      'pagesections.prioritise-you': PagesectionsPrioritiseYou;

    }
  }
}
