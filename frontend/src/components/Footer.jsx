import "../styles/Footer.scss";
import githubIcon from "../resources/icons/item1.png";
import xIcon from "../resources/icons/item2.png";
import tournyIcon from "../resources/icons/item3.png";
import { useState } from "react";
import radurIcon from "../resources/icons/developersIcons/radur.png";
import chepeIcon from "../resources/icons/developersIcons/chepe.png";
import davidIcon from "../resources/icons/developersIcons/david.png";
import kendallIcon from "../resources/icons/developersIcons/kendall.png";

const gitPath = "https://github.com/Davidfz7/WebProject";
const developersReps = [
  "https://github.com/Davidfz7",
  "https://github.com/Radur1112",
  "https://github.com/Jos242",
  "https://github.com/luiskendall",
];

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="left-side-top">
          <strong className="left-side-item">Tier 2 </strong>
          <img className="left-side-item" src={tournyIcon} alt="tourny" />
        </div>

        <Developers />
      </div>
      <div className="divisory-line"></div>
      <div className="footer-bottom">
        <div className="footer-bottom-icons">
          <ul className="icons-footer-list">
            <li>
              <a href={gitPath} target="_blank">
                <img src={githubIcon} alt="github" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={xIcon} alt="x" />
              </a>
            </li>
          </ul>

          <p>&copy; 2023 Chepe's Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function Developers() {
  console.log(useState);
  return (
    <div className="developers-div">
      <ul className="developer-list">
        <li>
          <img
            src={kendallIcon}
            alt="github"
            style={{ border: "solid brown" }}
          />
          <div className="developer-list-item">
            <strong>
              Luis Xan <br />
              <span>
                <a href={developersReps[3]} target="_blank">
                  @luiskendall/github
                </a>
              </span>
            </strong>

            <ButtonFollow />
          </div>
        </li>
        <li>
          <img src={chepeIcon} alt="github" style={{ border: "solid red" }} />

          <div className="developer-list-item">
            <strong>
              Jos242 <br />
              <span>
                <a href={developersReps[2]} target="_blank">
                  @jos242/github
                </a>
              </span>
            </strong>
            <ButtonFollow />
          </div>
        </li>
        <li>
          <img src={radurIcon} alt="github" style={{ border: "solid black" }} />

          <div className="developer-list-item">
            <strong>
              Radur1112 <br />
              <span>
                <a href={developersReps[1]} target="_blank">
                  @radur1112/github
                </a>
              </span>
            </strong>
            <ButtonFollow />
          </div>
        </li>

        <li>
          <img src={davidIcon} alt="github" style={{ border: "solid black" }} />

          <div className="developer-list-item">
            <strong>
              Davidfz7 <br />{" "}
              <span>
                <a href={developersReps[0]} target="_blank">
                  @davidfz7/github
                </a>
              </span>
            </strong>

            <ButtonFollow />
          </div>
        </li>
      </ul>
    </div>
  );
}

function ButtonFollow() {
  let text = "Follow";
  let [Following, setFollowing] = useState(false);

  const status = () => {
    setFollowing(!Following);
  };

  if (Following) {
    text = "Following";
  } else {
    text = "Follow";
  }
  return (
    <a>
      <button onClick={status}>
        <strong>{text}</strong>
      </button>
    </a>
  );
}
