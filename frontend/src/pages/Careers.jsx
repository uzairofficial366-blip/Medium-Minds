import { useState } from "react";
import CareerForm from "../components/CareerForm";

const jobs = [
  {
    title: "MERN Stack Developer",
    type: "Full-Time",
    mode: "Remote / Hybrid",
    description:
      "We are looking for an experienced Full-Stack Developer proficient in MongoDB, Express.js, React, and Node.js to build dynamic, high-performance web applications.",
    skills: "React, Node.js, MongoDB, Express",
    experience: "2+ Years",
    location: "Peshawar / Remote",
  },
  {
    title: "UI/UX Designer",
    type: "Full-Time",
    mode: "On-Site",
    description:
      "Join our Studio division to create intuitive, engaging user interfaces and stunning visual experiences across web and mobile platforms.",
    skills: "Figma, Adobe XD, Prototyping",
    experience: "1-3 Years",
    location: "Islamabad",
  },
  {
    title: "Digital Marketing Specialist",
    type: "Contract",
    mode: "Remote",
    description:
      "We need a data-driven marketer to handle SEO, social media ad campaigns, and brand visibility for our growing list of tech clients.",
    skills: "SEO, Meta Ads, Google Analytics",
    experience: "2+ Years",
    location: "Remote",
  },
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <>
      <section className="relative pt-32 pb-20 bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border">
        <div className="container mx-auto px-6 md:px-12 text-center reveal">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-lg text-light-muted dark:text-dark-muted max-w-3xl mx-auto">
            At MediumMinds, we are always looking for passionate, driven, and creative individuals to help us shape the
            future of digital innovation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-light-muted dark:text-dark-muted">Find the perfect role that matches your skills.</p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="job-card bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 reveal"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex gap-3 mb-2 flex-wrap">
                      <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                      <span className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-full">
                        {job.mode}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <p className="text-light-muted dark:text-dark-muted mb-4 text-sm leading-relaxed">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      <p><i className="fas fa-tools text-primary w-5" /> <strong>Skills:</strong> {job.skills}</p>
                      <p><i className="fas fa-briefcase text-primary w-5" /> <strong>Experience:</strong> {job.experience}</p>
                      <p><i className="fas fa-map-marker-alt text-primary w-5" /> <strong>Location:</strong> {job.location}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-auto">
                    <button
                      type="button"
                      onClick={() => setSelectedRole(job.title)}
                      className="btn-primary w-full md:w-auto px-8 py-3 whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedRole && <CareerForm role={selectedRole} onClose={() => setSelectedRole("")} />}
    </>
  );
}
