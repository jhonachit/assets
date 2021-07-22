
import SideBarLeftLayout from "./sideBarLeft.layout";
import SideBarRigthLayout from "./sideBarRigth.layout";
import HeaderLayout from "./header.layout";
import "./main.layout.css"
export default function MainLayout(props) {
 
  return (
    <div id="outer-container" className="outer-container">
      <SideBarRigthLayout
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        right
        id={"SideBarRigth"}
      />

      <SideBarLeftLayout
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        id={"SideBarLeft"}
      />
      <HeaderLayout />
      <main id="page-wrap">{props.children}</main>
    </div>
  );
}