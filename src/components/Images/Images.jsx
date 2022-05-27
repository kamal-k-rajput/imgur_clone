
import React, { useContext } from "react";
import { InputText } from "../context/InputText";
import "./Images.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const Images = () => {
  const { data, handlePage } = useContext(InputText);

  return (
    <>
      <div className="image-container">
        {data.map((el) => {
          return (
            <section key={el.id} className="one-img-container">
              <img src={el.urls.small} alt={el.alt_description} />
              <div className="likes-container">
                <span>Likes:</span>
                <span>{el.likes}</span>
                <FavoriteIcon />
                <ThumbUpIcon />
              </div>
              
            </section>
          );
        })}
      </div>
      <div className="btn-container">
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
      </div>
    </>
  );
};
