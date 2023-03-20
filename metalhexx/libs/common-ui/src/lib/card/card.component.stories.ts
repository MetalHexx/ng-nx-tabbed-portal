import { Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { CardComponent } from './card.component';

export default {
  title: 'CardComponent',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  ],
} as Meta<CardComponent>;

export const Primary = (args: CardComponent) => ({
  props: args,
  template: `
    <metalhexx-card [title]="title" [url]="url">
      {{ content }}
    </metalhexx-card>
  `,
});
Primary.args = {
  /**
   * Is this the principal call to action on the page?
   */
  title: 'My Card Title',
  url: 'https://www.example.com',
  content: `
    Example card content.
  `,
};

export const LongText = (args: CardComponent) => ({
  props: args,
  template: `
    <metalhexx-card [title]="title" [url]="url">
      {{ content }}
    </metalhexx-card>
  `,
});
LongText.args = {
  title: 'My Card Title',
  url: 'https://www.example.com',
  content: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget faucibus sapien. Phasellus eu lacus et nisl pellentesque ultricies. Praesent sed est ultricies, hendrerit velit a, consequat velit. Sed non luctus justo. Donec in leo vel enim bibendum hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam euismod est eget blandit rutrum. Maecenas tristique tristique tortor, eu lobortis ex efficitur ut. Suspendisse vitae mauris consectetur, tincidunt nunc a, volutpat massa. Sed mollis purus ac metus convallis imperdiet. Sed venenatis, libero eget maximus fringilla, dolor elit interdum turpis, nec ullamcorper metus elit eget risus. Vivamus nec est lacinia, sagittis nunc at, blandit mauris. Suspendisse potenti. In vitae magna vel orci suscipit sagittis.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget faucibus sapien. Phasellus eu lacus et nisl pellentesque ultricies. Praesent sed est ultricies, hendrerit velit a, consequat velit. Sed non luctus justo. Donec in leo vel enim bibendum hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam euismod est eget blandit rutrum. Maecenas tristique tristique tortor, eu lobortis ex efficitur ut. Suspendisse vitae mauris consectetur, tincidunt nunc a, volutpat massa. Sed mollis purus ac metus convallis imperdiet. Sed venenatis, libero eget maximus fringilla, dolor elit interdum turpis, nec ullamcorper metus elit eget risus. Vivamus nec est lacinia, sagittis nunc at, blandit mauris. Suspendisse potenti. In vitae magna vel orci suscipit sagittis.
  `,
};
