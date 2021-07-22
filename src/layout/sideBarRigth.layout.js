import { elastic as MenuRigth } from "react-burger-menu";

export default function SideBarRigthLayout() {
  
  return (
    <MenuRigth
      id="menuRigth"
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      right
      customBurgerIcon={<img src="http://s.cdpn.io/3/kiwi.svg"></img>}
      
    >
      <a id="home" className="menu-item" href="/">
        Name User Access
      </a>
      <a id="about" className="menu-item" href="/about">
        Preferences
      </a>
      <a id="contact" className="menu-item" href="/help">
        Help
      </a>
      <a id="settings" className="menu-item--small" href="/" >
        Logout
      </a>
    </MenuRigth>
  );
}