import "./styles/App.scss";
import "./styles/SocialSection.scss";
import "./styles/WorkSection.scss";
import "./styles/AboutSection.scss";
import "./styles/HomeSection.scss";
import logo from "./assets/logo.svg";
import Splash from "./components/Splash";
import SocialCard from "./cards/SocialCard";
import ContactCard from "./cards/ContactCard";
import ProjectCard from "./cards/ProjectCard";
import { InView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import SwipeDown from "./components/SwipeDown";
import Hamburger from "./components/Hamburger";
import { Link } from "react-scroll";
import Motion from "./cards/subComponents/Motion";

function App() {
  const [deviceType, setDeviceType] = useState("desktop");
  const [showNav, setNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const [showAbout, setAbout] = useState(false);
  const [showProjects, setProjects] = useState(false);
  const [showSocial, setSocial] = useState(false);

  const hideNav = () => {
    setNav(false);
  };

  const updateDeviceType = (width) => {
    if (width >= 768) {
      setDeviceType("desktop");
      setWidth(window.innerWidth);
      return;
    }
    setDeviceType("mobile");
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    updateDeviceType(window.innerWidth);
    setWidth(window.innerWidth);
  }, []);

  const socialVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
        staggerChildren: 0.2,
      },
    },
  };

  const socialItemVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const navVariants = {
    hidden: { y: -10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.6,
        duration: 1,
        type: "tween",
        staggerChildren: 0.5,
      },
    },
  };

  const navItemVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  // const [showNav, setNav] = useState(true);

  // const [scrollDir, setScrollDir] = useState("scrolling down");

  // useEffect(() => {
  //   const threshold = 0;
  //   let lastScrollY = window.pageYOffset;
  //   let ticking = false;

  //   const updateScrollDir = () => {
  //     const scrollY = window.pageYOffset;

  //     if (Math.abs(scrollY - lastScrollY) < threshold) {
  //       ticking = false;
  //       return;
  //     }
  //     setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
  //     setNav(!(scrollY > lastScrollY));
  //     console.log(showNav);
  //     lastScrollY = scrollY > 0 ? scrollY : 0;
  //     ticking = false;
  //   };

  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(updateScrollDir);
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [scrollDir]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      updateDeviceType(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        updateDeviceType(window.innerWidth);
      });
    };
  });

  const [showSlider, setSlider] = useState(true);

  return (
    <>
      <Splash width={width} />
      <AnimatePresence>
        {true ? (
          <motion.nav
            initial="hidden"
            animate="show"
            variants={navVariants}
            exit="hidden"
            className={`${deviceType === "mobile" ? "mobile-nav" : ""}`}
          >
            {deviceType !== "mobile" ? (
              <>
                <motion.div variants={navItemVariants}>
                  <Link
                    to="section2"
                    smooth={true}
                    offset={-200}
                    spy={true}
                    duration={400}
                    delay={0}
                  >
                    <button>About</button>
                  </Link>
                </motion.div>

                <motion.div variants={navItemVariants}>
                  <Link
                    to="section3"
                    smooth={true}
                    spy={true}
                    duration={400}
                    delay={0}
                  >
                    <button>Workz</button>
                  </Link>
                </motion.div>

                <motion.div variants={navItemVariants}>
                  <Link
                    to="section4"
                    smooth={true}
                    offset={-50}
                    spy={true}
                    duration={400}
                    delay={0}
                  >
                    <button>Social</button>
                  </Link>
                </motion.div>

                <motion.div variants={navItemVariants}>
                  <Link
                    to="section5"
                    smooth={true}
                    spy={true}
                    duration={400}
                    delay={0}
                  >
                    <button>Contact</button>
                  </Link>
                </motion.div>
              </>
            ) : (
              <Hamburger
                onClick={() => {
                  setNav(!showNav);
                }}
                show={showNav}
              />
            )}
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showNav && deviceType === "mobile" ? (
          <motion.div
            className="mobile-nav-container"
            initial={{
              y: "-100%",
            }}
            animate={{
              y: "0%",
            }}
            exit={{
              y: "-100%",
            }}
            transition={{
              type: "tween",
              ease: [0.87, 0.07, 0.37, 0.97],
              duration: 0.5,
            }}
          >
            <Link
              to="section2"
              smooth={true}
              offset={0}
              spy={true}
              duration={400}
              delay={0}
              onClick={() => hideNav()}
            >
              <button>About</button>
            </Link>

            <Link
              to="section3"
              smooth={true}
              spy={true}
              duration={400}
              delay={0}
              offset={10}
              onClick={() => hideNav()}
            >
              <button>Workz</button>
            </Link>

            <Link
              to="section4"
              smooth={true}
              offset={-50}
              spy={true}
              duration={400}
              delay={0}
              onClick={() => hideNav()}
            >
              <button>Social</button>
            </Link>

            <Link
              to="section5"
              smooth={true}
              spy={true}
              duration={400}
              delay={0}
              offset={-50}
              onClick={() => hideNav()}
            >
              <button>Contact</button>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <InView
        as="div"
        onChange={(inView, entry) => setSlider(inView)}
        delay={100}
        threshold={1}
      >
        <section
          id="section1"
          className={
            deviceType !== "mobile" ? "home-section" : "home-section-mobile"
          }
        >
          <div className="bg"></div>
          <div className="bg2"></div>
          <img className="logo" src={logo} alt="Logo" />
          <p className="logo-down">
            <span className="separator">Student</span>{" "}
            <span className="separator">.</span> Noob Gamer
          </p>
          <AnimatePresence>
            {showSlider ? <SwipeDown deviceType={deviceType} /> : null}
          </AnimatePresence>
        </section>
      </InView>

      <InView
        as="div"
        onChange={(inView, entry) => {
          if (inView) {
            setAbout(true);
          }
        }}
        threshold={0.1}
        triggerOnce={true}
      >
        <section id="section2" className="about-section">
          <div
            className={`${
              deviceType === "mobile"
                ? "about-container-mobile"
                : "about-container"
            }`}
          >
            <div className="sidebar-container">
              <motion.div
                initial={{ y: -50, rotate: -5, opacity: 0 }}
                animate={showAbout ? { y: 0, rotate: -5, opacity: 1 } : {}}
                transition={{ duration: 0.5, type: "tween" }}
                className="img-wrapper"
              ></motion.div>
            </div>
            <div className="main-container">
              <div>
                <motion.h1
                  initial={{ y: -10, opacity: 0 }}
                  animate={showAbout ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1, type: "tween" }}
                >
                  About Me
                </motion.h1>
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={showAbout ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2, type: "tween" }}
                >
                  Heeeeelo I am Sourav Gain. I love to explore new technologies.{" "}
                  <br></br>I am pursuing BCA from <br></br>
                  <span>EMINENT COLLEGE OF MANAGEMENT AND TECHNOLOGY.</span>
                </motion.p>
                <motion.button
                  initial={{ x: -10, opacity: 0 }}
                  animate={showAbout ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5, type: "tween" }}
                  className="cv-btn"
                >
                  <i className="ri-file-list-2-line"></i>
                  Get CV
                </motion.button>
              </div>
            </div>
          </div>

          <div className="bg3"></div>
          <div className="bg4"></div>
        </section>
      </InView>

      <InView
        as="div"
        onChange={(inView, entry) => {
          if (inView) {
            setProjects(true);
          }
        }}
        threshold={0.5}
        triggerOnce={true}
      >
        <motion.section
          initial={{ y: -10, opacity: 0 }}
          animate={showProjects ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.3, type: "tween" }}
          id="section3"
          className="work-section"
        >
          <div
            className={
              deviceType !== "mobile"
                ? "head-container"
                : "head-container-mobile"
            }
          >
            <div className="section-head">
              <h1>Projects</h1>
              <p>Here are some of my projects which I done recently</p>
            </div>
          </div>
          <div
            className={
              deviceType !== "mobile"
                ? "projectContainer"
                : "projectContainer-mobile"
            }
          >
            <ProjectCard deviceType={deviceType} />
          </div>
        </motion.section>
      </InView>

      <InView
        as="div"
        onChange={(inView, entry) => {
          if (inView) {
            setSocial(true);
          }
        }}
        threshold={0.1}
        triggerOnce={true}
      >
        <section id="section4" className="social_section">
          {/* <SectionHead sectionName="WorkZ" /> */}
          <div
            className={
              deviceType !== "mobile"
                ? "head-container"
                : "head-container-mobile"
            }
          >
            <div className="section-head">
              <h1>Social</h1>
              <p>Connect with me though social media</p>
            </div>
          </div>
          <div className="container">
            <motion.div
              className="grid"
              variants={socialVariants}
              initial="hidden"
              animate={showSocial ? "show" : "hidden"}
            >
              <motion.div variants={socialItemVariants}>
                <SocialCard
                  logo="ri-telegram-line"
                  heading="Send Message"
                  subtext="Send message into my telegram account. Kek Bye"
                  url="https://t.me/epicX67"
                />
              </motion.div>

              <motion.div variants={socialItemVariants}>
                <SocialCard
                  logo="ri-youtube-line"
                  heading="My Videos"
                  subtext="Check out my YT channel where I upload tutorial videos and gaming."
                  url="https://www.youtube.com/c/epicX"
                />
              </motion.div>

              <motion.div variants={socialItemVariants}>
                <SocialCard
                  logo="ri-github-line"
                  heading="Follow Me"
                  subtext="Follow me on github so that you can get my recent activity."
                  url="https://github.com/epicX67"
                />
              </motion.div>

              <motion.div variants={socialItemVariants}>
                <SocialCard
                  logo="ri-paypal-line"
                  heading="Support Plox"
                  subtext="If you like my work. Feel free to donate me. That will help a lot :)"
                  url="https://paypal.me/epicX67"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </InView>

      <section
        id="section5"
        className={
          deviceType !== "mobile" ? "contact-section" : "contact-section-mobile"
        }
      >
        <div className="contactContainer">
          <ContactCard deviceType={deviceType} />
        </div>
      </section>

      <footer>
        <p>Powered by</p>
        <a href="https://www.framer.com/motion/" target="blank">
          <Motion />
        </a>

        <a href="https://remixicon.com/" target="blank">
          <i className="ri-remixicon-fill remix"></i>
        </a>

        <a href="https://reactjs.org/" target="blank">
          <i className="ri-reactjs-line react"></i>
        </a>
      </footer>
    </>
  );
}

export default App;
