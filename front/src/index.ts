const urlForm = document.getElementById("urlForm") as HTMLFormElement;

urlForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let userUrl = verifyUrl(urlForm.userUrl.value);
  shortenUrl(userUrl);
});

const redirect = (url:string, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);

async function shortenUrl(_userUrl: string) {
  fetch("/api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userUrl: _userUrl }),
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error("Erro na solicitação: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      redirect(data);
    })
    .catch((error) => {
      console.error("Erro na solicitação Fetch:", error);
    });
}

const verifyUrl = (_url: string) => {
  if (!/^(https?:\/\/)/i.test(_url)) {
    _url = `https://${_url}`;
  }
  return _url;
};
