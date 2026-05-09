export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(247,245,240,0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      padding: '0 2rem',
      height: '60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <a href="#" style={{
        fontFamily: 'Georgia, serif',
        fontSize: '1.25rem',
        color: '#0e0e0e',
        textDecoration: 'none'
      }}>
        K-Edu <span style={{color: '#C0392B'}}>Bridge</span>
      </a>

      <div style={{display: 'flex', alignItems: 'center', gap: '1.8rem'}}>
        {['Universities', 'Scholarships', 'TOPIK', 'Roadmap', 'Blog'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            fontSize: '0.85rem', color: '#6b6b6b',
            textDecoration: 'none'
          }}>{link}</a>
        ))}
        <span style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          background: '#fff', border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '20px', padding: '4px 10px',
          fontSize: '0.75rem', cursor: 'pointer', color: '#6b6b6b'
        }}>🇧🇩 EN &nbsp;|&nbsp; 한국어 🇰🇷</span>
        <a href="#" style={{
          background: '#C0392B', color: '#fff',
          padding: '7px 16px', borderRadius: '6px',
          fontSize: '0.82rem', textDecoration: 'none'
        }}>Get Started</a>
      </div>
    </nav>
  )
}