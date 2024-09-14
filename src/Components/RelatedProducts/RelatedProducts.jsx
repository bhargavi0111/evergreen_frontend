// import React, { useEffect, useState } from 'react';
// import './RelatedProducts.css';
// import axios from 'axios';
// import Item from '../Item/Item';

// const RelatedProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/allproducts');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className='relatedproducts'>
//       <h1>Related Products</h1>
//       <hr />
//       <div className="relatedproducts-item">
//         {products.map((item) => (
//           <Item
//             key={item._id}
//             id={item._id}
//             name={item.name}
//             image={item.image}
//             new_price={item.new_price}
//             old_price={item.old_price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RelatedProducts;

import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';
import axios from 'axios';
import Item from '../Item/Item';

const RelatedProducts = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/allproducts');
        const allProducts = response.data;

        // Randomly select 5 products
        const getRandomProducts = (products, num) => {
          const shuffled = products.sort(() => 0.5 - Math.random());
          return shuffled.slice(0, num);
        };

        setProducts(allProducts);
        setDisplayProducts(getRandomProducts(allProducts, 4));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {displayProducts.map((item) => (
          <Item
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
