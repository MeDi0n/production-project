import { Fragment, ReactNode } from "react";

import { Menu } from "@headlessui/react";

import { classNames } from "shared/lib/classNames/classNames";
import { DropdownDirection } from "shared/types/ui";

import { AppLink } from "shared/ui/AppLink/AppLink";
import { mapDirectionClass } from "../../styles/consts";
import popupCls from "../../styles/popup.module.scss";
import cls from "./Dropdown.module.scss";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
  const { className, trigger, items, direction } = props;
  const menuClasses = [mapDirectionClass[direction]];
  return (
    <Menu
      as="div"
      className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}
    >
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              type="button"
              onClick={item.onClick}
              className={classNames(cls.item, { [popupCls.active]: active })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
