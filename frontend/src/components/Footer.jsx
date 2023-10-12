import "../styles/Footer.scss";
import githubIcon from "../resources/icons/item1.png";
import xIcon from "../resources/icons/item2.png";
import tournyIcon from "../resources/icons/item3.png";
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
  return (
    <div className="developers-div">
      <strong>Developers:</strong>
      <ul className="developer-list">
        <li>
          <div className="developer-list-item">
            <strong>Luis Xan</strong>
            <button>
              <a href={developersReps[3]} target="_blank">
                Follow
              </a>
            </button>
          </div>
        </li>
        <li>
          <div className="developer-list-item">
            <strong>Jos242</strong>
            <button>
              <a href={developersReps[2]} target="_blank">
                Follow
              </a>
            </button>
          </div>
        </li>
        <li>
          <div className="developer-list-item">
            <strong>Radur1112</strong>
            <button>
              <a href={developersReps[1]} target="_blank">
                Follow
              </a>
            </button>
          </div>
        </li>

        <li>
          <div className="developer-list-item">
            <strong>Davidfz7</strong>
            <button>
              <a href={developersReps[0]} target="_blank">
                Follow
              </a>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
