"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      offset:10,
      mirror: true,
    });
  }, []);

  return null;
};

export default AOSInitializer;