// backend/server.js

const express = require('express');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // Pour charger les variables de .env

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Autorise les requêtes cross-origin (de React vers Node)
app.use(express.json()); // Pour parser le JSON des requêtes

// Configuration de la connexion à la base de données
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}).promise();

// Configuration de Nodemailer pour envoyer des emails via Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// --- Notre route API pour le formulaire de contact ---
app.post('/api/contact', async (req, res) => {
  const { nom, email, message } = req.body;

  // Validation simple
  if (!nom || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    // 1. Sauvegarder le message dans la base de données
    const query = 'INSERT INTO messages (nom, email, message) VALUES (?, ?, ?)';
    await db.query(query, [nom, email, message]);
    console.log('Message sauvegardé dans la BDD.');

    // 2. Envoyer l'email de notification
    const mailOptions = {
      from: `"NASA Explorer Site" <${process.env.EMAIL_USER}>`,
      to: 'majdifadhloun6@gmail.com',
      cc: 'azerfarhat6@gmail.com',
      subject: 'Nouveau message depuis le site NASA Explorer',
      html: `
        <h1>Nouveau message de contact</h1>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email de notification envoyé.');

    // 3. Envoyer une réponse de succès au frontend
    res.status(201).json({ success: 'Message reçu et sauvegardé avec succès !' });

  } catch (error) {
    console.error('Erreur serveur:', error);
    res.status(500).json({ error: 'Une erreur est survenue sur le serveur.' });
  }
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});