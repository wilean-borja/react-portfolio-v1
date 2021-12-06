import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Demo
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>(02) 4206996</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>user@email.com</span>
          </div>
        </div>
        <div className="right">
          {/*when you click hamburger the menuOpen state becomes true and color of topbar shifts and 'active' classname is triggered*/}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
