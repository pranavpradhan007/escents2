import React from "react";
import Item from "./Item";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container my-3">
        <h2 style={{ position: "relative", top: "60px", height: 100 }}>
          <strong>Products</strong>
        </h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4">
              <Item
                title={product.productName}
                description="Rs. 348.00"
                imageurl= {product.productImage1}
                id = {product._id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import Item from "./Item";

// export class Products extends Component {
//   render() {
//     return (
//       <>
//         <div className="container my-3">
//           <h2 style={{ position: "relative", top: "60px", height: 100 }}>
//             <strong>Products</strong>
//           </h2>
//           <div className="row">
//             <div className="col-md-4">
//               <Item
//                 title="Crest"
//                 description="Rs. 348.00"
//                 imageurl="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/cre.png?v=1682569159&width=990"
//               />
//             </div>
//             <div className="col-md-4">
//               <Item
//                 title="Eclipse"
//                 description="Rs. 348.00"
//                 imageurl="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/ecl.png?v=1682568995&width=990"
//               />
//             </div>
//             <div className="col-md-4">
//               <Item
//                 title="Enchanted"
//                 description="Rs. 348.00"
//                 imageurl="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/ench.png?v=1682569782&width=990"
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-4">
//               <Item
//                 title="Mirage"
//                 description="Rs. 348.00"
//                 imageurl="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/mir.png?v=1682570479&width=990"
//               />
//             </div>
//             <div className="col-md-4">
//               <Item
//                 title="Prelude"
//                 description="Rs. 348.00"
//                 imageurl="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/pre.png?v=1682570377&width=990"
//               />
//             </div>
//             <div className="col-md-4">
//               <Item
//                 title="Serenade"
//                 description="Rs. 348.00"
//                 imageurl="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/ser.png?v=1682570357&width=990"
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-4">
//               <Item
//                 title="Vigor"
//                 description="Rs. 348.00"
//                 imageurl="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/vig.png?v=1682570290&width=990"
//               />
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             textAlign: "justify",
//             marginBottom: 0,
//             paddingBottom: 0,
//             height: 55,
//           }}
//         >
//           <p
//             className="my-3"
//             style={{
//               opacity: 0.8,
//               fontSize: 12,
//               marginBottom: 0,
//               paddingBottom: 0,
//             }}
//           >
//             © 2023, escents.in |
//             <ul
//               className="list-inline my-3"
//               style={{ display: "inline-block", paddingLeft: 10 }}
//             >
//               <li style={{ display: "inline-block", marginRight: "10px" }}>
//                 Contact information
//               </li>
//               <li style={{ display: "inline-block", marginRight: "10px" }}>
//                 Email: shop@escents.in
//               </li>
//               <li style={{ display: "inline-block", marginRight: "675px" }}>
//                 WhatsApp number: +91 9307189847
//               </li>
//               <li style={{ display: "inline-block", marginRight: "10px" }}>
//                 <a href="https://www.instagram.com/escents.in">
//                   <img
//                     src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
//                     alt="Instagram logo"
//                     width="17.5"
//                     height="17.5"
//                   />
//                 </a>
//               </li>
//             </ul>
//           </p>
//         </div>
//       </>
//     );
//   }
// }

// export default Products;
