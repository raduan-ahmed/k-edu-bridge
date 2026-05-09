'use client'

const levels = [
  { level: '1', title: 'TOPIK I', desc: 'Beginner · Basic survival Korean', bg: '#3B6D11' },
  { level: '2', title: 'TOPIK I', desc: 'Elementary · Daily conversation', bg: '#185FA5' },
  { level: '3', title: 'TOPIK II', desc: 'Intermediate · Work & study', bg: '#BA7517' },
  { level: '4', title: 'TOPIK II', desc: 'Upper-intermediate', bg: '#993556' },
  { level: '5', title: 'TOPIK II', desc: 'Advanced · University level', bg: '#A32D2D' },
  { level: '6', title: 'TOPIK II', desc: 'Expert · Native-like fluency', bg: '#3C3489' },
]

export default function Topik() {
  return (
    <section id="topik" style={{
      maxWidth: '1140px', margin: '0 auto',
      padding: '5rem 2rem', background: '#F7F5F0'
    }}>
      <p style={{fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C0392B', marginBottom: '0.8rem'}}>
        TOPIK Resources
      </p>
      <h2 style={{fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0e0e0e', marginBottom: '0.8rem'}}>
        Learn Korean —<br />from beginner to fluent
      </h2>
      <p style={{fontSize: '1rem', color: '#6b6b6b', maxWidth: '480px', lineHeight: 1.7, marginBottom: '2.5rem'}}>
        Structured TOPIK preparation resources for all 6 levels. Start from zero, go all the way.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '12px'
      }}>
        {levels.map(l => (
          <div key={l.level} style={{
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '12px', padding: '1.2rem',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              width: '44px', height: '44px', borderRadius: '12px',
              margin: '0 auto 0.8rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Georgia, serif', fontSize: '1.2rem',
              color: '#fff', background: l.bg
            }}>{l.level}</div>
            <h4 style={{fontSize: '0.88rem', fontWeight: 500, marginBottom: '4px', color: '#0e0e0e'}}>{l.title}</h4>
            <p style={{fontSize: '0.76rem', color: '#6b6b6b'}}>{l.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}