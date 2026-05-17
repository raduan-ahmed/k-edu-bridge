'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'

const levels = [
  {
    id: 1,
    level: "Level 1",
    topik: "TOPIK I",
    color: "#27ae60",
    bg: "rgba(39,174,96,0.08)",
    border: "rgba(39,174,96,0.2)",
    desc: "Complete beginner. Learn Hangul and basic survival Korean.",
    duration: "2-3 months",
    vocab: "800 words",
    topics: ["Hangul alphabet", "Basic greetings", "Numbers & counting", "Days & time", "Simple sentences"],
    resources: [
      { name: "Talk To Me In Korean (Level 1)", type: "Website", link: "https://talktomeinkorean.com" },
      { name: "Hangul Master - YouTube", type: "YouTube", link: "https://youtube.com" },
      { name: "Duolingo Korean", type: "App", link: "https://duolingo.com" },
      { name: "TOPIK I Past Papers", type: "PDF", link: "https://www.topik.go.kr" },
    ]
  },
  {
    id: 2,
    level: "Level 2",
    topik: "TOPIK I",
    color: "#1a6fa3",
    bg: "rgba(26,111,163,0.08)",
    border: "rgba(26,111,163,0.2)",
    desc: "Elementary level. Daily conversations and simple reading.",
    duration: "3-4 months",
    vocab: "1,500-2,000 words",
    topics: ["Daily conversations", "Shopping & transport", "Food & restaurants", "Weather & seasons", "Simple grammar"],
    resources: [
      { name: "Talk To Me In Korean (Level 2)", type: "Website", link: "https://talktomeinkorean.com" },
      { name: "Korean From Zero", type: "Book", link: "https://koreanfromzero.com" },
      { name: "Pimsleur Korean", type: "App", link: "https://pimsleur.com" },
      { name: "TOPIK I Sample Tests", type: "PDF", link: "https://www.topik.go.kr" },
    ]
  },
  {
    id: 3,
    level: "Level 3",
    topik: "TOPIK II",
    color: "#e67e22",
    bg: "rgba(230,126,34,0.08)",
    border: "rgba(230,126,34,0.2)",
    desc: "Intermediate. Can handle most social situations.",
    duration: "4-6 months",
    vocab: "3,000 words",
    topics: ["Social situations", "Work & school life", "News & media basics", "Korean culture", "Intermediate grammar"],
    resources: [
      { name: "Talk To Me In Korean (Level 3-4)", type: "Website", link: "https://talktomeinkorean.com" },
      { name: "Yonsei Korean 3", type: "Book", link: "https://amazon.com" },
      { name: "KBS World Korean", type: "YouTube", link: "https://youtube.com" },
      { name: "TOPIK II Past Papers", type: "PDF", link: "https://www.topik.go.kr" },
    ]
  },
  {
    id: 4,
    level: "Level 4",
    topik: "TOPIK II",
    color: "#8e44ad",
    bg: "rgba(142,68,173,0.08)",
    border: "rgba(142,68,173,0.2)",
    desc: "Upper intermediate. Academic and professional contexts.",
    duration: "6-8 months",
    vocab: "4,000-5,000 words",
    topics: ["Academic Korean", "Formal writing", "News comprehension", "Professional vocabulary", "Complex grammar"],
    resources: [
      { name: "Sogang Korean 4", type: "Book", link: "https://amazon.com" },
      { name: "Korean News for Learners", type: "Website", link: "https://learnnews.topik.go.kr" },
      { name: "TOPIK II Writing Guide", type: "PDF", link: "https://www.topik.go.kr" },
      { name: "Naver Korean Dictionary", type: "App", link: "https://dict.naver.com" },
    ]
  },
  {
    id: 5,
    level: "Level 5",
    topik: "TOPIK II",
    color: "#C0392B",
    bg: "rgba(192,57,43,0.08)",
    border: "rgba(192,57,43,0.2)",
    desc: "Advanced. University-level Korean proficiency.",
    duration: "8-12 months",
    vocab: "6,000+ words",
    topics: ["Academic papers", "Advanced grammar", "Debate & discussion", "Korean literature", "Professional communication"],
    resources: [
      { name: "Advanced Korean Grammar", type: "Book", link: "https://amazon.com" },
      { name: "Korean Academic Writing", type: "PDF", link: "https://www.topik.go.kr" },
      { name: "KBS Radio Korean", type: "Podcast", link: "https://radio.kbs.co.kr" },
      { name: "TOPIK II Advanced Papers", type: "PDF", link: "https://www.topik.go.kr" },
    ]
  },
  {
    id: 6,
    level: "Level 6",
    topik: "TOPIK II",
    color: "#1a3a6b",
    bg: "rgba(26,58,107,0.08)",
    border: "rgba(26,58,107,0.2)",
    desc: "Expert. Near-native fluency in all contexts.",
    duration: "12+ months",
    vocab: "8,000+ words",
    topics: ["Native-level comprehension", "Academic research", "Professional expertise", "Korean philosophy", "Expert writing"],
    resources: [
      { name: "Korean University Textbooks", type: "Book", link: "https://amazon.com" },
      { name: "Korean Academic Journals", type: "Website", link: "https://www.riss.kr" },
      { name: "YTN News Korean", type: "YouTube", link: "https://youtube.com" },
      { name: "TOPIK II Level 6 Papers", type: "PDF", link: "https://www.topik.go.kr" },
    ]
  },
]

const quizQuestions = [
  {
    id: 1,
    level: 1,
    question: "What does '안녕하세요' mean?",
    options: ["Thank you", "Hello / Good day", "Goodbye", "I'm sorry"],
    answer: 1,
    explanation: "'안녕하세요' (Annyeonghaseyo) is the formal greeting in Korean, meaning 'Hello' or 'Good day'."
  },
  {
    id: 2,
    level: 1,
    question: "Which Korean character represents the sound 'A'?",
    options: ["ㅏ", "ㅓ", "ㅗ", "ㅜ"],
    answer: 0,
    explanation: "'ㅏ' (a) is the Korean vowel for the 'A' sound. ㅓ is 'eo', ㅗ is 'o', ㅜ is 'u'."
  },
  {
    id: 3,
    level: 2,
    question: "How do you say 'Water' in Korean?",
    options: ["밥", "물", "책", "집"],
    answer: 1,
    explanation: "'물' (mul) means water. '밥' is rice/meal, '책' is book, '집' is house."
  },
  {
    id: 4,
    level: 2,
    question: "What does '감사합니다' mean?",
    options: ["I'm sorry", "Excuse me", "Thank you", "Please"],
    answer: 2,
    explanation: "'감사합니다' (Gamsahamnida) means 'Thank you' in formal Korean."
  },
  {
    id: 5,
    level: 3,
    question: "What is the meaning of '대학교'?",
    options: ["High school", "Middle school", "University", "Elementary school"],
    answer: 2,
    explanation: "'대학교' (Daehakgyo) means University. '고등학교' is high school, '중학교' is middle school."
  },
  {
    id: 6,
    level: 3,
    question: "Which sentence means 'I want to study in Korea'?",
    options: ["한국에서 공부하고 싶어요", "한국에 가고 싶어요", "한국어를 배워요", "한국 음식을 좋아해요"],
    answer: 0,
    explanation: "'한국에서 공부하고 싶어요' literally means 'I want to study in Korea'. The -고 싶어요 ending expresses desire."
  },
  {
    id: 7,
    level: 4,
    question: "What does the grammar form '-에도 불구하고' mean?",
    options: ["Because of", "In spite of / Despite", "In order to", "As soon as"],
    answer: 1,
    explanation: "'-에도 불구하고' means 'in spite of' or 'despite'. Example: 어려움에도 불구하고 = despite the difficulties."
  },
  {
    id: 8,
    level: 4,
    question: "What is '장학금' in English?",
    options: ["Tuition fee", "Scholarship", "Dormitory", "Application"],
    answer: 1,
    explanation: "'장학금' (Janghakgeum) means scholarship. This is an important word for students applying to Korean universities!"
  },
  {
    id: 9,
    level: 5,
    question: "What does '입학 지원서' mean?",
    options: ["Graduation certificate", "University application form", "Transcript", "Recommendation letter"],
    answer: 1,
    explanation: "'입학 지원서' means university/school application form. '입학' = admission, '지원서' = application form."
  },
  {
    id: 10,
    level: 5,
    question: "Which word means 'Research'?",
    options: ["수업", "연구", "시험", "졸업"],
    answer: 1,
    explanation: "'연구' (Yeongu) means research. '수업' is class, '시험' is exam, '졸업' is graduation."
  },
]

const roadmap = [
  { week: "Week 1-2", task: "Learn Hangul alphabet completely", icon: "한", color: "#27ae60" },
  { week: "Week 3-4", task: "Basic vocabulary & greetings (Level 1)", icon: "👋", color: "#27ae60" },
  { week: "Month 2", task: "Simple sentences & TOPIK I preparation", icon: "✍️", color: "#1a6fa3" },
  { week: "Month 3", task: "Take TOPIK I exam (Level 1-2 target)", icon: "📝", color: "#1a6fa3" },
  { week: "Month 4-5", task: "Intermediate grammar & vocabulary (Level 3)", icon: "📚", color: "#e67e22" },
  { week: "Month 6", task: "Daily conversation practice & TOPIK II prep", icon: "🗣️", color: "#e67e22" },
  { week: "Month 7-9", task: "Academic Korean & advanced grammar (Level 4)", icon: "🎓", color: "#8e44ad" },
  { week: "Month 10-12", task: "Take TOPIK II exam (Level 3-4 target for GKS)", icon: "🏆", color: "#C0392B" },
]

export default function TopikPage() {
  const [activeLevel, setActiveLevel] = useState(null)
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizDone, setQuizDone] = useState(false)
  const [quizLevel, setQuizLevel] = useState('all')

  const filteredQ = quizLevel === 'all' ? quizQuestions : quizQuestions.filter(q => q.level <= parseInt(quizLevel))

  const handleAnswer = (idx) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    if (idx === filteredQ[currentQ].answer) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ + 1 >= filteredQ.length) {
      setQuizDone(true)
    } else {
      setCurrentQ(c => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQ(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setQuizDone(false)
    setQuizStarted(false)
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
          TOPIK Resources
        </p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '0.8rem' }}>
          Learn Korean — Level 1 to 6
        </h1>
        <p style={{ opacity: 0.75, fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
          Structured resources for every TOPIK level. Start from zero, reach fluency.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['🇰🇷 TOPIK I & II', '📚 6 Levels', '🧠 Practice Quiz', '🗺️ Study Roadmap'].map(b => (
            <span key={b} style={{
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '20px', padding: '6px 16px', fontSize: '0.82rem'
            }}>{b}</span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem' }}>

        {/* TOPIK LEVELS */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C0392B', marginBottom: '8px' }}>TOPIK Levels</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#0e0e0e', marginBottom: '0.5rem' }}>Choose Your Level</h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '1.5rem' }}>Click any level to see resources and study materials.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '14px' }}>
            {levels.map(l => (
              <div key={l.id}>
                <div
                  onClick={() => setActiveLevel(activeLevel === l.id ? null : l.id)}
                  style={{
                    background: activeLevel === l.id ? l.bg : '#fff',
                    border: `1.5px solid ${activeLevel === l.id ? l.border : 'rgba(0,0,0,0.08)'}`,
                    borderRadius: '14px', padding: '1.2rem',
                    cursor: 'pointer', transition: 'all 0.2s',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: l.color, color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Georgia, serif', fontSize: '1.2rem', fontWeight: 700,
                      flexShrink: 0
                    }}>{l.id}</div>
                    <div>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0e0e0e', margin: 0 }}>{l.level}</h3>
                      <span style={{
                        fontSize: '0.72rem', padding: '2px 8px', borderRadius: '10px',
                        background: l.bg, color: l.color, border: `1px solid ${l.border}`,
                        fontWeight: 500
                      }}>{l.topik}</span>
                    </div>
                    <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: l.color, fontWeight: 500 }}>
                      {activeLevel === l.id ? '▲ Hide' : '▼ Show'}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.82rem', color: '#6b6b6b', marginBottom: '8px', lineHeight: 1.5 }}>{l.desc}</p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.72rem', background: 'rgba(0,0,0,0.05)', color: '#555', padding: '2px 8px', borderRadius: '8px' }}>
                      ⏱ {l.duration}
                    </span>
                    <span style={{ fontSize: '0.72rem', background: 'rgba(0,0,0,0.05)', color: '#555', padding: '2px 8px', borderRadius: '8px' }}>
                      📖 {l.vocab}
                    </span>
                  </div>
                </div>

                {/* Expanded */}
                {activeLevel === l.id && (
                  <div style={{
                    background: '#fff', border: `1px solid ${l.border}`,
                    borderRadius: '0 0 14px 14px', padding: '1.2rem',
                    borderTop: 'none', marginTop: '-4px'
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Topics Covered</p>
                        {l.topics.map(t => (
                          <p key={t} style={{ fontSize: '0.78rem', color: '#555', marginBottom: '4px' }}>✓ {t}</p>
                        ))}
                      </div>
                      <div>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Resources</p>
                        {l.resources.map(r => (
                          <a key={r.name} href={r.link} target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex', alignItems: 'center', gap: '6px',
                            fontSize: '0.75rem', color: l.color, marginBottom: '6px',
                            textDecoration: 'none'
                          }}>
                            <span style={{
                              fontSize: '0.65rem', background: l.bg, color: l.color,
                              padding: '1px 6px', borderRadius: '6px', flexShrink: 0
                            }}>{r.type}</span>
                            {r.name} →
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* STUDY ROADMAP */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C0392B', marginBottom: '8px' }}>Study Plan</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#0e0e0e', marginBottom: '0.5rem' }}>12-Month TOPIK Roadmap</h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '1.5rem' }}>From zero to TOPIK II Level 3-4 — perfect for GKS scholarship applicants.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
            {roadmap.map((r, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: '12px', padding: '1rem',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                borderLeft: `4px solid ${r.color}`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '1.4rem' }}>{r.icon}</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: r.color, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{r.week}</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: '#444', lineHeight: 1.5, margin: 0 }}>{r.task}</p>
              </div>
            ))}
          </div>
        </div>

        {/* QUIZ SECTION */}
        <div style={{
          background: '#fff', borderRadius: '20px',
          border: '1px solid rgba(0,0,0,0.08)',
          padding: '2rem', boxShadow: '0 2px 16px rgba(0,0,0,0.07)'
        }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C0392B', marginBottom: '8px' }}>Practice</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#0e0e0e', marginBottom: '0.5rem' }}>Korean Quiz</h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '1.5rem' }}>Test your Korean knowledge with {quizQuestions.length} questions across all levels.</p>

          {!quizStarted && !quizDone && (
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0e0e0e', marginBottom: '8px' }}>Select difficulty:</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[
                    { label: 'All Levels', val: 'all' },
                    { label: 'Beginner (1-2)', val: '2' },
                    { label: 'Intermediate (1-4)', val: '4' },
                    { label: 'Advanced (All)', val: 'all' },
                  ].map(opt => (
                    <button key={opt.val + opt.label} onClick={() => setQuizLevel(opt.val)} style={{
                      padding: '8px 16px', borderRadius: '20px', fontSize: '0.82rem',
                      border: '1.5px solid',
                      borderColor: quizLevel === opt.val ? '#1a3a6b' : 'rgba(0,0,0,0.1)',
                      background: quizLevel === opt.val ? '#1a3a6b' : 'transparent',
                      color: quizLevel === opt.val ? '#fff' : '#6b6b6b',
                      cursor: 'pointer', fontFamily: 'inherit'
                    }}>{opt.label}</button>
                  ))}
                </div>
              </div>
              <button onClick={() => setQuizStarted(true)} style={{
                background: '#C0392B', color: '#fff',
                padding: '12px 28px', borderRadius: '8px',
                fontSize: '0.9rem', fontWeight: 500,
                border: 'none', cursor: 'pointer', fontFamily: 'inherit'
              }}>Start Quiz 🧠</button>
            </div>
          )}

          {quizStarted && !quizDone && (
            <div>
              {/* Progress */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#6b6b6b' }}>Question {currentQ + 1} of {filteredQ.length}</span>
                  <span style={{ fontSize: '0.8rem', color: '#27ae60', fontWeight: 600 }}>Score: {score}/{currentQ}</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(0,0,0,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${((currentQ) / filteredQ.length) * 100}%`, background: '#C0392B', borderRadius: '10px', transition: 'width 0.3s' }} />
                </div>
              </div>

              {/* Question */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.72rem', background: 'rgba(26,58,107,0.08)', color: '#1a3a6b', padding: '2px 8px', borderRadius: '8px', marginBottom: '8px', display: 'inline-block' }}>
                  Level {filteredQ[currentQ].level}
                </span>
                <h3 style={{ fontSize: '1.1rem', color: '#0e0e0e', lineHeight: 1.5, margin: '8px 0 1rem' }}>
                  {filteredQ[currentQ].question}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {filteredQ[currentQ].options.map((opt, idx) => (
                    <button key={idx} onClick={() => handleAnswer(idx)} style={{
                      padding: '12px 16px', borderRadius: '10px', textAlign: 'left',
                      fontSize: '0.88rem', fontFamily: 'inherit', cursor: answered ? 'default' : 'pointer',
                      border: '1.5px solid',
                      borderColor: !answered ? 'rgba(0,0,0,0.1)' :
                        idx === filteredQ[currentQ].answer ? '#27ae60' :
                        idx === selected ? '#C0392B' : 'rgba(0,0,0,0.1)',
                      background: !answered ? '#fff' :
                        idx === filteredQ[currentQ].answer ? 'rgba(39,174,96,0.08)' :
                        idx === selected ? 'rgba(192,57,43,0.08)' : '#fff',
                      color: !answered ? '#0e0e0e' :
                        idx === filteredQ[currentQ].answer ? '#27ae60' :
                        idx === selected ? '#C0392B' : '#999',
                      fontWeight: answered && idx === filteredQ[currentQ].answer ? 600 : 400,
                      transition: 'all 0.15s'
                    }}>
                      {!answered ? `${['A', 'B', 'C', 'D'][idx]}. ` : idx === filteredQ[currentQ].answer ? '✓ ' : idx === selected ? '✗ ' : `${['A', 'B', 'C', 'D'][idx]}. `}
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Explanation */}
              {answered && (
                <div style={{
                  background: 'rgba(26,58,107,0.06)', border: '1px solid rgba(26,58,107,0.15)',
                  borderRadius: '10px', padding: '1rem', marginBottom: '1rem'
                }}>
                  <p style={{ fontSize: '0.82rem', color: '#1a3a6b', lineHeight: 1.6, margin: 0 }}>
                    💡 {filteredQ[currentQ].explanation}
                  </p>
                </div>
              )}

              {answered && (
                <button onClick={nextQuestion} style={{
                  background: '#1a3a6b', color: '#fff',
                  padding: '10px 24px', borderRadius: '8px',
                  fontSize: '0.88rem', fontWeight: 500,
                  border: 'none', cursor: 'pointer', fontFamily: 'inherit'
                }}>
                  {currentQ + 1 >= filteredQ.length ? 'See Results 🎉' : 'Next Question →'}
                </button>
              )}
            </div>
          )}

          {quizDone && (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {score >= filteredQ.length * 0.8 ? '🏆' : score >= filteredQ.length * 0.5 ? '👍' : '📚'}
              </p>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', color: '#0e0e0e', marginBottom: '8px' }}>
                Quiz Complete!
              </h3>
              <p style={{ fontSize: '1rem', color: '#6b6b6b', marginBottom: '1.5rem' }}>
                You scored <strong style={{ color: '#C0392B', fontSize: '1.2rem' }}>{score}/{filteredQ.length}</strong>
                {score >= filteredQ.length * 0.8 ? ' — Excellent! 🔥' : score >= filteredQ.length * 0.5 ? ' — Good job! Keep practicing.' : ' — Keep studying! You can do it.'}
              </p>
              <button onClick={resetQuiz} style={{
                background: '#C0392B', color: '#fff',
                padding: '12px 28px', borderRadius: '8px',
                fontSize: '0.9rem', fontWeight: 500,
                border: 'none', cursor: 'pointer', fontFamily: 'inherit'
              }}>Try Again 🔄</button>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
