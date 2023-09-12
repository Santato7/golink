const form = document.getElementById("urlForm") as HTMLFormElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { value } = form.url;

  shortenUrl(value);
});

async function shortenUrl(_url: string) {
  fetch("/api/shortenUrl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: _url }),
  })
    .then((response) => {
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
