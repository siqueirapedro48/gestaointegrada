
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("Usuário logado:", user.email);
        db.collection("usuarios").doc(user.uid).get().then(doc => {
            if (doc.exists) {
                const tipo = doc.data().tipo;
                if (tipo === "superadmin") {
                    window.location.href = "superadmin.html";
                } else if (tipo === "master") {
                    window.location.href = "master.html";
                } else {
                    window.location.href = "padrao.html";
                }
            }
        });
    } else {
        db.collection("usuarios").get().then(snapshot => {
            if (snapshot.empty) {
                document.getElementById("register-container").style.display = "block";
                document.getElementById("login-container").style.display = "none";
            }
        });
    }
});

function registerSuperAdmin() {
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection("usuarios").doc(cred.user.uid).set({
            tipo: "superadmin",
            email: email
        });
    }).then(() => {
        alert("Superusuário criado!");
        location.reload();
    }).catch(err => alert(err.message));
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password).catch(err => alert(err.message));
}
