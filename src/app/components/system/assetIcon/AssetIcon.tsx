import React from "react";
import style from "@/styles/system/AssetIcon.module.scss";


export type IconType =
  | "cleaning-tools"
  | "coffee-cups"
  | "milk-jugs"
  | "scales"
  | "tampers"
  | "tools";

export type ComponentSize = "extra-small" | "small" | "normal" | "big" | "huge";

interface AssetIconProps {
  icon: IconType;
  size?: ComponentSize;
  color?: string;
  placeholder?: boolean;
}

const AssetIcon: React.FC<AssetIconProps> = ({
  icon,
  size = "huge",
  color = "#4C4B4B",
  placeholder = false,
}): React.ReactElement => {
  let effSize: number;
  switch (size) {
    case "extra-small":
      effSize = 16;
      break;
    case "small":
      effSize = 24;
      break;
    case "normal":
      effSize = 28;
      break;
    case "big":
      effSize = 49;
      break;
    case "huge":
      effSize = 66;
      break;
    default:
      effSize = 72;
  }

  if (placeholder) {
    return (
      <span
        data-cy={"asset-icon"}
        data-size={size}
        className={style.assetIconContainer}
        style={{ width: `${effSize}px` }}
      />
    );
  }

  const iconComponents = {
    // "cleaning-tools": CleaningToolIcon,
    // "coffee-cups": CoffeeCupIcon,
    // "milk-jugs": MilkJugIcon,
    // scales: ScaleIcon,
    // tampers: TamperIcon,
    // tools: ToolIcon,
  };

  // @ts-ignore
  const IconComponent = iconComponents[icon];

  if (!IconComponent) return <></>;

  return (
    <span
      data-cy={"asset-icon"}
      data-cy-icon={icon}
      data-size={size}
      className={style["asset-icon-container"]}
    >
      <IconComponent width={effSize} height={effSize} color={color} className={style.assetIcon} />
    </span>
  );
};

export default AssetIcon;
