"use client";

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { FaMoon, FaRegSun } from 'react-icons/fa';

const DarkmodeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Determine the current theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  // To prevent hydration mismatch, we only show the button after the component is mounted
  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted && (
        currentTheme === "dark" ? (
          <FaRegSun
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <FaMoon
            className="text-xl cursor-pointer hover:text-amber-400"
            onClick={() => setTheme("dark")}
          />
        )
      )}
    </div>
  );
};

export default DarkmodeSwitch;
