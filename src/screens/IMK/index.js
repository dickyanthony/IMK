import React, { useState } from "react";
import "./products.css";
import ProductCardbox from "../../components/ProductCardBox";

function IMK() {
  const [productCardBox, setProductCardBox] = useState([
    {
      image: require("../../assets/product-img1.png"),
      title: "Hoodie Pink New York City",
      cost: "$33.00",
    },
    {
      image: require("../../assets/product-img2.png"),
      title: "White Maxi Dress Flower",
      cost: "$66.00",
    },
    {
      image: require("../../assets/product-img3.png"),
      title: " Elegant White Maxi Dress",
      cost: "$69.00",
    },
    {
      image: require("../../assets/product-img4.png"),
      title: "White Casual Shirt",
      cost: "20.00",
    },
    {
      image: require("../../assets/product-img5.jpg"),
      title: "Black Jacket sigma style",
      cost: "$66.00",
    },

    {
      image: require("../../assets/product-img4.jpg"),
      title: "White shirt",
      cost: "$60.00",
    },

    {
      image: require("../../assets/product-img6.jpg"),
      title: "Young Brown Coat",
      cost: "$72.00",
    },

    {
      image: require("../../assets/product-img7.jpg"),
      title: "White feather Sweater ",
      cost: "$70.00",
    },
  ]);

  const [headerProduct, setHeaderProduct] = useState([
    { name: "all product" },
    { name: "t-shirt" },
    { name: "dress" },
    { name: "hoodie" },
    { name: "coat" },
    { name: "jacket" },
  ]);

  const [miniBox, setMiniBox] = useState([
    {
      name: "bohemian style",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam",
      image: require("../../assets/bohemian.jpg"),
    },
    {
      name: "street style",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam",
      image: require("../../assets/street.jpg"),
    },
    {
      name: "casual style",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam",
      image: require("../../assets/casual.jpg"),
    },
  ]);
  return (
    <>
      <div className="container_textprod">
        <h4>Our Product</h4>

        <div className="navprod_menu">
          {headerProduct.map((item) => {
            return <span>{item.name}</span>;
          })}
        </div>
      </div>

      <div className="container_menuprod">
        {productCardBox.map((item) => {
          return (
            <ProductCardbox
              image={item.image}
              title={item.title}
              cost={item.cost}
            ></ProductCardbox>
          );
        })}

        <div className="suggestion_container">
          <div className="minibox_wrap">
            <div className="heading">
              <span>you may also like</span>
            </div>

            {miniBox.map((item) => {
              return (
                <div className="minibox">
                  <img src={item.image} />
                  <div className="textsuggest_wrap">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bigbox">
            <img src={require("../../assets/coat.jpg")} />
          </div>
        </div>
      </div>
    </>
  );
}

export default IMK;
