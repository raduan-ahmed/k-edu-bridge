export default function CTABanner() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a3a6b 0%, #0d2347 100%)',
      borderRadius: '20px', padding: '3.5rem',
      textAlign: 'center', color: '#fff',
      maxWidth: '1140px',
      margin: '0 auto 4rem',
      padding: '3.5rem',
    }}>
      <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '2rem', marginBottom: '0.8rem'
      }}>Ready to start your Korean dream?</h2>
      <p style={{opacity: 0.75, marginBottom: '2rem', fontSize: '0.95rem'}}>
        Join hundreds of Bangladeshi students who found their path to Korea through K-Edu Bridge.
      </p>
      <a href="#" style={{
        background: '#fff', color: '#1a3a6b',
        padding: '12px 28px', borderRadius: '8px',
        fontSize: '0.9rem', fontWeight: 500,
        textDecoration: 'none', display: 'inline-block'
      }}>Explore Universities Now →</a>
    </div>
  )
}