'use client'

import { useState } from 'react'
import universities from '../data/universities'

const cities = ['All', 'Seoul', 'Daejeon', 'Pohang', 'Ulsan']
const types = ['All', 'Public', 'Private']
const fields = ['All', 'CS', 'AI', 'Engineering', 'Business', 'Medicine', 'Law']

export default function Universities() {
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('All')
  const [type, setType] = useState('All')
  const [field, setField] = useState('All')

  const filtered = universities.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase())
    const matchCity = city === 'All' || u.location === city
    const matchType = type === 'All' || u.type === type
    const matchField = field === 'All' || u.fields.some(f => f.includes(field))
    return matchSearch && matchCity && matchType && matchField
  })

  return (
    <div style={{ background: '#F7F5F0', minHeight: '100vh', paddingTop: '80px' }}>

      {/* HEADER */}
      <div style={{
        background: 'linear-gradient(135deg, #1a3a6b 0%, #0d2347 100%)',
        padding: '3rem 2rem', textAlign: 'center', color: '#fff'
      }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '8px' }}>
          University Explorer
        </p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '0.8rem' }}>
          Find Your University in Korea
        </h1>
        <p style={{ opacity: 0.75, fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto' }}>
          Browse 50+ Korean universities — filter by city, field, and type
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <span style={{
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '20px', padding: '6px 16px', fontSize: '0.82rem'
          }}>
            {universities.length} Universities Listed
          </span>
        </div>
      </div>

      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '2rem' }}>

        {/* SEARCH + FILTERS */}
        <div style={{
          background: '#fff', borderRadius: '16px',
          border: '1px solid rgba(0,0,0,0.08)',
          padding: '1.5rem', marginBottom: '2rem',
          boxShadow: '0 2px 16px rgba(0,0,0,0.07)'
        }}>
          {/* Search */}
          <input
            type="text"
            placeholder="🔍  Search universities..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%', padding: '12px 16px',
              border: '1.5px solid rgba(0,0,0,0.1)',
              borderRadius: '10px', fontSize: '0.9rem',
              marginBottom: '1rem', outline: 'none',
              fontFamily: 'inherit', background: '#F7F5F0'
            }}
          />

          {/* Filters */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {/* City */}
            <div>
              <p style={{ fontSize: '0.72rem', color: '#6b6b6b', marginBottom: '6px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>City</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {cities.map(c => (
                  <button key={c} onClick={() => setCity(c)} style={{
                    padding: '5px 14px', borderRadius: '20px', fontSize: '0.8rem',
                    border: '1px solid',
                    borderColor: city === c ? '#1a3a6b' : 'rgba(0,0,0,0.1)',
                    background: city === c ? '#1a3a6b' : 'transparent',
                    color: city === c ? '#fff' : '#6b6b6b',
                    cursor: 'pointer', fontFamily: 'inherit'
                  }}>{c}</button>
                ))}
              </div>
            </div>

            {/* Type */}
            <div>
              <p style={{ fontSize: '0.72rem', color: '#6b6b6b', marginBottom: '6px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Type</p>
              <div style={{ display: 'flex', gap: '6px' }}>
                {types.map(t => (
                  <button key={t} onClick={() => setType(t)} style={{
                    padding: '5px 14px', borderRadius: '20px', fontSize: '0.8rem',
                    border: '1px solid',
                    borderColor: type === t ? '#C0392B' : 'rgba(0,0,0,0.1)',
                    background: type === t ? '#C0392B' : 'transparent',
                    color: type === t ? '#fff' : '#6b6b6b',
                    cursor: 'pointer', fontFamily: 'inherit'
                  }}>{t}</button>
                ))}
              </div>
            </div>

            {/* Field */}
            <div>
              <p style={{ fontSize: '0.72rem', color: '#6b6b6b', marginBottom: '6px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Field</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {fields.map(f => (
                  <button key={f} onClick={() => setField(f)} style={{
                    padding: '5px 14px', borderRadius: '20px', fontSize: '0.8rem',
                    border: '1px solid',
                    borderColor: field === f ? '#27ae60' : 'rgba(0,0,0,0.1)',
                    background: field === f ? '#27ae60' : 'transparent',
                    color: field === f ? '#fff' : '#6b6b6b',
                    cursor: 'pointer', fontFamily: 'inherit'
                  }}>{f}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RESULTS COUNT */}
        <p style={{ fontSize: '0.85rem', color: '#6b6b6b', marginBottom: '1.2rem' }}>
          <strong style={{ color: '#0e0e0e' }}>{filtered.length}</strong> universities found
        </p>

        {/* UNIVERSITY GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {filtered.map(u => (
            <div key={u.id} style={{
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '14px', padding: '1.4rem',
              boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'
              }}
            >
              {/* Top */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '2rem' }}>{u.emoji}</span>
                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    fontSize: '0.72rem', fontWeight: 500,
                    background: 'rgba(26,58,107,0.08)', color: '#1a3a6b',
                    padding: '3px 10px', borderRadius: '20px', display: 'block', marginBottom: '4px'
                  }}>Rank #{u.rank}</span>
                  {u.scholarship && (
                    <span style={{
                      fontSize: '0.68rem', background: 'rgba(192,57,43,0.08)',
                      color: '#C0392B', padding: '2px 8px', borderRadius: '20px',
                      border: '1px solid rgba(192,57,43,0.2)'
                    }}>GKS ✓</span>
                  )}
                </div>
              </div>

              {/* Name */}
              <h3 style={{ fontSize: '0.98rem', fontWeight: 600, color: '#0e0e0e', marginBottom: '2px' }}>{u.name}</h3>
              <p style={{ fontSize: '0.78rem', color: '#888', marginBottom: '4px' }}>{u.koreanName}</p>
              <p style={{ fontSize: '0.8rem', color: '#6b6b6b', marginBottom: '10px' }}>
                📍 {u.location} &nbsp;·&nbsp; {u.type}
              </p>

              {/* Description */}
              <p style={{ fontSize: '0.78rem', color: '#777', lineHeight: 1.6, marginBottom: '12px' }}>
                {u.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '12px' }}>
                {u.fields.slice(0, 3).map(f => (
                  <span key={f} style={{
                    fontSize: '0.68rem', padding: '2px 8px', borderRadius: '10px',
                    background: 'rgba(0,0,0,0.05)', color: '#6b6b6b'
                  }}>{f}</span>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.06)'
              }}>
                <span style={{ fontSize: '0.78rem', color: '#0e0e0e', fontWeight: 500 }}>
                  ~${u.tuition.toLocaleString()}/yr
                </span>
                <a href={u.website} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.75rem', color: '#1a3a6b', fontWeight: 500,
                  textDecoration: 'none',
                  background: 'rgba(26,58,107,0.08)',
                  padding: '4px 10px', borderRadius: '6px'
                }}>Visit →</a>
              </div>
            </div>
          ))}
        </div>

        {/* NO RESULTS */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#6b6b6b' }}>
            <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</p>
            <p style={{ fontSize: '1rem', fontWeight: 500 }}>No universities found</p>
            <p style={{ fontSize: '0.85rem' }}>Try changing your search or filters</p>
          </div>
        )}

      </div>
    </div>
  )
}