
function cadastrarMunicipio() {
    const nome = document.getElementById("municipioNome").value;
    const estado = document.getElementById("estado").value;
    db.collection("municipios").add({
        nome: nome,
        estado: estado
    }).then(() => {
        alert("Município cadastrado com sucesso!");
    }).catch(err => alert("Erro: " + err.message));
}

function logout() {
    auth.signOut();
}
