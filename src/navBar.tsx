import React, { ReactNode } from "react";
import "./styles/navbar.css";
function NavBar() {
  return (
    <div className="nav-container">
      <nav className="Nav-Bar">
        <ul>
          <CustomLink href="/hugochen/">Profile</CustomLink>
          <CustomLinkP href="/hugochen/projects">Projects</CustomLinkP>
        </ul>
      </nav>
    </div>
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
