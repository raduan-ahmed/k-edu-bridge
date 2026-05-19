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

  {
    id: 9,
    title: "Seoul vs Busan vs Daejeon: Which City is Best for Students?",
    slug: "seoul-busan-daejeon-best-city-students",
    category: "Student Life",
    date: "March 15, 2026",
    readTime: "7 min read",
    emoji: "🗺️",
    featured: false,
    excerpt: "Choosing the right city in Korea can make a huge difference in your student experience. Here's an honest comparison of Korea's top student cities.",
    content: [
      {
        heading: "Seoul — The Capital",
        text: "Seoul is Korea's largest city with the most universities, job opportunities, and international community. Cost of living is higher but more halal food options, better public transport, and more cultural experiences. Best for: Business, Law, Arts students who want city life."
      },
      {
        heading: "Busan — The Beach City",
        text: "Korea's second largest city. More affordable than Seoul with a relaxed coastal vibe. PNU, PKNU, and Dong-A University are located here. Great seafood, beautiful beaches, and a growing startup scene. Best for: Engineering, Marine Science students who prefer a quieter environment."
      },
      {
        heading: "Daejeon — The Science City",
        text: "Home to KAIST, ETRI, and many research institutes. If you're in STEM, Daejeon is paradise. Very affordable living costs, clean environment, and focused academic atmosphere. Less nightlife but perfect for serious research students."
      },
      {
        heading: "Verdict",
        text: "For most Bangladeshi students, Seoul offers the best overall experience. For STEM research, Daejeon/KAIST is unbeatable. For a balanced, affordable experience, Busan is a hidden gem."
      },
    ]
  },
  {
    id: 10,
    title: "Letter of Recommendation (LOR): How to Ask and What to Include",
    slug: "letter-of-recommendation-guide",
    category: "Scholarship",
    date: "March 8, 2026",
    readTime: "6 min read",
    emoji: "📬",
    featured: false,
    excerpt: "Two strong Letters of Recommendation can make or break your GKS application. Learn how to ask professors, what details to provide, and what makes a great LOR.",
    content: [
      {
        heading: "Who Should Write Your LOR?",
        text: "The best LORs come from university professors who taught you, research supervisors who worked with you, or employers/internship supervisors. For GKS, at least one academic LOR is required. Choose people who know your work well — a generic LOR from a famous professor is worse than a specific one from someone who knows you."
      },
      {
        heading: "How to Ask",
        text: "Ask at least 6-8 weeks before the deadline. Meet in person or email formally. Provide a resume, your SOP draft, and information about the scholarship. Explain why you're applying and why you chose them to write the LOR."
      },
      {
        heading: "What a Strong LOR Includes",
        text: "Specific examples of your academic performance. Your research abilities and intellectual curiosity. Personal qualities — leadership, teamwork, problem-solving. Why you're suitable for Korea and the specific program. Comparison with other students (e.g., 'top 5% of students I've taught')."
      },
      {
        heading: "LOR Format for GKS",
        text: "GKS has an official LOR form available on the application portal. The recommender must sign and seal the letter. Some universities accept letters on official letterhead instead. Always confirm the format with the Korean Embassy."
      },
    ]
  },
  {
    id: 11,
    title: "Korean Food Guide for Bangladeshi Muslims",
    slug: "korean-food-guide-bangladeshi-muslims",
    category: "Student Life",
    date: "February 28, 2026",
    readTime: "5 min read",
    emoji: "🍜",
    featured: false,
    excerpt: "Finding halal food in Korea is easier than you think. Here's a practical guide to eating well as a Muslim student in Korea.",
    content: [
      {
        heading: "Halal Food Options",
        text: "Major Korean cities have growing halal restaurant scenes. Seoul's Itaewon district has the highest concentration of halal restaurants and the Seoul Central Mosque. Areas near universities with many foreign students often have halal options. Muslim-friendly restaurants are listed on apps like HalalTrip and Zabihah."
      },
      {
        heading: "Korean Foods That Are Often Halal",
        text: "Rice dishes (bibimbap without meat or with halal meat). Vegetable banchan (side dishes). Doenjang jjigae (soybean paste stew — check ingredients). Japchae (glass noodles with vegetables). Always ask about pork-based broths as many Korean soups use pork stock."
      },
      {
        heading: "Cooking Your Own Meals",
        text: "The most practical solution is cooking yourself. Korean supermarkets (Homeplus, E-Mart, Lotte Mart) sell halal-certified chicken and beef. Bangladeshi/South Asian grocery stores exist in Itaewon (Seoul) and near major university areas. Rice cookers are essential — available cheaply at Daiso (Korean equivalent of a dollar store)."
      },
      {
        heading: "University Cafeterias",
        text: "Many universities now offer vegetarian options that are pork-free. KAIST, SNU, and Yonsei have specific halal or Muslim-friendly meal options due to their international student populations. Check with your university's student affairs office on arrival."
      },
    ]
  },
  {
    id: 12,
    title: "How to Prepare for Your GKS Embassy Interview",
    slug: "gks-embassy-interview-preparation",
    category: "Scholarship",
    date: "February 20, 2026",
    readTime: "8 min read",
    emoji: "🎤",
    featured: false,
    excerpt: "The GKS embassy interview is the final hurdle before selection. Here are the most common questions asked at the Korean Embassy in Dhaka and how to answer them.",
    content: [
      {
        heading: "Interview Format",
        text: "The GKS embassy interview is conducted at the Korean Embassy in Dhaka. Usually 2-3 interviewers (Korean officials and Bangladeshi academics). Duration: 15-20 minutes. Questions are in English or Korean. Dress formally — first impressions matter."
      },
      {
        heading: "Common Questions",
        text: "1. Why do you want to study in Korea? 2. Why did you choose this university/professor? 3. What is your research plan? 4. What will you do after graduation? 5. How will your studies benefit Bangladesh? 6. Do you speak any Korean? 7. Tell me about yourself. 8. What do you know about Korean culture/society?"
      },
      {
        heading: "How to Answer Effectively",
        text: "Be specific — mention professor names, research topics, and university programs. Show genuine interest in Korean culture, not just the scholarship money. Connect your studies to development goals (Bangladesh needs X, you will study Y and bring back Z). Practice answers aloud — don't memorize scripts but know your key points."
      },
      {
        heading: "Documents to Bring",
        text: "All original documents submitted with your application. GKS application form copy. Passport. Any additional certificates or achievements. Be organized — having your documents in order shows professionalism."
      },
    ]
  },
  {
    id: 13,
    title: "Top Research Areas in Korean Universities for Bangladeshi Students",
    slug: "top-research-areas-korean-universities",
    category: "Universities",
    date: "February 12, 2026",
    readTime: "7 min read",
    emoji: "🔬",
    featured: false,
    excerpt: "Korea is a world leader in several research fields. If you're planning graduate studies, here are the hottest research areas where Bangladeshi students can shine.",
    content: [
      {
        heading: "Artificial Intelligence & NLP",
        text: "Korea is investing heavily in AI research. KAIST, SNU, and Yonsei have world-class AI labs. Bangladeshi students with strong CS backgrounds are highly competitive here. Natural Language Processing (NLP) is especially relevant as research on low-resource languages like Bangla is growing."
      },
      {
        heading: "Semiconductor & Display Technology",
        text: "Korea is home to Samsung and LG — world leaders in semiconductors and displays. SKKU (backed by Samsung), KAIST, and POSTECH have cutting-edge labs. For electrical engineering and materials science students, this is a golden opportunity."
      },
      {
        heading: "Bioengineering & Healthcare",
        text: "Korea's aging population drives massive investment in biotech and healthcare research. KAIST, SNU Medical School, and POSTECH have excellent bioengineering programs. This field offers strong scholarship opportunities and industry connections."
      },
      {
        heading: "Climate & Environmental Science",
        text: "Korea's Green New Deal initiative funds research in renewable energy, climate science, and environmental engineering. UNIST and POSTECH lead in energy research. Students from Bangladesh — a country highly affected by climate change — bring unique perspectives."
      },
    ]
  },
  {
    id: 14,
    title: "Korea After Graduation: Career Options for International Students",
    slug: "korea-career-options-after-graduation",
    category: "Student Life",
    date: "February 5, 2026",
    readTime: "6 min read",
    emoji: "💼",
    featured: false,
    excerpt: "What happens after you finish your degree in Korea? Here are the options for staying, working, and building a career in Korea or back in Bangladesh.",
    content: [
      {
        heading: "Stay and Work in Korea",
        text: "After graduation, you can apply for a D-10 (Job Seeker) visa and stay in Korea for up to 1 year to find employment. Major Korean companies — Samsung, LG, Hyundai, SK — actively recruit international graduates. Tech startups in Seoul's Gangnam and Pangyo areas are also great options."
      },
      {
        heading: "Changing Visa to Work Visa",
        text: "Once employed, convert D-10 to E-7 (Specific Activities) or E-4 (Technology Transfer) visa. After 3-5 years of work, you can apply for F-2 (Residence) and eventually F-5 (Permanent Residence). Korea has a point-based immigration system for highly skilled workers."
      },
      {
        heading: "Return to Bangladesh",
        text: "A Korean university degree — especially from KAIST or SKY universities — carries enormous prestige in Bangladesh. Government jobs (BCS), multinational companies, and academia all value Korean-educated professionals. The Korea-Bangladesh economic relationship is growing, creating demand for Korean-speaking professionals."
      },
      {
        heading: "Academic Career",
        text: "A PhD from a Korean university qualifies you to apply for faculty positions at Bangladeshi universities. DIU, BUET, NSU, and BRAC University actively recruit PhD holders. You can also apply for postdoc positions in Korea or globally after your Korean PhD."
      },
    ]
  },
  {
    id: 15,
    title: "Korean Language Apps Ranked: Best Tools for TOPIK Preparation",
    slug: "korean-language-apps-ranked-topik",
    category: "TOPIK",
    date: "January 28, 2026",
    readTime: "5 min read",
    emoji: "📱",
    featured: false,
    excerpt: "With hundreds of Korean learning apps available, which ones are actually worth your time? Here are the top apps ranked by effectiveness for TOPIK preparation.",
    content: [
      {
        heading: "1. Talk To Me In Korean (TTMIK)",
        text: "The gold standard for Korean learners. Structured lessons from Level 1 to advanced. Free PDF workbooks and audio lessons. The most systematic approach to Korean grammar. Best for: Learners who want structured, grammar-focused learning."
      },
      {
        heading: "2. Anki (Flashcards)",
        text: "The most powerful vocabulary memorization tool using spaced repetition. Download pre-made TOPIK vocabulary decks for free. Customizable and works offline. Best for: Building the 3,000+ vocabulary needed for TOPIK II."
      },
      {
        heading: "3. Naver Dictionary",
        text: "The most comprehensive Korean-English dictionary. Includes example sentences, pronunciation audio, and hanja. Essential companion for reading Korean texts. Best for: Looking up words while reading Korean content."
      },
      {
        heading: "4. Duolingo Korean",
        text: "Good for absolute beginners to build basic habits. Gamified and motivating. Not sufficient alone for TOPIK — use as a supplement to TTMIK. Best for: Complete beginners building daily study habits."
      },
    ]
  },
  {
    id: 16,
    title: "Apostille Guide: How to Get Your Bangladesh Documents Certified",
    slug: "apostille-guide-bangladesh-documents",
    category: "Scholarship",
    date: "January 20, 2026",
    readTime: "6 min read",
    emoji: "📋",
    featured: false,
    excerpt: "Most Korean scholarship applications require apostilled documents. Here's the complete process for getting your Bangladesh academic documents certified for use abroad.",
    content: [
      {
        heading: "What is Apostille?",
        text: "An apostille is an official certification that makes a document valid for use in foreign countries. For Korean university applications, your transcripts, degree certificates, and birth certificate may need apostille certification from Bangladesh. Bangladesh joined the Hague Apostille Convention in 2022."
      },
      {
        heading: "Which Documents Need Apostille?",
        text: "Academic transcripts and degree certificates. Birth certificate. Police clearance certificate. Marriage certificate (if applicable). National ID card (in some cases). Check each university's specific requirements — not all documents always need apostille."
      },
      {
        heading: "Process in Bangladesh",
        text: "Step 1: Get notarized copy from a licensed notary public. Step 2: Submit to respective ministry (education documents → Ministry of Education; birth certificates → Ministry of Home Affairs). Step 3: Submit to Ministry of Foreign Affairs for apostille stamp. Step 4: Get certified translation (Korean/English) from a certified translator. Total time: 3-6 weeks."
      },
      {
        heading: "Tips",
        text: "Start the apostille process at least 2-3 months before the scholarship deadline. Keep multiple certified copies — you may need them for multiple applications. The process can be done through agents in Dhaka if you're outside Dhaka. Estimated cost: BDT 3,000-8,000 per document."
      },
    ]
  },
  {
    id: 17,
    title: "KAIST vs SNU vs Yonsei: Which is Right for You?",
    slug: "kaist-vs-snu-vs-yonsei-comparison",
    category: "Universities",
    date: "January 12, 2026",
    readTime: "8 min read",
    emoji: "🏛️",
    featured: false,
    excerpt: "Choosing between Korea's top three universities is one of the hardest decisions for international applicants. Here's an honest comparison to help you decide.",
    content: [
      {
        heading: "KAIST — Best for STEM",
        text: "If you're in CS, AI, engineering, or physical sciences, KAIST is Korea's best option and arguably one of the best in Asia. English-medium graduate programs. Strong research funding. Located in Daejeon — quieter, focused environment. Less prestigious for business or humanities."
      },
      {
        heading: "Seoul National University — Best Overall",
        text: "Korea's Harvard. Prestigious across ALL fields — medicine, law, business, engineering, humanities. Located in Seoul — best city for career opportunities and networking. More competitive admission. Strong alumni network globally. Best for students who want prestige across disciplines."
      },
      {
        heading: "Yonsei University — Best for Balance",
        text: "Part of the SKY group (Seoul, Korea, Yonsei). Beautiful campus in central Seoul. Strong in business, international studies, AI, and medicine. More international-friendly culture. Good English programs. Best for students who want top-tier education with a vibrant social life."
      },
      {
        heading: "Which to Choose?",
        text: "For CS/AI/Engineering PhD: KAIST first, then POSTECH. For broadly prestigious degree: SNU. For business or international studies: Yonsei or Korea University. Apply to all three if possible — let the acceptances decide!"
      },
    ]
  },
  {
    id: 18,
    title: "Mental Health Tips for Bangladeshi Students in Korea",
    slug: "mental-health-tips-bangladeshi-students-korea",
    category: "Student Life",
    date: "January 5, 2026",
    readTime: "5 min read",
    emoji: "💚",
    featured: false,
    excerpt: "Studying abroad can be emotionally challenging. Here's how to take care of your mental health as a Bangladeshi student in Korea.",
    content: [
      {
        heading: "Culture Shock is Normal",
        text: "Almost every international student experiences culture shock — feeling disoriented, lonely, or overwhelmed in the first few months. This is completely normal. Korea's fast-paced, high-achievement culture can be intense. Give yourself time to adjust — most students feel settled after 3-6 months."
      },
      {
        heading: "Build Your Support Network",
        text: "Connect with the Bangladeshi Students Association immediately. Most Korean universities have international student counseling services — use them, they're free and confidential. Join student clubs to meet Koreans and other international students. Regular video calls with family help maintain your emotional anchor."
      },
      {
        heading: "Managing Academic Pressure",
        text: "Korean academic culture is demanding. Set realistic expectations — your first semester may be harder than expected. Use university library resources, study groups, and professor office hours. Don't compare yourself to Korean students who have been in this system all their lives."
      },
      {
        heading: "Self-Care Practices",
        text: "Maintain prayer schedule — it provides structure and spiritual grounding. Regular exercise — Korean universities have excellent sports facilities. Explore Korean nature — the country has beautiful mountains and coastal trails. Cook familiar Bangladeshi food occasionally — it's deeply comforting."
      },
    ]
  },
  {
    id: 19,
    title: "Packing List for Korea: What to Bring from Bangladesh",
    slug: "packing-list-korea-from-bangladesh",
    category: "Student Life",
    date: "December 28, 2025",
    readTime: "5 min read",
    emoji: "🧳",
    featured: false,
    excerpt: "Moving to Korea for the first time? Here's a practical packing list of what to bring from Bangladesh and what to buy in Korea.",
    content: [
      {
        heading: "Documents (Most Important!)",
        text: "Passport + visa. All original academic documents + certified copies. GKS award letter (if applicable). University acceptance letter. Medical certificate + vaccination records. Multiple passport photos. Emergency contact list. Bangladesh embassy contact in Korea."
      },
      {
        heading: "Bring From Bangladesh",
        text: "Sufficient warm clothes for Korean winter (very cold — below 0°C in winter). Prayer mat and religious items. Bangladeshi spices and dry food items (difficult to find in Korea). Medications you regularly take (check Korean customs regulations). Electronics with universal adapters (Korea uses 220V/Type C plugs)."
      },
      {
        heading: "Buy in Korea (Don't Overpay in Bangladesh)",
        text: "Winter coat — Korean brands are high quality and reasonably priced. Bedding and pillows — available at Homeplus/E-Mart cheaply. Korean SIM card — buy at Incheon Airport on arrival. Rice cooker — available at Daiso for ₩10,000-20,000. Stationery and school supplies."
      },
      {
        heading: "Tech Essentials",
        text: "Laptop (Korean electronics are expensive). Portable power bank. International power adapter (Type C/F for Korea). Unlocked smartphone. Download before leaving: Google Maps, KakaoMap, Papago translator, KakaoTalk, NAVER."
      },
    ]
  },
  {
    id: 20,
    title: "University Track vs Embassy Track: Which GKS Route to Choose?",
    slug: "gks-university-track-vs-embassy-track",
    category: "Scholarship",
    date: "December 20, 2025",
    readTime: "7 min read",
    emoji: "🔀",
    featured: false,
    excerpt: "GKS scholarship has two application tracks — Embassy and University. Understanding the differences can significantly increase your chances of selection.",
    content: [
      {
        heading: "Embassy Track",
        text: "Apply through the Korean Embassy in Dhaka. One application covers multiple universities (you list 3 preferred universities). Deadline: March annually. Includes an in-person interview at the embassy. Higher competition but more structured process. Results announced June. Better for applicants who don't have professor contacts yet."
      },
      {
        heading: "University Track",
        text: "Apply directly to Korean universities. Each university has its own deadline (usually October-February). Some universities require a professor's pre-approval. Less competition than Embassy Track. Better for applicants who have already been in contact with a specific professor. Results vary by university."
      },
      {
        heading: "Can You Apply to Both?",
        text: "Yes! You can apply through both tracks simultaneously. If selected by both, you must choose one. Applying to both significantly increases your chances. The Embassy Track and University Track selections are independent processes."
      },
      {
        heading: "Which is Better for Bangladeshis?",
        text: "For undergraduate students: Embassy Track is the primary route. For graduate students with professor contacts: University Track may be stronger. For maximum chances: apply to both. Most Bangladeshi GKS scholars have gone through Embassy Track, but University Track acceptances are growing."
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
