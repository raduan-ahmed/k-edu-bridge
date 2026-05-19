'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'

const posts = [
  {
    id: 1,
    title: "How to Write a Perfect SOP for Korean Universities",
    slug: "how-to-write-sop-korean-universities",
    category: "Scholarship",
    date: "May 10, 2026",
    readTime: "8 min read",
    emoji: "📝",
    featured: true,
    excerpt: "Your Statement of Purpose (SOP) is one of the most important parts of your application. Learn how to write a compelling SOP that stands out to Korean university admissions committees.",
    content: [
      {
        heading: "What is an SOP?",
        text: "A Statement of Purpose (SOP) is a personal essay where you explain your academic background, research interests, career goals, and why you want to study at a specific Korean university. It is one of the most critical documents in your application."
      },
      {
        heading: "Structure of a Good SOP",
        text: "A well-structured SOP has 4-5 paragraphs: (1) Introduction — Hook the reader with your passion. (2) Academic Background — Your undergraduate studies and achievements. (3) Research/Work Experience — Relevant projects or internships. (4) Why Korea & This University — Specific reasons for choosing Korea and the university. (5) Future Goals — What you plan to do after graduation."
      },
      {
        heading: "Tips for GKS SOP",
        text: "For GKS specifically: mention Korea's strong research infrastructure, specific professors you want to work with, and how studying in Korea aligns with Bangladesh's development goals. Reviewers appreciate candidates who show genuine interest in Korean culture and academic environment."
      },
      {
        heading: "Common Mistakes to Avoid",
        text: "Do not write a generic SOP that could apply to any university. Avoid focusing too much on personal hardships. Do not exceed 2 pages (800-1000 words). Proofread carefully — grammar mistakes can disqualify strong candidates."
      },
    ]
  },
  {
    id: 2,
    title: "GKS Scholarship 2026: Complete Guide for Bangladeshi Students",
    slug: "gks-scholarship-2026-guide-bangladesh",
    category: "Scholarship",
    date: "May 5, 2026",
    readTime: "12 min read",
    emoji: "🏆",
    featured: true,
    excerpt: "Everything you need to know about the GKS (Global Korea Scholarship) 2026 application — eligibility, documents, timeline, and tips from students who got selected.",
    content: [
      {
        heading: "What is GKS?",
        text: "The Global Korea Scholarship (GKS), previously known as KGSP, is a Korean government scholarship program that covers full tuition, living expenses, airfare, and Korean language training for international students. It is one of the most generous scholarships in Asia."
      },
      {
        heading: "2026 Timeline",
        text: "Application opens: January 2026. Embassy submission deadline: March 2026. Embassy interview: April 2026. Final results: June 2026. Korean language training starts: September 2026. University enrollment: March 2027."
      },
      {
        heading: "Eligibility for Bangladeshis",
        text: "Must be a Bangladesh citizen (not Korean). Age under 25 for undergraduate, under 40 for graduate. Minimum GPA 2.64/4.0 (equivalent to 2nd class/60%). Good health — medical certificate required. No criminal record."
      },
      {
        heading: "Documents Checklist",
        text: "Passport (valid 2+ years). Academic transcripts (apostilled). 2 Letters of Recommendation. Statement of Purpose. Medical certificate. TOPIK certificate (if available). Personal statement. GKS application form."
      },
    ]
  },
  {
    id: 3,
    title: "TOPIK Exam Guide: From Zero to Level 4 in 12 Months",
    slug: "topik-exam-guide-zero-to-level-4",
    category: "TOPIK",
    date: "April 28, 2026",
    readTime: "10 min read",
    emoji: "🇰🇷",
    featured: false,
    excerpt: "A practical study plan to go from complete beginner to TOPIK Level 4 in one year — the level required for GKS scholarship Korean-medium programs.",
    content: [
      {
        heading: "Why TOPIK Matters",
        text: "TOPIK (Test of Proficiency in Korean) is the standardized Korean language test. For GKS scholarship, TOPIK Level 3-4 is required for Korean-medium programs. Even for English-medium programs, having TOPIK shows commitment and improves your application."
      },
      {
        heading: "Month 1-3: Beginner (Level 1-2)",
        text: "Focus on Hangul mastery, basic vocabulary (800 words), and simple sentence patterns. Resources: Talk To Me In Korean (TTMIK) Level 1-2, Duolingo Korean, basic grammar workbooks. Target: Pass TOPIK I by Month 3."
      },
      {
        heading: "Month 4-8: Intermediate (Level 3)",
        text: "Focus on conversational Korean, news comprehension basics, and writing practice. Resources: TTMIK Level 3-4, KBS World Korean, TOPIK II practice papers. Target: TOPIK Level 3 by Month 8."
      },
      {
        heading: "Month 9-12: Upper Intermediate (Level 4)",
        text: "Focus on academic Korean, formal writing, and reading comprehension. Resources: Yonsei/Sogang textbooks, Korean news, TOPIK II past papers. Target: TOPIK Level 4 by Month 12."
      },
    ]
  },
  {
    id: 4,
    title: "Korean Student Life: What to Expect in Your First Year",
    slug: "korean-student-life-first-year",
    category: "Student Life",
    date: "April 20, 2026",
    readTime: "7 min read",
    emoji: "🏙️",
    featured: false,
    excerpt: "A Bangladeshi student's honest guide to living in Korea — from dormitories and food to making friends and managing finances.",
    content: [
      {
        heading: "Accommodation",
        text: "Most universities offer dormitories for international students. GKS scholars usually get dormitory priority. Monthly cost: ₩200,000-400,000. Off-campus housing (고시원 or 원룸) costs ₩300,000-600,000/month. Living in a university dorm is recommended for your first year."
      },
      {
        heading: "Food in Korea",
        text: "Halal food is increasingly available in Korean cities. Areas near universities often have halal restaurants. Korean convenience stores (GS25, CU, 7-Eleven) are your best friends — open 24/7 with affordable food. Monthly food budget: ₩300,000-500,000."
      },
      {
        heading: "Making Friends",
        text: "Join international student clubs and Korean language exchange programs (언어교환). Koreans are generally friendly once you break the ice. Learning basic Korean phrases helps a lot. The Bangladeshi Students Association in Korea is very active — connect with them immediately."
      },
      {
        heading: "Managing Finances",
        text: "GKS monthly allowance is ₩900,000 — enough to cover basic living costs. Open a Korean bank account (Shinhan, KB, KEB Hana) as soon as you arrive. Use KakaoBank or Toss app for easy banking. Send money home via Wise or Western Union."
      },
    ]
  },
  {
    id: 5,
    title: "Top 10 Korean Universities for Computer Science & AI",
    slug: "top-korean-universities-computer-science-ai",
    category: "Universities",
    date: "April 15, 2026",
    readTime: "6 min read",
    emoji: "💻",
    featured: false,
    excerpt: "If you're a CSE student looking to study AI, machine learning, or software engineering in Korea, here are the top universities ranked by research output and industry connections.",
    content: [
      {
        heading: "1. KAIST",
        text: "Korea's top STEM university. World-class AI and CS research. English-medium graduate programs. Strong industry connections with Samsung, LG, and global tech companies. Fully funded scholarships available."
      },
      {
        heading: "2. Seoul National University (SNU)",
        text: "Korea's most prestigious university. Excellent CS and AI departments. Competitive but highly rewarding. Located in Seoul with great career opportunities. GKS scholarship available."
      },
      {
        heading: "3. POSTECH",
        text: "Focused exclusively on science and technology. Smaller class sizes mean more professor attention. Strong research funding from POSCO. Located in Pohang — quieter campus life compared to Seoul."
      },
      {
        heading: "4. Yonsei University",
        text: "SKY group member in Seoul. Growing AI and NLP research programs. Good English-medium programs. Strong international student community. Beautiful campus in central Seoul."
      },
    ]
  },
  {
    id: 6,
    title: "D-2 Visa Guide: How to Get Your Korean Student Visa",
    slug: "d2-visa-guide-korean-student-visa",
    category: "Visa",
    date: "April 8, 2026",
    readTime: "9 min read",
    emoji: "🛂",
    featured: false,
    excerpt: "A step-by-step guide to applying for the D-2 student visa at the Korean Embassy in Dhaka — documents needed, processing time, and common mistakes to avoid.",
    content: [
      {
        heading: "What is D-2 Visa?",
        text: "The D-2 (General Training) visa is the student visa for international students enrolled in Korean universities. It is required for all study programs longer than 3 months. GKS scholars get visa support from NIIED."
      },
      {
        heading: "Required Documents",
        text: "Valid passport (6+ months validity). University acceptance letter. Application form (available at Korean Embassy). 2 passport photos. Financial proof (GKS award letter counts). Medical certificate. Visa fee payment receipt."
      },
      {
        heading: "Application Process",
        text: "Step 1: Get acceptance letter from Korean university. Step 2: Fill visa application form online at Korean Embassy website. Step 3: Book appointment at Korean Embassy in Dhaka (Gulshan). Step 4: Submit documents. Step 5: Wait 2-4 weeks for processing."
      },
      {
        heading: "Tips",
        text: "Apply at least 6-8 weeks before your departure date. Make copies of all documents. The Korean Embassy in Dhaka is located in Gulshan — check their website for current appointment availability. GKS scholars should coordinate with NIIED for visa letter."
      },
    ]
  },
  {
    id: 7,
    title: "How to Contact Korean Professors for Graduate Admission",
    slug: "how-to-contact-korean-professors",
    category: "Scholarship",
    date: "March 30, 2026",
    readTime: "8 min read",
    emoji: "📧",
    featured: false,
    excerpt: "For graduate school in Korea, contacting a professor before applying can dramatically increase your chances. Here's how to write the perfect email.",
    content: [
      {
        heading: "Why Contact Professors?",
        text: "In Korean graduate admissions, having a professor's support is crucial — especially for research-based programs (MS, PhD). Many Korean professors actively select their own students. A positive response from a professor dramatically increases your admission chances."
      },
      {
        heading: "How to Find the Right Professor",
        text: "Search the university department website. Look for professors whose research aligns with your interests. Read their recent papers (Google Scholar, ResearchGate). Choose 5-10 professors to contact — not just one."
      },
      {
        heading: "Email Template",
        text: "Subject: Prospective Graduate Student — [Your Name] — [Research Area]. Dear Professor [Name], I am [Name], a recent graduate from [University] in Bangladesh with a background in [field]. I came across your research on [specific topic] and found it highly relevant to my research interest in [your interest]. I am planning to apply to [University] for [program] starting [semester]. Would you have any openings in your lab? I have attached my CV and academic transcripts. Thank you for your time."
      },
      {
        heading: "Follow-up",
        text: "If no response in 2 weeks, send one polite follow-up. Don't email multiple times — professors are busy. A non-response doesn't mean rejection — still apply to the university."
      },
    ]
  },
  {
    id: 8,
    title: "Cost of Living in Korea: Complete Budget Guide for Bangladeshis",
    slug: "cost-of-living-korea-budget-guide",
    category: "Student Life",
    date: "March 22, 2026",
    readTime: "6 min read",
    emoji: "💰",
    featured: false,
    excerpt: "How much does it actually cost to live in Korea as a student? A realistic monthly budget breakdown covering accommodation, food, transport, and more.",
    content: [
      {
        heading: "Monthly Budget Overview",
        text: "On the GKS allowance of ₩900,000/month, most students manage comfortably. Dormitory: ₩200,000-400,000. Food: ₩300,000-400,000. Transport: ₩50,000-100,000. Phone: ₩30,000-50,000. Miscellaneous: ₩100,000-150,000. Total: ₩680,000-1,100,000."
      },
      {
        heading: "Saving on Food",
        text: "Cook your own meals — Korean supermarkets (Homeplus, E-Mart) are affordable. University cafeterias (학생식당) offer meals for ₩3,000-5,000. Convenience store meals are ₩2,000-4,000. Eating out at restaurants averages ₩8,000-15,000 per meal."
      },
      {
        heading: "Transport",
        text: "Korean public transport is excellent and affordable. T-Money card for buses and subway — ₩1,400 per ride. Monthly transport pass: ₩55,000. Taxis (KakaoTaxi) for late nights. Korean KTX trains for intercity travel."
      },
      {
        heading: "Part-time Work",
        text: "D-2 visa holders can work up to 20 hours/week. Minimum wage: ₩9,860/hour (2026). Popular jobs: English tutoring, convenience store, restaurant. Always check visa regulations before taking a job."
      },
    ]
  },
]

const categories = ['All', 'Scholarship', 'TOPIK', 'Universities', 'Student Life', 'Visa']

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedPost, setSelectedPost] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = posts.filter(p => p.featured)

  if (selectedPost) {
    return (
      <div style={{ background: '#F7F5F0', minHeight: '100vh', paddingTop: '60px' }}>
        <Navbar />
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '2rem' }}>
          <button onClick={() => setSelectedPost(null)} style={{
            background: 'transparent', border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '8px', padding: '8px 16px',
            fontSize: '0.85rem', cursor: 'pointer',
            color: '#6b6b6b', marginBottom: '1.5rem',
            fontFamily: 'inherit'
          }}>← Back to Blog</button>

          <div style={{
            background: '#fff', borderRadius: '16px',
            border: '1px solid rgba(0,0,0,0.08)',
            padding: '2.5rem', boxShadow: '0 2px 16px rgba(0,0,0,0.07)'
          }}>
            <span style={{ fontSize: '0.75rem', background: 'rgba(192,57,43,0.1)', color: '#C0392B', padding: '3px 10px', borderRadius: '20px', fontWeight: 500 }}>
              {selectedPost.category}
            </span>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#0e0e0e', margin: '1rem 0 0.5rem', lineHeight: 1.3 }}>
              {selectedPost.emoji} {selectedPost.title}
            </h1>
            <p style={{ fontSize: '0.82rem', color: '#aaa', marginBottom: '1.5rem' }}>
              {selectedPost.date} · {selectedPost.readTime}
            </p>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic', borderLeft: '3px solid #C0392B', paddingLeft: '1rem' }}>
              {selectedPost.excerpt}
            </p>
            <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '2rem' }} />
            {selectedPost.content.map((section, i) => (
              <div key={i} style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#0e0e0e', marginBottom: '0.6rem' }}>{section.heading}</h2>
                <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.8 }}>{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
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
          Blog & Resources
        </p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '0.8rem' }}>
          Guides, Tips & Student Stories
        </h1>
        <p style={{ opacity: 0.75, fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
          Everything you need to know about studying in Korea — from scholarships to student life.
        </p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem' }}>

        {/* FEATURED */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C0392B', marginBottom: '1rem' }}>Featured Posts</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
            {featured.map(post => (
              <div key={post.id} onClick={() => setSelectedPost(post)} style={{
                background: 'linear-gradient(135deg, #1a3a6b, #0d2347)',
                borderRadius: '16px', padding: '1.8rem',
                cursor: 'pointer', color: '#fff',
                transition: 'transform 0.2s',
                position: 'relative', overflow: 'hidden'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.8rem' }}>{post.emoji}</span>
                <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.15)', padding: '3px 10px', borderRadius: '20px', marginBottom: '0.8rem', display: 'inline-block' }}>
                  {post.category}
                </span>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: 1.4, marginBottom: '0.6rem' }}>{post.title}</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.75, lineHeight: 1.6, marginBottom: '1rem' }}>{post.excerpt.substring(0, 100)}...</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{post.date}</span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="🔍  Search articles..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%', padding: '12px 16px',
            border: '1.5px solid rgba(0,0,0,0.1)',
            borderRadius: '10px', fontSize: '0.9rem',
            marginBottom: '1rem', outline: 'none',
            fontFamily: 'inherit', background: '#fff',
          }}
        />

        {/* CATEGORY TABS */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '7px 16px', borderRadius: '20px', fontSize: '0.82rem',
              border: '1.5px solid',
              borderColor: activeCategory === cat ? '#1a3a6b' : 'rgba(0,0,0,0.1)',
              background: activeCategory === cat ? '#1a3a6b' : '#fff',
              color: activeCategory === cat ? '#fff' : '#6b6b6b',
              cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500
            }}>{cat}</button>
          ))}
        </div>

        {/* POSTS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          {filtered.map(post => (
            <div key={post.id} onClick={() => setSelectedPost(post)} style={{
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '14px', padding: '1.4rem',
              cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '1.8rem' }}>{post.emoji}</span>
                <span style={{
                  fontSize: '0.7rem', padding: '2px 10px', borderRadius: '20px', fontWeight: 500,
                  background: 'rgba(192,57,43,0.08)', color: '#C0392B'
                }}>{post.category}</span>
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0e0e0e', marginBottom: '8px', lineHeight: 1.4 }}>{post.title}</h3>
              <p style={{ fontSize: '0.8rem', color: '#777', lineHeight: 1.6, marginBottom: '12px' }}>
                {post.excerpt.substring(0, 100)}...
              </p>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.06)',
                fontSize: '0.75rem', color: '#aaa'
              }}>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#6b6b6b' }}>
            <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</p>
            <p style={{ fontSize: '1rem', fontWeight: 500 }}>No articles found</p>
            <p style={{ fontSize: '0.85rem' }}>Try a different search or category</p>
          </div>
        )}

      </div>
    </div>
  )
}
