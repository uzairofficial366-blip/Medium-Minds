import Groq from "groq-sdk";
import { projectContext } from "../data/projectContext.js";

const SYSTEM_PROMPT =
  "You are the official AI assistant for MediumMinds. You answer only using the provided MediumMinds knowledge base context. You help visitors understand MediumMinds, its divisions, services, projects, team, careers, contact information, and website navigation. If the answer is not present in the context, say that the information is not available yet and suggest contacting MediumMinds. Do not invent details. Do not answer unrelated questions. Keep replies concise, professional, friendly, and useful.";

let groqClient;

const relatedKeywords = [
  "mediumminds",
  "medium minds",
  "team",
  "member",
  "founder",
  "director",
  "leadership",
  "division",
  "service",
  "studio",
  "solutions",
  "technologies",
  "creative lab",
  "training",
  "career",
  "job",
  "opening",
  "apply",
  "project",
  "work",
  "portfolio",
  "contact",
  "email",
  "phone",
  "linkedin",
  "instagram",
  "website",
  "navigation",
  "about",
];

function getGroqClient() {
  if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === "your_groq_api_key_here") {
    throw new Error("Groq API key is not configured.");
  }

  if (!groqClient) {
    groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }

  return groqClient;
}

function isMediumMindsQuestion(message) {
  const normalizedMessage = message.toLowerCase();
  return relatedKeywords.some((keyword) => normalizedMessage.includes(keyword));
}

function createLocalContextReply(message) {
  const normalizedMessage = message.toLowerCase();

  if (!isMediumMindsQuestion(normalizedMessage)) {
    return "I can help with MediumMinds only: divisions, services, projects, careers, contact details, team, and website navigation. What would you like to know about MediumMinds?";
  }

  if (normalizedMessage.includes("team") || normalizedMessage.includes("leadership") || normalizedMessage.includes("member")) {
    return "The MediumMinds team shown on the website includes Umar Farooq, Executive Director; Abdullah Orakzai, Director; Muhammad Uzair, MERN Stack Developer; and Ihtashal Ul Haq, Social Media Manager.";
  }

  if (normalizedMessage.includes("division") || normalizedMessage.includes("service")) {
    return "MediumMinds has five divisions: Studio for branding, UI/UX, video, and design; Solutions for marketing, SEO, consulting, and content; Technologies for web, mobile, AI automation, cloud, and DevOps; Creative Lab for R&D, AR/VR, prototypes, and interactive experiences; and Trainings for bootcamps, workshops, and corporate training.";
  }

  if (normalizedMessage.includes("career") || normalizedMessage.includes("job") || normalizedMessage.includes("opening") || normalizedMessage.includes("apply")) {
    return "Current openings listed on the website are MERN Stack Developer, UI/UX Designer, and Digital Marketing Specialist. You can apply from the Careers page or through the Contact section by selecting Job / Position.";
  }

  if (normalizedMessage.includes("project") || normalizedMessage.includes("work") || normalizedMessage.includes("portfolio")) {
    return "MediumMinds projects shown on the website include Collective Alliance for the Rights of Indigenous Persons with Disabilities for Web Development, Youth Awareness and Development Organization (YADO) for Digital Solutions, and Pak Development Mission (PDM) for Web and Tech Partnership.";
  }

  if (normalizedMessage.includes("contact") || normalizedMessage.includes("email") || normalizedMessage.includes("phone") || normalizedMessage.includes("linkedin") || normalizedMessage.includes("instagram")) {
    return "You can contact MediumMinds at info@mediumminds.com or +92 312 9424445. The website also links to MediumMinds on LinkedIn and Instagram, and the Contact section supports project, job, and collaboration requests.";
  }

  if (normalizedMessage.includes("navigation") || normalizedMessage.includes("website") || normalizedMessage.includes("page") || normalizedMessage.includes("link")) {
    return "Important MediumMinds website links are Home: /#home, About: /#about, Divisions: /divisions, Team: /#team, Work: /#work, Careers: /careers, and Contact: /#contact.";
  }

  return "MediumMinds is a multi-division digital company connecting ideas, technology, and creative minds. It works across software development, AI automation, digital marketing, creative production, R&D, and professional trainings.";
}

export async function generateChatReply(message, context = projectContext) {
  try {
    const client = getGroqClient();
    const model = process.env.GROQ_MODEL || "llama-3.1-8b-instant";

    const completion = await client.chat.completions.create({
      model,
      temperature: 0.3,
      max_tokens: 350,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "system", content: `MediumMinds knowledge base context:\n${context || projectContext}` },
        { role: "user", content: message },
      ],
    });

    return (
      completion.choices?.[0]?.message?.content?.trim() ||
      "I could not generate a response right now. Please contact MediumMinds for help."
    );
  } catch (error) {
    console.warn("Groq chat unavailable, using local project context reply:", error.message);
    return createLocalContextReply(message);
  }
}
