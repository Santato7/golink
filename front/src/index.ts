const form = document.getElementById("urlForm") as HTMLFormElement;

form.addEventListener("submit", (event) => {
  event.preventDefault;
  const { value } = form.url;

  shortenUrl(value);
});

async function shortenUrl(_url: string) {
  fetch("/api/shortenUrl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: "aaaaaaaa" }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na solicitação: " + response.status);
      }
      return response.json(); // Converte a resposta em JSON
    })
    .then((data) => {
      // Manipule os dados JSON aqui
      console.log(data);
    })
    .catch((error) => {
      // Manipule erros aqui
      console.error("Erro na solicitação Fetch:", error);
    });
}
