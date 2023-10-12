import "../styles/Home.scss";
import { Footer } from "../components/Footer.jsx";
export function Home() {
  return (
    <div className="home-container">
      <div className="header-div-home">Header</div>
      <div className="content-div-home">Content</div>

      <div className="footer-div-home">
        <Footer />
      </div>
    </div>
  );
}
