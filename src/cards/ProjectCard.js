import { React, useState } from "react";
// import {useEffect} from "react"
import { AnimatePresence, motion } from "framer-motion";
import NumberSelectors from "./subComponents/NumberSelectors";
import Shrp from "./subComponents/Shrp";
import Szip from "./subComponents/Szip";
import Ncloud from "./subComponents/Ncloud";
import Krunkercss from "./subComponents/Krunkercss";
import { sleep } from "../utils/utils";

export default function ProjectCard({ deviceType }) {
  const [isRight, setRight] = useState(true);
  const [pos, setPos] = useState(0);

  const [cards, setCard] = useState([
    {
      title: "SHRP",
      info: "Skyhawk recovery project (SHRP) is a android custom recovery project which is based on latest TWRP.",
      logo: <Shrp className="blue" />,
      show: true,
      color: "blue",
      btns: [
        {
          name: "Visit",
          url: "https://skyhawkrecovery.github.io/",
        },
        {
          name: "Source Code",
          url: "https://github.com/SHRP",
        },
      ],
    },

    {
      title: "Project Ncloud",
      info: "Scalable Network Attached Storage system for raspberry pi and for other linux distros",
      logo: <Ncloud className="red" />,
      show: false,
      color: "red",
      btns: [
        {
          name: "Get started",
          url: "https://github.com/project-ncloud/get_started/blob/main/README.md",
        },
        {
          name: "Source code",
          url: "https://github.com/project-ncloud",
        },
      ],
    },
    // {
    //   title: "SS",
    //   info: "A detailed Explanation 3",
    //   logo: null,
    //   show: false,
    //   color: "green",
    //   btns: [
    //     {
    //       name: "Download",
    //       url: "google.com",
    //     },
    //   ],
    // },
    {
      title: "MOF1 Krunker CSS",
      info: "Unique krunker CSS for official client & chrome.",
      logo: <Krunkercss className="yellow" />,
      show: false,
      color: "yellow",
      btns: [
        {
          name: "Guide",
          url: "https://github.com/MOF1/krunker_css",
        },
        {
          name: "Download",
          url: "https://github.com/MOF1/krunker_css/releases",
        },
      ],
    },
    {
      title: "Szip",
      info: "An event based 7zip wrapper for nodejs. Most of the functions in this package are event based. Non event functions are also available.",
      logo: <Szip className="green" />,
      show: false,
      color: "green",
      btns: [
        {
          name: "Download from NPM",
          url: "https://www.npmjs.com/package/szip",
        },
        {
          name: "Source",
          url: "https://github.com/epicX67/szip",
        },
      ],
    },
  ]);

  let i = 0;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     nextCard();
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // });

  const changeCard = async (title, p) => {
    const newState = cards.map((item) => {
      item.show = item.title === title ? true : false;
      return item;
    });

    setRight(p < pos ? true : false);
    await sleep(100);
    setCard(newState);
    setPos(p);
  };

  const nextCard = async () => {
    const newState = cards;
    let newPos = pos + 1;

    if (newPos >= newState.length) {
      newPos = 0;
    }
    newState[pos].show = false;
    newState[newPos].show = true;
    setRight(false);
    await sleep(100);
    setCard(newState);
    setPos(newPos);
  };

  const previousCard = async () => {
    const newState = cards;
    let newPos = pos - 1;

    if (newPos < 0) {
      newPos = newState.length - 1;
    }
    newState[pos].show = false;
    newState[newPos].show = true;
    setRight(true);
    await sleep(100);
    setCard(newState);
    setPos(newPos);
  };

  return (
    <>
      <div className="numberSelectors">
        {cards.map((item) => {
          return (
            <NumberSelectors
              onClick={() => changeCard(item.title, cards.indexOf(item))}
              number={++i}
              active={item.show}
              key={item.title + i}
            />
          );
        })}
      </div>
      <div className="mContainer-project">
        <i
          onClick={() => previousCard()}
          className="ri-arrow-left-s-line m-btn prev"
          key="prevBtn"
        ></i>
        <AnimatePresence>
          <motion.div
            className={`project-card ${cards[pos].color}-bg`}
            initial={{
              x: isRight ? "-50%" : "50%",
              opacity: 0,
              position: "absolute",
            }}
            animate={{ x: 0, opacity: 1, position: "absolute" }}
            exit={{
              x: isRight ? "50%" : "-50%",
              opacity: 0,
              position: "absolute",
            }}
            key={cards[pos].title}
          >
            <div className="sContainer-pCard">
              <div className={`project-box ${cards[pos].color}-bg`}>
                <div className={`logo-box ${cards[pos].color}-border`}>
                  {cards[pos].logo}
                </div>
              </div>
              <div className="btn-container">
                {cards[pos].btns.map((item) => {
                  return (
                    <a
                      className={`${cards[pos].color}-a`}
                      href={item.url}
                      target="blank"
                      key={item.url}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="mContainer-pCard">
              <h1>{cards[pos].title}</h1>
              <p>{cards[pos].info}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <i
          onClick={() => nextCard()}
          className="ri-arrow-right-s-line m-btn next"
          key="nextBtn"
        ></i>
      </div>
    </>
  );
}
