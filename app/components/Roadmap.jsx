const steps = [
  { icon: '🗣️', title: 'Learn Korean', desc: 'Start Hangul, aim for TOPIK I (Level 1–2) before applying.' },
  { icon: '📄', title: 'Prepare Documents', desc: 'Transcript, SOP, 2 recommendation letters, passport copy.' },
  { icon: '🎓', title: 'Apply for GKS Scholarship', desc: 'Submit through Korean Embassy in Dhaka by March deadline.' },
  { icon: '🏛️', title: 'Select University', desc: 'Choose 3 preferred universities from the GKS list.' },
  { icon: '✅', title: 'Pass Interview', desc: 'GKS interview at the Korean Embassy — prepare with our guide.' },
  { icon: '🛂', title: 'Visa Process', desc: 'D-2 student visa application after acceptance letter arrives.' },
  { icon: '✈️', title: 'Pre-departure Prep', desc: 'Pack documents, currency exchange, SIM, housing confirmation.' },
  { icon: '🇰🇷', title: 'Life in Korea', desc: 'Orientation, language training begins, campus life starts.' },
]

export default function Roadmap() {
  return (
    <section id="roadmap" style={{
      maxWidth: '1140px', margin: '0 auto',
      padding: '5rem 2rem', background: '#F7F5F0'
    }}>
      <p style={{fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C0392B', marginBottom: '0.8rem'}}>
        Study Roadmap
      </p>
      <h2 style={{fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0e0e0e', marginBottom: '0.8rem'}}>
        Your step-by-step<br />journey to Korea
      </h2>
      <p style={{fontSize: '1rem', color: '#6b6b6b', maxWidth: '480px', lineHeight: 1.7, marginBottom: '2.5rem'}}>
        Follow this roadmap from day one to your first day in Korea.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0 3rem'
      }}>
        {[0, 1].map(col => (
          <div key={col}>
            {steps.filter((_, i) => i % 2 === col).map((s, i) => (
              <div key={s.title} style={{
                display: 'flex', gap: '1.5rem',
                alignItems: 'flex-start',
                marginBottom: '1.5rem',
                position: 'relative'
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  border: '1px solid rgba(0,0,0,0.08)',
                  background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontSize: '1rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  zIndex: 1
                }}>{s.icon}</div>
                <div style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '12px', padding: '1rem 1.2rem',
                  flex: 1,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  <h4 style={{fontSize: '0.92rem', fontWeight: 500, marginBottom: '4px', color: '#0e0e0e'}}>{s.title}</h4>
                  <p style={{fontSize: '0.8rem', color: '#6b6b6b', lineHeight: 1.6, margin: 0}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}