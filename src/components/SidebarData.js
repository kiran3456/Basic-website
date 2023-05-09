import React from "react";
// Link to find more icons https://react-icons.github.io/react-icons/icons?name=ai
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Popup",
    path: "/popup",
    icon: <AiIcons.AiOutlineGroup />,
    cName: "nav-text",
  },
  {
    title: "Slider",
    path: "/slider",
    icon: <AiIcons.AiFillSliders />,
    cName: "nav-text",
  },
];
