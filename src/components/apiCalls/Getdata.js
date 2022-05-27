import React, { useContext, useEffect } from "react";
import { InputText } from "../context/InputText";

export const Getdata = () => {
  const { text, getdata, page } = useContext(InputText);

  useEffect(() => {
    getdata();
  }, [text, page]);
  return <></>;
};
