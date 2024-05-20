"use client"
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import { CountUp } from "use-count-up";

export default function ExperienceCard() {
  const [t, i18n] = useTranslation("global");

  const getExp = () => {
    let years = moment().diff(moment([2021, 10, 23]), "years");
    return years;
  };

  return (
    <div className="col-start-1 col-end-3 xl:col-start-7 xl:col-end-9 text-primary-200 rounded-3xl flex relative overflow-hidden aspect-square  shadow-container bg-primary p-4 justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <p className="text-4xl md:text-8xl font-bold">
            +<CountUp isCounting end={getExp()} duration={3} />
          </p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            {/* {t("exp")} */}
            AÑOS DE EXPERIENCIA
          </p>
        </div>
      </div>
    </div>
  );
}
