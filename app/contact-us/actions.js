"use server";

import fs from "fs";
import path from "path";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData) {
  try {
    const {
      fullName,
      email,
      phone,
      company,
      people,
      dateFormatted,
      time,
      departureCity,
      arrivalCity,
      hasReturn,
      returnDateFormatted,
      returnTime,
      notes,
    } = formData;

    const logoBuffer = fs.readFileSync(
      path.join(
        process.cwd(),
        "app",
        "assets",
        "nextway_logo_transparent_4k.png",
      ),
    );
    const logoBase64 = logoBuffer.toString("base64");

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #b12bff; padding: 20px; text-align: center;">
          <img src="data:image/png;base64,${logoBase64}" alt="Next Way Transport Logo" style="max-width: 200px; max-height: 80px; margin-bottom: 15px;" />
          <h1 style="color: #ffffff; margin: 0;">Nouvelle demande de réservation</h1>
        </div>
        
        <div style="padding: 20px;">
          <h2 style="color: #b12bff; border-bottom: 2px solid #b12bff; padding-bottom: 5px;">Coordonnées</h2>
          <p><strong>Nom et Prénom :</strong> ${fullName}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ""}

          <h2 style="color: #b12bff; border-bottom: 2px solid #b12bff; padding-bottom: 5px; margin-top: 30px;">Détails du Trajet</h2>
          <p><strong>Nombre de personnes :</strong> ${people}</p>
          <p><strong>Date de départ :</strong> ${dateFormatted}</p>
          <p><strong>Heure de départ :</strong> ${time}</p>
          <p><strong>Ville de départ :</strong> ${departureCity}</p>
          <p><strong>Ville d'arrivée :</strong> ${arrivalCity}</p>

          <h2 style="color: #b12bff; border-bottom: 2px solid #b12bff; padding-bottom: 5px; margin-top: 30px;">Trajet Retour</h2>
          <p><strong>Avez-vous une date de retour prévue ?</strong> ${hasReturn || "Non"}</p>
          ${
            hasReturn === "Oui"
              ? `
              <p><strong>Date de retour :</strong> ${returnDateFormatted}</p>
              <p><strong>Heure de retour :</strong> ${returnTime}</p>
              `
              : ""
          }

          <h2 style="color: #b12bff; border-bottom: 2px solid #b12bff; padding-bottom: 5px; margin-top: 30px;">Indications supplémentaires</h2>
          <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #b12bff; border-radius: 4px;">
            ${notes ? notes.replace(/\n/g, "<br>") : "Aucune indication supplémentaire."}
          </p>
        </div>
        
        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #777;">
          <p style="margin: 0;">Cet email a été envoyé depuis le formulaire de contact du site Next Way Transport.</p>
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: "Réservations Next Way Transport <contact@nextway-transport.com>",
      to: ["contact@nextway-transport.com"],
      subject: `[Réservation] Nouvelle demande de ${fullName} - ${departureCity} ➞ ${arrivalCity}`,
      html: htmlContent,
      replyTo: email,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}
