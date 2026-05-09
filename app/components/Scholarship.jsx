const steps = [
  { num: '1', title: 'Check Eligibility', sub: 'Age under 25, GPA 2.64+, not Korean citizen' },
  { num: '2', title: 'Prepare Documents', sub: 'Passport, transcript, SOP, 2 LOR letters' },
  { num: '3', title: 'Choose Track', sub: 'Embassy Track (via Bangladesh Embassy) or University Track' },
  { num: '4', title: 'Submit by March 2026', sub: 'Apply through Korean Embassy in Dhaka' },
  { num: '5', title: 'Interview & Results', sub: 'Results announced June — depart September' },
]

const coverage = [
  'Full tuition (no limit)',
  'Monthly living allowance ₩900,000',
  'Round-trip airfare',
  'Korean language training (1 year)',
  'Medical insurance',
  'Settling-in allowance ₩200,000',
]

export default function Scholarship() {
  return (
    <section id="scholarship" style={{
      maxWidth: '1140px', margin: '0 auto',
      padding: '5rem 2rem', background: '#F7F5F0'
    }}>
      <p style={{fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C0392B', marginBottom: '0.8rem'}}>
        Scholarships
      </p>
      <h2 style={{fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0e0e0e', marginBottom: '0.8rem'}}>
        GKS Scholarship —<br />Full guide for Bangladeshis
      </h2>
      <p style={{fontSize: '1rem', color: '#6b6b6b', maxWidth: '480px', lineHeight: 1.7, marginBottom: '2.5rem'}}>
        The Korean Government Scholarship covers everything — tuition, living costs, airfare, and more.
      </p>

      <div style={{
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }}>
        {/* LEFT */}
        <div style={{
          background: 'linear-gradient(160deg, #1a3a6b 0%, #0d2347 100%)',
          padding: '2.5rem', color: '#fff'
        }}>
          <h3 style={{fontFamily: 'Georgia, serif', fontSize: '1.6rem', marginBottom: '0.5rem'}}>What GKS Covers</h3>
          <p style={{fontSize: '0.88rem', opacity: 0.75, lineHeight: 1.7, marginBottom: '1.5rem'}}>
            One of the most comprehensive government scholarships in Asia — fully funded for your entire degree.
          </p>
          <ul style={{listStyle: 'none', padding: 0}}>
            {coverage.map(item => (
              <li key={item} style={{
                fontSize: '0.83rem', padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', gap: '8px'
              }}>
                <span style={{color: '#7ecfb0', fontWeight: 500}}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div style={{padding: '2.5rem'}}>
          <h4 style={{fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#6b6b6b', marginBottom: '1.2rem'}}>
            How to Apply — Step by Step
          </h4>
          {steps.map(s => (
            <div key={s.num} style={{display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '1rem'}}>
              <div style={{
                width: '26px', height: '26px', borderRadius: '50%',
                background: 'rgba(192,57,43,0.1)', color: '#C0392B',
                fontSize: '0.78rem', fontWeight: 500,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, marginTop: '1px'
              }}>{s.num}</div>
              <div>
                <p style={{fontSize: '0.87rem', fontWeight: 500, color: '#0e0e0e', margin: '0 0 2px'}}>{s.title}</p>
                <span style={{fontSize: '0.78rem', color: '#6b6b6b'}}>{s.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}