const urlForm = document.getElementById("urlForm") as HTMLFormElement;

urlForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userUrl = verifyUrl(urlForm.url.value);
  shortenUrl(userUrl);
});

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
      // Não analise a resposta como JSON aqui
      // return response.json();
    })
    .then(() => {
      // Manipule o sucesso aqui, pois a resposta não é um JSON
      console.log("Solicitação bem-sucedida");
    })
    .catch((error) => {
      // Manipule erros aqui
      console.error("Erro na solicitação Fetch:", error);
    });
}

const verifyUrl = (_url: string) => {
  if (!/^(https?:\/\/)/i.test(_url)) {
    _url = `https://${_url}`;
  }

  return _url;
};
