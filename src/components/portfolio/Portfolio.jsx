import { useState } from "react";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
    {
      id: "featured",
      title: "Featured",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Portfolio
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://www.logodesign.net/logo/piggy-bank-merged-with-a-bank-building-4574ld.png?size=2&industry=bank"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.logodesign.net/logo/piggy-bank-merged-with-a-bank-building-4574ld.png?size=2&industry=bank"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.logodesign.net/logo/piggy-bank-merged-with-a-bank-building-4574ld.png?size=2&industry=bank"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.logodesign.net/logo/piggy-bank-merged-with-a-bank-building-4574ld.png?size=2&industry=bank"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.logodesign.net/logo/piggy-bank-merged-with-a-bank-building-4574ld.png?size=2&industry=bank"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.logodesign.net/logo/piggy-bank-merged-with-a-bank-building-4574ld.png?size=2&industry=bank"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
