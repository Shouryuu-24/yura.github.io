import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import "remixicon/fonts/remixicon.css";
import Preloader from "./component/Preloader.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Preloader />
    <div className="containe mx-auto px-4">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
