'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'

const scholarships = [
  {
    id: 1,
    name: "GKS — Global Korea Scholarship",
    koreanName: "정부초청장학금",
    type: "Government",
    level: ["Undergraduate", "Graduate", "Research"],
    coverage: "Full",
    deadline: "March 2026",
    track: ["Embassy Track", "University Track"],
    eligibility: [
      "Age under 25 (Undergraduate), under 40 (Graduate)",
      "GPA 2.64/4.0 or above",
      "Not a Korean citizen",
      "Good health condition",
    ],
    documents: [
      "Passport copy",
      "Academic transcripts",
      "Statement of Purpose (SOP)",
      "2 Letters of Recommendation",
      "Medical certificate",
      "Personal statement",
    ],
    benefits: [
      "Full tuition (no limit)",
      "Monthly allowance ₩900,000",
      "Round-trip airfare",
      "Korean language training (1 year)",
      "Medical insurance",
      "Settling-in allowance ₩200,000",
    ],
    link: "https://www.studyinkorea.go.kr",
    color: "#1a3a6b",
    emoji: "🏆",
    featured: true,
  },
  {
    id: 2,
    name: "KAIST Scholarship",
    koreanName: "카이스트 장학금",
    type: "University",
    level: ["Graduate", "Research"],
    coverage: "Full",
    deadline: "December 2025",
    track: ["University Track"],
    eligibility: [
      "Bachelor's degree or equivalent",
      "Strong academic record",
      "Research interest in STEM fields",
      "English proficiency",
    ],
    documents: [
      "Academic transcripts",
      "Research proposal",
      "2 Letters of Recommendation",
      "CV/Resume",
      "English test scores",
    ],
    benefits: [
      "Full tuition waiver",
      "Monthly stipend ₩500,000–₩1,000,000",
      "Research funding",
      "Dormitory support",
    ],
    link: "https://www.kaist.ac.kr",
    color: "#C0392B",
    emoji: "🔬",
    featured: false,
  },
  {
    id: 3,
    name: "SNU Scholarship for International Students",
    koreanName: "서울대학교 외국인 장학금",
    type: "University",
    level: ["Undergraduate", "Graduate"],
    coverage: "Partial",
    deadline: "February 2026",
    track: ["University Track"],
    eligibility: [
      "Admitted to SNU",
      "GPA 3.0/4.5 or above",
      "Financial need",
      "Not receiving other scholarships",
    ],
    documents: [
      "Admission letter",
      "Academic transcripts",
      "Financial documents",
      "Personal statement",
    ],
    benefits: [
      "50–100% tuition waiver",
      "Monthly allowance (selected students)",
      "Dormitory priority",
    ],
    link: "https://www.snu.ac.kr",
    color: "#27ae60",
    emoji: "🎓",
    featured: false,
  },
  {
    id: 4,
    name: "Yonsei University Scholarship",
    koreanName: "연세대학교 장학금",
    type: "University",
    level: ["Undergraduate", "Graduate"],
    coverage: "Partial",
    deadline: "January 2026",
    track: ["University Track"],
    eligibility: [
      "Admitted to Yonsei University",
      "Academic excellence",
      "TOPIK Level 3 or above (Korean track)",
      "English proficiency (English track)",
    ],
    documents: [
      "Admission letter",
      "Academic transcripts",
      "TOPIK certificate",
      "Personal statement",
    ],
    benefits: [
      "30–100% tuition waiver",
      "Monthly allowance (selected)",
      "Cultural activities support",
    ],
    link: "https://www.yonsei.ac.kr",
    color: "#8e44ad",
    emoji: "🌸",
    featured: false,
  },
  {
    id: 5,
    name: "POSTECH Scholarship",
    koreanName: "포항공과대학교 장학금",
    type: "University",
    level: ["Graduate", "Research"],
    coverage: "Full",
    deadline: "November 2025",
    track: ["University Track"],
    eligibility: [
      "Strong STEM background",
      "Research experience preferred",
      "English proficiency",
      "Academic excellence",
    ],
    documents: [
      "Academic transcripts",
      "Research proposal",
      "2 Letters of Recommendation",
      "CV/Resume",
    ],
    benefits: [
      "Full tuition waiver",
      "Monthly stipend ₩700,000",
      "Research funding support",
      "Free dormitory",
    ],
    link: "https://www.postech.ac.kr",
    color: "#e67e22",
    emoji: "⚗️",
    featured: false,
  },
  {
    id: 6,
    name: "Korean Government STEM Scholarship",
    koreanName: "이공계 장학금",
    type: "Government",
    level: ["Graduate"],
    coverage: "Full",
    deadline: "April 2026",
    track: ["Embassy Track"],
    eligibility: [
      "STEM field applicants only",
      "Age under 40",
      "GPA 2.64/4.0 or above",
      "Research plan required",
    ],
    documents: [
      "Passport copy",
      "Academic transcripts",
      "Research plan",
      "2 Letters of Recommendation",
      "Medical certificate",
    ],
    benefits: [
      "Full tuition",
      "Monthly allowance ₩1,000,000",
      "Airfare",
      "Research support fund",
      "Medical insurance",
    ],
    link: "https://www.studyinkorea.go.kr",
    color: "#1a3a6b",
    emoji: "🔭",
    featured: false,
  },
]

const gksSteps = [
  { step: "01", title: "Check Eligibility", desc: "Age, GPA, nationality requirements. Must not be Korean citizen.", icon: "✅" },
  { step: "02", title: "Prepare Documents", desc: "Passport, transcripts, SOP, 2 LOR letters, medical certificate.", icon: "📄" },
  { step: "03", title: "Choose Track", desc: "Embassy Track (via Bangladesh Embassy) or University Track.", icon: "🔀" },
  { step: "04", title: "Submit Application", desc: "Submit to Korean Embassy in Dhaka by March deadline.", icon: "📬" },
  { step: "05", title: "Pass Interview", desc: "Embassy interview in Dhaka. Prepare with common questions.", icon: "🎤" },
  { step: "06", title: "Get Results", desc: "Results announced in June. Successful applicants notified.", icon: "🎉" },
  { step: "07", title: "Language Training", desc: "1 year Korean language training before university starts.", icon: "🗣️" },
  { step: "08", title: "Start University", desc: "Begin your degree in September the following year.", icon: "🎓" },
]

export default function ScholarshipsPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = scholarships.filter(s => {
    if (activeTab === 'all') return true
    if (activeTab === 'government') return s.type === 'Government'
    if (activeTab === 'university') return s.type === 'University'
    if (activeTab === 'full') return s.coverage === 'Full'
    return true
  })

  return (
    <div style={{ background: '#F7F5F0', minHeight: '100vh', paddingTop: '60px' }}>
      <Navbar />

      {/* HEADER */}
      <div style={{
        background: 'linear-gradient(135deg, #1a3a6b 0%, #0d2347 100%)',
        padding: '3rem 2rem', textAlign: 'center', color: '#fff'
      }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '8px' }}>
          Scholarships
        </p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '0.8rem' }}>
          Study in Korea — Fully Funded
        </h1>
        <p style={{ opacity: 0.75, fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
          Find the right scholarship for Bangladeshi students. GKS, university scholarships, and more.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: '🏆 GKS Scholarship', val: 'government' },
            { label: '🎓 University Scholarships', val: 'university' },
            { label: '💰 Fully Funded', val: 'full' },
          ].map(b => (
            <span key={b.val} style={{
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '20px', padding: '6px 16px', fontSize: '0.82rem', cursor: 'pointer'
            }}>{b.label}</span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem' }}>

        {/* GKS GUIDE SECTION */}
        <div style={{
          background: 'linear-gradient(135deg, #1a3a6b, #0d2347)',
          borderRadius: '20px', padding: '2.5rem',
          marginBottom: '2.5rem', color: '#fff'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Most Popular</span>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', margin: '4px 0 8px' }}>🏆 GKS Scholarship Guide</h2>
              <p style={{ opacity: 0.75, fontSize: '0.9rem', maxWidth: '500px', lineHeight: 1.7 }}>
                The Korean Government Scholarship (GKS) is the most comprehensive scholarship for international students — covering everything from tuition to airfare.
              </p>
            </div>
            <a href="https://www.studyinkorea.go.kr" target="_blank" rel="noopener noreferrer" style={{
              background: '#C0392B', color: '#fff',
              padding: '10px 20px', borderRadius: '8px',
              fontSize: '0.85rem', textDecoration: 'none', fontWeight: 500,
              whiteSpace: 'nowrap'
            }}>Apply Now →</a>
          </div>

          {/* Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
            {gksSteps.map(s => (
              <div key={s.step} style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px', padding: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                  <span style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: 600 }}>STEP {s.step}</span>
                </div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '4px' }}>{s.title}</h4>
                <p style={{ fontSize: '0.78rem', opacity: 0.75, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FILTER TABS */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { label: 'All Scholarships', val: 'all' },
            { label: '🏛️ Government', val: 'government' },
            { label: '🎓 University', val: 'university' },
            { label: '💰 Fully Funded', val: 'full' },
          ].map(tab => (
            <button key={tab.val} onClick={() => setActiveTab(tab.val)} style={{
              padding: '8px 18px', borderRadius: '20px', fontSize: '0.82rem',
              border: '1.5px solid',
              borderColor: activeTab === tab.val ? '#1a3a6b' : 'rgba(0,0,0,0.1)',
              background: activeTab === tab.val ? '#1a3a6b' : '#fff',
              color: activeTab === tab.val ? '#fff' : '#6b6b6b',
              cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500
            }}>{tab.label}</button>
          ))}
        </div>

        {/* SCHOLARSHIP CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
          {filtered.map(s => (
            <div key={s.id} style={{
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '14px', overflow: 'hidden',
              boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s'
            }}
              onClick={() => setSelected(selected === s.id ? null : s.id)}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'
              }}
            >
              {/* Top bar */}
              <div style={{ height: '4px', background: s.color }} />

              <div style={{ padding: '1.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>{s.emoji}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
                    <span style={{
                      fontSize: '0.7rem', padding: '2px 10px', borderRadius: '20px', fontWeight: 500,
                      background: s.type === 'Government' ? 'rgba(26,58,107,0.1)' : 'rgba(39,174,96,0.1)',
                      color: s.type === 'Government' ? '#1a3a6b' : '#27ae60'
                    }}>{s.type}</span>
                    <span style={{
                      fontSize: '0.7rem', padding: '2px 10px', borderRadius: '20px', fontWeight: 500,
                      background: s.coverage === 'Full' ? 'rgba(192,57,43,0.1)' : 'rgba(142,68,173,0.1)',
                      color: s.coverage === 'Full' ? '#C0392B' : '#8e44ad'
                    }}>{s.coverage} Coverage</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '0.98rem', fontWeight: 600, color: '#0e0e0e', marginBottom: '2px' }}>{s.name}</h3>
                <p style={{ fontSize: '0.78rem', color: '#aaa', marginBottom: '8px' }}>{s.koreanName}</p>

                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  {s.level.map(l => (
                    <span key={l} style={{
                      fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px',
                      background: 'rgba(0,0,0,0.05)', color: '#6b6b6b'
                    }}>{l}</span>
                  ))}
                </div>

                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.06)'
                }}>
                  <span style={{ fontSize: '0.78rem', color: '#C0392B', fontWeight: 600 }}>
                    📅 {s.deadline}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#1a3a6b', fontWeight: 500 }}>
                    {selected === s.id ? 'Hide Details ▲' : 'View Details ▼'}
                  </span>
                </div>

                {/* Expanded Details */}
                {selected === s.id && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                      <div>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Eligibility</p>
                        {s.eligibility.map(e => (
                          <p key={e} style={{ fontSize: '0.75rem', color: '#555', marginBottom: '4px', lineHeight: 1.5 }}>✓ {e}</p>
                        ))}
                      </div>
                      <div>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Benefits</p>
                        {s.benefits.map(b => (
                          <p key={b} style={{ fontSize: '0.75rem', color: '#555', marginBottom: '4px', lineHeight: 1.5 }}>🎁 {b}</p>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Required Documents</p>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {s.documents.map(d => (
                          <span key={d} style={{
                            fontSize: '0.7rem', padding: '3px 10px', borderRadius: '10px',
                            background: 'rgba(26,58,107,0.08)', color: '#1a3a6b'
                          }}>📎 {d}</span>
                        ))}
                      </div>
                    </div>
                    <a href={s.link} target="_blank" rel="noopener noreferrer" style={{
                      display: 'block', textAlign: 'center',
                      background: s.color, color: '#fff',
                      padding: '10px', borderRadius: '8px',
                      fontSize: '0.85rem', textDecoration: 'none', fontWeight: 500
                    }}>Apply / Learn More →</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FOOTER NOTE */}
      <div style={{ textAlign: 'center', padding: '2rem', color: '#999', fontSize: '0.8rem' }}>
        <p>Deadlines may vary. Always check official websites for the latest information.</p>
      </div>
    </div>
  )
}
