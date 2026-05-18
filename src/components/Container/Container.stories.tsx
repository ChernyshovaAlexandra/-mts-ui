import { Meta, StoryFn } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import Container, { ContainerProps } from "./Container";
import { Text } from "../Text/Text";

export default {
  title: "МТС/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    // подключаем стандартные viewports из Storybook
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
} as Meta<ContainerProps>;

const Template: StoryFn<ContainerProps> = (args) => (
  <Container {...args}>
    <Text variant="P3-Regular-Comp">
      Это пример контента внутри <code>Container</code>. Меняй размер экрана,
      чтобы увидеть, как изменяются внешние отступы.
    </Text>
  </Container>
);

export const Default = Template.bind({});
Default.storyName = "Responsive (Default)";

export const Mobile = Template.bind({});
Mobile.storyName = "Mobile (360×640)";
Mobile.parameters = {
  viewport: { defaultViewport: "mobile1" },
};

export const Tablet = Template.bind({});
Tablet.storyName = "Tablet (768×1024)";
Tablet.parameters = {
  viewport: { defaultViewport: "ipad" },
};

export const DesktopXS = Template.bind({});
DesktopXS.storyName = "Desktop XS (960×540)";
DesktopXS.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

export const DesktopSNormal = Template.bind({});
DesktopSNormal.storyName = "Desktop S Normal (1280×800)";
DesktopSNormal.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

export const DesktopSWide = Template.bind({});
DesktopSWide.storyName = "Desktop S Wide (1280×800)";
DesktopSWide.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

export const DesktopMNormal = Template.bind({});
DesktopMNormal.storyName = "Desktop M Normal (1440×900)";
DesktopMNormal.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

export const DesktopLNormal = Template.bind({});
DesktopLNormal.storyName = "Desktop L Normal (1680×900)";
DesktopLNormal.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

export const DesktopXLNormal = Template.bind({});
DesktopXLNormal.storyName = "Desktop XL Normal (1920×1080)";
DesktopXLNormal.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
