import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaList } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactCard = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [iconSize, setIconSize] = useState(24);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const updateSize = () => {
      setIconSize(el.offsetWidth * 0.1);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className={`contact-card ${showDetails ? "open" : ""}`} ref={cardRef}>
      <img
        src="/images/jacob-profile.jpg"
        alt="Jacob's profile picture"
        className="profile-image fade-circle"
      />

      <div className={`details-wrapper ${showDetails ? "open" : ""}`}>
        {showDetails && (
          <>
            <div className="personal-detail">
              <MdEmail className="mr-2 text-lg" />
              <p className="whitespace-nowrap">millerjr@tcd.ie</p>
            </div>

            <div className="personal-detail app-link">
              <FaLinkedin className="mr-2 text-lg" />
              <a
                href="https://www.linkedin.com/in/jacobmiller93/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>

            <div className="personal-detail app-link">
              <FaGithub className="mr-2 text-lg" />
              <a href="https://github.com/millerjrrr" target="_blank">
                GitHub
              </a>
            </div>
          </>
        )}
      </div>

      <div
        className="details-link animate-pulseScale"
        onClick={() => setShowDetails((prev) => !prev)}
      >
        {!showDetails ? (
          <FaList size={iconSize} />
        ) : (
          <IoMdClose size={iconSize} />
        )}
      </div>
    </div>
  );
};

export default ContactCard;
