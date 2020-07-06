import React from "react";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "lightgray" }}>
      <SocialNetworks />
      <p>
        {year} &copy; David Kontorovsky.
        <br />
        Made with ❤️ &nbsp;in OC.
      </p>
    </footer>
  );
}
