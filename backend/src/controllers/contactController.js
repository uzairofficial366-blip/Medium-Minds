import { getSql } from "../config/db.js";

export async function createContact(req, res, next) {
  try {
    const { name, email, phone = null, subject = null, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ status: "error", message: "Name, email, and message are required." });
    }

    const sql = getSql();
    await sql`
      INSERT INTO contacts (name, email, phone, subject, message)
      VALUES (${name}, ${email}, ${phone}, ${subject}, ${message})
    `;

    return res.status(201).json({ status: "success", message: "Message sent successfully!" });
  } catch (error) {
    return next(error);
  }
}
