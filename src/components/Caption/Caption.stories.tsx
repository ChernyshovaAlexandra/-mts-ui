import { Meta, StoryFn } from "@storybook/react";
import { Caption, CaptionProps } from "./Caption";

export default {
  title: "МТС/Typography/Caption",
  component: Caption,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "C1-Bold-Comp",
        "C1-Medium-Upp-Comp",
        "C1-Medium-Comp",
        "C1-Regular-Comp",
      ],
    },
    children: { control: "text" },
    as: { control: false },
    ref: { control: false },
    style: { control: false },
  },
} as Meta<CaptionProps>;

const Template: StoryFn<CaptionProps> = (args) => <Caption {...args} />;

export const C1Bold = Template.bind({});
C1Bold.args = {
  children: "C1 12/130% Bold Comp",
  variant: "C1-Bold-Comp",
};

export const C1MediumUpp = Template.bind({});
C1MediumUpp.args = {
  children: "C1 12/130% Medium Upp Comp",
  variant: "C1-Medium-Upp-Comp",
};

export const C1Medium = Template.bind({});
C1Medium.args = {
  children: "C1 12/130% Medium Comp",
  variant: "C1-Medium-Comp",
};

export const C1Regular = Template.bind({});
C1Regular.args = {
  children: "C1 12/130% Regular Comp",
  variant: "C1-Regular-Comp",
};

export const AllVariants: StoryFn<CaptionProps> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Caption variant="C1-Bold-Comp">C1 Bold Text</Caption>
    <Caption variant="C1-Medium-Upp-Comp">C1 Medium Upp Text</Caption>
    <Caption variant="C1-Medium-Comp">C1 Medium Text</Caption>
    <Caption variant="C1-Regular-Comp">C1 Regular Text</Caption>
  </div>
);
AllVariants.parameters = { controls: { disable: true } };
