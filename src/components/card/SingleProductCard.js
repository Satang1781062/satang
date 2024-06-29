import React from "react";

import { Card, Tabs } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector, useDispatch } from "react-redux";

//function
import { addToWishlist } from "../function/users";

import { toast } from "react-toastify";

// loadash
import _ from "lodash";
const { Meta } = Card;
const { TabPane } = Tabs;

const SingleProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const { _id, title, description, images, price, sold, quantity, category } =
    product;
  console.log(product);

  const handleAddToCart = () => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...product,
      count: 1,
    });

    let unique = _.uniqWith(cart, _.isEqual);
    localStorage.setItem("cart", JSON.stringify(unique));
    dispatch({
      type: "ADD_TO_CART",
      payload: unique,
    });
    dispatch({
      type: "SET_VISIBLE",
      payload: true,
    });
  };

  const handleAddToWishList = (e) => {
    if (user) {
      addToWishlist(user.token, _id)
        .then((res) => {
          console.log(res.data);
          toast.success(" เพิ่มลงในรายการที่ชื่นชอบ เรียบร้อย ");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("!! กรุณาลงชื่อเข้าใช้ !!");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-md-4">
            <Carousel autoPlay showArrows={true} infiniteLoop>
              {images &&
                images.map((item) => (
                  <img src={item.url} key={item.public_id} />
                ))}
            </Carousel>
            <Tabs>
              <TabPane tab="Description" key="1">
                {description}
              </TabPane>
              <TabPane tab="More..." key="2">
                More...
              </TabPane>
            </Tabs>
          </div>

          <div className="col-md-4">
            <h2 className="bg-info p-2 mt-0">{title}</h2>
            <Card
              actions={[
                <a onClick={handleAddToWishList}>
                  <HeartOutlined className="text-info" />
                  <br />
                  Add to wishlist
                </a>,
                <a onClick={handleAddToCart}>
                  <ShoppingCartOutlined className="text-danger" />
                  <br />
                  Add to cart
                </a>,
              ]}
            >
              <ul className="list-group list-group-flush mt-1">
                <li className="list-group-item">
                  Price
                  <span className="float-end">{price}</span>
                </li>
                <li className="list-group-item">
                  Quantity
                  <span className="float-end">{quantity}</span>
                </li>
                <li className="list-group-item">
                  Sold
                  <span className="float-end">{sold}</span>
                </li>
                {category && (
                  <li className="list-group-item">
                    Category
                    <span className="float-end">{category.name}</span>
                  </li>
                )}
              </ul>
              {/* <Meta title={title} description={description} /> */}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductCard;
