import React from "react";
import {
  FaPlane,
  FaMoneyCheckAlt,
  FaGift,
  FaHeadphonesAlt,
} from "react-icons/fa";

const PromoBox = () => {
  return (
    <div
      className="max-w-screen-xl mx-auto bg-warning shadow-xl rounded-lg grid lg:grid-cols-4 md:grid-cols-2 gap-5"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
    >
      <div className=" flex items-center p-5">
        <div>
          <FaPlane className="text-5xl text-secondary mr-3"></FaPlane>
        </div>
        <div>
          <h2 className="text-secondary text-xl">FREE SHIPPING WORLDWIDE</h2>
          <p className="text-secondary">On Order $1000</p>
        </div>
      </div>
      <div className=" flex items-center p-5 ">
        <div>
          <FaMoneyCheckAlt className="text-5xl text-secondary mr-3"></FaMoneyCheckAlt>
        </div>
        <div>
          <h2 className="text-secondary text-xl">CASH ON DELIVERY</h2>
          <p className="text-secondary">100% money back guarantee</p>
        </div>
      </div>
      <div className=" flex items-center p-5 ">
        <div>
          <FaGift className="text-5xl text-secondary mr-3"></FaGift>
        </div>
        <div>
          <h2 className="text-secondary text-xl">SPECIAL GIFT CARD</h2>
          <p className="text-secondary">Offer special bonuses with gift</p>
        </div>
      </div>
      <div className=" flex items-center p-5 ">
        <div>
          <FaHeadphonesAlt className="text-5xl text-secondary mr-3"></FaHeadphonesAlt>
        </div>
        <div>
          <h2 className="text-secondary text-xl">24/7 CUSTOMER SERVICE</h2>
          <p className="text-secondary">Call us 24/7 at 123-456-789</p>
        </div>
      </div>
    </div>
  );
};

export default PromoBox;
