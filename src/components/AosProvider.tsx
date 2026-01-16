// components/AosProvider.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AosProvider = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: false,
            offset: 100,
        });

        // Чтобы AOS обновлял анимации при динамическом контенте
        AOS.refresh();
    }, []);

    return null;
};
