'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      delay: 100,
      once: true,
      easing: 'ease-out-cubic',
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return null;
}
