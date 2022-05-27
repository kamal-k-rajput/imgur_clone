// import React, { useState, useEffect } from "react";
import React, { useContext } from "react";
import { InputText } from "../context/InputText";

export const Images = () => {
  const { data, handlePage } = useContext(InputText);

  return (
    <>
      {data.map((el) => {
        return <img src={el.urls.small} alt={el.alt_description} key={el.id} />;
      })}
      <button
        onClick={() => {
          handlePage(-1);
        }}
      >
        PRE
      </button>
      <button
        onClick={() => {
          handlePage(1);
        }}
      >
        NEXT
      </button>
    </>
  );
};
