const form = document.getElementById("urlForm") as HTMLFormElement;

form.addEventListener("submit", (event) => {
  event.preventDefault;
  const { value } = form.url;

  shortenUrl(value);
});

async function shortenUrl(_url: string) {
  const data = {
    url: _url,
  };

  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  // Faz a solicitação Fetch
  fetch("/api/shortenUrl", requestOptions)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error("Erro na solicitação: " + response.status);
      }
      return response.json(); // Converte a resposta em JSON
    })
    .then((data: any) => {
      // Manipule os dados JSON aqui
      console.log(data);
    })
    .catch((error: Error) => {
      // Manipule erros aqui
      console.error("Erro na solicitação Fetch:", error);
    });
}
