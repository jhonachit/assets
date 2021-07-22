import { slide as Menu } from "react-burger-menu";

export default function SideBarLeftLayout() {
  return (
    <Menu
      id="menuLeft"
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
    >
      <a id="home" className="menu-item" href="/">
        Inicio
      </a>
      <a id="components" className="menu-item" href="/components">
        Components
      </a>
      <a id="layers" className="menu-item--small" href="/layers">
        Layers
      </a>
      <a id="platforms" className="menu-item--small" href="/platforms">
        Platforms
      </a>
    </Menu>
  );
}
