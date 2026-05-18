import { getSql } from "../config/db.js";

export async function createCareerApplication(req, res, next) {
  try {
    const { full_name, email, phone, role, portfolio_url = null, message = null } = req.body;

    if (!full_name || !email || !phone || !role) {
      return res.status(400).json({
        status: "error",
        message: "Full name, email, phone, and role are required.",
      });
    }

    const sql = getSql();
    await sql`
      INSERT INTO career_applications (full_name, email, phone, role, portfolio_url, message)
      VALUES (${full_name}, ${email}, ${phone}, ${role}, ${portfolio_url}, ${message})
    `;

    return res.status(201).json({ status: "success", message: "Application submitted successfully!" });
  } catch (error) {
    return next(error);
  }
}
