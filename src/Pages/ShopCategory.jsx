
// import React, { useEffect ,useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './CSS/ShopCategory.css';
// import dropdown_icon from '../Components/Assets/dropdown_icon.png';
// import Item from '../Components/Item/Item';
// import { fetchProductsByCategory } from '../redux/actions/shopActions';

// const ShopCategory = (props) => {
//   const dispatch = useDispatch();
//    const [searchQuery, setSearchQuery] = useState('');

//   const { products, loading, error } = useSelector((state) => state.shop);

//   useEffect(() => {
//     dispatch(fetchProductsByCategory(props.category));
//   }, [dispatch, props.category]);

//     const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//     // Filter products based on the search query
//     const filteredProducts = products.filter(product =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   return (
//     <div className='shop-category'>
//       {/* Check if loading and error are handled */}
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       <img className='shopcategory-banner' src={props.banner} alt="" />
//       <div className="shopcategory-indexSort">
      
//      <div className="search-container">
//        <input
//           type="text"           placeholder="Search products by name..."           value={searchQuery}
//           onChange={handleSearch}
//           className="search-bar"
//         />
//       </div>
//       </div>
//       <div className="shopcategory-products">
//         {products.length > 0 ? (
//           products.map((item) => (
//             <Item
//               key={item._id}
//               id={item._id}
//               name={item.name}
//               image={`http://localhost:4000${item.image}`} // Adjust URL
//               new_price={item.new_price}
//               old_price={item.old_price}
//             />
//           ))
//         ) : (
//           <p>No products available</p>
//         )}
//       </div>
//       {/* <div className="shopcategory-loadmore">
//         Explore More
//       </div> */}
//     </div>
//   );
// };
//  export default ShopCategory;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './CSS/ShopCategory.css';
// import dropdown_icon from '../Components/Assets/dropdown_icon.png';
// import Item from '../Components/Item/Item';
// import { fetchProductsByCategory } from '../redux/actions/shopActions';

// const ShopCategory = (props) => {
//   const dispatch = useDispatch();
  
//   // Accessing the shop reducer state (ensure `state.shop` is correct)
//   const { products, loading, error } = useSelector((state) => state.shop);

//   // Fetch products by category on component mount or category change
//   useEffect(() => {
//     if (props.category) {
//       dispatch(fetchProductsByCategory(props.category));
//     }
//   }, [dispatch, props.category]);

//   return (
//     <div className='shop-category'>
//       {loading && <p>Loading...</p>} {/* Display loading state */}
//       {error && <p>Error: {error}</p>} {/* Display error state */}
      
//       <img className='shopcategory-banner' src={props.banner} alt="Category Banner" />
      
//       <div className="shopcategory-indexSort">
//         <p>
//           <span>Showing 1-12</span> out of {products.length} products
//         </p>
//         <div className="shopcategory-sort">
//           Sort by <img src={dropdown_icon} alt="Sort Icon" />
//         </div>
//       </div>

//       <div className="shopcategory-products">
//         {products.length > 0 ? (
//           products.map((item) => (
//             <Item
//               key={item._id}
//               id={item._id}
//               name={item.name}
//               image={`http://localhost:4000${item.image}`} // Ensure image URL is correct
//               new_price={item.new_price}
//               old_price={item.old_price}
//             />
//           ))
//         ) : (
//           !loading && <p>No products available</p> // Only show this if not loading
//         )}
//       </div>


//     </div>
//   );
// };

// export default ShopCategory;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { fetchProductsByCategory } from '../redux/actions/shopActions';

const ShopCategory = (props) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  // Accessing the shop reducer state (ensure `state.shop` is correct)
  const { products, loading, error } = useSelector((state) => state.shop);

  // Fetch products by category on component mount or category change
  useEffect(() => {
    if (props.category) {
      dispatch(fetchProductsByCategory(props.category));
    }
  }, [dispatch, props.category]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='shop-category'>
      {loading && <p>Loading...</p>} {/* Display loading state */}
      {error && <p>Error: {error}</p>} {/* Display error state */}

      <img className='shopcategory-banner' src={props.banner} alt="Category Banner" />

     

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>

      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Item
              key={item._id}
              id={item._id}
              name={item.name}
              image={`http://localhost:4000${item.image}`} // Ensure image URL is correct
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          !loading && <p>No products available</p> // Only show this if not loading
        )}
      </div>
    </div>
  );
};

export default ShopCategory;

