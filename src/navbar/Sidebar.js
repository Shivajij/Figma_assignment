import React, { useState, useEffect } from "react";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import "./Sidebar.css";

function Sidebar({ setSortByPrice }) {
  const [showOptions, setShowOptions] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSortByPriceChange = () => {
    setSortByPrice((prevSortByPrice) => !prevSortByPrice);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 768) {
        setShowIcon(true);
        setShowOptions(false);
      } else {
        setShowIcon(false);
        setShowOptions(true);
      }
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={`sidebar ${showOptions ? "show-options" : ""}`}>
      {showIcon && (
        <div className="sidebar-header" onClick={toggleOptions}>
          <BsLayoutTextSidebarReverse size={30} style={{ cursor: "pointer" }} />
        </div>
      )}
      {showOptions && (
        <div
          className="d-flex flex-column h-100 options-container"
          style={{ padding: "20px" }}
        >
          <label className="my-3 d-flex align-items-center option-label mt-5">
            <input
              type="checkbox"
              className="option-checkbox"
              onChange={handleSortByPriceChange}
            />

            <span className="option-text" style={{ cursor: "pointer" }}>
              filter
            </span>
          </label>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
