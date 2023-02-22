import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ onClick, className }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "black",
        height: "50px",
        marginBottom: "50px",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
      }}
      className={className}
    >
      <i onClick={onClick}>
        <FontAwesomeIcon
          icon={faBars}
          color="white"
          style={{ fontSize: 20, padding: 20 }}
        />
      </i>
    </div>
  );
}

export default Header;
