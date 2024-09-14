// // components/SettingsIcon.js
// import React, { useState } from 'react';
// import './SettingsPanel.css'; // Add your styles here
// import { FaCog } from 'react-icons/fa'; // Using react-icons for settings icon

// const SettingsPanel = ({ onToggleHeaderStyle }) => {
//   const [showSettings, setShowSettings] = useState(false);

//   const toggleSettingsPanel = () => {
//     setShowSettings(!showSettings);
//   };

//   return (
//     <div className="settings-container">
//       <div className="settings-icon" onClick={toggleSettingsPanel}>
//         <FaCog />
//       </div>
//       {showSettings && (
//         <div className="settings-panel">
//           <h3>Settings</h3>
//           <label>
//             <input
//               type="checkbox"
//               onChange={onToggleHeaderStyle}
//             />
//             Static Header
//           </label>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SettingsPanel;

// SettingsPanel.js
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import setTheme  from '../../redux/actions/themeActions';

// const SettingsPanel = ({ onToggleHeaderStyle }) => {
//   const dispatch = useDispatch();
//   const currentTheme = useSelector((state) => state.theme.theme);

//   const changeTheme = (newTheme) => {
//     dispatch(setTheme(newTheme));
//     document.documentElement.setAttribute('data-theme', newTheme); // Change CSS variables
//   };

//   return (
//     <div className="settings-panel">
//       <h3>Choose Theme</h3>
//       <div className="theme-options">
//         <button onClick={() => changeTheme('light')} className={currentTheme === 'light' ? 'active' : ''}>
//           Light
//         </button>
//         <button onClick={() => changeTheme('dark')} className={currentTheme === 'dark' ? 'active' : ''}>
//           Dark
//         </button>
//         <button onClick={() => changeTheme('nature')} className={currentTheme === 'nature' ? 'active' : ''}>
//           Nature
//         </button>
//       </div>
//       <button onClick={onToggleHeaderStyle}>
//         Toggle Sticky Header
//       </button>
//     </div>
//   );
// };

// export default SettingsPanel;


// import React, { useState } from 'react';
// import { FaCog } from 'react-icons/fa'; // FontAwesome cog icon
// import { useDispatch, useSelector } from 'react-redux';
// import setTheme from '../../redux/actions/themeActions';
// import './SettingsPanel.css'; // Import the CSS styling

// const SettingsPanel = ({ onToggleHeaderStyle }) => {
//   const [showSettings, setShowSettings] = useState(false); // State to toggle panel visibility
//   const dispatch = useDispatch();
//   const currentTheme = useSelector((state) => state.theme.theme);

//   const toggleSettingsPanel = () => {
//     setShowSettings(!showSettings);
//   };

//   const changeTheme = (newTheme) => {
//     dispatch(setTheme(newTheme));
//     document.documentElement.setAttribute('data-theme', newTheme); // Change CSS variables
//   };

//   return (
//     <div className="settings-container">
//       {/* Settings Icon */}
//       <div className="settings-icon" onClick={toggleSettingsPanel}>
//         <FaCog />
//       </div>

//       {/* Conditionally Render Settings Panel */}
//       {showSettings && (
//         <div className="settings-panel">
//           <h3>Settings</h3>
//           <div className="theme-options">
//             <button onClick={() => changeTheme('light')} className={currentTheme === 'light' ? 'active' : ''}>
//               Light
//             </button>
//             <button onClick={() => changeTheme('dark')} className={currentTheme === 'dark' ? 'active' : ''}>
//               Dark
//             </button>
//             <button onClick={() => changeTheme('nature')} className={currentTheme === 'nature' ? 'active' : ''}>
//               Nature
//             </button>
//           </div>
//           <label>
//             <input type="checkbox" onChange={onToggleHeaderStyle} />
//             Static Header
//           </label>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SettingsPanel;

// import React, { useState } from 'react';
// import { FaCog } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import setTheme from '../../redux/actions/themeActions';
// import './SettingsPanel.css'; // Ensure to link the updated CSS

// const SettingsPanel = ({ onToggleHeaderStyle }) => {
//   const [showSettings, setShowSettings] = useState(false); // State to toggle panel visibility
//   const dispatch = useDispatch();
//   const currentTheme = useSelector((state) => state.theme.theme);

//   const toggleSettingsPanel = () => {
//     setShowSettings(!showSettings);
//   };

//   const changeTheme = (newTheme) => {
//     dispatch(setTheme(newTheme));
//     document.documentElement.setAttribute('data-theme', newTheme); // Change CSS variables
//   };

//   return (
//     <>
//       {/* Settings Icon */}
//       <div className="settings-container">
//         <div className="settings-icon" onClick={toggleSettingsPanel}>
//           <FaCog />
//         </div>
//       </div>

//       {/* Overlay when settings panel is open */}
//       {showSettings && <div className="settings-backdrop" onClick={toggleSettingsPanel} />}

//       {/* Settings Panel - Renders as a popup */}
//       {showSettings && (
//         <div className="settings-panel">
//           <h3>Settings</h3>
//           <div className="theme-options">
//             <button onClick={() => changeTheme('light')} className={currentTheme === 'light' ? 'active' : ''}>
//               Light
//             </button>
       
//             <button onClick={() => changeTheme('earthy')} className={currentTheme === 'earthy' ? 'active' : ''}>
//               Earthy
//             </button>
//             <button onClick={() => changeTheme('pastel')} className={currentTheme === 'pastel' ? 'active' : ''}>
//               Pastel
//             </button>
//             <button onClick={() => changeTheme('vintage')} className={currentTheme === 'vintage' ? 'active' : ''}>
//               Vintage
//             </button>
//             <button onClick={() => changeTheme('nature')} className={currentTheme === 'nature' ? 'active' : ''}>
//               Nature
//             </button>
//           </div>
//           <label>
//             <input type="checkbox" onChange={onToggleHeaderStyle} />
//             Static Header
//           </label>
//         </div>
//       )}
//     </>
//   );
// };

// export default SettingsPanel;
import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setTheme from '../../redux/actions/themeActions';
import './SettingsPanel.css'; // Import the CSS file
import { FaCog } from 'react-icons/fa';


const SettingsPanel = ({ onToggleHeaderStyle }) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);
  const [showSettings, setShowSettings] = useState(false); // State to toggle panel visibility

    const toggleSettingsPanel = () => {
    setShowSettings(!showSettings);
  };


  const changeTheme = (newTheme) => {
    dispatch(setTheme(newTheme));
    document.documentElement.setAttribute('data-theme', newTheme); // Change CSS variables
    localStorage.setItem('appTheme', newTheme); // Save selected theme to localStorage
    console.log(newTheme)
  };

  return (
    <>
      <div className="settings-container">
             <div className="settings-icon" onClick={toggleSettingsPanel}>
               <FaCog />
             </div>
          </div>
           {showSettings && <div className="settings-backdrop" onClick={toggleSettingsPanel} />}

           {showSettings && (  <div className="settings-panel">
      <h3>Choose Theme</h3>
      <div className="theme-options">
        <button
          onClick={() => changeTheme('light')}
        //   className={`light ${currentTheme === 'light' ? 'active' : ''}`}
        className='light'
        >
          Light
        </button>
        <button
          onClick={() => changeTheme('earthy')}
        //   className={`earthy ${currentTheme === 'earthy' ? 'active' : ''}`}
        className='earthy'

        
        >
          Earthy
        </button>
        <button
          onClick={() => changeTheme('pastel')}
        //   className={`pastel ${currentTheme === 'pastel' ? 'active' : ''}`}
        className='pastel'

        >
          Pastel
        </button>
        <button
          onClick={() => changeTheme('vintage')}
        //   className={`vintage ${currentTheme === 'vintage' ? 'active' : ''}`}
        className='vintage'

        >
          Vintage
        </button>
        <button
          onClick={() => changeTheme('modern')}
        //   className={`nature ${currentTheme === 'nature' ? 'active' : ''}`}
        className='modern'

        >
          Modern
        </button>
        <button
          onClick={() => changeTheme('nature')}
        //   className={`nature ${currentTheme === 'nature' ? 'active' : ''}`}
        className='nature'

        >
          Nature
        </button>
      </div>
      <label>
            <input type="checkbox" onChange={onToggleHeaderStyle} />
             Static Header
          </label>
    </div>)}
    </>
  
  );
};

export default SettingsPanel;
