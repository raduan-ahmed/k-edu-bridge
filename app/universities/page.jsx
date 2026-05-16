'use client'

import { useState } from 'react'
import universities from '../data/universities'
import Navbar from '../components/Navbar'

const cities = ['All Cities', 'Seoul', 'Daejeon', 'Busan', 'Daegu', 'Gwangju', 'Incheon', 'Suwon', 'Seongnam', 'Yongin', 'Pohang', 'Ulsan', 'Chuncheon', 'Jeonju', 'Jinju', 'Cheongju', 'Cheonan', 'Gyeongsan', 'Gimhae', 'Chuncheon']
const types = ['All Types', 'Public', 'Private']
const fields = ['All Fields', 'Computer Science', 'AI', 'Engineering', 'Business', 'Medicine', 'Law', 'Architecture', 'Design', 'Arts', 'Education', 'Economics', 'Mathematics', 'Physics', 'Chemistry', 'Biotechnology', 'International Studies', 'Media Studies', 'Tourism', 'Agriculture']

const selectStyle = {
  padding: '10px 36px 10px 14px',
  borderRadius: '10px',
  border: '1.5px solid rgba(0,0,0,0.1)',
  fontSize: '0.85rem',
  color: '#0e0e0e',
  background: '#fff',
  cursor: 'pointer',
  outline: 'none',
  fontFamily: 'inherit',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b6b6b' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 12px center',
  minWidth: '160px',
}

export default function UniversitiesPage() {
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('All Cities')
  const [type, setType] = useState('All Types')
  const [field, setField] = useState('All Fields')
  const [sort, setSort] = useState('rank')

  const filtered = universities
    .filter(u => {
      const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.koreanName.includes(search) ||
        u.location.toLowerCase().includes(search.toLowerCase())
      const matchCity = city === 'All Cities' || u.location === city
      const matchType = type === 'All Types' || u.type === type
      const matchField = field === 'All Fields' || u.fields.some(f => f.includes(field))
      return matchSearch && matchCity && matchType && matchField
    })
    .sort((a, b) => {
      if (sort === 'rank') return a.rank - b.rank
      if (sort === 'tuition_low') return a.tuition - b.tuition
      if (sort === 'tuition_high') return b.tuition - a.tuition
      return 0
    })

  const resetFilters = () => {
    setSearch('')
    setCity('All Cities')
    setType('All Types')
    setField('All Fields')
    setSort('rank')
  }

    return (
      <div style={{ background: '#F7F5F0', minHeight: '100vh', paddingTop: '60px' }}>
      <Navbar />

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
        <p style={{ opacity: 0.75, fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
          Browse top Korean universities — filter by city, field, and type
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '6px 16px', fontSize: '0.82rem' }}>
            🏛️ {universities.length} Universities
          </span>
          <span style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '6px 16px', fontSize: '0.82rem' }}>
            🎓 GKS Scholarship Available
          </span>
          <span style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '6px 16px', fontSize: '0.82rem' }}>
            🇧🇩 Bangladesh Friendly
          </span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>

        {/* SEARCH + FILTERS */}
        <div style={{
          background: '#fff', borderRadius: '16px',
          border: '1px solid rgba(0,0,0,0.08)',
          padding: '1.5rem', marginBottom: '1.5rem',
          boxShadow: '0 2px 16px rgba(0,0,0,0.07)'
        }}>
          {/* Search */}
          <input
            type="text"
            placeholder="🔍  Search by university name, city..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%', padding: '12px 16px',
              border: '1.5px solid rgba(0,0,0,0.1)',
              borderRadius: '10px', fontSize: '0.9rem',
              marginBottom: '1rem', outline: 'none',
              fontFamily: 'inherit', background: '#F7F5F0',
              transition: 'border-color 0.2s'
            }}
          />

          {/* Dropdowns */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>

            <div style={{ position: 'relative' }}>
              <label style={{ fontSize: '0.72rem', color: '#6b6b6b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>📍 City</label>
              <select value={city} onChange={e => setCity(e.target.value)} style={{
                ...selectStyle,
                borderColor: city !== 'All Cities' ? '#1a3a6b' : 'rgba(0,0,0,0.1)',
                color: city !== 'All Cities' ? '#1a3a6b' : '#0e0e0e',
                fontWeight: city !== 'All Cities' ? 600 : 400,
              }}>
                {[...new Set(cities)].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div style={{ position: 'relative' }}>
              <label style={{ fontSize: '0.72rem', color: '#6b6b6b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>🏫 Type</label>
              <select value={type} onChange={e => setType(e.target.value)} style={{
                ...selectStyle,
                borderColor: type !== 'All Types' ? '#C0392B' : 'rgba(0,0,0,0.1)',
                color: type !== 'All Types' ? '#C0392B' : '#0e0e0e',
                fontWeight: type !== 'All Types' ? 600 : 400,
              }}>
                {types.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div style={{ position: 'relative' }}>
              <label style={{ fontSize: '0.72rem', color: '#6b6b6b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>📚 Field</label>
              <select value={field} onChange={e => setField(e.target.value)} style={{
                ...selectStyle,
                borderColor: field !== 'All Fields' ? '#27ae60' : 'rgba(0,0,0,0.1)',
                color: field !== 'All Fields' ? '#27ae60' : '#0e0e0e',
                fontWeight: field !== 'All Fields' ? 600 : 400,
                minWidth: '180px'
              }}>
                {fields.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>

            <div style={{ position: 'relative' }}>
              <label style={{ fontSize: '0.72rem', color: '#6b6b6b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>↕️ Sort</label>
              <select value={sort} onChange={e => setSort(e.target.value)} style={selectStyle}>
                <option value="rank">By Ranking</option>
                <option value="tuition_low">Tuition: Low to High</option>
                <option value="tuition_high">Tuition: High to Low</option>
              </select>
            </div>

            {(city !== 'All Cities' || type !== 'All Types' || field !== 'All Fields' || search) && (
              <div style={{ marginTop: '20px' }}>
                <button onClick={resetFilters} style={{
                  padding: '10px 16px', borderRadius: '10px',
                  border: '1.5px solid rgba(192,57,43,0.3)',
                  background: 'rgba(192,57,43,0.06)',
                  color: '#C0392B', fontSize: '0.82rem',
                  cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500
                }}>✕ Reset Filters</button>
              </div>
            )}
          </div>
        </div>

        {/* RESULTS COUNT */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
          <p style={{ fontSize: '0.88rem', color: '#6b6b6b' }}>
            Showing <strong style={{ color: '#0e0e0e' }}>{filtered.length}</strong> of {universities.length} universities
          </p>
        </div>

        {/* UNIVERSITY GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
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
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{
                    fontSize: '0.72rem', fontWeight: 500,
                    background: 'rgba(26,58,107,0.08)', color: '#1a3a6b',
                    padding: '3px 10px', borderRadius: '20px'
                  }}>Rank #{u.rank}</span>
                  {u.scholarship && (
                    <span style={{
                      fontSize: '0.68rem', background: 'rgba(192,57,43,0.08)',
                      color: '#C0392B', padding: '2px 8px', borderRadius: '20px',
                      border: '1px solid rgba(192,57,43,0.2)', textAlign: 'center'
                    }}>GKS ✓</span>
                  )}
                </div>
              </div>

              {/* Name */}
              <h3 style={{ fontSize: '0.98rem', fontWeight: 600, color: '#0e0e0e', marginBottom: '2px' }}>{u.name}</h3>
              <p style={{ fontSize: '0.78rem', color: '#aaa', marginBottom: '4px' }}>{u.koreanName}</p>
              <p style={{ fontSize: '0.8rem', color: '#6b6b6b', marginBottom: '8px' }}>
                📍 {u.location} &nbsp;·&nbsp;
                <span style={{
                  fontSize: '0.72rem', padding: '1px 7px', borderRadius: '8px',
                  background: u.type === 'Public' ? 'rgba(39,174,96,0.1)' : 'rgba(142,68,173,0.1)',
                  color: u.type === 'Public' ? '#27ae60' : '#8e44ad'
                }}>{u.type}</span>
              </p>

              {/* Description */}
              <p style={{ fontSize: '0.78rem', color: '#777', lineHeight: 1.6, marginBottom: '10px' }}>
                {u.description}
              </p>

              {/* Fields */}
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '12px' }}>
                {u.fields.slice(0, 4).map(f => (
                  <span key={f} style={{
                    fontSize: '0.68rem', padding: '2px 8px', borderRadius: '10px',
                    background: field !== 'All Fields' && f.includes(field)
                      ? 'rgba(39,174,96,0.15)' : 'rgba(0,0,0,0.05)',
                    color: field !== 'All Fields' && f.includes(field) ? '#27ae60' : '#6b6b6b',
                    fontWeight: field !== 'All Fields' && f.includes(field) ? 600 : 400,
                    border: field !== 'All Fields' && f.includes(field) ? '1px solid rgba(39,174,96,0.3)' : 'none'
                  }}>{f}</span>
                ))}
                {u.fields.length > 4 && (
                  <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: '10px', background: 'rgba(0,0,0,0.05)', color: '#999' }}>
                    +{u.fields.length - 4} more
                  </span>
                )}
              </div>

              {/* Footer */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.06)'
              }}>
                <span style={{ fontSize: '0.82rem', color: '#0e0e0e', fontWeight: 600 }}>
                  ~${u.tuition.toLocaleString()}<span style={{ fontSize: '0.7rem', color: '#999', fontWeight: 400 }}>/year</span>
                </span>
                <a href={u.website} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.75rem', color: '#1a3a6b', fontWeight: 500,
                  textDecoration: 'none',
                  background: 'rgba(26,58,107,0.08)',
                  padding: '5px 12px', borderRadius: '6px',
                  border: '1px solid rgba(26,58,107,0.15)'
                }}>Visit Website →</a>
              </div>
            </div>
          ))}
        </div>

        {/* NO RESULTS */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#6b6b6b' }}>
            <p style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</p>
            <p style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '8px' }}>No universities found</p>
            <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>Try changing your search or filters</p>
            <button onClick={resetFilters} style={{
              padding: '10px 20px', borderRadius: '8px',
              background: '#1a3a6b', color: '#fff',
              border: 'none', cursor: 'pointer', fontSize: '0.85rem'
            }}>Reset All Filters</button>
          </div>
        )}

      </div>
    </div>
  )
}
