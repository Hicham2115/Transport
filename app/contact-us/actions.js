"use server";

import fs from "fs";
import path from "path";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData) {
  try {
    const { serviceType, people, fullName, contact, dateFormatted } = formData;

    const isEmail = contact.includes("@");
    const email = isEmail ? contact : "";
    const phone = !isEmail ? contact : "";

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
          <h1 style="color: #ffffff; margin: 0;">Nouvelle demande de devis</h1>
        </div>

        <div style="padding: 20px;">
          <h2 style="color: #b12bff; border-bottom: 2px solid #b12bff; padding-bottom: 5px;">Coordonnées</h2>
          <p><strong>Nom et Prénom :</strong> ${fullName}</p>
          ${email ? `<p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>` : ""}
          ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}

          <h2 style="color: #b12bff; border-bottom: 2px solid #b12bff; padding-bottom: 5px; margin-top: 30px;">Détails de la demande</h2>
          <p><strong>Type de prestation :</strong> ${serviceType}</p>
          <p><strong>Nombre de passagers :</strong> ${people}</p>
          <p><strong>Date souhaitée :</strong> ${dateFormatted || "Non précisée"}</p>
        </div>

        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #777;">
          <p style="margin: 0;">Cet email a été envoyé depuis le formulaire de devis du site Next Way Transport.</p>
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: "Réservations Next Way Transport <contact@nextway-transport.com>",
      to: ["contact@nextway-transport.com"],
      subject: `[Devis] Nouvelle demande de ${fullName} — ${serviceType}`,
      html: htmlContent,
      replyTo: email || undefined,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}
