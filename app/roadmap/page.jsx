'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'

const steps = [
  {
    id: 1,
    icon: "🗣️",
    title: "Learn Korean",
    subtitle: "Start from Hangul",
    color: "#27ae60",
    bg: "rgba(39,174,96,0.08)",
    border: "rgba(39,174,96,0.2)",
    duration: "3-6 months",
    status: "First Step",
    desc: "Korean language is essential for studying in Korea. Start with Hangul alphabet, then build vocabulary and grammar. Aim for at least TOPIK I (Level 1-2) before applying.",
    tasks: [
      "Learn Hangul alphabet (1-2 weeks)",
      "Study basic vocabulary (800 words)",
      "Practice daily conversations",
      "Aim for TOPIK I Level 1-2",
      "Use apps like Duolingo, TTMIK",
    ],
    tips: "GKS scholarship requires TOPIK Level 3+ for Korean-medium programs. English-medium programs don't require TOPIK.",
    resources: ["Talk To Me In Korean", "Duolingo Korean", "TOPIK Official Website"],
  },
  {
    id: 2,
    icon: "📄",
    title: "Prepare Documents",
    subtitle: "Get everything ready",
    color: "#1a6fa3",
    bg: "rgba(26,111,163,0.08)",
    border: "rgba(26,111,163,0.2)",
    duration: "1-2 months",
    status: "Critical Step",
    desc: "Document preparation is one of the most important steps. Start early as some documents (apostille, translation) can take weeks to process.",
    tasks: [
      "Get passport (valid for 2+ years)",
      "Collect academic transcripts",
      "Write Statement of Purpose (SOP)",
      "Get 2 Letters of Recommendation",
      "Prepare medical certificate",
      "Get documents apostilled/notarized",
      "Translate documents to English/Korean",
    ],
    tips: "Start preparing documents at least 3-4 months before the deadline. Apostille process in Bangladesh can take 2-4 weeks.",
    resources: ["Bangladesh Ministry of Foreign Affairs", "Korean Embassy Dhaka", "studyinkorea.go.kr"],
  },
  {
    id: 3,
    icon: "🎓",
    title: "Apply for GKS Scholarship",
    subtitle: "Korean Government Scholarship",
    color: "#C0392B",
    bg: "rgba(192,57,43,0.08)",
    border: "rgba(192,57,43,0.2)",
    duration: "March deadline",
    status: "Most Important",
    desc: "The GKS (Global Korea Scholarship) is the most prestigious and fully-funded scholarship for international students. Apply through the Korean Embassy in Dhaka.",
    tasks: [
      "Check GKS eligibility requirements",
      "Choose Embassy Track or University Track",
      "Fill GKS application form online",
      "Submit to Korean Embassy in Dhaka",
      "Meet March application deadline",
      "Prepare for embassy interview",
    ],
    tips: "Embassy Track deadline is usually March. University Track varies by university (October-February). Apply to both if possible!",
    resources: ["studyinkorea.go.kr", "Korean Embassy Dhaka", "GKS Application Portal"],
  },
  {
    id: 4,
    icon: "🏛️",
    title: "Select University",
    subtitle: "Choose wisely",
    color: "#8e44ad",
    bg: "rgba(142,68,173,0.08)",
    border: "rgba(142,68,173,0.2)",
    duration: "Research phase",
    status: "Important",
    desc: "Research Korean universities carefully based on your field of study, ranking, location, and program language. For GKS, you can choose up to 3 universities.",
    tasks: [
      "Research top universities for your field",
      "Check program availability (English/Korean)",
      "Contact professors for graduate programs",
      "Prepare university-specific documents",
      "Select 3 universities for GKS application",
      "Check individual university deadlines",
    ],
    tips: "For graduate programs, contacting a professor before applying significantly increases acceptance chances. Email professors with your research interest.",
    resources: ["K-Edu Bridge University Explorer", "studyinkorea.go.kr", "University official websites"],
  },
  {
    id: 5,
    icon: "✅",
    title: "Pass Interview",
    subtitle: "Embassy interview",
    color: "#e67e22",
    bg: "rgba(230,126,34,0.08)",
    border: "rgba(230,126,34,0.2)",
    duration: "April-May",
    status: "GKS Step",
    desc: "For GKS Embassy Track, there is an interview at the Korean Embassy in Dhaka. Prepare thoroughly with common questions about your study plan and motivations.",
    tasks: [
      "Study common GKS interview questions",
      "Prepare your study motivation speech",
      "Practice in Korean if possible",
      "Dress formally for the interview",
      "Bring all original documents",
      "Arrive 30 minutes early",
    ],
    tips: "Common questions: Why Korea? Why this university? What is your research/study plan? What will you do after graduation? Prepare clear, confident answers.",
    resources: ["GKS Interview Guide", "Korean Embassy Dhaka", "YouTube GKS interview experiences"],
  },
  {
    id: 6,
    icon: "🎉",
    title: "Get Results",
    subtitle: "Wait and prepare",
    color: "#f39c12",
    bg: "rgba(243,156,18,0.08)",
    border: "rgba(243,156,18,0.2)",
    duration: "June",
    status: "Results",
    desc: "GKS results are usually announced in June. If selected, you'll receive an official letter from NIIED (National Institute for International Education).",
    tasks: [
      "Check email regularly for results",
      "Accept scholarship offer promptly",
      "Complete enrollment procedures",
      "Apply for student visa (D-2)",
      "Book flight tickets",
      "Arrange accommodation",
    ],
    tips: "Even if not selected for GKS, many universities offer their own scholarships. Apply directly to universities as backup.",
    resources: ["NIIED official website", "studyinkorea.go.kr", "Korean Embassy visa section"],
  },
  {
    id: 7,
    icon: "🛂",
    title: "Visa Process",
    subtitle: "D-2 Student Visa",
    color: "#1a3a6b",
    bg: "rgba(26,58,107,0.08)",
    border: "rgba(26,58,107,0.2)",
    duration: "1-2 months",
    status: "Legal Step",
    desc: "After acceptance, apply for a D-2 student visa at the Korean Embassy in Dhaka. This is required for all international students studying in Korea.",
    tasks: [
      "Get university acceptance letter",
      "Fill D-2 visa application form",
      "Prepare financial documents",
      "Pay visa application fee",
      "Submit to Korean Embassy Dhaka",
      "Collect visa (2-4 weeks processing)",
    ],
    tips: "GKS scholars get visa support from NIIED. Required documents: passport, acceptance letter, financial proof, photos, medical certificate.",
    resources: ["Korean Embassy Dhaka visa section", "Korean Immigration Service", "NIIED visa guide"],
  },
  {
    id: 8,
    icon: "✈️",
    title: "Pre-departure Preparation",
    subtitle: "Get ready to fly",
    color: "#16a085",
    bg: "rgba(22,160,133,0.08)",
    border: "rgba(22,160,133,0.2)",
    duration: "1 month before",
    status: "Final Step",
    desc: "Before flying to Korea, there are many practical things to prepare. Being well-prepared will make your transition much smoother.",
    tasks: [
      "Book flight to Korea (Incheon Airport)",
      "Exchange currency (Korean Won ₩)",
      "Get travel insurance",
      "Buy a Korean SIM card plan",
      "Arrange airport pickup or dormitory",
      "Pack weather-appropriate clothes",
      "Download essential Korean apps",
      "Learn basic Korean phrases",
    ],
    tips: "Korean winters are very cold (-10°C). Pack warm clothes. Download KakaoTalk, Naver Maps, and Papago before leaving Bangladesh.",
    resources: ["Korean Tourism Organization", "Incheon Airport website", "Korean weather guide"],
  },
  {
    id: 9,
    icon: "🇰🇷",
    title: "Life in Korea",
    subtitle: "Your new chapter begins",
    color: "#C0392B",
    bg: "rgba(192,57,43,0.08)",
    border: "rgba(192,57,43,0.2)",
    duration: "Ongoing",
    status: "Final Goal",
    desc: "Congratulations! You're now in Korea. The first few months can be challenging but incredibly rewarding. Embrace the culture and make the most of your time.",
    tasks: [
      "Register at immigration office (within 90 days)",
      "Open Korean bank account",
      "Get Korean phone number",
      "Attend university orientation",
      "Start Korean language training (GKS scholars)",
      "Join student clubs and activities",
      "Explore Korean culture and food",
      "Connect with Bangladeshi student community",
    ],
    tips: "Join the Bangladeshi Students Association in Korea. Connect with seniors who can guide you. Don't be afraid to ask for help!",
    resources: ["Korean Immigration Service", "Bangladeshi Embassy Seoul", "Korean Student Community Facebook"],
  },
]

export default function RoadmapPage() {
  const [activeStep, setActiveStep] = useState(null)
  const [completedSteps, setCompletedSteps] = useState([])

  const toggleComplete = (id, e) => {
    e.stopPropagation()
    setCompletedSteps(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  return (
    <div style={{ background: '#F7F5F0', minHeight: '100vh', paddingTop: '60px' }}>
      <Navbar />

      {/* HEADER */}
      <div style={{
        background: 'linear-gradient(135deg, #1a3a6b 0%, #0d2347 100%)',
        padding: '3rem 2rem', textAlign: 'center', color: '#fff'
      }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '8px' }}>
          Study Roadmap
        </p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '0.8rem' }}>
          Your Step-by-Step Journey to Korea
        </h1>
        <p style={{ opacity: 0.75, fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
          Follow this complete roadmap from day one to your first day at a Korean university.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['📋 9 Steps', '🎓 GKS Guide', '✅ Track Progress', '💡 Tips Included'].map(b => (
            <span key={b} style={{
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '20px', padding: '6px 16px', fontSize: '0.82rem'
            }}>{b}</span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>

        {/* Progress Bar */}
        <div style={{
          background: '#fff', borderRadius: '14px', padding: '1.2rem 1.5rem',
          border: '1px solid rgba(0,0,0,0.08)', marginBottom: '2rem',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap'
        }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0e0e0e' }}>Your Progress</span>
              <span style={{ fontSize: '0.82rem', color: '#C0392B', fontWeight: 600 }}>
                {completedSteps.length}/{steps.length} steps
              </span>
            </div>
            <div style={{ height: '8px', background: 'rgba(0,0,0,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: `${(completedSteps.length / steps.length) * 100}%`,
                background: 'linear-gradient(90deg, #27ae60, #C0392B)',
                borderRadius: '10px', transition: 'width 0.4s'
              }} />
            </div>
          </div>
          <p style={{ fontSize: '0.78rem', color: '#6b6b6b', margin: 0 }}>
            Click ✓ on each step to track your progress
          </p>
        </div>

        {/* STEPS */}
        <div style={{ position: 'relative' }}>
          {steps.map((step, idx) => (
            <div key={step.id} style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>

              {/* Left — number + line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: completedSteps.includes(step.id) ? '#27ae60' : step.color,
                  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', fontWeight: 700, flexShrink: 0,
                  boxShadow: `0 4px 12px ${step.color}40`,
                  transition: 'background 0.3s'
                }}>
                  {completedSteps.includes(step.id) ? '✓' : step.icon}
                </div>
                {idx < steps.length - 1 && (
                  <div style={{ width: '2px', flex: 1, background: 'rgba(0,0,0,0.08)', minHeight: '24px', marginTop: '4px' }} />
                )}
              </div>

              {/* Right — content */}
              <div style={{
                flex: 1, background: '#fff',
                border: `1.5px solid ${activeStep === step.id ? step.border : 'rgba(0,0,0,0.08)'}`,
                borderRadius: '14px', overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transition: 'border-color 0.2s',
                marginBottom: '8px'
              }}>
                {/* Card header */}
                <div
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  style={{
                    padding: '1.2rem 1.4rem',
                    cursor: 'pointer',
                    background: activeStep === step.id ? step.bg : 'transparent',
                    transition: 'background 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#fff', background: step.color, padding: '2px 8px', borderRadius: '10px' }}>
                          STEP {String(step.id).padStart(2, '0')}
                        </span>
                        <span style={{ fontSize: '0.68rem', background: step.bg, color: step.color, border: `1px solid ${step.border}`, padding: '2px 8px', borderRadius: '10px', fontWeight: 500 }}>
                          {step.status}
                        </span>
                        <span style={{ fontSize: '0.68rem', background: 'rgba(0,0,0,0.05)', color: '#666', padding: '2px 8px', borderRadius: '10px' }}>
                          ⏱ {step.duration}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0e0e0e', margin: '4px 0 2px' }}>{step.title}</h3>
                      <p style={{ fontSize: '0.8rem', color: '#888', margin: 0 }}>{step.subtitle}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '12px' }}>
                      <button
                        onClick={(e) => toggleComplete(step.id, e)}
                        style={{
                          width: '28px', height: '28px', borderRadius: '50%',
                          border: `2px solid ${completedSteps.includes(step.id) ? '#27ae60' : 'rgba(0,0,0,0.15)'}`,
                          background: completedSteps.includes(step.id) ? '#27ae60' : 'transparent',
                          color: completedSteps.includes(step.id) ? '#fff' : 'transparent',
                          cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700,
                          transition: 'all 0.2s', flexShrink: 0
                        }}
                      >✓</button>
                      <span style={{ fontSize: '0.75rem', color: step.color, fontWeight: 500, whiteSpace: 'nowrap' }}>
                        {activeStep === step.id ? '▲' : '▼'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded content */}
                {activeStep === step.id && (
                  <div style={{ padding: '0 1.4rem 1.4rem', borderTop: `1px solid ${step.border}` }}>
                    <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, margin: '1rem 0' }}>
                      {step.desc}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '1rem' }}>
                      <div>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                          Tasks
                        </p>
                        {step.tasks.map(t => (
                          <p key={t} style={{ fontSize: '0.78rem', color: '#444', marginBottom: '5px', lineHeight: 1.5 }}>
                            ☐ {t}
                          </p>
                        ))}
                      </div>
                      <div>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                          Resources
                        </p>
                        {step.resources.map(r => (
                          <p key={r} style={{ fontSize: '0.78rem', color: step.color, marginBottom: '5px' }}>
                            🔗 {r}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div style={{
                      background: step.bg, border: `1px solid ${step.border}`,
                      borderRadius: '10px', padding: '10px 14px'
                    }}>
                      <p style={{ fontSize: '0.8rem', color: step.color, lineHeight: 1.6, margin: 0 }}>
                        💡 <strong>Tip:</strong> {step.tips}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Completion message */}
        {completedSteps.length === steps.length && (
          <div style={{
            background: 'linear-gradient(135deg, #27ae60, #1e8449)',
            borderRadius: '16px', padding: '2rem', textAlign: 'center', color: '#fff',
            marginTop: '1rem'
          }}>
            <p style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🎉</p>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginBottom: '8px' }}>
              Congratulations! You're ready for Korea!
            </h3>
            <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>
              You've completed all steps. Best of luck with your Korean university journey! 🇰🇷
            </p>
          </div>
        )}

      </div>
    </div>
  )
}
