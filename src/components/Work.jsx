import { useState } from "react";
import "./Work.css";
import data from "../utils/WorksData";

let count = 0;

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    // count = (count + 1) % featuredImages.length;
    count = (count + 1) % data.length;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    const productsLength = data.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };
  return (
    <section className="works" id="works">
      <div className="max-width">
        <h2 className="title">Works</h2>
        <div className="works-content">
          <div className="column left">
            <div className="nav-controls">
              <button className="nav-btn" onClick={handleOnPrevClick}>
                &#8592;
              </button>
              <span className="counter">
                0{count + 1}/0{data.length}
              </span>
              <button className="nav-btn" onClick={handleOnNextClick}>
                &#8594;
              </button>
            </div>
            <h1 className="work-title">{data[currentIndex].name}</h1>
            <p className="description">
              <strong>{data[currentIndex].name}</strong>{" "}
              {data[currentIndex].description}
            </p>
            <a
              className="visit-button"
              href={data[currentIndex].href}
              target="_blank"
            >
              Visit Site
            </a>
          </div>

          <div className="column right">
            <div
              className="mockup-wrapper"
              style={{
                background: data[currentIndex].backgound || "transparent",
              }}
            >
              <img
                src={data[currentIndex].img}
                alt="DevBlogs Screenshot"
                className="mockup-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
