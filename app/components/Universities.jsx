'use client'

const universities = [
  { emoji: '🏛️', rank: '#1', name: 'KAIST', location: 'Daejeon · Public', tags: ['CS', 'Engineering', 'AI'] },
  { emoji: '🎓', rank: '#2', name: 'Seoul National University', location: 'Seoul · Public', tags: ['Medicine', 'Law', 'Engineering'] },
  { emoji: '🔬', rank: '#3', name: 'Yonsei University', location: 'Seoul · Private', tags: ['Business', 'AI', 'NLP'] },
  { emoji: '⚗️', rank: '#4', name: 'POSTECH', location: 'Pohang · Private', tags: ['Science', 'Tech'] },
  { emoji: '🏫', rank: '#5', name: 'Korea University', location: 'Seoul · Private', tags: ['Business', 'CS'] },
  { emoji: '🌐', rank: '#6', name: 'Sungkyunkwan (SKKU)', location: 'Seoul · Private', tags: ['Samsung', 'Engineering'] },
  { emoji: '🔭', rank: '#7', name: 'Hanyang University', location: 'Seoul · Private', tags: ['Engineering', 'Architecture'] },
  { emoji: '🧬', rank: '#8', name: 'UNIST', location: 'Ulsan · Public', tags: ['Science', 'AI', 'Bio'] },
]

export default function Universities() {
  return (
    <section id="universities" style={{
      maxWidth: '1140px', margin: '0 auto',
      padding: '5rem 2rem', background: '#F7F5F0'
    }}>
      <p style={{fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C0392B', marginBottom: '0.8rem'}}>
        University Explorer
      </p>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem'}}>
        <div>
          <h2 style={{fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0e0e0e', marginBottom: '0.8rem'}}>
            Find your university<br />in Korea
          </h2>
          <p style={{fontSize: '1rem', color: '#6b6b6b', maxWidth: '480px', lineHeight: 1.7}}>
            Browse top Korean universities by field, location, and tuition — all in one place.
          </p>
        </div>
        <a href="#" style={{
          background: 'transparent', color: '#1a3a6b',
          padding: '10px 20px', borderRadius: '8px',
          fontSize: '0.88rem', fontWeight: 500,
          textDecoration: 'none',
          border: '1.5px solid #1a3a6b',
          whiteSpace: 'nowrap'
        }}>View All Universities →</a>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px', marginTop: '2.5rem'
      }}>
        {universities.map(u => (
          <div key={u.name} style={{
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '14px', padding: '1.4rem',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem'}}>
              <span style={{fontSize: '1.8rem'}}>{u.emoji}</span>
              <span style={{
                fontSize: '0.72rem', fontWeight: 500,
                background: 'rgba(26,58,107,0.08)', color: '#1a3a6b',
                padding: '3px 10px', borderRadius: '20px'
              }}>Rank {u.rank}</span>
            </div>
            <h3 style={{fontSize: '0.95rem', fontWeight: 500, marginBottom: '4px', color: '#0e0e0e'}}>{u.name}</h3>
            <p style={{fontSize: '0.8rem', color: '#6b6b6b', marginBottom: '10px'}}>{u.location}</p>
            <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
              {u.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px',
                  background: 'rgba(0,0,0,0.05)', color: '#6b6b6b'
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}