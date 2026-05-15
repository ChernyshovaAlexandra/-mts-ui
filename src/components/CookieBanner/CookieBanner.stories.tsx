import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CookieBanner, CookieBannerProps } from "./CookieBanner";
import { Button } from "../Button/Button";

export default {
  title: "МТС/Feedback/CookieBanner",
  component: CookieBanner,
  tags: ["autodocs"],
} as Meta<CookieBannerProps>;

export const Default: StoryFn<CookieBannerProps> = (args) => {
  const [visible, setVisible] = useState(true);
  return (
    <div style={{ padding: 24, background: "#F2F3F7", minHeight: 200 }}>
      {visible ? (
        <CookieBanner {...args} onAccept={() => setVisible(false)} />
      ) : (
        <Button btn_type="button" variant="secondary" width="auto" onClick={() => setVisible(true)}>
          Показать снова
        </Button>
      )}
    </div>
  );
};
Default.args = {
  text: "Мы используем куки, чтобы сайт был для вас удобнее",
  acceptText: "Хорошо",
};
