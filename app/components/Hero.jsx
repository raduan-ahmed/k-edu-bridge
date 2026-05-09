export default function Hero() {
  return (
    <div style={{
      paddingTop: '100px',
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      gap: '4rem',
      maxWidth: '1140px',
      margin: '0 auto',
      padding: '100px 2rem 4rem',
      background: '#F7F5F0'
    }}>
      {/* LEFT */}
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: 'rgba(192,57,43,0.08)',
          border: '1px solid rgba(192,57,43,0.2)',
          borderRadius: '20px', padding: '5px 14px',
          fontSize: '0.78rem', color: '#C0392B',
          marginBottom: '1.4rem', fontWeight: 500
        }}>
          🇧🇩 → 🇰🇷 &nbsp; Bangladesh to Korea
        </div>

        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          lineHeight: 1.15, color: '#0e0e0e',
          marginBottom: '1.2rem'
        }}>
          Your path to studying in{' '}
          <em style={{color: '#C0392B', fontStyle: 'italic'}}>Korea</em>{' '}
          starts here
        </h1>

        <p style={{
          fontSize: '1rem', color: '#6b6b6b',
          lineHeight: 1.7, maxWidth: '420px',
          marginBottom: '2rem'
        }}>
          Find universities, apply for GKS scholarships, learn Korean with TOPIK
          resources — everything in one place, in English and 한국어.
        </p>

        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
          <a href="#universities" style={{
            background: '#C0392B', color: '#fff',
            padding: '12px 24px', borderRadius: '8px',
            fontSize: '0.9rem', fontWeight: 500,
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(192,57,43,0.25)'
          }}>Explore Universities</a>
          <a href="#scholarship" style={{
            background: 'transparent', color: '#1a3a6b',
            padding: '12px 24px', borderRadius: '8px',
            fontSize: '0.9rem', fontWeight: 500,
            textDecoration: 'none',
            border: '1.5px solid #1a3a6b'
          }}>GKS Scholarship Guide</a>
        </div>

        <div style={{
          display: 'flex', gap: '2rem',
          marginTop: '2.5rem', paddingTop: '2rem',
          borderTop: '1px solid rgba(0,0,0,0.08)'
        }}>
          {[
            { num: '50+', label: 'Korean Universities' },
            { num: 'GKS', label: 'Scholarship Guides' },
            { num: 'TOPIK', label: 'Level 1–6 Resources' }
          ].map(s => (
            <div key={s.label}>
              <div style={{fontFamily: 'Georgia, serif', fontSize: '1.6rem', color: '#0e0e0e'}}>{s.num}</div>
              <div style={{fontSize: '0.78rem', color: '#6b6b6b', marginTop: '2px'}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div style={{
        background: '#fff',
        borderRadius: '20px',
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #1a3a6b 0%, #0d2347 100%)',
          padding: '1.5rem', color: '#fff'
        }}>
          <p style={{fontSize: '0.75rem', opacity: 0.7, marginBottom: '4px'}}>Featured Universities</p>
          <h3 style={{fontFamily: 'Georgia, serif', fontSize: '1.3rem'}}>Top picks for CS & Engineering</h3>
        </div>

        <div style={{padding: '1.2rem'}}>
          {[
            { rank: '#1', name: 'KAIST', sub: 'Daejeon · Computer Science' },
            { rank: '#2', name: 'Seoul National University', sub: 'Seoul · Engineering' },
            { rank: '#3', name: 'Yonsei University', sub: 'Seoul · AI & Data Science' },
          ].map(u => (
            <div key={u.rank} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '10px 0',
              borderBottom: '1px solid rgba(0,0,0,0.06)'
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: 'rgba(192,57,43,0.1)',
                color: '#C0392B', fontSize: '0.75rem', fontWeight: 500,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
              }}>{u.rank}</div>
              <div style={{flex: 1}}>
                <p style={{fontSize: '0.85rem', fontWeight: 500, color: '#0e0e0e', margin: 0}}>{u.name}</p>
                <span style={{fontSize: '0.75rem', color: '#6b6b6b'}}>{u.sub}</span>
              </div>
              <span style={{
                background: 'rgba(26,58,107,0.08)', color: '#1a3a6b',
                fontSize: '0.7rem', padding: '3px 8px', borderRadius: '10px'
              }}>GKS ✓</span>
            </div>
          ))}
        </div>

        <div style={{
          margin: '0 1.2rem 1.2rem',
          background: 'rgba(192,57,43,0.06)',
          border: '1px solid rgba(192,57,43,0.15)',
          borderRadius: '10px', padding: '10px 14px',
          display: 'flex', alignItems: 'center', gap: '10px'
        }}>
          <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#C0392B', flexShrink: 0}}></div>
          <div>
            <p style={{fontSize: '0.82rem', fontWeight: 500, color: '#C0392B', margin: 0}}>GKS 2026 Applications Open</p>
            <span style={{fontSize: '0.75rem', color: '#6b6b6b'}}>Deadline: March 2026 · Embassy Track</span>
          </div>
        </div>
      </div>
    </div>
  )
}