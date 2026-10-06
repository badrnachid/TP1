// ================================
// Informations personnelles
// ================================

const portfolio = {
    prenom: "Badr"
};


// ================================
// Message dynamique demandé dans le TP
// ================================

const message = document.getElementById("message");

message.textContent =
    `Bonjour, je suis ${portfolio.prenom}.`;