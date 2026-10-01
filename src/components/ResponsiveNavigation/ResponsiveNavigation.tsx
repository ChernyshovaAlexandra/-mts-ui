import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import { Navigation, type NavigationProps } from "../Navigation/Navigation";
import { TabBar, type TabBarProps } from "../TabBar/TabBar";
import { DesktopNavigation, MobileNavigation, MobileSpacer } from "./style";

export type ResponsiveNavigationProps = PropsWithChildren<{
  navigation: NavigationProps;
  tabBar: TabBarProps;
  breakpoint?: number;
}>;

export const ResponsiveNavigation = ({ navigation, tabBar, breakpoint = 768, children }: ResponsiveNavigationProps) => {
  const mobileRef = useRef<HTMLDivElement>(null);
  const [mobileHeight, setMobileHeight] = useState(52);

  useEffect(() => {
    const element = mobileRef.current;
    if (!element) return;
    const updateHeight = () => {
      const height = element.getBoundingClientRect().height;
      if (height > 0) setMobileHeight(height);
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <DesktopNavigation $breakpoint={breakpoint}>
        <Navigation {...navigation} />
      </DesktopNavigation>
      {children}
      <MobileNavigation ref={mobileRef} $breakpoint={breakpoint}>
        <TabBar {...tabBar} />
      </MobileNavigation>
      <MobileSpacer $breakpoint={breakpoint} $height={mobileHeight} aria-hidden="true" />
    </>
  );
};

export default ResponsiveNavigation;
