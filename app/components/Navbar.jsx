'use client'

import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const links = [
    { name: 'Universities', href: '/universities' },
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'TOPIK', href: '/topik' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: '#ffffff',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      padding: '0 2rem',
      height: '60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <a href="/" style={{
        fontFamily: 'Georgia, serif',
        fontSize: '1.25rem',
        color: '#0e0e0e',
        textDecoration: 'none'
      }}>
        K-Edu <span style={{color: '#C0392B'}}>Bridge</span>
      </a>

      <div style={{display: 'flex', alignItems: 'center', gap: '1.8rem'}}>
        {links.map(link => (
          <a key={link.name} href={link.href} style={{
            fontSize: '0.85rem',
            color: pathname === link.href ? '#C0392B' : '#1a3a6b',
            textDecoration: 'none',
            fontWeight: pathname === link.href ? 700 : 500,
            borderBottom: pathname === link.href ? '2px solid #C0392B' : 'none',
            paddingBottom: '2px'
          }}>{link.name}</a>
        ))}
        <span style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          background: '#f7f5f0', border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '20px', padding: '4px 10px',
          fontSize: '0.75rem', cursor: 'pointer', color: '#6b6b6b'
        }}>🇧🇩 EN &nbsp;|&nbsp; 한국어 🇰🇷</span>
        <a href="/universities" style={{
          background: '#C0392B', color: '#fff',
          padding: '7px 16px', borderRadius: '6px',
          fontSize: '0.82rem', textDecoration: 'none',
          fontWeight: 500
        }}>Get Started</a>
      </div>
    </nav>
  )
}