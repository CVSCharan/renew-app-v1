import React from "react";
import mainPageStyles from "./MainPage.module.css";
import Image from "next/image";

const MainPage = () => {
  return (
    <div className={mainPageStyles.mainPage}>
      <div className={mainPageStyles.firstDiv}>
        <h2 className={mainPageStyles.firstDivHeading}>
          EXPERIENCE RENEW TODAY
        </h2>
      </div>
      <div className={mainPageStyles.secondDiv}>
        <div className={mainPageStyles.secondDivContentOne}>
          <div className={mainPageStyles.secondDivContentOneSubDivOne}>
            <h2 className={mainPageStyles.secondDivFirstHeading}>
              The world’s first and only natural proprietary, patent-pending
              formula, that when combined with coffee, can increase both the
              speed and efficiency of metabolism.
            </h2>
            <h2 className={mainPageStyles.secondDivSecondHeading}>
              While instantly boosting your health, energy and well-being at the
              same time.
            </h2>
          </div>
          <div className={mainPageStyles.secondDivContentOneSubDivTwo}>
            <div
              className={mainPageStyles.secondDivContentOneSubDivTwoContentOne}
            >
              <Image
                src="/Renew-buyback-image.webp"
                alt="Renew-buyback-image"
                height={600}
                width={600}
                className={mainPageStyles.imgMoneyBack}
              />
            </div>
            <div
              className={mainPageStyles.secondDivContentOneSubDivTwoContentTwo}
            >
              <h2 className={mainPageStyles.secondDivThirdHeading}>
                This product is backed by a 100% money back guarantee for 60
                full days from your original purchase. If you are not totally
                and completely satisfied with this product, your results or your
                experience in the first 60 days from your purchase simply let us
                know by calling our toll free number or dropping us an email and
                we will give you a full refund within 48 hours of the product
                being returned.
              </h2>
              <h2 className={mainPageStyles.secondDivThirdHeading}>
                That is right, simply return the product, even empty bottles,
                anytime within 60 days of your purchase and you will receive a
                full, no questions asked refund (less shipping and handling).
              </h2>
            </div>
          </div>
        </div>
        <div className={mainPageStyles.secondDivContentTwo}>
          <Image
            src="/Renew img 01.webp"
            alt="Renew img 01"
            height={1000}
            width={1000}
            className={mainPageStyles.imgTwo}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
