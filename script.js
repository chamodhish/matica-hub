let panier = [];

function ajouterPanier(produit) {
    panier.push(produit);

    document.getElementById("panier-count").textContent = panier.length;

    afficherPanier();
}

function afficherPanier() {
    const list = document.getElementById("panier-list");
    list.innerHTML = "";

    panier.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}
