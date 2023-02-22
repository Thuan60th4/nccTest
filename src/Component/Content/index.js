import styles from "./Content.module.scss";
import classNames from "classnames/bind";
import image from "../../assest";
import DescriptionItem from "./descriptionItem/DescriptionItem";

const cs = classNames.bind(styles);

function Content() {
  return (
    <div className={cs("wrapper")}>
      <div className={cs("container")}>
        <img className={cs("logo")} src={image.logo} alt="" />

        <div className={cs("summary")}>
          <h4>Lorem ipsum dolor sit asmet?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </p>
        </div>

        <div className={cs("containIcon")}>
          <DescriptionItem />
          <DescriptionItem className={cs('iconNum2')} />
          <DescriptionItem />
        </div>
      </div>
      <footer className={cs("footer")}>
        <p>Copyright © 2021</p>
      </footer>
    </div>
  );
}

export default Content;
