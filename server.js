const express = require('express');
const app = express();
const PORT = 3000;

// Route principale demandée dans le projet du groupe
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Projet DevOps</title></head>
            <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
                <h1 style="color: #2c3e50;">Projet DevOps - Rapport Complet</h1>
                <p style="font-size: 18px;">Application d'authentification de groupe déployée avec succès !</p>
                <div style="margin-top: 30px; padding: 10px; background-color: #ecf0f1; display: inline-block; border-radius: 5px;">
                    <strong>Étudiants :</strong> Alamin & Membres du groupe
                </div>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Application démarrée sur http://localhost:${PORT}`);
});
