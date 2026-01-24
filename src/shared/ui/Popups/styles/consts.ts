import { DropdownDirection } from "../../../types/ui";
import cls from "./popup.module.scss";

export const mapDirectionClass: Record<DropdownDirection, string> = {
  "bottom left": cls.optionBottomLeft,
  "bottom right": cls.optionBottomRight,
  "top left": cls.optionTopRight,
  "top right": cls.optionTopLeft,
};
