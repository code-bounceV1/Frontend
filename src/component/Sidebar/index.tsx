import React from "react";
import cx from "classnames";
import { HiOutlineViewGrid } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import SidebarBtn from "./SidebarBtn";

const Sidebar: React.FC = () => {
  const location = useLocation();
  return (
    <div
      className={cx(
        "p-3 border-r",
        location.pathname === "/login" || location.pathname === "/register"
          ? "hidden"
          : ""
      )}
    >
      <div className="space-y-1">
        <SidebarBtn link="/" icon={<HiOutlineViewGrid size={20} />}>
          Dashboard
        </SidebarBtn>
      </div>
    </div>
  );
};

export default Sidebar;
