const fs = require("fs");


// 1. Ändere den Textinhalt der Datei "blog1.txt"

fs.writeFileSync("blog1.txt", "Ich bin ein Webdeveloper");

// 2. Erstelle eine neue Datei "blog2.txt"

fs.writeFileSync("blog2.txt", "Ich bin ein beliebiger Text");

// 3. Überprüfe, ob der Ordner "assets" bereits existiert. Falls ja, lösche diesen.

/* if (fs.existsSync("assets")) {
    fs.rmdirSync("assets", { recursive: true });
    
} */ /// diese methode wird bald aus node.js geklöscht

/* fs.rm("/assets", { recursive: true, force: true })
 */
if (fs.existsSync("delete.txt")) {
    fs.unlinkSync("delete.txt")
}


// 4. Erstelle einen neuen Ordner "assets"

fs.mkdirSync("assets");

// 5. Überprüfe, ob die Datei "delete.txt" bereits existiert. Falls ja, lösche diese.

if (fs.existsSync("delete.txt")) {
    fs.unlinkSync("delete.txt")
}

// 6. Erstelle eine Datei namens „delete.txt“

fs.writeFileSync('delete.txt', 'Inhalt für delete.txt');



// 7. Erstelle eine Datei namens "Hello.txt" und benenne sie in "HelloWorld.txt" um.

fs.writeFileSync('Hello.txt', 'Beliebiger Text für Hello.txt');
fs.renameSync('Hello.txt', 'HelloWorld.txt');

