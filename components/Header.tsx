import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div className="flex flex-row items-center">
        {/* social icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/marionjudy/m/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/marionjudy/m/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/marionjudy/m/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
    </header>
  );
}
