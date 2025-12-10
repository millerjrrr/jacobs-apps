import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaList } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const ContactCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const [iconSize, setIconSize] = useState(24);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return; // el is now HTMLDivElement

    const updateSize = () => {
      setIconSize(el.offsetWidth * 0.1);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <motion.div
      className="contact-card"
      ref={cardRef}
      layout
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <img
        src={"/images/jacob-profile.jpg"}
        alt="Jacob's profile picture"
        className="profile-image fade-circle"
      />
      {showDetails && (
        <motion.div
          className="flex flex-col p-2 md:p-4 lg:p-5"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="personal-detail">
            <MdEmail className="mr-2 text-lg" />
            <p className="whitespace-nowrap">millerjr@tcd.ie</p>
          </div>
          <div className="personal-detail app-link">
            <FaLinkedin className="mr-2 text-lg text-inherit" />
            <a
              href="https://www.linkedin.com/in/jacobmiller93/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="personal-detail app-link">
            <FaGithub className="mr-2 text-lg text-inherit" />
            <a href="https://github.com/millerjrrr" target="_blank">
              GitHub
            </a>
          </div>
        </motion.div>
      )}{" "}
      <div
        className="details-link animate-pulseScale"
        onClick={() => setShowDetails(!showDetails)}
      >
        {!showDetails ? (
          <FaList size={iconSize} />
        ) : (
          <IoMdClose size={iconSize} />
        )}
      </div>
    </motion.div>
  );
};

export default ContactCard;
