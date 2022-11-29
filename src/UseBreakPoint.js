import { useState, useEffect } from "react";
import { throttle } from "lodash";

export const getDeviceConfig = (width) => {
  if (width < 640) {
    return "xs";
  }
  if (width >= 640 && width < 768) {
    return "sm";
  }
  if (width >= 768 && width < 1024) {
    return "md";
  }
  if (width >= 1024 && width < 1280) {
    return "lg";
  }
  if (width >= 1280 && width < 1536) {
    return "xl";
  }
  return "2xl";
};

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState();
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window?.innerWidth);
    setBreakPoint(getDeviceConfig(window?.innerWidth));

    const calcInnerWidth = throttle(() => {
      setWidth(window?.innerWidth);
      setBreakPoint(getDeviceConfig(window?.innerWidth));
    }, 200);

    window?.addEventListener?.("resize", calcInnerWidth);

    return () => window?.removeEventListener?.("resize", calcInnerWidth);
  }, []);

  return {
    width,
    breakpoint,
    isMobile: ["xs", "sm"].includes(breakpoint),
    isMedium: ["md"].includes(breakpoint),
    isLarger: ["lg"].includes(breakpoint),
  };
};

export default useBreakpoint;
