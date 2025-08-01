import React from "react";

type Props = {
  url: string;
};

const WebsiteLink: React.FC<Props> = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="website-link"
    >
      Visit our site to learn more
    </a>
  );
};

export default WebsiteLink;
