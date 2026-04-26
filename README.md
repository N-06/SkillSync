#SkillSync AI: Automated Career Intelligence & Job Market Navigator

SkillSync AI is an NLP-driven platform designed to bridge the gap between education and employment. By leveraging TF-IDF and Cosine Similarity, the platform analyzes user profiles against industry requirements to provide real-time skill-gap analysis and personalized career roadmaps.

## Key Features:

AI Matching Engine: Uses Natural Language Processing (NLP) to align user skills with job descriptions.
Interactive Dashboard: Visualizes market trends and skill-gap data using React and Recharts.
Privacy-First Architecture: 100% client-side processing ensuring user data never leaves the browser.
High Performance: Optimized for sub-100ms response times for instant feedback.

## Technical Stack:
* Frontend:             React.js, TypeScript, Vite
* Styling:              Tailwind CSS, Shadcn/UI
* NLP Engine:           TF-IDF (Term Frequency-Inverse Document Frequency) & Cosine Similarity
* Data Visualization:   Recharts
* Deployment:           Vercel

## Theoretical Background:
The project’s architecture is grounded in contemporary research regarding client-side data processing and privacy. The backend-free approach was validated against benchmarks found in recent architectural studies (Chandak et al., 2024), proving that heavy NLP computations can be handled efficiently within the browser environment. This ensures maximum data privacy and significantly reduces infrastructure latency, making high-level career analysis accessible directly in the browser.

## The Team:
This project was developed by:

[Nidhi Varma Penumatcha](https://github.com/N-06)	| (Team Lead & AI Development)
Designed the NLP matching engine and TF-IDF logic for automated skill-gap analysis.

[Ozas Dixit](https://github.com/OzasDixit)		| (Full-Stack Development)
Architected the privacy-first client-side platform and integrated the core AI modules.

[G. Hanish](https://github.com/24B81A66E5)		| (Data Analysis & UI/UX)
Developed interactive trend visualizations and salary benchmarking dashboards using Recharts