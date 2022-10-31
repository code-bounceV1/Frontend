import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import cx from "classnames";

interface SidebarBtnProps {
  link?: string;
  children: string;
  icon: JSX.Element;
  onClick?: () => void;
  isDropped?: boolean;
}

const SidebarBtn: React.FC<SidebarBtnProps> = ({
  link,
  icon,
  children,
  onClick,
  isDropped,
}) => {
  const location = useLocation();
  return (
    <React.Fragment>
      {link ? (
        <Link
          to={link}
          className={cx(
            "flex items-center gap-2 w-[250px]  p-2 rounded-md font-inter",
            location.pathname === "/login" || location.pathname === "/register"
              ? "hidden"
              : "",
            location.pathname === link
              ? "bg-slate-100"
              : "bg-transparent hover:bg-slate-100"
          )}
        >
          {icon}
          <p>{children}</p>
        </Link>
      ) : (
        <div>
          <button
            onClick={onClick}
            className={cx(
              "flex items-center justify-between gap-2 w-[250px]  p-2 rounded-md font-inter",
              location.pathname === "/login" ||
                location.pathname === "/register"
                ? "hidden"
                : "",
              isDropped ? "bg-slate-100" : "bg-transparent hover:bg-slate-100"
            )}
          >
            <div className="flex items-center gap-2">
              {icon}
              <p>{children}</p>
            </div>
            {isDropped ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
          <div className={cx(isDropped ? "flex p-3" : "hidden")}>Dropdown</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarBtn;
