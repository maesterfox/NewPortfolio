import React from "react";
import foxLogo from "../public/logo.png";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <img
        src={foxLogo.src} // Use .src for the path
        alt="David Fox Logo"
        className="h-8 w-10 inline-block mb-2"
      />
      <small className="mb-2 block text-xs">
        &copy; 2024 David Fox. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, and hosted on
        Vercel.
      </p>
    </footer>
  );
}
