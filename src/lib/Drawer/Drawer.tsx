import React from "react";
import cx from "classnames";

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  anchor?: "left" | "right";
}

const Drawer: React.FC<DrawerProps> = ({
  children,
  isOpen,
  onClose,
  anchor = "right",
}) => {
  return (
    <div
      className="h-screen w-screen fixed inset-0 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Drawer;
