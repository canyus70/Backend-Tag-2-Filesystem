const fs = require("fs");

const ordnerBeispiel = "./Unterordner";

if (!fs.existsSync(ordnerBeispiel)) {
    fs.mkdirSync(ordnerBeispiel);
    console.log("Unterordner erstellt");
} else {
    console.log("Der Unterordner existiert bereits")
}

function dateiInOrdnerErstellenbzwHinzufügen(parameter) {
    const txtPath = "./Unterordner/data.txt"
    if (!fs.existsSync(txtPath)) {
        fs.writeFileSync(txtPath, parameter + "\n")
        console.log(`Neue Txt Datei erstellt mit den Inhalt: ${parameter} `);
    } else {
        fs.appendFileSync(txtPath, parameter + "\n")
        console.log(`${parameter} wurde in eine neue Zeile hinzugefügt`);
    }
}

dateiInOrdnerErstellenbzwHinzufügen("Schrub du Ausländer");