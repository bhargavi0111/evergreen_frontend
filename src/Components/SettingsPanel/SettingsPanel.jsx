import React, { useState } from "react";
import { useDispatch} from "react-redux";
import setTheme from "../../redux/actions/themeActions";
import "./SettingsPanel.css";
import { FaCog } from "react-icons/fa";

const SettingsPanel = ({ onToggleHeaderStyle }) => {
  const dispatch = useDispatch();
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettingsPanel = () => {
    setShowSettings(!showSettings);
  };

  const changeTheme = (newTheme) => {
    dispatch(setTheme(newTheme));
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("appTheme", newTheme);
  };

  return (
    <>
      <div className="settings-container">
        <div className="settings-icon" onClick={toggleSettingsPanel}>
          <FaCog />
        </div>
      </div>
      {showSettings && (
        <div className="settings-backdrop" onClick={toggleSettingsPanel} />
      )}

      {showSettings && (
        <div className="settings-panel">
          <h3>Choose Theme</h3>
          <div className="theme-options">
            <button onClick={() => changeTheme("nature")} className="nature">
              Nature
            </button>
            <button onClick={() => changeTheme("light")} className="light">
              Light
            </button>
            <button onClick={() => changeTheme("earthy")} className="earthy">
              Earthy
            </button>
            <button onClick={() => changeTheme("pastel")} className="pastel">
              Pastel
            </button>
            <button onClick={() => changeTheme("vintage")} className="vintage">
              Vintage
            </button>
            <button onClick={() => changeTheme("modern")} className="modern">
              Modern
            </button>
          </div>
          <label>
            <input type="checkbox" onChange={onToggleHeaderStyle} />
            Static Header
          </label>
        </div>
      )}
    </>
  );
};

export default SettingsPanel;
