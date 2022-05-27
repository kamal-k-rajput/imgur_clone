let access_key = "K962ej_SvQjkMaFXxQ4q70ty-nqlwcQ2sGQ5V-VvuA8";

let forResult = async () => {
  let final_url = `https://api.unsplash.com/search/photos/?query=${"searchTerm"}&per_page=40&client_id=${access_key}`;

  let result = await getdata(final_url);
};
let getdata = async (final_url) => {
  let res = await fetch(final_url);

  let data = await res.json();
  return data;
};
