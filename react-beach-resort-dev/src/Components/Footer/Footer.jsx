import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Resort Room Book</h2>
      <p>
        &copy; <span>{year}</span> BeachResort.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://web.facebook.com/abdul.hakim89758"
        >
          Md. Abdul Hakim
        </a>
      </p>
    </footer>
  );
}
