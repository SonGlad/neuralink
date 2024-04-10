/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { useEffect } from "react";

const Facebook2 = () => {
  useEffect(() => {
    fbq('track', 'PageView');
    fbq('track', 'Lead');
  }, []);

  return null;
};

export default Facebook2;