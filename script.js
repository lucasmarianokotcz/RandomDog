function gerar() {
    let btnGerar = document.getElementById("btnGerar");
    btnGerar.innerText = "Aguarde...";
    btnGerar.disabled = true;
    let erro = document.getElementById("erro");

    axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            let dogImage = document.getElementById("dogImage");
            dogImage.src = response.data.message;
        })
        .catch(() => {
            btnGerar.innerText = "Gerar dog aleatório";
            erro.style.display = "block";
            btnGerar.disabled = false;
        });
}

function reloadButton() {
    var isLoaded = dogImage.complete && dogImage.naturalHeight !== 0;
    if (isLoaded) {
        erro.style.display = "none";
        btnGerar.innerText = "Gerar dog aleatório";
        btnGerar.disabled = false;
    }
}