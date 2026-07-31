import { Project, Certification, ExperienceItem } from '@/types';

export const personalInfo = {
  name: 'Smriti Priya Singh',
  title: 'Aspiring Security Analyst | B.Tech (CSE-CY) ’26',
  email: 'smritipriyasingh079@gmail.com',
  phone: '+91 9770106079',
  location: 'Bhopal, MP, India',
  youtubeUrl: 'https://www.youtube.com/@TechEthix',
  youtubeHandle: '@TechEthix',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  summary: 'Keen to work in roles combining threat detection, incident response, and offensive testing. Knowledgeable in core networking, Linux, ethical hacking, and SOC operations. Actively developing hands-on skills through platforms like TryHackMe, PicoCTF, and OverTheWire.',
  education: {
    college: 'Oriental College of Technology, Bhopal',
    degree: 'B.Tech in Computer Science (Cybersecurity Specialization)',
    duration: 'Aug 2022 – 2026',
    coursework: [
      'Networking Fundamentals',
      'Ethical Hacking',
      'Cryptography',
      'Digital Forensics',
      'Linux Administration',
      'Cloud Security',
      'AI/ML in Security',
      'Security Operations Center (SOC) Concepts'
    ]
  }
};

export const certifications: Certification[] = [
  { title: 'Certified Ethical Hacker v13 (CEHv13)', issuer: 'EC-Council', category: 'Offensive', badgeColor: 'bg-red-500/10 text-red-400 border-red-500/30' },
  { title: 'Certified Web Penetration Tester (TWPT)', issuer: 'Techonquer', category: 'Offensive', badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
  { title: 'Security Operations Center (SOC)', issuer: 'Cisco', category: 'Defensive', badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
  { title: 'Network Defense Essentials (NDE)', issuer: 'EC-Council', category: 'Defensive', badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
  { title: 'Digital Forensics Essentials (DFE)', issuer: 'EC-Council', category: 'Defensive', badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30' },
  { title: 'Ethical Hacking Essentials (EHE)', issuer: 'EC-Council', category: 'Offensive', badgeColor: 'bg-red-500/10 text-red-400 border-red-500/30' },
  { title: 'Oracle DevOps Certified', issuer: 'Oracle', category: 'Cloud & DevOps', badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
  { title: 'Protecting a Device with Malwarebytes', issuer: 'IBM', category: 'Defensive', badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
  { title: 'Cyber Security Privacy', issuer: 'NPTEL', category: 'Fundamentals', badgeColor: 'bg-slate-800 text-slate-300 border-slate-700' },
  { title: 'Ethical Hacking', issuer: 'NPTEL', category: 'Fundamentals', badgeColor: 'bg-slate-800 text-slate-300 border-slate-700' },
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Project Submission – Yukti Innovation Challenge 2025',
    organization: 'Ministry of Education (MIC), Govt. of India',
    date: 'June 2025',
    highlightBadge: 'Govt. Innovation Challenge',
    description: [
      'Submitted "Eyes Without Compromise" – a cybersecurity project securing CCTV networks from breaches.',
      'Designed port filtering, MAC binding, and AI-based alerting for real-time surveillance defense.',
      'Gained hands-on experience in building PoC aligned with national security innovation goals.'
    ]
  },
  {
    role: 'Participant – Cisco Ideathon 2025',
    organization: 'National Innovation Challenge',
    date: 'March 2025',
    highlightBadge: 'Top 20 Finalist (500+ Entries)',
    description: [
      'Developed a Python-based solution for real-time anomaly detection in enterprise networks.',
      'Proposed integration with SOC dashboards for proactive threat response and alert automation.',
      'Ranked among top 20 finalists from 500+ entries; praised for innovation and real-world applicability.'
    ]
  },
  {
    role: 'Workshop CTF Organizer',
    organization: 'Oriental College of Technology, Bhopal',
    date: 'December 2024',
    highlightBadge: '100+ Attendees Lead',
    description: [
      'Organized and conducted a bug tracking workshop with 100+ attendees.',
      'Explained real-world vulnerabilities followed by a CTF challenge for hands-on learning.',
      'Demonstrated leadership in event management, public speaking, and technical delivery.'
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'eyes-without-compromise',
    slug: 'eyes-without-compromise',
    title: 'Eyes Without Compromise – CCTV Network Security',
    tagline: 'Defensive security solution protecting video surveillance networks from breaches.',
    description: 'Developed a comprehensive security solution to prevent unauthorized access and data breaches in CCTV networks using port hardening, MAC address binding, default password checks, and anomaly detection.',
    category: 'Network Security',
    tags: ['Python', 'Shodan', 'Nmap', 'Kali Linux', 'MAC Filtering', 'IoT Security'],
    githubUrl: 'https://github.com',
    featured: true,
    publishedDate: 'June 2025',
    toolsUsed: ['Python', 'Shodan', 'Nmap', 'Kali OS'],
    highlights: [
      'Implemented MAC address filtering and port hardening for surveillance cameras',
      'Integrated default password check automated scanner script',
      'Developed real-time anomaly detection logic for video streams'
    ]
  },
  {
    id: 'ceh-v13-portal',
    slug: 'ceh-v13-portal',
    title: 'CEH Portal – Web Platform for CEH v13 Practice',
    tagline: 'Interactive web platform hosting module-wise CEH v13 practice questions.',
    description: 'Created a responsive website that hosts CEH v13 module-wise practice questions with interactive navigation, SVG-animated sidebars, and a quiz-friendly UI for ethical hacking learners.',
    category: 'Web Security',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'SVG Animation', 'GitHub Pages', 'CEHv13'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://smritipriyasingh.github.io/ceh-portal',
    featured: true,
    publishedDate: 'April 2025',
    toolsUsed: ['HTML', 'CSS', 'JavaScript', 'SVG Animation', 'GitHub Pages'],
    highlights: [
      'Module-wise structured practice quizzes aligned with EC-Council CEH v13 topics',
      'SVG-animated sidebar navigation for smooth user experience',
      'Deploys natively on GitHub Pages with lightweight static client architecture'
    ]
  },
  {
    id: 'realtime-network-anomaly-detector',
    slug: 'realtime-network-anomaly-detector',
    title: 'Real-Time Enterprise Network Anomaly Detector',
    tagline: 'Python packet analyzer for detecting network intrusions (Cisco Ideathon Finalist).',
    description: 'A Python-based solution designed during Cisco Ideathon 2025 to analyze live traffic streams, detect malicious spikes, and push alert payloads directly to SOC dashboards.',
    category: 'Threat Detection',
    tags: ['Python', 'Scapy', 'Wireshark', 'SOC Automation', 'Packet Analysis'],
    githubUrl: 'https://github.com',
    featured: true,
    publishedDate: 'March 2025',
    toolsUsed: ['Python', 'Wireshark', 'Nmap', 'Netcat'],
    highlights: [
      'Ranked Top 20 Finalist out of 500+ national entries in Cisco Ideathon 2025',
      'Proactive alert automation for Security Operations Center (SOC) integration',
      'Parses PCAP telemetry in real time to spot unauthorized scanning activity'
    ]
  }
];

export const techArsenal = {
  languages: ['Python', 'C', 'HTML5', 'CSS3', 'JavaScript'],
  securityTools: [
    'Nmap', 'Metasploit', 'Wireshark', 'Burp Suite', 'Netcat', 'Nikto', 
    'Aircrack-ng', 'John the Ripper', 'hping3', 'Yersinia', 'Hydra', 'Ettercap', 'Cain & Abel'
  ],
  platforms: ['TryHackMe', 'PicoCTF', 'OverTheWire', 'GitHub', 'Canva (UX/UI)', 'Linux (Kali/Ubuntu)']
};
