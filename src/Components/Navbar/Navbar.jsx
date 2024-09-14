// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import './Navbar.css';
// import logo from '../Assets/logo.jpg';
// import cart_icon from '../Assets/cart_icon.png';
// import nav_dropdown from '../Assets/nav_dropdown.png';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [menu, setMenu] = useState("shop");

//   const totalCartItems = useSelector(state => {
//     const items = state.cart?.items || []; 
//     return items.reduce((total, item) => total + item.quantity, 0);
//   });

//   const menuRef = React.useRef();

//   const dropdown_toggle = (e) => {
//     menuRef.current.classList.toggle('nav-menu-visible');
//     e.target.classList.toggle('open');
//   };
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     localStorage.removeItem('token');

//     navigate('/login');
//   };
//   return (
//     <div className='navbar'>
//       <Link to='/' onClick={() => { setMenu("home") }} className="nav-logo">
//         <img src={logo} alt="" />
//         <p>EverGreen Nursery</p>
//       </Link>
//       <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
//       <ul ref={menuRef} className="nav-menu">
//         <li onClick={() => { setMenu("home") }}><Link to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("plants") }}><Link to='/plants'>Plants</Link>{menu === "plants" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("pots") }}><Link to='/pots'>Pots and Planters</Link>{menu === "pots" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("tools") }}><Link to='/tools'>Tools</Link>{menu === "tools" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("gifts") }}><Link to='/gifts'>Gifting</Link>{menu === "gifts" ? <hr /> : <></>}</li>
//       </ul>
//       <div className="nav-login-cart">
//       <button onClick={handleLogout}>Logout</button>
//         <Link to='/cart'><img src={cart_icon} alt="" /></Link>
//         <div className="nav-cart-count">{totalCartItems}</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../Assets/logo.jpg';
// import cart_icon from '../Assets/cart_icon.png';
// import nav_dropdown from '../Assets/nav_dropdown.png';
// import { logout } from '../../redux/actions/authActions'; // Import logout action

// const Navbar = () => {
//   const [menu, setMenu] = useState("shop");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const totalCartItems = useSelector(state => {
//     const items = state.cart?.items || []; 
//     return items.reduce((total, item) => total + item.quantity, 0);
//   });

//   const menuRef = React.useRef();

//   const dropdown_toggle = (e) => {
//     menuRef.current.classList.toggle('nav-menu-visible');
//     e.target.classList.toggle('open');
//   };

//   const handleLogout = () => {
//     // Dispatch logout action to update Redux state
//     dispatch(logout());

//     // Remove token from local storage
//     localStorage.removeItem('token');

//     // Redirect to login page
//     navigate('/login');
//   };

//   return (
//     <div className='navbar'>
//       <Link to='/' onClick={() => { setMenu("home") }} className="nav-logo">
//         <img src={logo} alt="Logo" />
//         <p>EverGreen Nursery</p>
//       </Link>
//       <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="Dropdown" />
//       <ul ref={menuRef} className="nav-menu">
//         <li onClick={() => { setMenu("home") }}><Link to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("plants") }}><Link to='/plants'>Plants</Link>{menu === "plants" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("pots") }}><Link to='/pots'>Pots and Planters</Link>{menu === "pots" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("tools") }}><Link to='/tools'>Tools</Link>{menu === "tools" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("gifts") }}><Link to='/gifts'>Gifting</Link>{menu === "gifts" ? <hr /> : <></>}</li>
//       </ul>
//       <div className="nav-login-cart">
//         <button onClick={handleLogout}>Logout</button>
//         <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
//         <div className="nav-cart-count">{totalCartItems}</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../Assets/logo.jpg';
// import cart_icon from '../Assets/cart_icon.png';
// import nav_dropdown from '../Assets/nav_dropdown.png';
// import { logout } from '../../redux/actions/authActions'; // Import logout action

// const Navbar = () => {
//   const [menu, setMenu] = useState("shop");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const totalCartItems = useSelector(state => {
//     const items = state.cart?.items || [];
//     return items.reduce((total, item) => {
//       return total + (item.quantity || 0); // Ensure quantity is treated as a number
//     }, 0);
//   });

//   const menuRef = React.useRef();

//   const dropdown_toggle = (e) => {
//     menuRef.current.classList.toggle('nav-menu-visible');
//     e.target.classList.toggle('open');
//   };

//   const handleLogout = () => {
//     // Dispatch logout action to update Redux state
//     dispatch(logout());

//     // Remove token from local storage
//     localStorage.removeItem('token');

//     // Redirect to login page
//     navigate('/login');
//   };

//   return (
//     <div className='navbar'>
//       <Link to='/' onClick={() => { setMenu("home") }} className="nav-logo">
//         <img src={logo} alt="Logo" />
//         <p>EverGreen Nursery</p>
//       </Link>
//       <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="Dropdown" />
//       <ul ref={menuRef} className="nav-menu">
//         <li onClick={() => { setMenu("home") }}><Link to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("plants") }}><Link to='/plants'>Plants</Link>{menu === "plants" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("pots") }}><Link to='/pots'>Pots and Planters</Link>{menu === "pots" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("tools") }}><Link to='/tools'>Tools</Link>{menu === "tools" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("gifts") }}><Link to='/gifts'>Gifting</Link>{menu === "gifts" ? <hr /> : <></>}</li>
//       </ul>
//       <div className="nav-login-cart">
//         <button onClick={handleLogout}>Logout</button>
//         <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
//         <div className="nav-cart-count">{totalCartItems > 0 ? totalCartItems : 0}</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect ,useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cart_icon from '../Assets/cart_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { logout } from '../../redux/actions/authActions';
import { getCart } from '../../redux/actions/cartActions';

const Navbar = ({className}) => {
  const [menu, setMenu] = useState("shop");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items: cartItems, loading } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const totalCartItems = useMemo(() => {
    return cartItems ? cartItems.reduce((total, item) => total + (item.quantity || 0), 0) : 0;
  }, [cartItems]);

  // const totalCartItems = cartItems ? cartItems.reduce((total, item) => total + (item.quantity || 0), 0) : 0;

  const menuRef = React.useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className={`navbar ${className}`}>
      <Link to='/' onClick={() => { setMenu("home") }} className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>EverGreen Nursery</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="Dropdown" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("home") }}><Link to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("plants") }}><Link to='/plants'>Plants</Link>{menu === "plants" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("pots") }}><Link to='/pots'>Pots and Planters</Link>{menu === "pots" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("tools") }}><Link to='/tools'>Tools</Link>{menu === "tools" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("gifts") }}><Link to='/gifts'>Gifting</Link>{menu === "gifts" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button onClick={handleLogout}>Logout</button>
        <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
        <div className="nav-cart-count">
          {loading ? '...' : totalCartItems}
        </div>
      </div>
    </div>
  );
};

export default Navbar;



// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../Assets/logo.jpg';
// import cart_icon from '../Assets/cart_icon.png';
// import nav_dropdown from '../Assets/nav_dropdown.png';
// import { logout } from '../../redux/actions/authActions'; // Import logout action


// const Navbar = ({ className, setMenu, menu, dropdown_toggle, menuRef, handleLogout, loading, totalCartItems, logo, nav_dropdown, cart_icon }) => {
//   return (
//     <div className={`navbar ${className}`}>
//       <Link to='/' onClick={() => { setMenu("home") }} className="nav-logo">
//         <img src={logo} alt="Logo" />
//         <p>EverGreen Nursery</p>
//       </Link>
//       <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="Dropdown" />
//       <ul ref={menuRef} className="nav-menu">
//         <li onClick={() => { setMenu("home") }}><Link to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("plants") }}><Link to='/plants'>Plants</Link>{menu === "plants" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("pots") }}><Link to='/pots'>Pots and Planters</Link>{menu === "pots" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("tools") }}><Link to='/tools'>Tools</Link>{menu === "tools" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("gifts") }}><Link to='/gifts'>Gifting</Link>{menu === "gifts" ? <hr /> : <></>}</li>
//       </ul>
//       <div className="nav-login-cart">
//         <button onClick={handleLogout}>Logout</button>
//         <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
//         <div className="nav-cart-count">
//           {loading ? '...' : totalCartItems}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
