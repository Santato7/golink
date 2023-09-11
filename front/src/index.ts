import axios from "axios";

const form = document.getElementById("urlForm") as HTMLFormElement;

form.addEventListener("submit", (event) => {
  event.preventDefault;
  const { value } = form.url;

  shortenUrl(value);
  alert(value);
});

async function shortenUrl(_url: string) {
  axios
    .post("/api/shortenUrl", {
      url: _url,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
