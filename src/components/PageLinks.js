import { pageLinks } from "./data";

export default function PageLinks({groupClass, itemClass}) {
  return (
    <ul className={groupClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
            <li>
          <a key={link.id} href={link.href} className={itemClass}>{link.text}</a>
          </li>
        );
      })}
    </ul>
  );
}