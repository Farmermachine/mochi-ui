import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
      <img alt="CubFinance" src="/images/cub/header_logo_wide.svg" style={{width: "auto", height: "30px"}} />
    );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
