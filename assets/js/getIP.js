async function getIP(e) {
    e.preventDefault();

    const response = await fetch("https://api.ipify.org?format=json").then((response) => response.json()).then((data) => {
        document.getElementById('myIP').value = data.ip
    }).catch((error) => {
        document.getElementById('myIP').value = "Erro ao buscar IP"
    });
}