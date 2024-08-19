import React from "react";
import { socialLinks } from "./data";

export default function SocialLinks({groupClass, itemClass}) {
  return (
    <ul className={groupClass}>
          {socialLinks.map((link) => {
            return (
              <li>
                <a
                  key={link.id}
                  href={link.href}
                  targe="_blank"
                  rel="noreferrer"
                  className={itemClass}
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
  )
}