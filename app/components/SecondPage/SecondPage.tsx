import React from "react";
import secondPageStyles from "./SeconPage.module.css";
import Image from "next/image";
import { ingredents } from "./SecondPageFun";
import ButtonComp from "../Button/Button";

const SecondPage = () => {
  return (
    <div className={secondPageStyles.secondPage}>
      <div className={secondPageStyles.firstDiv}>
        <h2 className={secondPageStyles.firstDivHeadingOne}>
          Inside every Renew capsule you will find:
        </h2>
        <h2 className={secondPageStyles.firstDivHeadingTwo}>
          5 clinically-proven super-nutrients designed to detoxify and
          regenerate your liver, and dramatically improve your overall health
          and energy.
        </h2>
      </div>
      <div className={secondPageStyles.secondDiv}>
        {ingredents.map((item) => (
          <div className={secondPageStyles.secondDivContent} key={item.id}>
            <h2 className={secondPageStyles.secondDivContentHeadingOne}>
              {item.name}
            </h2>
            <Image
              src={item.img}
              alt={item.img}
              height={200}
              width={200}
              className={secondPageStyles.imgOne}
            />
            <h2 className={secondPageStyles.secondDivContentHeadingTwo}>
              {item.message}
            </h2>
          </div>
        ))}
      </div>
      <ButtonComp />
    </div>
  );
};

export default SecondPage;
