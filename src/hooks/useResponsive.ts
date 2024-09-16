import { useState } from "react";
import { breakpoints, Screen } from "utils/ResposiveHelper";

const useResponsive = (): {
  screen: Screen | null;
  orientation: "horizontal" | "vertical";
} => {
  const resolveScreen = (width: number): Screen | null => {
    if (width <= breakpoints.sm) {
      return "phone";
    } else if (width > breakpoints.sm && width <= breakpoints.md) {
      return "tab-port";
    } else if (width > breakpoints.md && width < breakpoints.lg) {
      return "tab-land";
    } else if (width >= breakpoints.xl) {
      return "desktop";
    } else return null;
  };

  const [screenOrientation, setScreenOrientation] = useState<
    "horizontal" | "vertical"
  >(window.innerWidth > window.innerHeight ? "horizontal" : "vertical");

  const [screen, setScreen] = useState<Screen | null>(
    resolveScreen(window.innerWidth)
  );

  window.addEventListener(
    "resize",
    function (event) {
      setScreenOrientation(
        window.innerWidth > window.innerHeight ? "horizontal" : "vertical"
      );
      setScreen(resolveScreen(this.window.innerWidth));
    },
    true
  );

  return {
    screen,
    orientation: screenOrientation,
  };
};

export default useResponsive;
