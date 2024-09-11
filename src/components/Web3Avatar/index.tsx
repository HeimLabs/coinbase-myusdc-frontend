import React, { useMemo } from "react";
import { getGradientColors } from "../../utils/web3-avatar";

interface Web3AvatarProps {
  address: string;
}

// Based on `web3-avatar`: https://github.com/JackHamer09/web3-avatar
const Web3Avatar: React.FC<Web3AvatarProps> = ({ address }) => {
  const colors = useMemo(() => getGradientColors(address), [address]);

  const avatarStyle = {
    "--color-av-1": colors[0],
    "--color-av-2": colors[1],
    "--color-av-3": colors[2],
    "--color-av-4": colors[3],
    "--color-av-5": colors[4],
    borderRadius: "50%",
    boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
    backgroundColor: "var(--color-av-1)",
    backgroundImage: `
      radial-gradient(at 66% 77%, var(--color-av-2) 0px, transparent 50%),
      radial-gradient(at 29% 97%, var(--color-av-3) 0px, transparent 50%),
      radial-gradient(at 99% 86%, var(--color-av-4) 0px, transparent 50%),
      radial-gradient(at 29% 88%, var(--color-av-5) 0px, transparent 50%)`,
    width: "100px", // Adjust as needed
    height: "100px", // Adjust as needed
  } as React.CSSProperties;

  return <div style={avatarStyle} />;
};

export default Web3Avatar;
