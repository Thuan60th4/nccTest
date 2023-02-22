import styles from "./DescriptionItem.module.scss";
import classNames from "classnames/bind";
import image from "../../../assest";

const cs = classNames.bind(styles);

function DescriptionItem({ className }) {
  return (
    <div className={cs("wrapper", className)}>
      <h4 className={cs("title")}>Lorem ipsum dolor sit amet</h4>
      <div className={cs("imageDes")}>
        <img src={image.cssIcon} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at
        </p>
      </div>
      <p className={cs("des")}>
        ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
        ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
        massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
      </p>
    </div>
  );
}

export default DescriptionItem;
