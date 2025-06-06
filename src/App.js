// src/App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* —————————————— Sidebar Navigation —————————————— */}
      <nav className="sidebar">
        <ul className="nav-list">
          <li>
            <a href="#introduction" className="nav-link">
              Introduction
            </a>
          </li>
          <li>
            <a href="#vr-tour" className="nav-link">
              VR Tour
            </a>
          </li>
          <li>
            <a href="#application-1" className="nav-link">
              VR Application 1
            </a>
          </li>
          <li>
            <a href="#application-2" className="nav-link">
              Application 2
            </a>
          </li>
          <li>
            <a href="#endnotes" className="nav-link">
              Endnote
            </a>
          </li>
        </ul>
      </nav>

      {/* —————————————— Main Content —————————————— */}
      <main className="main-container">
        <header className="header">
          <p className="newsletter-title">Fanshawe Collaborator</p>
          <h1 className="title">
            Bridging Innovation & Care: LHSC Explores VR to Elevate
            Interprofessional Collaboration
          </h1>
          <p className="subtitle">By: Kriti Nakarmi, Van Nguyen, Zainab Zainab</p>
          <p className="subtitle-service">
            Service Provider: Victoria Hospital (London Health Sciences Centre) | June 06 2025
          </p>
        </header>

        {/* ————————— Introduction ————————— */}
        <section id="introduction" className="section">
          <h2>Introduction</h2>
          <p>
Virtual Reality (VR) is rapidly transforming healthcare education and patient care. During our visit on May 30 2026 at 1 : 30 p.m. to the Diane Blake Center of Excellence for VR at Fanshawe College, we interviewed VR technologist Bhavesh Savaliya, who shared valuable insights into how immersive technology can revolutionize training and service delivery at LHSC. In this article, we’ll introduce VR’s core benefits, highlight the VR tour experience, and outline key applications that LHSC can adopt in both acute-care and long-term-care settings.
          </p>
        </section>

        {/* ————————— VR Tour (Body 1) ————————— */}
        <section id="vr-tour" className="section">
          <h2>VR Tour &amp; Expert Insight</h2>
          <p>
            Our first stop was a fully immersive emergency response simulation.
            Picture a virtual trauma room where a patient arrives in critical
            condition—our interprofessional team (nurses, physicians,
            respiratory therapists) must coordinate seamlessly. VR lets teams
            practice high‐pressure scenarios without risk to real patients. It
            replicates the stress of a real code blue, training clinicians to
            improve role clarity, communication, and reaction time.
          </p>

          {/* Team photos grid */}
          <div className="photo-grid">
            <div>
              <img
                src="/images/team1.jpeg"
                alt="Team member experiencing VR"
                className="grid-image"
              />
            </div>
            <div>
              <img
                src="/images/team2.jpeg"
                alt="Team member in VR lab"
                className="grid-image"
              />
            </div>
            <div>
              <img
                src="/images/team3.jpeg"
                alt="Team member with VR headset"
                className="grid-image"
              />
            </div>
          </div>

          <h3>VR Expert Insight</h3>
          <p>
            We interviewed a VR technologist to understand how HSY2’s
            interprofessional principles integrate with the VR platform.
            According to them, “VR interjects by enabling real‐time role‐based
            feedback—mixing clinical scenarios with data analytics so teams can
            see where bottlenecks occur during high‐pressure events.”
          </p>

          <h3>Pros &amp; Cons</h3>
          <ul>
            <li>
              <strong>Pros:</strong> Low‐risk environment, repeatable scenarios,
              data‐driven performance metrics.
            </li>
            <li>
              <strong>Cons:</strong> Initial hardware costs, required training
              to operate, potential motion sickness for some users.
            </li>
          </ul>

          {/* Embedded video */}
          <div className="video-container">
            <h4>Watch Our VR Interview</h4>
            <video
              src="/videos/vr-interview.mp4"
              controls
              className="responsive-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* ————————— Evidence of Interview ————————— */}
          <div className="evidence-section">
            <h3>Evidence of Interview</h3>
            <div className="image-container">
              <img
                src="/images/vr-discuss.jpeg"
                alt="Discussion with VR technologist"
                className="responsive-image image-small"
              />
              <p className="caption">
                Our team discussing applications with a VR Technologist at the
                Diane Blake Center of Excellence.
              </p>
            </div>
          </div>
        </section>

        {/* ————————— VR Application 1 (Body 2) ————————— */}
        <section id="application-1" className="section">
          <h2>VR Application 1 – Emergency Response Simulation</h2>
          <p>
            <strong>Application:</strong> VR‐Based Interprofessional Emergency
            Response Simulation. This application allows nurses, physicians, and
            allied health staff to rehearse critical scenarios (e.g., cardiac
            arrest, trauma resuscitation) using VR headsets. By simulating a
            real trauma bay, learners practice communication and role clarity
            under time constraints.
          </p>
          <p>
            <strong>HSY2 Integration:</strong> HSY2 emphasizes system‐level
            thinking. VR lets each discipline “step into” another role,
            fostering shared mental models. For instance, a nurse can see how a
            physician’s decision tree works, and vice versa, breaking down
            silos.
          </p>
          <p>
            <strong>Future Collaboration:</strong> Fanshawe College could
            co‐develop new modules tailored to Victoria Hospital’s protocols
            (e.g., code blue checklists). Over time, LHSC can collect
            performance metrics to refine policies, track outcomes, and reduce
            real‐life error rates.
          </p>
        </section>

        {/* ————————— Application 2 (Body 3) ————————— */}
        <section id="application-2" className="section">
          <h2>Application 2 – Mental Health De‐escalation Training</h2>
          <p>
            <strong>Application:</strong> VR‐Powered Mental Health De‐escalation
            Training. Frontline staff put on headsets and interact with virtual
            patients exhibiting distress or aggression. The 360° environment
            records clinician responses, facial expressions, and verbal tone.
          </p>
          <p>
            <strong>HSY2 Integration:</strong> This aligns with HSY2’s
            patient‐centered approach, focusing on trauma‐informed care. VR
            scenarios can be customized to reflect local LHSC patient
            demographics (e.g., language barriers, substance use).
          </p>
          <p>
            <strong>Impact:</strong> Staff learn to read nonverbal cues, build
            empathy, and practice safe de‐escalation tactics. Early pilot data
            suggest a 25% reduction in real‐world restraint usage when using
            VR‐trained protocols.
          </p>
        </section>

        {/* ————————— Endnotes (Footer) ————————— */}
        <section id="endnotes" className="section endnotes">
          <h2>Endnotes</h2>
          <p>
            We would like to thank the Diane Blake Center of Excellence for VR
            at Fanshawe College for hosting our tour, as well as the VR
            technologists who took time to discuss potential LHSC applications.
            For further reading on HSY2’s interprofessional competencies, please
            visit the Fanshawe Collaborator archive or contact our department at
            info@fanshawe.ca.
          </p>

        </section>
      </main>
    </div>
  );
}

export default App;