import { WorkItem, Certification, ExperienceItem } from '@/types';

export const personalInfo = {
  name: 'Smriti Priya Singh',
  title: 'Aspiring Security Analyst | B.Tech (CSE-CY) ’26',
  email: 'smritipriyasingh079@gmail.com',
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
  { title: 'Cyber Security Privacy', issuer: 'NPTEL', category: 'Fundamentals', badgeColor: 'bg-zinc-800 text-zinc-300 border-zinc-700' },
  { title: 'Ethical Hacking', issuer: 'NPTEL', category: 'Fundamentals', badgeColor: 'bg-zinc-800 text-zinc-300 border-zinc-700' },
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

export const workItems: WorkItem[] = [
  {
    id: 'eyes-without-compromise',
    slug: 'eyes-without-compromise',
    title: 'Eyes Without Compromise',
    tagline: 'CCTV surveillance network defense & port hardening framework.',
    description: 'Securing IP camera surveillance networks using port hardening, MAC binding, automated default password checks, and AI-based stream anomaly detection.',
    status: '📅 Coming Soon',
    category: 'Network Security',
    tags: ['Python', 'Shodan', 'Nmap', 'Kali Linux', 'MAC Filtering'],
    publishedDate: 'June 2025',
    highlights: [
      'MAC address binding & switch port hardening for camera streams',
      'Automated default password vulnerability scanner',
      'Anomaly detection logic for video surveillance feeds'
    ],
    toolsUsed: ['Python', 'Shodan', 'Nmap', 'Kali OS']
  },
  {
    id: 'ceh-v13-portal',
    slug: 'ceh-v13-portal',
    title: 'CEH Portal',
    tagline: 'Web platform hosting module-wise CEH v13 practice questions.',
    description: 'Interactive web platform designed to host module-by-module practice questions, SVG-animated sidebars, and quiz navigation for ethical hacking learners.',
    status: '🔒 Private',
    category: 'Web Security',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'SVG Animation', 'CEHv13'],
    publishedDate: 'April 2025',
    highlights: [
      'Module-wise structured quiz UI aligned with CEH v13 domains',
      'SVG animated navigation sidebar',
      'Static client-side score evaluation'
    ],
    toolsUsed: ['HTML', 'CSS', 'JavaScript', 'SVG Animation']
  },
  {
    id: 'wazuh-soc-lab',
    slug: 'wazuh-soc-lab',
    title: 'Wazuh SOC Lab',
    tagline: 'Self-hosted SIEM threat detection & Sysmon correlation lab.',
    description: 'Threat detection homelab architecture analyzing Sysmon Process Creation (ID 1) and ProcessAccess (ID 10) logs against MITRE ATT&CK techniques.',
    status: '🚧 In Progress',
    category: 'Threat Detection',
    tags: ['Wazuh', 'Sysmon', 'SIEM', 'MITRE ATT&CK', 'Linux Auditd'],
    publishedDate: '2026',
    highlights: [
      'Custom Wazuh rule mapping against obfuscated PowerShell execution',
      'Linux auditd rule tuning for sudoers privilege changes',
      'Threat hunting log ingestion pipeline'
    ],
    toolsUsed: ['Wazuh SIEM', 'Sysmon', 'Elasticsearch', 'Docker']
  },
  {
    id: 'cisco-anomaly-detector',
    slug: 'cisco-anomaly-detector',
    title: 'Enterprise Network Anomaly Detector',
    tagline: 'Real-time PCAP analyzer and SOC alert automation pipeline.',
    description: 'Python packet analyzer developed during Cisco Ideathon 2025 (Top 20 Finalist) to parse live traffic streams and dispatch alerts to SOC dashboards.',
    status: '🚧 In Progress',
    category: 'Threat Detection',
    tags: ['Python', 'Scapy', 'Wireshark', 'SOC Automation', 'Cisco Ideathon'],
    publishedDate: 'March 2025',
    highlights: [
      'Ranked Top 20 Finalist out of 500+ national entries in Cisco Ideathon 2025',
      'Real-time packet inspection detecting SYN flood & port scan spikes',
      'Proactive alert payload formatting for SOC integration'
    ],
    toolsUsed: ['Python', 'Scapy', 'Wireshark', 'Nmap']
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
