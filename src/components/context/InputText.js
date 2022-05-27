import { createContext, useState } from "react";
const InputText = createContext();
const InputTextProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  const [text, settext] = useState("funny");
  const [page, setpage] = useState(1);
  const getdata = async () => {
    let access_key = "K962ej_SvQjkMaFXxQ4q70ty-nqlwcQ2sGQ5V-VvuA8";
    let final_url = `https://api.unsplash.com/search/photos/?query=${text}&per_page=100&page=${page}&client_id=${access_key}`;

    let res = await fetch(final_url);
    let data = await res.json();
    changedata(data.results);
  };
  const handlePage = (value) => {
    setpage((pre) => {
      let x = pre + value;
      if (x === 0) {
        setpage(1);
      } else {
        setpage(x);
      }
    });
    console.log(page);
  };
  function changedata(value) {
    setdata(value);
    console.log(data, "in context");
  }
  function changetext(value) {
    settext(value);
    getdata();
  }

  return (
    <InputText.Provider
      value={{ data, changedata, text, changetext, getdata, handlePage, page }}
    >
      {children}
    </InputText.Provider>
  );
};
export { InputTextProvider, InputText };
