import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
import { forwardRef } from "react";

const cs = classNames.bind(styles);

function SiderBar({ onClick }, ref) {
  return (
    <div onClick={onClick} ref={ref} className={cs("container")}>
      <div className={cs("wrapper")} >
        <div className={cs("containerItem", "activeItem")}>
          <p className={cs("sidebarItem")}>Home</p>
        </div>
        <div className={cs("containerItem")}>
          <p className={cs("sidebarItem")}>Services</p>
        </div>
        <div className={cs("containerItem")}>
          <p className={cs("sidebarItem")}>News</p>
        </div>
        <div className={cs("containerItem")}>
          <p className={cs("sidebarItem")}>Blog</p>
        </div>
        <div className={cs("containerItem")}>
          <p className={cs("sidebarItem")}>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(SiderBar);
