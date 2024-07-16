import React, { ReactNode } from "react";
import "./styles/navbar.css";
function NavBar() {
  return (
    <nav className="Nav-Bar">
      <a href="/hugochen/" className="Site-Title">
        Hugo Chen
      </a>
      <ul>
        <CustomLinkP href="/hugochen/projects">Projects</CustomLinkP>
        <CustomLink href="/hugochen/background">Experiences</CustomLink>
      </ul>
    </nav>
  );
}
interface CustomLinkProps {
  href: string;
  children: ReactNode;
  [key: string]: any;
}
function CustomLink({ href, children, ...props }: CustomLinkProps) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
function CustomLinkP({ href, children, ...props }: CustomLinkProps) {
  const path = window.location.pathname;
  return (
    <li className={path.includes("/projects") ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
export default NavBar;
