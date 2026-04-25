export interface Job {
  id: number;
  title: string;
  skills: string[];
  description: string;
  locations: string[];
  salaryMin: number;
  salaryMax: number;
  jobType: "Full-time" | "Part-time" | "Internship";
  workMode: "Remote" | "Hybrid" | "On-site";
}

export const jobs: Job[] = [
  {
    "id": 1,
    "title": "ACCESSIBILITY SPECIALIST",
    "skills": [
      "Web Accessibility Guidelines",
      "HTML",
      "CSS",
      "JavaScript",
      "User Experience Design"
    ],
    "description": "Ensures digital products meet accessibility standards, enhancing usability for all users.",
    "locations": [
      "San Francisco, CA"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 2,
    "title": "ADMIN BIG DATA",
    "skills": [
      "Big Data Management",
      "Hadoop",
      "Spark",
      "Data Warehousing",
      "SQL"
    ],
    "description": "Administers and manages large datasets, ensuring data integrity and accessibility.",
    "locations": [
      "Boston, MA",
      "Portland, OR"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 3,
    "title": "AGILE PROJECT MANAGER",
    "skills": [
      "Agile Methodologies",
      "Scrum",
      "Kanban",
      "Project Management Tools",
      "Leadership"
    ],
    "description": "Leads projects using agile frameworks, focusing on iterative development and team collaboration.",
    "locations": [
      "San Francisco, CA",
      "Portland, OR",
      "Seattle, WA"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 4,
    "title": "ANDROID DEVELOPER",
    "skills": [
      "Java",
      "Kotlin",
      "Android SDK",
      "Mobile App Development",
      "UI/UX Design"
    ],
    "description": "Develops mobile applications for Android devices, integrating features and ensuring user experience.",
    "locations": [
      "Atlanta, GA"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 5,
    "title": "ANSIBLE AUTOMATION ENGINEER",
    "skills": [
      "Ansible",
      "Automation Scripts",
      "Linux",
      "Networking",
      "Cloud Computing"
    ],
    "description": "Designs and implements automation solutions using Ansible, streamlining IT processes.",
    "locations": [
      "Raleigh, NC",
      "Atlanta, GA",
      "Austin, TX"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 6,
    "title": "APPLICATION SECURITY ENGINEER",
    "skills": [
      "Security Protocols",
      "Penetration Testing",
      "Secure Coding Practices",
      "Compliance"
    ],
    "description": "Develops secure applications by integrating security measures and testing vulnerabilities.",
    "locations": [
      "Phoenix, AZ"
    ],
    "salaryMin": 130000,
    "salaryMax": 200000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 7,
    "title": "ARTIFACTORY ADMINISTRATOR",
    "skills": [
      "Artifactory",
      "Repository Management",
      "DevOps Tools",
      "CI/CD Pipelines"
    ],
    "description": "Manages artifact repositories, ensuring efficient deployment and version control.",
    "locations": [
      "Remote"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 8,
    "title": "ARTIFACTORY ENGINEER",
    "skills": [
      "Artifactory",
      "DevOps Practices",
      "Continuous Integration",
      "Software Packaging"
    ],
    "description": "Configures and optimizes Artifactory for efficient software deployment and management.",
    "locations": [
      "Phoenix, AZ"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 9,
    "title": "ARTIFICIAL INTELLIGENCE / MACHINE LEARNING LEADER",
    "skills": [
      "AI/ML Frameworks",
      "Leadership",
      "Strategic Planning",
      "Data Science"
    ],
    "description": "Leads AI/ML projects, developing strategies and overseeing teams to integrate AI solutions.",
    "locations": [
      "San Francisco, CA"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 10,
    "title": "ARTIFICIAL INTELLIGENCE / MACHINE LEARNING SR.LEADER",
    "skills": [
      "Advanced AI/ML",
      "Leadership",
      "Strategic Vision",
      "Team Management"
    ],
    "description": "Leads senior AI/ML projects, sets strategic direction, and manages teams.",
    "locations": [
      "New York, NY"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 11,
    "title": "ARTIFICIAL INTELLIGENCE ARCHITECT",
    "skills": [
      "AI/ML Frameworks",
      "System Architecture",
      "Cloud Computing",
      "Data Modeling"
    ],
    "description": "Designs and implements AI systems architecture, ensuring scalability and efficiency.",
    "locations": [
      "Charlotte, NC",
      "Seattle, WA"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Internship",
    "workMode": "Remote"
  },
  {
    "id": 12,
    "title": "ARTIFICIAL INTELLIGENCE RESEARCHER",
    "skills": [
      "Research Methodologies",
      "AI/ML Algorithms",
      "Python",
      "Data Analysis"
    ],
    "description": "Conducts research to advance AI technologies, develops new algorithms, and publishes findings.",
    "locations": [
      "San Diego, CA",
      "Austin, TX",
      "Raleigh, NC"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Part-time",
    "workMode": "Remote"
  },
  {
    "id": 13,
    "title": "AWS DEVOPS ENGINEER",
    "skills": [
      "AWS Services",
      "DevOps Practices",
      "CI/CD Pipelines",
      "Automation"
    ],
    "description": "Implements DevOps practices on AWS, automating processes and ensuring system reliability.",
    "locations": [
      "New York, NY"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 14,
    "title": "AWS SOLUTIONS ARCHITECT",
    "skills": [
      "AWS Services",
      "Cloud Architecture",
      "Solution Design",
      "Cost Optimization"
    ],
    "description": "Designs scalable and cost-effective solutions on AWS, ensuring alignment with business needs.",
    "locations": [
      "New York, NY",
      "Charlotte, NC",
      "Seattle, WA"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 15,
    "title": "AZURE DEVOPS ENGINEER",
    "skills": [
      "Azure Services",
      "DevOps Practices",
      "CI/CD Pipelines",
      "Automation"
    ],
    "description": "Implements DevOps practices on Azure, automating processes and ensuring system reliability.",
    "locations": [
      "Miami, FL",
      "Los Angeles, CA",
      "Denver, CO"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 16,
    "title": "BAMBOO ENGINEER",
    "skills": [
      "Bamboo",
      "CI/CD Pipelines",
      "Build Automation",
      "Software Configuration Management"
    ],
    "description": "Configures and manages Bamboo for continuous integration and delivery.",
    "locations": [
      "Raleigh, NC",
      "San Diego, CA",
      "Dallas, TX"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 17,
    "title": "BIG DATA ARCHITECT",
    "skills": [
      "Big Data Technologies",
      "Hadoop",
      "Spark",
      "Data Warehousing",
      "System Design"
    ],
    "description": "Designs and oversees big data solutions, ensuring scalability and performance.",
    "locations": [
      "Miami, FL",
      "Dallas, TX"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 18,
    "title": "BIG DATA ENGINEER",
    "skills": [
      "Hadoop",
      "Spark",
      "ETL Processes",
      "Data Processing",
      "Database Management"
    ],
    "description": "Develops and maintains big data infrastructure, ensuring data quality and accessibility.",
    "locations": [
      "Phoenix, AZ",
      "Boston, MA"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 19,
    "title": "BIG DATA SPECIALIST",
    "skills": [
      "Big Data Technologies",
      "Data Analysis",
      "SQL",
      "Data Mining"
    ],
    "description": "Analyzes and interprets large datasets to provide insights and support decision-making.",
    "locations": [
      "Los Angeles, CA",
      "Seattle, WA",
      "Minneapolis, MN"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 20,
    "title": "BITBUCKET ENGINEER",
    "skills": [
      "Bitbucket",
      "Git",
      "Version Control",
      "CI/CD Integration"
    ],
    "description": "Manages and configures Bitbucket for efficient version control and collaboration.",
    "locations": [
      "San Diego, CA",
      "Remote"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 21,
    "title": "BLOCKCHAIN DEVELOPER",
    "skills": [
      "Blockchain Technologies",
      "Solidity",
      "Cryptography",
      "Smart Contracts"
    ],
    "description": "Develops blockchain applications and smart contracts, ensuring security and functionality.",
    "locations": [
      "Atlanta, GA",
      "Raleigh, NC",
      "Seattle, WA"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 22,
    "title": "BUILD AND RELEASE ENGINEER",
    "skills": [
      "CI/CD Pipelines",
      "Build Systems",
      "Automation",
      "Configuration Management"
    ],
    "description": "Manages build and release processes, ensuring smooth and reliable software deployments.",
    "locations": [
      "Minneapolis, MN",
      "Dallas, TX",
      "Atlanta, GA"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 23,
    "title": "BUILD ENGINEER",
    "skills": [
      "Build Systems",
      "Scripting",
      "Automation",
      "Software Configuration Management"
    ],
    "description": "Develops and maintains build systems, automating software compilation and testing.",
    "locations": [
      "Washington, DC",
      "Charlotte, NC",
      "San Diego, CA"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 24,
    "title": "BUSINESS SYSTEMS ANALYST",
    "skills": [
      "Requirements Gathering",
      "Process Analysis",
      "System Design",
      "Documentation"
    ],
    "description": "Analyzes business processes and system requirements, providing solutions to improve efficiency.",
    "locations": [
      "Minneapolis, MN",
      "Miami, FL",
      "San Diego, CA"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 25,
    "title": "C# DEVELOPER",
    "skills": [
      "C#",
      ".NET Framework",
      "ASP.NET",
      "Software Development",
      "Object-Oriented Programming"
    ],
    "description": "Develops applications using C# and the .NET framework, focusing on functionality and performance.",
    "locations": [
      "Denver, CO",
      "Atlanta, GA",
      "Minneapolis, MN"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 26,
    "title": "CHEF INSPEC ENGINEER",
    "skills": [
      "Chef Inspec",
      "Compliance Automation",
      "Infrastructure Testing",
      "Ruby"
    ],
    "description": "Automates compliance and infrastructure testing using Chef Inspec.",
    "locations": [
      "Charlotte, NC"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Internship",
    "workMode": "Remote"
  },
  {
    "id": 27,
    "title": "CHEF OPERATIONS ENGINEER",
    "skills": [
      "Chef",
      "Automation",
      "Infrastructure Management",
      "Ruby"
    ],
    "description": "Manages infrastructure and automates processes using Chef.",
    "locations": [
      "Minneapolis, MN"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 28,
    "title": "CLOUD ADMINISTRATOR",
    "skills": [
      "Cloud Platforms",
      "System Administration",
      "Virtualization",
      "Networking"
    ],
    "description": "Manages and maintains cloud infrastructure, ensuring availability and performance.",
    "locations": [
      "Chicago, IL",
      "Denver, CO"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 29,
    "title": "CLOUD ARCHITECT",
    "skills": [
      "Cloud Platforms",
      "System Architecture",
      "Cloud Security",
      "DevOps"
    ],
    "description": "Designs and oversees the implementation of cloud computing strategies.",
    "locations": [
      "Charlotte, NC",
      "San Francisco, CA"
    ],
    "salaryMin": 130000,
    "salaryMax": 200000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 30,
    "title": "CLOUD AUTOMATION ENGINEER",
    "skills": [
      "Cloud Automation Tools",
      "Scripting",
      "Configuration Management",
      "DevOps"
    ],
    "description": "Automates cloud infrastructure and deployment processes.",
    "locations": [
      "Remote",
      "Minneapolis, MN",
      "Los Angeles, CA"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 31,
    "title": "CLOUD NETWORK ENGINEER",
    "skills": [
      "Cloud Networking",
      "Virtual Networks",
      "Network Security",
      "Cloud Platforms"
    ],
    "description": "Designs and manages cloud network infrastructure.",
    "locations": [
      "Boston, MA"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Part-time",
    "workMode": "Remote"
  },
  {
    "id": 32,
    "title": "CLOUD SECURITY ENGINEER",
    "skills": [
      "Cloud Security",
      "Security Protocols",
      "Compliance",
      "Cloud Platforms"
    ],
    "description": "Implements and manages security measures for cloud environments.",
    "locations": [
      "Portland, OR",
      "San Diego, CA"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 33,
    "title": "CNC PROGRAMMER",
    "skills": [
      "CNC Machines",
      "CAD/CAM Software",
      "G-Code",
      "Manufacturing Processes"
    ],
    "description": "Develops programs for CNC machines used in manufacturing.",
    "locations": [
      "San Diego, CA",
      "Austin, TX"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 34,
    "title": "CODER",
    "skills": [
      "Programming Languages",
      "Scripting",
      "Problem Solving",
      "Software Development"
    ],
    "description": "Writes and tests code for software applications.",
    "locations": [
      "Seattle, WA",
      "Boston, MA",
      "Nashville, TN"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Part-time",
    "workMode": "On-site"
  },
  {
    "id": 35,
    "title": "COMPUTER GRAPHICS ANIMATOR",
    "skills": [
      "Animation Software",
      "3D Modeling",
      "Visual Effects",
      "Graphic Design"
    ],
    "description": "Creates animations and visual effects for various media.",
    "locations": [
      "Portland, OR",
      "Miami, FL",
      "Washington, DC"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 36,
    "title": "COMPUTER HARDWARE ENGINEER",
    "skills": [
      "Hardware Design",
      "Circuit Design",
      "Embedded Systems",
      "Testing"
    ],
    "description": "Designs and develops computer hardware components and systems.",
    "locations": [
      "Miami, FL",
      "Nashville, TN"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 37,
    "title": "COMPUTER NETWORK ARCHITECT",
    "skills": [
      "Network Design",
      "Network Protocols",
      "Security",
      "System Architecture"
    ],
    "description": "Designs and plans computer networks.",
    "locations": [
      "San Diego, CA"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 38,
    "title": "COMPUTER PROGRAMMER",
    "skills": [
      "Programming Languages",
      "Algorithms",
      "Software Development",
      "Debugging"
    ],
    "description": "Writes and tests code to create software programs.",
    "locations": [
      "Washington, DC",
      "Raleigh, NC"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Part-time",
    "workMode": "Remote"
  },
  {
    "id": 39,
    "title": "COMPUTER RESEARCH SCIENTIST",
    "skills": [
      "Research Methodologies",
      "Data Analysis",
      "Programming",
      "Scientific Writing"
    ],
    "description": "Conducts research in computer science and develops new technologies.",
    "locations": [
      "San Francisco, CA",
      "Raleigh, NC"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 40,
    "title": "COMPUTER SYSTEMS ANALYST",
    "skills": [
      "Systems Analysis",
      "Requirements Gathering",
      "Process Improvement",
      "IT Consulting"
    ],
    "description": "Analyzes computer systems and recommends improvements.",
    "locations": [
      "Boston, MA",
      "Austin, TX"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 41,
    "title": "CONFLUENCE ENGINEER",
    "skills": [
      "Confluence",
      "Atlassian Suite",
      "Documentation",
      "Collaboration Tools"
    ],
    "description": "Manages and configures Confluence for team collaboration.",
    "locations": [
      "Washington, DC"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 42,
    "title": "CONSUL ENGINEER",
    "skills": [
      "Consul",
      "Service Discovery",
      "Infrastructure Automation",
      "Networking"
    ],
    "description": "Manages and deploys Consul for service discovery.",
    "locations": [
      "Phoenix, AZ"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 43,
    "title": "COVERAGE.PY ENGINEER",
    "skills": [
      "Coverage.py",
      "Python Testing",
      "Test Coverage Analysis",
      "Software Quality"
    ],
    "description": "Implements and manages code coverage tools for Python projects.",
    "locations": [
      "Seattle, WA",
      "Miami, FL",
      "San Diego, CA"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 44,
    "title": "DATA ANALYST",
    "skills": [
      "Data Analysis",
      "SQL",
      "Data Visualization",
      "Statistical Analysis"
    ],
    "description": "Analyzes data to identify trends and insights.",
    "locations": [
      "Portland, OR",
      "Remote",
      "Minneapolis, MN"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 45,
    "title": "DATA ARCHITECT",
    "skills": [
      "Data Modeling",
      "Database Design",
      "ETL Processes",
      "Data Warehousing"
    ],
    "description": "Designs and manages data storage and retrieval systems.",
    "locations": [
      "Minneapolis, MN",
      "Charlotte, NC",
      "Boston, MA"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 46,
    "title": "DATA ENGINEER",
    "skills": [
      "ETL Processes",
      "Data Warehousing",
      "Big Data Technologies",
      "Database Management"
    ],
    "description": "Develops and maintains data pipelines and infrastructure.",
    "locations": [
      "Charlotte, NC"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 47,
    "title": "DATA MODELER",
    "skills": [
      "Data Modeling Techniques",
      "Database Design",
      "Data Governance",
      "Data Analysis"
    ],
    "description": "Creates and maintains data models.",
    "locations": [
      "Charlotte, NC"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Part-time",
    "workMode": "On-site"
  },
  {
    "id": 48,
    "title": "DATA SCIENTIST",
    "skills": [
      "Machine Learning",
      "Statistical Analysis",
      "Data Mining",
      "Programming"
    ],
    "description": "Applies machine learning and statistical techniques to analyze data.",
    "locations": [
      "San Francisco, CA",
      "Dallas, TX",
      "Seattle, WA"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 49,
    "title": "DATABASE ADMINISTRATOR",
    "skills": [
      "Database Management",
      "SQL",
      "Performance Tuning",
      "Backup and Recovery"
    ],
    "description": "Manages and maintains databases.",
    "locations": [
      "Chicago, IL",
      "Portland, OR"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 50,
    "title": "DATADOG ENGINEER",
    "skills": [
      "Datadog",
      "Monitoring",
      "System Performance",
      "Cloud Infrastructure"
    ],
    "description": "Implements and manages Datadog for system monitoring.",
    "locations": [
      "Denver, CO"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Internship",
    "workMode": "Remote"
  },
  {
    "id": 51,
    "title": "DEVOPS ARCHITECT",
    "skills": [
      "DevOps Practices",
      "Cloud Computing",
      "Automation",
      "System Architecture"
    ],
    "description": "Designs and implements DevOps strategies and infrastructure.",
    "locations": [
      "Boston, MA",
      "Remote"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 52,
    "title": "DEVOPS ENGINEER",
    "skills": [
      "Automation",
      "CI/CD",
      "Cloud Computing",
      "Scripting"
    ],
    "description": "Automates software development and deployment processes.",
    "locations": [
      "San Diego, CA"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 53,
    "title": "DEVOPS MANAGER",
    "skills": [
      "DevOps Practices",
      "Team Leadership",
      "Project Management",
      "Automation"
    ],
    "description": "Manages DevOps teams and projects.",
    "locations": [
      "Seattle, WA",
      "Los Angeles, CA"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 54,
    "title": "DEVSECOPS ARCHITECT",
    "skills": [
      "DevSecOps Practices",
      "Security Automation",
      "Cloud Security",
      "System Architecture"
    ],
    "description": "Designs and implements DevSecOps strategies and infrastructure.",
    "locations": [
      "Raleigh, NC"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 55,
    "title": "DEVSECOPS ENGINEER",
    "skills": [
      "Security Automation",
      "CI/CD",
      "Cloud Security",
      "Scripting"
    ],
    "description": "Integrates security practices into DevOps processes.",
    "locations": [
      "Denver, CO",
      "Charlotte, NC"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 56,
    "title": "DIRECTOR OF ENGINEERING",
    "skills": [
      "Leadership",
      "Software Development",
      "Project Management",
      "Team Management"
    ],
    "description": "Leads and manages engineering teams and projects.",
    "locations": [
      "San Diego, CA",
      "Dallas, TX",
      "Raleigh, NC"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Internship",
    "workMode": "Hybrid"
  },
  {
    "id": 57,
    "title": "DOCKER ENGINEER",
    "skills": [
      "Docker",
      "Containerization",
      "Orchestration",
      "DevOps"
    ],
    "description": "Manages and deploys Docker containers.",
    "locations": [
      "Remote",
      "Raleigh, NC",
      "New York, NY"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 58,
    "title": "ELK ENGINEER",
    "skills": [
      "ELK Stack",
      "Log Management",
      "Data Analysis",
      "System Monitoring"
    ],
    "description": "Manages and configures the ELK stack for log analysis and monitoring.",
    "locations": [
      "Portland, OR",
      "Los Angeles, CA",
      "Charlotte, NC"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 59,
    "title": "EMBEDDED SOFTWARE ENGINEER",
    "skills": [
      "Embedded Systems",
      "C/C++",
      "Firmware Development",
      "Hardware Interfaces"
    ],
    "description": "Develops software for embedded systems.",
    "locations": [
      "Dallas, TX"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Part-time",
    "workMode": "On-site"
  },
  {
    "id": 60,
    "title": "ENTRY LEVEL DEVELOPER",
    "skills": [
      "Programming Basics",
      "Software Development",
      "Problem Solving",
      "Learning Agility"
    ],
    "description": "Entry-level position focused on learning and developing software skills.",
    "locations": [
      "Nashville, TN",
      "New York, NY"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Part-time",
    "workMode": "On-site"
  },
  {
    "id": 61,
    "title": "ENTRY LEVEL NETWORK ENGINEER",
    "skills": [
      "Networking Basics",
      "Troubleshooting",
      "System Administration",
      "Learning Agility"
    ],
    "description": "Entry-level position focused on learning and assisting with network operations.",
    "locations": [
      "Seattle, WA"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 62,
    "title": "ENTRY LEVEL PROGRAMMER",
    "skills": [
      "Programming Basics",
      "Software Development",
      "Problem Solving",
      "Learning Agility"
    ],
    "description": "Entry-level position focused on learning and developing software skills.",
    "locations": [
      "Denver, CO",
      "Atlanta, GA"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 63,
    "title": "ENTRY LEVEL WEB DEVELOPER",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "Basic Web Development",
      "Learning Agility"
    ],
    "description": "Entry-level position focused on learning and developing web development skills.",
    "locations": [
      "Boston, MA",
      "Minneapolis, MN",
      "Remote"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 64,
    "title": "ENVOY ENGINEER",
    "skills": [
      "Envoy Proxy",
      "Service Mesh",
      "Load Balancing",
      "Networking"
    ],
    "description": "Configures and manages Envoy proxy for service mesh architectures.",
    "locations": [
      "Nashville, TN",
      "Los Angeles, CA",
      "San Francisco, CA"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 65,
    "title": "FALCO ENGINEER",
    "skills": [
      "Falco",
      "Kubernetes Security",
      "Cloud Security",
      "System Monitoring"
    ],
    "description": "Implements and manages Falco for runtime security monitoring.",
    "locations": [
      "Austin, TX"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 66,
    "title": "FLUENTD ENGINEER",
    "skills": [
      "Fluentd",
      "Log Aggregation",
      "Data Collection",
      "System Monitoring"
    ],
    "description": "Configures and manages Fluentd for log aggregation and analysis.",
    "locations": [
      "Boston, MA",
      "San Diego, CA"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 67,
    "title": "FORTIFY ENGINEER",
    "skills": [
      "Fortify",
      "Static Code Analysis",
      "Application Security",
      "Secure Coding"
    ],
    "description": "Implements and manages Fortify for static code analysis and application security.",
    "locations": [
      "Seattle, WA",
      "Remote"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 68,
    "title": "FRAMEWORKS SPECIALIST",
    "skills": [
      "Software Frameworks",
      "Programming Languages",
      "Problem Solving",
      "System Design"
    ],
    "description": "Specializes in designing and implementing software frameworks.",
    "locations": [
      "Nashville, TN",
      "Dallas, TX"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 69,
    "title": "FRONT END DEVELOPER",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "UI/UX Design",
      "Responsive Design"
    ],
    "description": "Develops the user interface and front-end components of web applications.",
    "locations": [
      "Boston, MA",
      "Phoenix, AZ",
      "Los Angeles, CA"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 70,
    "title": "FULL STACK DEVELOPER",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "Back-End Technologies",
      "Database Management"
    ],
    "description": "Develops both the front-end and back-end components of web applications.",
    "locations": [
      "Remote",
      "Raleigh, NC",
      "Austin, TX"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 71,
    "title": "FULL STACK JAVA DEVELOPER/PROGRAMMER/ENGINEER",
    "skills": [
      "Java",
      "Spring",
      "Hibernate",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "description": "Develops full-stack applications using Java technologies.",
    "locations": [
      "Remote",
      "Washington, DC"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 72,
    "title": "FULL STACK PYTHON DEVELOPER/PROGRAMMER/ENGINEER",
    "skills": [
      "Python",
      "Django",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "description": "Develops full-stack applications using Python technologies.",
    "locations": [
      "Chicago, IL",
      "Miami, FL",
      "Los Angeles, CA"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Part-time",
    "workMode": "On-site"
  },
  {
    "id": 73,
    "title": "GAME DEVELOPER",
    "skills": [
      "C++",
      "C#",
      "Game Engines",
      "3D Modeling",
      "Game Design"
    ],
    "description": "Develops video games for various platforms.",
    "locations": [
      "Chicago, IL"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 74,
    "title": "GCP DEVOPS ENGINEER",
    "skills": [
      "Google Cloud Platform",
      "DevOps Practices",
      "CI/CD Pipelines",
      "Automation"
    ],
    "description": "Implements DevOps practices on Google Cloud Platform, automating processes and ensuring system reliability.",
    "locations": [
      "San Diego, CA",
      "Seattle, WA",
      "Minneapolis, MN"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 75,
    "title": "GERRIT ADMINISTRATOR",
    "skills": [
      "Gerrit",
      "Code Review",
      "Git",
      "Version Control"
    ],
    "description": "Administers and manages Gerrit for code review processes.",
    "locations": [
      "Nashville, TN",
      "Portland, OR",
      "Atlanta, GA"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 76,
    "title": "GIT ENGINEER",
    "skills": [
      "Git",
      "Version Control",
      "Branching Strategies",
      "Collaboration"
    ],
    "description": "Manages and configures Git for efficient version control.",
    "locations": [
      "San Diego, CA",
      "San Francisco, CA"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Part-time",
    "workMode": "Remote"
  },
  {
    "id": 77,
    "title": "GITHUB ENGINEER",
    "skills": [
      "GitHub",
      "Git",
      "Collaboration Tools",
      "CI/CD Integration"
    ],
    "description": "Manages and configures GitHub for efficient collaboration and CI/CD.",
    "locations": [
      "New York, NY",
      "Miami, FL",
      "Washington, DC"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 78,
    "title": "GITLAB ENGINEER",
    "skills": [
      "GitLab",
      "Git",
      "CI/CD Pipelines",
      "DevOps Practices"
    ],
    "description": "Manages and configures GitLab for efficient DevOps workflows.",
    "locations": [
      "Miami, FL"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 79,
    "title": "GRADLE ENGINEER",
    "skills": [
      "Gradle",
      "Build Automation",
      "Java",
      "Software Configuration Management"
    ],
    "description": "Configures and manages Gradle for build automation.",
    "locations": [
      "Minneapolis, MN",
      "Chicago, IL",
      "Charlotte, NC"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 80,
    "title": "GRAFANA ENGINEER",
    "skills": [
      "Grafana",
      "Data Visualization",
      "Monitoring",
      "System Performance"
    ],
    "description": "Configures and manages Grafana for data visualization and monitoring.",
    "locations": [
      "Nashville, TN"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 81,
    "title": "GROOVY ENGINEER",
    "skills": [
      "Groovy",
      "Scripting",
      "Automation",
      "Software Development"
    ],
    "description": "Develops automation scripts and applications using Groovy.",
    "locations": [
      "Raleigh, NC"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Part-time",
    "workMode": "Hybrid"
  },
  {
    "id": 82,
    "title": "INFORMATION ARCHITECT",
    "skills": [
      "Information Architecture",
      "User Experience Design",
      "Content Strategy",
      "Taxonomy"
    ],
    "description": "Designs information structures to enhance usability and findability.",
    "locations": [
      "Austin, TX",
      "Remote"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 83,
    "title": "INFORMATION SECURITY ANALYST",
    "skills": [
      "Security Protocols",
      "Threat Analysis",
      "Compliance",
      "Incident Response"
    ],
    "description": "Protects computer systems and networks from security threats.",
    "locations": [
      "Dallas, TX",
      "Austin, TX",
      "Chicago, IL"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 84,
    "title": "INTERACTION DESIGNER",
    "skills": [
      "Interaction Design",
      "User Research",
      "Prototyping",
      "Usability Testing"
    ],
    "description": "Designs interactive user interfaces and experiences.",
    "locations": [
      "Los Angeles, CA"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 85,
    "title": "IOS DEVELOPER",
    "skills": [
      "Swift",
      "Objective-C",
      "iOS SDK",
      "Mobile App Development",
      "UI/UX Design"
    ],
    "description": "Develops mobile applications for iOS devices, integrating features and ensuring user experience.",
    "locations": [
      "Nashville, TN",
      "Remote"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 86,
    "title": "ISTIO ENGINEER",
    "skills": [
      "Istio",
      "Service Mesh",
      "Traffic Management",
      "Security"
    ],
    "description": "Configures and manages Istio for service mesh architectures.",
    "locations": [
      "Minneapolis, MN",
      "Denver, CO",
      "Washington, DC"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Part-time",
    "workMode": "On-site"
  },
  {
    "id": 87,
    "title": "IT MANAGER",
    "skills": [
      "IT Management",
      "Team Leadership",
      "Project Management",
      "Budgeting"
    ],
    "description": "Manages IT teams and projects, ensuring efficient operations.",
    "locations": [
      "Minneapolis, MN",
      "Nashville, TN"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Part-time",
    "workMode": "On-site"
  },
  {
    "id": 88,
    "title": "JACOCO ENGINEER",
    "skills": [
      "JaCoCo",
      "Code Coverage",
      "Java Testing",
      "Software Quality"
    ],
    "description": "Implements and manages code coverage tools for Java projects.",
    "locations": [
      "Dallas, TX"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Part-time",
    "workMode": "Hybrid"
  },
  {
    "id": 89,
    "title": "JAVA DEVELOPER",
    "skills": [
      "Java",
      "Spring",
      "Hibernate",
      "Software Development",
      "Object-Oriented Programming"
    ],
    "description": "Develops applications using Java and related technologies, focusing on functionality and performance.",
    "locations": [
      "Miami, FL",
      "Austin, TX",
      "Boston, MA"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 90,
    "title": "JENKINS ENGINEER",
    "skills": [
      "Jenkins",
      "CI/CD Pipelines",
      "Build Automation",
      "DevOps Practices"
    ],
    "description": "Configures and manages Jenkins for continuous integration and delivery.",
    "locations": [
      "Denver, CO",
      "San Francisco, CA"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 91,
    "title": "JIRA ADMINISTRATOR",
    "skills": [
      "Jira",
      "Atlassian Suite",
      "Workflow Configuration",
      "Project Management"
    ],
    "description": "Administers and configures Jira for project management and issue tracking.",
    "locations": [
      "Raleigh, NC"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 92,
    "title": "JUNIOR FRONT END DEVELOPER",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "Basic Web Development",
      "Learning Agility"
    ],
    "description": "Entry-level position focused on learning and developing front-end web development skills.",
    "locations": [
      "Minneapolis, MN"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 93,
    "title": "JUNIOR IOS DEVELOPER",
    "skills": [
      "Swift",
      "Objective-C",
      "iOS SDK",
      "Basic Mobile App Development",
      "Learning Agility"
    ],
    "description": "Entry-level position focused on learning and developing iOS app development skills.",
    "locations": [
      "Boston, MA"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Internship",
    "workMode": "Hybrid"
  },
  {
    "id": 94,
    "title": "JUNIT ENGINEER",
    "skills": [
      "JUnit",
      "Java Testing",
      "Test Automation",
      "Software Quality"
    ],
    "description": "Implements and manages JUnit for Java testing and test automation.",
    "locations": [
      "Minneapolis, MN"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Internship",
    "workMode": "On-site"
  },
  {
    "id": 95,
    "title": "KUBERNETES OPERATIONS ENGINEER",
    "skills": [
      "Kubernetes",
      "Container Orchestration",
      "Cloud Computing",
      "DevOps Practices"
    ],
    "description": "Manages and operates Kubernetes clusters, ensuring system reliability and scalability.",
    "locations": [
      "Boston, MA",
      "Chicago, IL",
      "Los Angeles, CA"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Internship",
    "workMode": "Hybrid"
  },
  {
    "id": 96,
    "title": "MACHINE LEARNING ARCHITECT",
    "skills": [
      "Machine Learning Algorithms",
      "System Architecture",
      "Cloud Computing",
      "Data Modeling"
    ],
    "description": "Designs and implements scalable machine learning infrastructure and solutions.",
    "locations": [
      "Washington, DC",
      "Chicago, IL",
      "Nashville, TN"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 97,
    "title": "MACHINE LEARNING ENGINEER",
    "skills": [
      "Machine Learning Algorithms",
      "Python",
      "Data Analysis",
      "Model Deployment"
    ],
    "description": "Develops and deploys machine learning models for various applications.",
    "locations": [
      "Dallas, TX",
      "Chicago, IL"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 98,
    "title": "MAVEN ENGINEER",
    "skills": [
      "Maven",
      "Build Automation",
      "Java",
      "Software Configuration Management"
    ],
    "description": "Configures and manages Maven for build automation in Java projects.",
    "locations": [
      "Minneapolis, MN"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 99,
    "title": "MOBILE APP DEVELOPER",
    "skills": [
      "Mobile App Development",
      "iOS/Android SDKs",
      "UI/UX Design",
      "Programming Languages"
    ],
    "description": "Develops mobile applications for iOS and Android platforms.",
    "locations": [
      "Seattle, WA",
      "Remote",
      "Miami, FL"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Part-time",
    "workMode": "Hybrid"
  },
  {
    "id": 100,
    "title": "MULESOFT DEVELOPER",
    "skills": [
      "MuleSoft Anypoint Platform",
      "API Integration",
      "Java",
      "Integration Patterns"
    ],
    "description": "Develops and integrates applications using the MuleSoft Anypoint Platform.",
    "locations": [
      "Miami, FL"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 101,
    "title": "NAGIOS ENGINEER",
    "skills": [
      "Nagios",
      "System Monitoring",
      "Linux",
      "Networking"
    ],
    "description": "Configures and manages Nagios for system and network monitoring.",
    "locations": [
      "Miami, FL"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 102,
    "title": "NETWORK AND SYSTEMS ADMINISTRATOR",
    "skills": [
      "Networking",
      "System Administration",
      "Linux/Windows Servers",
      "Troubleshooting"
    ],
    "description": "Manages and maintains network and server infrastructure.",
    "locations": [
      "Boston, MA"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Internship",
    "workMode": "On-site"
  },
  {
    "id": 103,
    "title": "NETWORK ENGINEER",
    "skills": [
      "Networking Protocols",
      "Cisco/Juniper Devices",
      "Network Security",
      "Troubleshooting"
    ],
    "description": "Designs, implements, and manages network infrastructure.",
    "locations": [
      "Phoenix, AZ"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 104,
    "title": "NEW RELIC ENGINEER",
    "skills": [
      "New Relic",
      "Application Performance Monitoring",
      "Troubleshooting",
      "Cloud Computing"
    ],
    "description": "Configures and manages New Relic for application performance monitoring.",
    "locations": [
      "Miami, FL",
      "Los Angeles, CA",
      "Nashville, TN"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 105,
    "title": "NEXUS ENGINEER",
    "skills": [
      "Nexus Repository Manager",
      "Artifact Management",
      "DevOps Practices"
    ],
    "description": "Manages and configures Nexus Repository Manager for artifact storage and retrieval.",
    "locations": [
      "New York, NY",
      "Atlanta, GA"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 106,
    "title": "NOMAD ENGINEER",
    "skills": [
      "Nomad",
      "Container Orchestration",
      "HashiCorp Tools",
      "Infrastructure Automation"
    ],
    "description": "Configures and manages Nomad for container orchestration and infrastructure automation.",
    "locations": [
      "Remote"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Internship",
    "workMode": "Hybrid"
  },
  {
    "id": 107,
    "title": "NOTARY ENGINEER",
    "skills": [
      "Notary",
      "Container Security",
      "Docker",
      "Cryptography"
    ],
    "description": "Implements and manages Notary for ensuring container image security.",
    "locations": [
      "San Diego, CA",
      "Seattle, WA",
      "Minneapolis, MN"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 108,
    "title": "OCTOPUS DEPLOY ENGINEER",
    "skills": [
      "Octopus Deploy",
      "Deployment Automation",
      ".NET",
      "PowerShell"
    ],
    "description": "Configures and manages Octopus Deploy for automating application deployments.",
    "locations": [
      "Chicago, IL"
    ],
    "salaryMin": 130000,
    "salaryMax": 200000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 109,
    "title": "OPENSHIFT ENGINEER",
    "skills": [
      "OpenShift",
      "Kubernetes",
      "Containerization",
      "DevOps Practices"
    ],
    "description": "Manages and configures OpenShift for container orchestration and application deployment.",
    "locations": [
      "San Francisco, CA",
      "Raleigh, NC"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 110,
    "title": "OPENSTACK ENGINEER",
    "skills": [
      "OpenStack",
      "Cloud Computing",
      "Virtualization",
      "System Administration"
    ],
    "description": "Implements and manages OpenStack cloud infrastructure.",
    "locations": [
      "Raleigh, NC"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Internship",
    "workMode": "On-site"
  },
  {
    "id": 111,
    "title": "OPERATIONS ENGINEER",
    "skills": [
      "System Administration",
      "Linux/Windows Servers",
      "Troubleshooting",
      "Scripting"
    ],
    "description": "Manages and maintains systems and infrastructure, ensuring reliable operation.",
    "locations": [
      "San Diego, CA",
      "Boston, MA"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 112,
    "title": "ORACLE DEVELOPER",
    "skills": [
      "Oracle Database",
      "SQL",
      "PL/SQL",
      "Database Development"
    ],
    "description": "Develops database applications using Oracle technologies.",
    "locations": [
      "Remote",
      "Chicago, IL"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Internship",
    "workMode": "Hybrid"
  },
  {
    "id": 113,
    "title": "ORACLE SQL DEVELOPER",
    "skills": [
      "Oracle SQL",
      "PL/SQL",
      "Data Modeling",
      "Database Design"
    ],
    "description": "Develops and optimizes SQL queries and database schemas in Oracle environments.",
    "locations": [
      "New York, NY",
      "Austin, TX"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 114,
    "title": "PACKER ENGINEER",
    "skills": [
      "Packer",
      "Infrastructure as Code",
      "Cloud Computing",
      "Automation"
    ],
    "description": "Creates machine images using Packer for consistent infrastructure deployment.",
    "locations": [
      "Atlanta, GA",
      "Seattle, WA",
      "Miami, FL"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 115,
    "title": "PHP DEVELOPER",
    "skills": [
      "PHP",
      "MySQL",
      "Web Development",
      "Frameworks (Laravel",
      "Symfony)"
    ],
    "description": "Develops web applications using PHP and related technologies.",
    "locations": [
      "Miami, FL"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Internship",
    "workMode": "Hybrid"
  },
  {
    "id": 116,
    "title": "POWERSHELL ENGINEER",
    "skills": [
      "PowerShell",
      "Automation",
      "Windows Server Administration",
      "Scripting"
    ],
    "description": "Develops automation scripts and tools using PowerShell for Windows environments.",
    "locations": [
      "San Francisco, CA",
      "Los Angeles, CA",
      "San Diego, CA"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 117,
    "title": "PRINCIPLE ENGINEER IN ARTIFICIAL INTELLIGENCE",
    "skills": [
      "AI/ML Architecture",
      "Leadership",
      "Strategic Planning",
      "Deep Learning"
    ],
    "description": "Leads and designs AI/ML solutions, providing technical guidance and strategic direction.",
    "locations": [
      "Remote",
      "Austin, TX",
      "Washington, DC"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 118,
    "title": "PRINCIPLE ENGINEER IN BIG DATA",
    "skills": [
      "Big Data Architecture",
      "Hadoop",
      "Spark",
      "Data Warehousing"
    ],
    "description": "Leads and designs big data solutions, providing technical expertise and guidance.",
    "locations": [
      "Nashville, TN",
      "Austin, TX"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Part-time",
    "workMode": "Remote"
  },
  {
    "id": 119,
    "title": "PRINCIPLE ENGINEER IN DATA ANALYSIS",
    "skills": [
      "Data Analysis",
      "Statistical Modeling",
      "Data Visualization",
      "Leadership"
    ],
    "description": "Leads data analysis initiatives, providing expertise and guidance on analytical techniques.",
    "locations": [
      "San Diego, CA"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 120,
    "title": "PRINCIPLE ENGINEER IN MACHINE LEARNING",
    "skills": [
      "Machine Learning Algorithms",
      "Model Development",
      "Deployment",
      "Leadership"
    ],
    "description": "Leads machine learning initiatives, providing expertise and guidance on model development and deployment.",
    "locations": [
      "Austin, TX",
      "San Francisco, CA"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 121,
    "title": "PRODUCT MANAGER",
    "skills": [
      "Product Strategy",
      "Market Analysis",
      "Requirements Gathering",
      "Product Roadmap"
    ],
    "description": "Defines and manages product strategy, gathering requirements and prioritizing features.",
    "locations": [
      "Los Angeles, CA"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 122,
    "title": "PRODUCTION SUPPORT ENGINEER",
    "skills": [
      "Troubleshooting",
      "Incident Management",
      "System Monitoring",
      "Technical Support"
    ],
    "description": "Provides technical support for production systems, resolving incidents and ensuring stability.",
    "locations": [
      "Raleigh, NC",
      "Los Angeles, CA"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 123,
    "title": "PUPPET OPERATIONS ENGINEER",
    "skills": [
      "Puppet",
      "Configuration Management",
      "Automation",
      "Infrastructure as Code"
    ],
    "description": "Manages and automates infrastructure configuration using Puppet.",
    "locations": [
      "Seattle, WA",
      "Charlotte, NC",
      "Washington, DC"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 124,
    "title": "SENIOR BUILD AND RELEASE ENGINEER",
    "skills": [
      "CI/CD Pipelines",
      "Build Systems",
      "Automation",
      "Configuration Management"
    ],
    "description": "Manages build and release processes, ensuring smooth and reliable software deployments.",
    "locations": [
      "Minneapolis, MN",
      "Nashville, TN",
      "Remote"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 125,
    "title": "SENIOR BUILD ENGINEER",
    "skills": [
      "Build Systems",
      "Scripting",
      "Automation",
      "Software Configuration Management"
    ],
    "description": "Develops and maintains build systems, automating software compilation and testing.",
    "locations": [
      "Washington, DC"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 126,
    "title": "SENIOR DEVOPS ENGINEER",
    "skills": [
      "DevOps Practices",
      "Cloud Computing",
      "Automation",
      "System Architecture"
    ],
    "description": "Leads DevOps initiatives, designing and implementing automation solutions.",
    "locations": [
      "Nashville, TN",
      "Austin, TX",
      "Boston, MA"
    ],
    "salaryMin": 130000,
    "salaryMax": 200000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 127,
    "title": "SITE RELIABILITY ENGINEER (KUBERNETES \u00c2\u20ac\u00ef\u00bf\u00bd DOCKER)",
    "skills": [
      "Kubernetes",
      "Docker",
      "System Reliability",
      "Automation",
      "Monitoring"
    ],
    "description": "Ensures the reliability and performance of systems running on Kubernetes and Docker.",
    "locations": [
      "Portland, OR",
      "Charlotte, NC"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 128,
    "title": "SPLUNK ENGINEER",
    "skills": [
      "Splunk",
      "Log Management",
      "Data Analysis",
      "System Monitoring"
    ],
    "description": "Configures and manages Splunk for log analysis, monitoring, and security insights.",
    "locations": [
      "Portland, OR",
      "Miami, FL",
      "Nashville, TN"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 129,
    "title": "XL DEPLOY ENGINEER",
    "skills": [
      "XL Deploy",
      "Deployment Automation",
      "DevOps Practices",
      "Configuration Management"
    ],
    "description": "Configures and manages XL Deploy for automating application deployments.",
    "locations": [
      "Remote",
      "San Diego, CA"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 130,
    "title": "ZABBIX ENGINEER",
    "skills": [
      "Zabbix",
      "System Monitoring",
      "Network Monitoring",
      "Alerting"
    ],
    "description": "Configures and manages Zabbix for monitoring systems, networks, and applications.",
    "locations": [
      "Remote",
      "Miami, FL"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 131,
    "title": "API DEVELOPER",
    "skills": [
      "API Design",
      "RESTful Services",
      "Programming Languages",
      "Security"
    ],
    "description": "Develops and implements APIs for integrating systems and applications.",
    "locations": [
      "Phoenix, AZ",
      "Miami, FL"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 132,
    "title": "AUTOMATION SPECIALIST",
    "skills": [
      "Automation Tools",
      "Scripting",
      "Process Improvement",
      "Testing"
    ],
    "description": "Designs and implements automation solutions to improve efficiency and reduce manual effort.",
    "locations": [
      "Washington, DC"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 133,
    "title": "BUSINESS INTELLIGENCE ANALYST",
    "skills": [
      "Data Analysis",
      "SQL",
      "Data Visualization",
      "Business Acumen"
    ],
    "description": "Analyzes data to provide insights and support business decision-making.",
    "locations": [
      "Remote",
      "Denver, CO",
      "Austin, TX"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 134,
    "title": "CLOUD MIGRATION SPECIALIST",
    "skills": [
      "Cloud Platforms",
      "Migration Tools",
      "System Migration",
      "Project Management"
    ],
    "description": "Plans and executes cloud migration projects, ensuring smooth transitions.",
    "locations": [
      "Seattle, WA",
      "Portland, OR",
      "Chicago, IL"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 135,
    "title": "CYBERSECURITY ANALYST",
    "skills": [
      "Security Protocols",
      "Threat Analysis",
      "Compliance",
      "Incident Response"
    ],
    "description": "Protects computer systems and networks from cyber threats.",
    "locations": [
      "San Francisco, CA",
      "Seattle, WA"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 136,
    "title": "DATA QUALITY ENGINEER",
    "skills": [
      "Data Quality Tools",
      "Data Profiling",
      "SQL",
      "Data Governance"
    ],
    "description": "Ensures data quality by profiling, monitoring, and improving data accuracy and consistency.",
    "locations": [
      "Miami, FL",
      "San Francisco, CA",
      "Dallas, TX"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 137,
    "title": "DIGITAL TRANSFORMATION CONSULTANT",
    "skills": [
      "Digital Strategy",
      "Technology Consulting",
      "Business Process Improvement",
      "Change Management"
    ],
    "description": "Advises organizations on digital transformation initiatives, driving innovation and efficiency.",
    "locations": [
      "Austin, TX",
      "Nashville, TN",
      "Phoenix, AZ"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 138,
    "title": "E-COMMERCE DEVELOPER",
    "skills": [
      "E-Commerce Platforms",
      "Web Development",
      "Payment Gateways",
      "Security"
    ],
    "description": "Develops and maintains e-commerce websites and applications.",
    "locations": [
      "Minneapolis, MN",
      "Washington, DC"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Internship",
    "workMode": "Hybrid"
  },
  {
    "id": 139,
    "title": "EMBEDDED SYSTEMS ENGINEER",
    "skills": [
      "Embedded Systems",
      "C/C++",
      "Firmware Development",
      "Hardware Interfaces"
    ],
    "description": "Develops software for embedded systems, integrating hardware and software components.",
    "locations": [
      "Austin, TX",
      "Portland, OR",
      "Seattle, WA"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 140,
    "title": "ERP CONSULTANT",
    "skills": [
      "ERP Systems",
      "Business Process Analysis",
      "Implementation",
      "Training"
    ],
    "description": "Consults on ERP system implementation, customization, and support.",
    "locations": [
      "Minneapolis, MN",
      "Boston, MA",
      "Chicago, IL"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 141,
    "title": "GEOGRAPHIC INFORMATION SYSTEMS (GIS) ANALYST",
    "skills": [
      "GIS Software",
      "Spatial Analysis",
      "Cartography",
      "Data Visualization"
    ],
    "description": "Analyzes spatial data using GIS software to create maps and provide insights.",
    "locations": [
      "Dallas, TX",
      "Charlotte, NC"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 142,
    "title": "HELP DESK TECHNICIAN",
    "skills": [
      "Technical Support",
      "Troubleshooting",
      "Customer Service",
      "Hardware/Software"
    ],
    "description": "Provides technical support to end-users, resolving hardware and software issues.",
    "locations": [
      "Los Angeles, CA",
      "Raleigh, NC"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 143,
    "title": "IDENTITY AND ACCESS MANAGEMENT SPECIALIST",
    "skills": [
      "IAM Systems",
      "Security Protocols",
      "Authentication",
      "Authorization"
    ],
    "description": "Manages identity and access control systems, ensuring secure access to resources.",
    "locations": [
      "San Francisco, CA",
      "Minneapolis, MN"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 144,
    "title": "INFRASTRUCTURE ARCHITECT",
    "skills": [
      "System Architecture",
      "Cloud Computing",
      "Networking",
      "Security"
    ],
    "description": "Designs and plans IT infrastructure, ensuring scalability, reliability, and security.",
    "locations": [
      "Chicago, IL",
      "Boston, MA",
      "Austin, TX"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Internship",
    "workMode": "Remote"
  },
  {
    "id": 145,
    "title": "INTERNET OF THINGS (IoT) DEVELOPER",
    "skills": [
      "IoT Platforms",
      "Embedded Systems",
      "Sensor Technology",
      "Programming Languages"
    ],
    "description": "Develops applications for IoT devices and platforms, connecting devices and analyzing data.",
    "locations": [
      "Raleigh, NC",
      "Portland, OR",
      "Nashville, TN"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 146,
    "title": "IT AUDITOR",
    "skills": [
      "IT Auditing",
      "Compliance",
      "Risk Management",
      "Security"
    ],
    "description": "Conducts IT audits to ensure compliance and identify security risks.",
    "locations": [
      "Remote",
      "Los Angeles, CA",
      "Dallas, TX"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Part-time",
    "workMode": "Remote"
  },
  {
    "id": 147,
    "title": "JAVA ARCHITECT",
    "skills": [
      "Java",
      "System Architecture",
      "Design Patterns",
      "Cloud Computing"
    ],
    "description": "Designs and leads the development of Java-based systems, ensuring scalability and maintainability.",
    "locations": [
      "Seattle, WA"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 148,
    "title": "LINUX ADMINISTRATOR",
    "skills": [
      "Linux Servers",
      "System Administration",
      "Scripting",
      "Troubleshooting"
    ],
    "description": "Manages and maintains Linux servers, ensuring system stability and security.",
    "locations": [
      "Nashville, TN",
      "Phoenix, AZ"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 149,
    "title": "MAINFRAME DEVELOPER",
    "skills": [
      "Mainframe Systems",
      "COBOL",
      "JCL",
      "VSAM"
    ],
    "description": "Develops and maintains applications on mainframe systems.",
    "locations": [
      "Phoenix, AZ"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 150,
    "title": "MICROSOFT DYNAMICS DEVELOPER",
    "skills": [
      "Microsoft Dynamics",
      "CRM",
      ".NET",
      "Development"
    ],
    "description": "Develops and customizes Microsoft Dynamics CRM solutions.",
    "locations": [
      "New York, NY",
      "Remote",
      "San Diego, CA"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 151,
    "title": "MOBILE SECURITY SPECIALIST",
    "skills": [
      "Mobile Security",
      "Penetration Testing",
      "Security Protocols",
      "Risk Management"
    ],
    "description": "Ensures the security of mobile devices and applications, conducting assessments and implementing security measures.",
    "locations": [
      "Portland, OR"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 152,
    "title": "NATURAL LANGUAGE PROCESSING ENGINEER",
    "skills": [
      "NLP Algorithms",
      "Python",
      "Machine Learning",
      "Text Analysis"
    ],
    "description": "Develops NLP models for various applications, such as chatbots and text analysis tools.",
    "locations": [
      "Remote",
      "Washington, DC"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 153,
    "title": "NETWORK ARCHITECT",
    "skills": [
      "Network Design",
      "Network Protocols",
      "Security",
      "System Architecture"
    ],
    "description": "Designs and plans computer networks.",
    "locations": [
      "Seattle, WA",
      "Chicago, IL",
      "Atlanta, GA"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Part-time",
    "workMode": "On-site"
  },
  {
    "id": 154,
    "title": "PENETRATION TESTER",
    "skills": [
      "Penetration Testing",
      "Security Audits",
      "Ethical Hacking",
      "Vulnerability Assessment"
    ],
    "description": "Conducts penetration tests to identify security vulnerabilities in systems and applications.",
    "locations": [
      "Washington, DC",
      "Seattle, WA"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 155,
    "title": "PYTHON ARCHITECT",
    "skills": [
      "Python",
      "System Architecture",
      "Design Patterns",
      "Cloud Computing"
    ],
    "description": "Designs and leads the development of Python-based systems, ensuring scalability and maintainability.",
    "locations": [
      "Los Angeles, CA",
      "Washington, DC",
      "Atlanta, GA"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 156,
    "title": "QUALITY ASSURANCE MANAGER",
    "skills": [
      "QA Processes",
      "Test Automation",
      "Test Planning",
      "Team Leadership"
    ],
    "description": "Manages quality assurance processes, ensuring software quality through testing and automation.",
    "locations": [
      "San Diego, CA"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Internship",
    "workMode": "On-site"
  },
  {
    "id": 157,
    "title": "RELEASE MANAGER",
    "skills": [
      "Release Management",
      "CI/CD Pipelines",
      "Coordination",
      "Communication"
    ],
    "description": "Manages software releases, coordinating activities and ensuring smooth deployments.",
    "locations": [
      "Charlotte, NC",
      "Boston, MA"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 158,
    "title": "SAP CONSULTANT",
    "skills": [
      "SAP Modules",
      "Business Process Analysis",
      "Implementation",
      "Customization"
    ],
    "description": "Consults on SAP system implementation, customization, and support.",
    "locations": [
      "Remote"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 159,
    "title": "UX/UI DESIGNER",
    "skills": [
      "UX/UI Design",
      "User Research",
      "Prototyping",
      "Usability Testing"
    ],
    "description": "Designs user interfaces and experiences, ensuring usability and aesthetic appeal.",
    "locations": [
      "Raleigh, NC"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 160,
    "title": "WEB DEVELOPER",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
      "Frameworks"
    ],
    "description": "Develops web applications, implementing front-end and back-end components.",
    "locations": [
      "Miami, FL",
      "Chicago, IL"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 161,
    "title": "BACK END DEVELOPER",
    "skills": [
      "Server-Side Programming",
      "Databases",
      "API Development",
      "Frameworks"
    ],
    "description": "Develops the server-side logic and APIs for web applications.",
    "locations": [
      "Dallas, TX",
      "Los Angeles, CA",
      "Portland, OR"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 162,
    "title": "WEB DESIGNER",
    "skills": [
      "Web Design",
      "Graphic Design",
      "UI/UX Principles",
      "Wireframing"
    ],
    "description": "Creates visual designs and layouts for websites, ensuring aesthetic appeal and usability.",
    "locations": [
      "Austin, TX",
      "Los Angeles, CA"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 163,
    "title": "WEB ENGINEER",
    "skills": [
      "Web Technologies",
      "System Architecture",
      "Performance Optimization",
      "Security"
    ],
    "description": "Designs and implements web infrastructure, ensuring scalability and reliability.",
    "locations": [
      "Minneapolis, MN",
      "San Diego, CA",
      "Charlotte, NC"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 164,
    "title": "WEB PRODUCER",
    "skills": [
      "Web Content Management",
      "Project Management",
      "Content Strategy",
      "Collaboration"
    ],
    "description": "Manages the creation and delivery of web content, coordinating with stakeholders.",
    "locations": [
      "Portland, OR",
      "New York, NY",
      "Remote"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 165,
    "title": "WEB PROJECT MANAGER",
    "skills": [
      "Project Management",
      "Web Development",
      "Communication",
      "Budgeting"
    ],
    "description": "Manages web development projects, ensuring they are completed on time and within budget.",
    "locations": [
      "Portland, OR",
      "Seattle, WA"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 166,
    "title": "WEB CONTENT MANAGER",
    "skills": [
      "Content Creation",
      "Content Strategy",
      "CMS",
      "SEO"
    ],
    "description": "Manages web content, ensuring it is accurate, engaging, and optimized for search engines.",
    "locations": [
      "Portland, OR"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 167,
    "title": "MULTIMEDIA ARCHITECT",
    "skills": [
      "Multimedia Design",
      "Video Production",
      "Audio Production",
      "Graphic Design"
    ],
    "description": "Designs and produces multimedia content for various platforms.",
    "locations": [
      "Chicago, IL",
      "Seattle, WA",
      "Denver, CO"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 168,
    "title": "WEB ANALYTICS DEVELOPER",
    "skills": [
      "Web Analytics Tools",
      "Data Analysis",
      "Reporting",
      "A/B Testing"
    ],
    "description": "Implements web analytics tools and analyzes data to improve website performance.",
    "locations": [
      "Minneapolis, MN"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 169,
    "title": "SEO CONSULTANT",
    "skills": [
      "Search Engine Optimization",
      "Keyword Research",
      "Content Optimization",
      "Link Building"
    ],
    "description": "Advises on SEO strategies, improving website visibility and organic traffic.",
    "locations": [
      "Charlotte, NC",
      "Miami, FL"
    ],
    "salaryMin": 130000,
    "salaryMax": 200000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 170,
    "title": "SEO MANAGER",
    "skills": [
      "SEO Strategy",
      "Team Leadership",
      "Performance Monitoring",
      "Reporting"
    ],
    "description": "Manages SEO initiatives, leading teams and monitoring performance.",
    "locations": [
      "Chicago, IL",
      "Dallas, TX",
      "Miami, FL"
    ],
    "salaryMin": 130000,
    "salaryMax": 200000,
    "jobType": "Part-time",
    "workMode": "Remote"
  },
  {
    "id": 171,
    "title": "INTERNET ENGINEER",
    "skills": [
      "Networking Protocols",
      "Internet Technologies",
      "System Administration",
      "Security"
    ],
    "description": "Designs, implements, and manages internet infrastructure.",
    "locations": [
      "New York, NY",
      "Washington, DC"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 172,
    "title": "FRONT-END DESIGNER",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "UI/UX Design",
      "Responsive Design"
    ],
    "description": "Designs the visual elements and user interface of web applications.",
    "locations": [
      "Denver, CO"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 173,
    "title": "MOBILE DEVELOPER",
    "skills": [
      "Mobile App Development",
      "iOS/Android SDKs",
      "UI/UX Design",
      "Programming Languages"
    ],
    "description": "Develops mobile applications for iOS and Android platforms.",
    "locations": [
      "Charlotte, NC"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 174,
    "title": "PYTHON DEVELOPER",
    "skills": [
      "Python",
      "Web Frameworks (Django",
      "Flask)",
      "Data Analysis",
      "Scripting"
    ],
    "description": "Develops applications using Python, focusing on back-end development and automation.",
    "locations": [
      "Los Angeles, CA",
      "Phoenix, AZ",
      "Charlotte, NC"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 175,
    "title": "POWER BI DEVELOPER",
    "skills": [
      "Power BI",
      "Data Modeling",
      "DAX",
      "Data Visualization"
    ],
    "description": "Develops interactive dashboards and reports using Power BI.",
    "locations": [
      "San Diego, CA"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 176,
    "title": "POWER BI ANALYST",
    "skills": [
      "Power BI",
      "Data Analysis",
      "SQL",
      "Business Intelligence"
    ],
    "description": "Analyzes data using Power BI to provide insights and support business decision-making.",
    "locations": [
      "Raleigh, NC",
      "Austin, TX",
      "Charlotte, NC"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 177,
    "title": "CLOUD COMPUTING SPECIALIST",
    "skills": [
      "Cloud Platforms",
      "Virtualization",
      "System Administration",
      "Security"
    ],
    "description": "Manages and maintains cloud infrastructure, ensuring availability and performance.",
    "locations": [
      "San Francisco, CA",
      "Phoenix, AZ"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 178,
    "title": "CYBERSECURITY SPECIALIST",
    "skills": [
      "Security Protocols",
      "Threat Analysis",
      "Compliance",
      "Incident Response"
    ],
    "description": "Protects computer systems and networks from cyber threats.",
    "locations": [
      "Nashville, TN",
      "San Francisco, CA"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 179,
    "title": "DATA SCIENCE SPECIALIST",
    "skills": [
      "Data Analysis",
      "Machine Learning",
      "Statistical Modeling",
      "Data Visualization"
    ],
    "description": "Applies data science techniques to analyze data and solve business problems.",
    "locations": [
      "Los Angeles, CA"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 180,
    "title": "ARTIFICIAL INTELLIGENCE ENGINEER",
    "skills": [
      "AI/ML Algorithms",
      "Python",
      "Deep Learning",
      "Neural Networks"
    ],
    "description": "Develops AI models and applications, implementing machine learning algorithms.",
    "locations": [
      "Austin, TX",
      "Portland, OR",
      "San Diego, CA"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 181,
    "title": "DATABASE ARCHITECT",
    "skills": [
      "Database Design",
      "Data Modeling",
      "SQL",
      "Performance Tuning"
    ],
    "description": "Designs and manages database systems, ensuring data integrity and performance.",
    "locations": [
      "Boston, MA"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 182,
    "title": "SOFTWARE ARCHITECT",
    "skills": [
      "System Architecture",
      "Design Patterns",
      "Programming Languages",
      "Cloud Computing"
    ],
    "description": "Designs and leads the development of software systems, ensuring scalability and maintainability.",
    "locations": [
      "New York, NY"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 183,
    "title": "CYBERSECURITY ENGINEER",
    "skills": [
      "Security Protocols",
      "Threat Analysis",
      "Risk Management",
      "Incident Response"
    ],
    "description": "Implements and manages security measures to protect computer systems and networks.",
    "locations": [
      "Austin, TX",
      "Denver, CO"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 184,
    "title": "INFOSEC ANALYST/CYBERSECURITY ANALYST",
    "skills": [
      "Security Protocols",
      "Threat Analysis",
      "Compliance",
      "Incident Response"
    ],
    "description": "Protects computer systems and networks from cyber threats.",
    "locations": [
      "Phoenix, AZ",
      "Austin, TX"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 185,
    "title": "COMPUTER FORENSIC ANALYST",
    "skills": [
      "Digital Forensics",
      "Incident Response",
      "Data Recovery",
      "Legal Compliance"
    ],
    "description": "Investigates cybercrimes and security incidents, collecting and analyzing digital evidence.",
    "locations": [
      "Minneapolis, MN"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 186,
    "title": "IT SECURITY SPECIALIST",
    "skills": [
      "Security Protocols",
      "Threat Analysis",
      "Compliance",
      "Risk Management"
    ],
    "description": "Implements and manages security measures to protect computer systems and networks.",
    "locations": [
      "Portland, OR"
    ],
    "salaryMin": 130000,
    "salaryMax": 200000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 187,
    "title": "SECURITY MANAGER",
    "skills": [
      "Security Management",
      "Risk Assessment",
      "Compliance",
      "Team Leadership"
    ],
    "description": "Manages security teams and initiatives, ensuring the protection of IT assets.",
    "locations": [
      "San Diego, CA"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 188,
    "title": "SECURITY ENGINEER",
    "skills": [
      "Security Protocols",
      "Threat Analysis",
      "Risk Management",
      "Incident Response"
    ],
    "description": "Implements and manages security measures to protect computer systems and networks.",
    "locations": [
      "Atlanta, GA",
      "Chicago, IL",
      "Los Angeles, CA"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 189,
    "title": "SECURITY CONSULTANT",
    "skills": [
      "Security Consulting",
      "Risk Assessment",
      "Compliance",
      "Security Solutions"
    ],
    "description": "Provides security consulting services, assessing risks and recommending security solutions.",
    "locations": [
      "Denver, CO",
      "Phoenix, AZ"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 190,
    "title": "DIRECTOR OF SECURITY",
    "skills": [
      "Security Leadership",
      "Risk Management",
      "Compliance",
      "Incident Response"
    ],
    "description": "Leads security teams and initiatives, providing strategic direction and ensuring compliance.",
    "locations": [
      "Minneapolis, MN",
      "Dallas, TX",
      "Portland, OR"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 191,
    "title": "SECURITY ADMINISTRATOR",
    "skills": [
      "Security Tools",
      "System Administration",
      "User Management",
      "Security Policies"
    ],
    "description": "Administers security systems, managing user access and enforcing security policies.",
    "locations": [
      "Raleigh, NC",
      "Denver, CO"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 192,
    "title": "SECURITY SPECIALIST",
    "skills": [
      "Security Protocols",
      "Threat Analysis",
      "Compliance",
      "Risk Management"
    ],
    "description": "Implements and manages security measures to protect computer systems and networks.",
    "locations": [
      "Minneapolis, MN"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Internship",
    "workMode": "Remote"
  },
  {
    "id": 193,
    "title": "CHIEF INFORMATION OFFICER",
    "skills": [
      "IT Strategy",
      "Leadership",
      "Budgeting",
      "Project Management"
    ],
    "description": "Leads IT organizations, defining IT strategy and overseeing IT operations.",
    "locations": [
      "Washington, DC"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Part-time",
    "workMode": "Hybrid"
  },
  {
    "id": 194,
    "title": "NETWORK SECURITY ENGINEER",
    "skills": [
      "Networking Protocols",
      "Security Protocols",
      "Firewall Management",
      "Intrusion Detection"
    ],
    "description": "Implements and manages network security measures, protecting networks from threats.",
    "locations": [
      "Seattle, WA",
      "Portland, OR",
      "Washington, DC"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 195,
    "title": "MACHINE LEARNING ENGINEER FOR CYBERSECURITY",
    "skills": [
      "Machine Learning Algorithms",
      "Cybersecurity",
      "Data Analysis",
      "Threat Detection"
    ],
    "description": "Develops machine learning models for cybersecurity applications, such as threat detection and fraud prevention.",
    "locations": [
      "Minneapolis, MN"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 196,
    "title": "NETWORK ANALYST",
    "skills": [
      "Network Monitoring",
      "Troubleshooting",
      "Performance Analysis",
      "Reporting"
    ],
    "description": "Monitors network performance, troubleshoots issues, and provides performance reports.",
    "locations": [
      "Atlanta, GA",
      "Denver, CO"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 197,
    "title": "NETWORK OPERATIONS ENGINEER",
    "skills": [
      "Network Operations",
      "Troubleshooting",
      "Monitoring",
      "Incident Response"
    ],
    "description": "Manages day-to-day network operations, resolving issues and ensuring network availability.",
    "locations": [
      "San Francisco, CA"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 198,
    "title": "NETWORK RELIABILITY ENGINEER",
    "skills": [
      "Network Reliability",
      "Automation",
      "Monitoring",
      "Incident Response"
    ],
    "description": "Ensures the reliability and performance of network infrastructure, implementing automation and monitoring solutions.",
    "locations": [
      "Phoenix, AZ",
      "New York, NY",
      "Remote"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 199,
    "title": "NETWORK INFRASTRUCTURE SPECIALIST",
    "skills": [
      "Networking Hardware",
      "Cabling",
      "Network Design",
      "Implementation"
    ],
    "description": "Installs, configures, and maintains network infrastructure, including cabling and hardware.",
    "locations": [
      "Raleigh, NC"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 200,
    "title": "COMPUTER SUPPORT SPECIALIST",
    "skills": [
      "Technical Support",
      "Troubleshooting",
      "Customer Service",
      "Hardware/Software"
    ],
    "description": "Provides technical support to end-users, resolving hardware and software issues.",
    "locations": [
      "San Francisco, CA"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 201,
    "title": "INFORMATION TECHNOLOGY ANALYST",
    "skills": [
      "IT Analysis",
      "Requirements Gathering",
      "Process Improvement",
      "IT Consulting"
    ],
    "description": "Analyzes IT systems and processes, recommending improvements and providing IT consulting services.",
    "locations": [
      "Denver, CO",
      "Boston, MA"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 202,
    "title": "TECHNOLOGY SALES CONSULTANT",
    "skills": [
      "Sales",
      "Technology Solutions",
      "Customer Relationship Management",
      "Technical Expertise"
    ],
    "description": "Sells technology solutions, providing technical expertise and building customer relationships.",
    "locations": [
      "Portland, OR"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 203,
    "title": "DATABASE DEVELOPER",
    "skills": [
      "Database Development",
      "SQL",
      "PL/SQL",
      "Data Modeling"
    ],
    "description": "Develops database applications and schemas.",
    "locations": [
      "Chicago, IL"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 204,
    "title": "DATABASE ANALYST",
    "skills": [
      "Data Analysis",
      "SQL",
      "Data Modeling",
      "Reporting"
    ],
    "description": "Analyzes data stored in databases and creates reports.",
    "locations": [
      "Seattle, WA",
      "San Francisco, CA",
      "New York, NY"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Part-time",
    "workMode": "Hybrid"
  },
  {
    "id": 205,
    "title": "DATA WAREHOUSE MANAGER",
    "skills": [
      "Data Warehousing",
      "ETL Processes",
      "Data Modeling",
      "Team Leadership"
    ],
    "description": "Manages data warehouse projects and teams.",
    "locations": [
      "Atlanta, GA",
      "Minneapolis, MN"
    ],
    "salaryMin": 130000,
    "salaryMax": 200000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 206,
    "title": "DATA WAREHOUSE PROGRAMMING SPECIALIST",
    "skills": [
      "ETL Processes",
      "SQL",
      "Data Modeling",
      "Data Warehousing"
    ],
    "description": "Develops and maintains ETL processes for data warehousing.",
    "locations": [
      "Charlotte, NC",
      "Chicago, IL",
      "Phoenix, AZ"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 207,
    "title": "INTELLIGENCE SPECIALIST",
    "skills": [
      "Data Analysis",
      "Intelligence Gathering",
      "Reporting",
      "Security"
    ],
    "description": "Gathers and analyzes intelligence data to support security and decision-making.",
    "locations": [
      "Los Angeles, CA",
      "Boston, MA",
      "Denver, CO"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 208,
    "title": "CLOUD/SOFTWARE ARCHITECT",
    "skills": [
      "Cloud Platforms",
      "System Architecture",
      "Cloud Security",
      "DevOps"
    ],
    "description": "Designs and oversees the implementation of cloud computing strategies.",
    "locations": [
      "Washington, DC"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 209,
    "title": "CLOUD/SOFTWARE DEVELOPER",
    "skills": [
      "Cloud Platforms",
      "Programming Languages",
      "Software Development",
      "Cloud Services"
    ],
    "description": "Develops software applications on cloud platforms.",
    "locations": [
      "Chicago, IL"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Internship",
    "workMode": "Hybrid"
  },
  {
    "id": 210,
    "title": "CLOUD/SOFTWARE APPLICATIONS ENGINEER",
    "skills": [
      "Cloud Platforms",
      "Application Development",
      "Cloud Services",
      "DevOps"
    ],
    "description": "Develops and deploys applications on cloud platforms.",
    "locations": [
      "Washington, DC",
      "Phoenix, AZ",
      "New York, NY"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 211,
    "title": "CLOUD SYSTEM ADMINISTRATOR",
    "skills": [
      "Cloud Platforms",
      "System Administration",
      "Virtualization",
      "Networking"
    ],
    "description": "Manages and maintains cloud infrastructure, ensuring availability and performance.",
    "locations": [
      "Los Angeles, CA"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 212,
    "title": "CLOUD SYSTEM ENGINEER",
    "skills": [
      "Cloud Platforms",
      "System Engineering",
      "Automation",
      "Scripting"
    ],
    "description": "Engineers cloud infrastructure, implementing automation and ensuring system reliability.",
    "locations": [
      "Boston, MA"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 213,
    "title": "PLATFORM ENGINEER",
    "skills": [
      "Platform Engineering",
      "Cloud Computing",
      "Automation",
      "DevOps Practices"
    ],
    "description": "Develops and maintains platform infrastructure, enabling efficient software development and deployment.",
    "locations": [
      "Miami, FL"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 214,
    "title": "SOFTWARE QUALITY ASSURANCE ANALYST",
    "skills": [
      "QA Processes",
      "Test Planning",
      "Test Execution",
      "Reporting"
    ],
    "description": "Ensures software quality through testing and reporting.",
    "locations": [
      "Miami, FL"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 215,
    "title": "UI (USER INTERFACE) DESIGNER",
    "skills": [
      "UI Design",
      "User Research",
      "Prototyping",
      "Usability Testing"
    ],
    "description": "Designs user interfaces, ensuring usability and aesthetic appeal.",
    "locations": [
      "Denver, CO",
      "Portland, OR",
      "Remote"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 216,
    "title": "TECHNICAL ACCOUNT MANAGER",
    "skills": [
      "Customer Relationship Management",
      "Technical Support",
      "Account Management",
      "Sales"
    ],
    "description": "Manages customer accounts, providing technical support and building relationships.",
    "locations": [
      "Miami, FL"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 217,
    "title": "IT SALES EXECUTIVE",
    "skills": [
      "Sales",
      "Technology Solutions",
      "Customer Relationship Management",
      "Sales Strategy"
    ],
    "description": "Sells technology solutions, developing sales strategies and building customer relationships.",
    "locations": [
      "Dallas, TX"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 218,
    "title": "IT SALES DIRECTOR",
    "skills": [
      "Sales Leadership",
      "Sales Strategy",
      "Customer Relationship Management",
      "Team Management"
    ],
    "description": "Leads IT sales teams, developing sales strategies and managing customer relationships.",
    "locations": [
      "Seattle, WA",
      "Austin, TX",
      "San Francisco, CA"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 219,
    "title": "TECHNOLOGY MANAGER",
    "skills": [
      "IT Management",
      "Team Leadership",
      "Project Management",
      "Budgeting"
    ],
    "description": "Manages IT teams and projects, ensuring efficient operations.",
    "locations": [
      "San Francisco, CA"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 220,
    "title": "TECHNOLOGY ASSISTANT",
    "skills": [
      "Technical Support",
      "Administrative Support",
      "Hardware/Software",
      "Troubleshooting"
    ],
    "description": "Provides technical and administrative support to IT teams.",
    "locations": [
      "Washington, DC",
      "Dallas, TX"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 221,
    "title": "TECHNOLOGY SPECIALIST",
    "skills": [
      "Technical Expertise",
      "Problem Solving",
      "Troubleshooting",
      "IT Support"
    ],
    "description": "Provides technical expertise and support, resolving complex IT issues.",
    "locations": [
      "Minneapolis, MN",
      "Los Angeles, CA",
      "San Francisco, CA"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 222,
    "title": "DIRECTOR ORACLE",
    "skills": [
      "Oracle Database",
      "Team Leadership",
      "Project Management",
      "Budgeting"
    ],
    "description": "Manages Oracle database teams and projects, ensuring efficient operations.",
    "locations": [
      "Atlanta, GA",
      "New York, NY",
      "Minneapolis, MN"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 223,
    "title": "KNOWLEDGE MANAGER",
    "skills": [
      "Knowledge Management",
      "Information Architecture",
      "Collaboration",
      "Documentation"
    ],
    "description": "Manages knowledge assets, ensuring information is accessible and organized.",
    "locations": [
      "Chicago, IL"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Internship",
    "workMode": "Remote"
  },
  {
    "id": 224,
    "title": "MANAGER HARDWARE",
    "skills": [
      "Hardware Management",
      "Team Leadership",
      "Budgeting",
      "Inventory Management"
    ],
    "description": "Manages hardware resources, leading teams and overseeing hardware operations.",
    "locations": [
      "Denver, CO"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 225,
    "title": "SHAREPOINT MANAGER",
    "skills": [
      "SharePoint",
      "Team Leadership",
      "Project Management",
      "Collaboration"
    ],
    "description": "Manages SharePoint environments, leading teams and ensuring efficient collaboration.",
    "locations": [
      "Washington, DC"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 226,
    "title": "REQUIREMENTS MANAGER",
    "skills": [
      "Requirements Gathering",
      "Analysis",
      "Documentation",
      "Communication"
    ],
    "description": "Manages requirements for IT projects, ensuring they are well-defined and communicated.",
    "locations": [
      "Denver, CO",
      "Chicago, IL",
      "Raleigh, NC"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Part-time",
    "workMode": "Hybrid"
  },
  {
    "id": 227,
    "title": "IMPLEMENTATION DIRECTOR",
    "skills": [
      "Implementation Management",
      "Project Management",
      "Team Leadership",
      "Communication"
    ],
    "description": "Manages IT project implementations, leading teams and ensuring successful deployments.",
    "locations": [
      "Portland, OR",
      "Nashville, TN"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 228,
    "title": "TECHNOLOGY OFFICER",
    "skills": [
      "IT Strategy",
      "Leadership",
      "Innovation",
      "Project Management"
    ],
    "description": "Provides technology leadership, defining IT strategy and driving innovation.",
    "locations": [
      "Minneapolis, MN",
      "Chicago, IL",
      "Remote"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 229,
    "title": "DIRECTOR BUSINESS SYSTEMS",
    "skills": [
      "Business Systems",
      "Team Leadership",
      "Project Management",
      "Process Improvement"
    ],
    "description": "Manages business systems, leading teams and improving business processes.",
    "locations": [
      "Chicago, IL"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 230,
    "title": "MANAGER NET",
    "skills": [
      "NET Development",
      "Team Leadership",
      "Project Management",
      ".NET Framework"
    ],
    "description": "Manages .NET development teams and projects, ensuring efficient development practices.",
    "locations": [
      "Denver, CO",
      "San Diego, CA",
      "Seattle, WA"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Part-time",
    "workMode": "On-site"
  },
  {
    "id": 231,
    "title": "SYSTEMS INTEGRATION MANAGER",
    "skills": [
      "Systems Integration",
      "Project Management",
      "Team Leadership",
      "Communication"
    ],
    "description": "Manages systems integration projects, leading teams and ensuring successful integration.",
    "locations": [
      "Raleigh, NC",
      "Remote",
      "Phoenix, AZ"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 232,
    "title": "DIGITAL PROGRAM MANAGER",
    "skills": [
      "Digital Strategy",
      "Program Management",
      "Team Leadership",
      "Communication"
    ],
    "description": "Manages digital programs, leading teams and ensuring successful execution.",
    "locations": [
      "Charlotte, NC"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 233,
    "title": "INTEGRATION DIRECTOR",
    "skills": [
      "Integration Management",
      "Project Management",
      "Team Leadership",
      "Communication"
    ],
    "description": "Manages integration projects, leading teams and ensuring successful integration.",
    "locations": [
      "Minneapolis, MN",
      "Remote",
      "Miami, FL"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 234,
    "title": "DIRECTOR HARDWARE",
    "skills": [
      "Hardware Management",
      "Team Leadership",
      "Budgeting",
      "Strategic Planning"
    ],
    "description": "Manages hardware resources, leading teams and developing hardware strategies.",
    "locations": [
      "Charlotte, NC",
      "Remote",
      "Dallas, TX"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 235,
    "title": "MANAGER LINUX",
    "skills": [
      "Linux Administration",
      "Team Leadership",
      "Project Management",
      "Troubleshooting"
    ],
    "description": "Manages Linux systems and teams, ensuring efficient operations and troubleshooting issues.",
    "locations": [
      "San Francisco, CA"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 236,
    "title": "MANAGER PHP",
    "skills": [
      "PHP Development",
      "Team Leadership",
      "Project Management",
      "Web Development"
    ],
    "description": "Manages PHP development teams and projects, ensuring efficient development practices.",
    "locations": [
      "San Diego, CA"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 237,
    "title": "FIRMWARE MANAGER",
    "skills": [
      "Firmware Development",
      "Team Leadership",
      "Project Management",
      "Embedded Systems"
    ],
    "description": "Manages firmware development teams and projects, ensuring efficient development practices.",
    "locations": [
      "Remote",
      "Phoenix, AZ",
      "New York, NY"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 238,
    "title": "IT PROGRAM ENGAGEMENT DIRECTOR",
    "skills": [
      "IT Program Management",
      "Customer Relationship Management",
      "Stakeholder Management",
      "Team Leadership"
    ],
    "description": "Manages IT program engagements, building customer relationships and leading teams.",
    "locations": [
      "San Diego, CA",
      "Boston, MA"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 239,
    "title": "MANAGER UNIX",
    "skills": [
      "UNIX Administration",
      "Team Leadership",
      "Project Management",
      "Troubleshooting"
    ],
    "description": "Manages UNIX systems and teams, ensuring efficient operations and troubleshooting issues.",
    "locations": [
      "Chicago, IL"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 240,
    "title": "TECHNOLOGY ADOPTION MANAGER",
    "skills": [
      "Technology Adoption",
      "Training",
      "Communication",
      "Change Management"
    ],
    "description": "Manages technology adoption initiatives, providing training and communication to ensure successful adoption.",
    "locations": [
      "Washington, DC",
      "Miami, FL"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 241,
    "title": "IT SUPPORT SPECIALIST",
    "skills": [
      "Technical Support",
      "Troubleshooting",
      "Customer Service",
      "Hardware/Software"
    ],
    "description": "Provides technical support to end-users, resolving hardware and software issues.",
    "locations": [
      "Chicago, IL",
      "Austin, TX",
      "Seattle, WA"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 242,
    "title": "CUSTOMER SERVICE REPRESENTATIVE",
    "skills": [
      "Customer Service",
      "Communication",
      "Problem Solving",
      "Technical Support"
    ],
    "description": "Provides customer service, resolving issues and providing technical support.",
    "locations": [
      "Chicago, IL",
      "Boston, MA",
      "Denver, CO"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 243,
    "title": "TECHNICAL PRODUCT MANAGER",
    "skills": [
      "Product Management",
      "Technical Expertise",
      "Market Analysis",
      "Requirements Gathering"
    ],
    "description": "Manages technical products, defining product strategy and gathering requirements.",
    "locations": [
      "Remote",
      "Seattle, WA"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 244,
    "title": "PROJECT MANAGER",
    "skills": [
      "Project Management",
      "Planning",
      "Execution",
      "Communication"
    ],
    "description": "Manages projects, ensuring they are completed on time and within budget.",
    "locations": [
      "Raleigh, NC"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 245,
    "title": "PROGRAM MANAGER",
    "skills": [
      "Program Management",
      "Planning",
      "Execution",
      "Communication"
    ],
    "description": "Manages programs, ensuring they are completed on time and within budget.",
    "locations": [
      "Austin, TX",
      "Minneapolis, MN"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 246,
    "title": "PORTFOLIO MANAGER",
    "skills": [
      "Portfolio Management",
      "Investment Management",
      "Risk Management",
      "Financial Analysis"
    ],
    "description": "Manages investment portfolios, assessing risk and making investment decisions.",
    "locations": [
      "San Diego, CA",
      "Los Angeles, CA"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 247,
    "title": "CHIEF INFORMATION OFFICER (CIO)",
    "skills": [
      "IT Strategy",
      "Leadership",
      "Budgeting",
      "Project Management"
    ],
    "description": "Leads IT organizations, defining IT strategy and overseeing IT operations.",
    "locations": [
      "Chicago, IL",
      "Atlanta, GA"
    ],
    "salaryMin": 70000,
    "salaryMax": 100000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 248,
    "title": "CHIEF TECHNOLOGY OFFICER (CTO)",
    "skills": [
      "Technology Strategy",
      "Innovation",
      "Research and Development",
      "Team Leadership"
    ],
    "description": "Leads technology initiatives, driving innovation and overseeing research and development.",
    "locations": [
      "Atlanta, GA",
      "Nashville, TN"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 249,
    "title": "IT DIRECTOR",
    "skills": [
      "IT Management",
      "Team Leadership",
      "Budgeting",
      "Project Management"
    ],
    "description": "Manages IT teams and projects, ensuring efficient operations.",
    "locations": [
      "Austin, TX",
      "San Diego, CA"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 250,
    "title": "TECHNICAL OPERATIONS OFFICER",
    "skills": [
      "Technical Operations",
      "Infrastructure Management",
      "System Administration",
      "Incident Response"
    ],
    "description": "Manages technical operations, ensuring the stability and performance of IT systems.",
    "locations": [
      "Portland, OR"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 251,
    "title": "INFORMATION MANAGEMENT SYSTEMS DIRECTOR",
    "skills": [
      "Information Management",
      "Systems Administration",
      "Data Management",
      "Compliance"
    ],
    "description": "Manages information management systems, ensuring data is accessible and secure.",
    "locations": [
      "Austin, TX",
      "Minneapolis, MN",
      "San Diego, CA"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 252,
    "title": "SENIOR IT CONSULTANT",
    "skills": [
      "IT Consulting",
      "Project Management",
      "Technical Expertise",
      "Client Management"
    ],
    "description": "Provides IT consulting services, managing projects and providing technical expertise.",
    "locations": [
      "Portland, OR"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 253,
    "title": "TECHNICAL LEAD",
    "skills": [
      "Technical Leadership",
      "Software Development",
      "Team Leadership",
      "Mentoring"
    ],
    "description": "Leads technical teams, providing guidance and mentoring team members.",
    "locations": [
      "Raleigh, NC",
      "Nashville, TN",
      "Austin, TX"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 254,
    "title": "IT APPRENTICE",
    "skills": [
      "Technical Support",
      "Troubleshooting",
      "Learning Agility",
      "Customer Service"
    ],
    "description": "Provides technical support to end-users, learning IT concepts and developing technical skills.",
    "locations": [
      "Los Angeles, CA",
      "Chicago, IL"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 255,
    "title": "IT TECHNICIAN",
    "skills": [
      "Technical Support",
      "Troubleshooting",
      "Hardware/Software",
      "Networking"
    ],
    "description": "Provides technical support to end-users, resolving hardware and software issues.",
    "locations": [
      "Nashville, TN",
      "Phoenix, AZ"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 256,
    "title": "IT SYSTEMS ADMINISTRATOR",
    "skills": [
      "System Administration",
      "Linux/Windows Servers",
      "Troubleshooting",
      "Scripting"
    ],
    "description": "Manages and maintains IT systems, ensuring stability and performance.",
    "locations": [
      "New York, NY"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 257,
    "title": "IT ENGINEER",
    "skills": [
      "System Engineering",
      "Networking",
      "Cloud Computing",
      "Security"
    ],
    "description": "Engineers IT systems, ensuring scalability, reliability, and security.",
    "locations": [
      "Los Angeles, CA",
      "Dallas, TX"
    ],
    "salaryMin": 130000,
    "salaryMax": 200000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 258,
    "title": "COMPUTER NETWORK SPECIALIST",
    "skills": [
      "Networking",
      "Troubleshooting",
      "System Administration",
      "Security"
    ],
    "description": "Manages and maintains computer networks, ensuring stability and security.",
    "locations": [
      "Chicago, IL",
      "Los Angeles, CA",
      "Portland, OR"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Part-time",
    "workMode": "Remote"
  },
  {
    "id": 259,
    "title": "COMPUTER AND INFORMATION RESEARCH SCIENTIST",
    "skills": [
      "Research Methodologies",
      "Data Analysis",
      "Programming",
      "Scientific Writing"
    ],
    "description": "Conducts research in computer science and develops new technologies.",
    "locations": [
      "Boston, MA"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Internship",
    "workMode": "On-site"
  },
  {
    "id": 260,
    "title": "COMPUTER AND INFORMATION RESEARCH MANAGER",
    "skills": [
      "Research Management",
      "Team Leadership",
      "Budgeting",
      "Project Management"
    ],
    "description": "Manages computer and information research projects and teams.",
    "locations": [
      "Raleigh, NC",
      "Minneapolis, MN",
      "Charlotte, NC"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 261,
    "title": "SOFTWARE DEVELOPMENT MANAGER",
    "skills": [
      "Software Development",
      "Team Leadership",
      "Project Management",
      "Software Architecture"
    ],
    "description": "Manages software development teams and projects, ensuring efficient development practices.",
    "locations": [
      "Miami, FL",
      "Chicago, IL"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Part-time",
    "workMode": "On-site"
  },
  {
    "id": 262,
    "title": "SOFTWARE DEVELOPMENT ENGINEER",
    "skills": [
      "Software Development",
      "Programming Languages",
      "Algorithm Design",
      "Problem Solving"
    ],
    "description": "Develops software applications, implementing algorithms and solving complex problems.",
    "locations": [
      "Washington, DC",
      "San Diego, CA"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 263,
    "title": "APPLICATION DESIGNER",
    "skills": [
      "Application Design",
      "UI/UX Principles",
      "Programming Languages",
      "Software Architecture"
    ],
    "description": "Designs software applications, ensuring usability and functionality.",
    "locations": [
      "Nashville, TN"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 264,
    "title": "APPLICATION ENGINEER",
    "skills": [
      "Application Development",
      "Programming Languages",
      "Troubleshooting",
      "System Administration"
    ],
    "description": "Develops and maintains software applications, troubleshooting issues and ensuring stability.",
    "locations": [
      "New York, NY",
      "Boston, MA"
    ],
    "salaryMin": 65000,
    "salaryMax": 95000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 265,
    "title": "LEAD PROGRAMMER",
    "skills": [
      "Programming Languages",
      "Software Development",
      "Team Leadership",
      "Mentoring"
    ],
    "description": "Leads programming teams, providing technical guidance and mentoring team members.",
    "locations": [
      "Boston, MA",
      "Los Angeles, CA"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 266,
    "title": "ITERATION MANAGER",
    "skills": [
      "Agile Methodologies",
      "Scrum",
      "Kanban",
      "Team Facilitation"
    ],
    "description": "Facilitates agile development teams, ensuring efficient iteration and collaboration.",
    "locations": [
      "Minneapolis, MN",
      "Atlanta, GA"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Internship",
    "workMode": "Remote"
  },
  {
    "id": 267,
    "title": "WEBMASTER",
    "skills": [
      "Web Development",
      "Web Design",
      "System Administration",
      "Content Management"
    ],
    "description": "Manages websites, ensuring functionality, security, and content quality.",
    "locations": [
      "Austin, TX",
      "San Francisco, CA"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Part-time",
    "workMode": "Hybrid"
  },
  {
    "id": 268,
    "title": "UX/UI RESEARCHER",
    "skills": [
      "User Research",
      "Usability Testing",
      "Data Analysis",
      "Reporting"
    ],
    "description": "Conducts user research and usability testing to inform design decisions.",
    "locations": [
      "Minneapolis, MN",
      "Chicago, IL",
      "Portland, OR"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Part-time",
    "workMode": "Hybrid"
  },
  {
    "id": 269,
    "title": "UX/UI SPECIALIST",
    "skills": [
      "UX/UI Design",
      "User Research",
      "Prototyping",
      "Usability Testing"
    ],
    "description": "Designs user interfaces and experiences, ensuring usability and aesthetic appeal.",
    "locations": [
      "Miami, FL",
      "Austin, TX",
      "Los Angeles, CA"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 270,
    "title": "ANIMATOR",
    "skills": [
      "Animation Software",
      "2D/3D Animation",
      "Storyboarding",
      "Visual Effects"
    ],
    "description": "Creates animations for various media, including films, games, and websites.",
    "locations": [
      "Los Angeles, CA",
      "Seattle, WA",
      "Charlotte, NC"
    ],
    "salaryMin": 60000,
    "salaryMax": 90000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 271,
    "title": "MOTION GRAPHICS ARTIST",
    "skills": [
      "Motion Graphics",
      "Animation Software",
      "Visual Effects",
      "Graphic Design"
    ],
    "description": "Creates motion graphics and visual effects for various media.",
    "locations": [
      "Washington, DC",
      "Minneapolis, MN",
      "Austin, TX"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 272,
    "title": "2D ARTIST/ANIMATOR",
    "skills": [
      "2D Animation",
      "Drawing",
      "Illustration",
      "Animation Software"
    ],
    "description": "Creates 2D animations for various media.",
    "locations": [
      "Raleigh, NC",
      "San Francisco, CA"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 273,
    "title": "3D ARTIST/ANIMATOR",
    "skills": [
      "3D Animation",
      "Modeling",
      "Texturing",
      "Rigging"
    ],
    "description": "Creates 3D animations for various media.",
    "locations": [
      "Raleigh, NC",
      "Charlotte, NC",
      "New York, NY"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 274,
    "title": "CHARACTER DESIGNER",
    "skills": [
      "Character Design",
      "Illustration",
      "Drawing",
      "Animation"
    ],
    "description": "Designs characters for animation, games, and other media.",
    "locations": [
      "Miami, FL"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 275,
    "title": "STORYBOARD ARTIST",
    "skills": [
      "Storyboarding",
      "Drawing",
      "Visual Communication",
      "Film/Animation"
    ],
    "description": "Creates storyboards for films, animations, and other media.",
    "locations": [
      "Minneapolis, MN"
    ],
    "salaryMin": 80000,
    "salaryMax": 120000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 276,
    "title": "VFX ARTIST",
    "skills": [
      "Visual Effects",
      "Compositing",
      "3D Modeling",
      "Simulation"
    ],
    "description": "Creates visual effects for films, television, and other media.",
    "locations": [
      "Chicago, IL"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Part-time",
    "workMode": "Remote"
  },
  {
    "id": 277,
    "title": "RIGGING ARTIST",
    "skills": [
      "Rigging",
      "Animation",
      "3D Modeling",
      "Character Setup"
    ],
    "description": "Creates rigs for animating 3D characters.",
    "locations": [
      "San Diego, CA",
      "Seattle, WA"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Internship",
    "workMode": "Hybrid"
  },
  {
    "id": 278,
    "title": "TECHNICAL ANIMATOR",
    "skills": [
      "Technical Animation",
      "Scripting",
      "Programming",
      "Animation Software"
    ],
    "description": "Develops tools and workflows for animation production.",
    "locations": [
      "Dallas, TX"
    ],
    "salaryMin": 120000,
    "salaryMax": 180000,
    "jobType": "Internship",
    "workMode": "Remote"
  },
  {
    "id": 279,
    "title": "ART DIRECTOR",
    "skills": [
      "Art Direction",
      "Visual Design",
      "Team Leadership",
      "Project Management"
    ],
    "description": "Leads art teams, providing visual direction and ensuring aesthetic consistency.",
    "locations": [
      "Charlotte, NC"
    ],
    "salaryMin": 50000,
    "salaryMax": 75000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 280,
    "title": "ANIMATION DIRECTOR",
    "skills": [
      "Animation Direction",
      "Storytelling",
      "Team Leadership",
      "Project Management"
    ],
    "description": "Directs animation projects, ensuring artistic quality and storytelling effectiveness.",
    "locations": [
      "Seattle, WA",
      "Minneapolis, MN"
    ],
    "salaryMin": 95000,
    "salaryMax": 150000,
    "jobType": "Internship",
    "workMode": "Hybrid"
  },
  {
    "id": 281,
    "title": "VISUAL EFFECTS ANIMATOR",
    "skills": [
      "Visual Effects",
      "Animation",
      "Compositing",
      "3D Modeling"
    ],
    "description": "Creates visual effects for films, television, and other media.",
    "locations": [
      "Austin, TX"
    ],
    "salaryMin": 130000,
    "salaryMax": 200000,
    "jobType": "Full-time",
    "workMode": "Hybrid"
  },
  {
    "id": 282,
    "title": "GRAPHIC EFFECTS SUPERVISOR",
    "skills": [
      "Visual Effects Supervision",
      "Team Leadership",
      "Technical Expertise",
      "Project Management"
    ],
    "description": "Supervises visual effects projects, ensuring technical and artistic quality.",
    "locations": [
      "Seattle, WA",
      "San Diego, CA"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 283,
    "title": "FORENSIC ANIMATOR",
    "skills": [
      "Forensic Animation",
      "3D Modeling",
      "Legal Expertise",
      "Visual Communication"
    ],
    "description": "Creates animations for legal presentations, visualizing forensic evidence.",
    "locations": [
      "Miami, FL"
    ],
    "salaryMin": 55000,
    "salaryMax": 80000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 284,
    "title": "COMPOSITOR",
    "skills": [
      "Compositing",
      "Visual Effects",
      "Color Correction",
      "Image Manipulation"
    ],
    "description": "Combines visual elements to create final images for films, television, and other media.",
    "locations": [
      "Raleigh, NC"
    ],
    "salaryMin": 85000,
    "salaryMax": 130000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 285,
    "title": "EFFECTS TECHNICAL DIRECTOR (FX TD)",
    "skills": [
      "Visual Effects",
      "Technical Expertise",
      "Scripting",
      "Problem Solving"
    ],
    "description": "Develops technical solutions for visual effects production.",
    "locations": [
      "Seattle, WA",
      "New York, NY",
      "Denver, CO"
    ],
    "salaryMin": 75000,
    "salaryMax": 110000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 286,
    "title": "LAYOUT ARTIST",
    "skills": [
      "Layout",
      "Cinematography",
      "3D Modeling",
      "Visual Storytelling"
    ],
    "description": "Creates layouts for animated scenes, determining camera angles and composition.",
    "locations": [
      "Washington, DC",
      "Portland, OR",
      "Denver, CO"
    ],
    "salaryMin": 45000,
    "salaryMax": 65000,
    "jobType": "Full-time",
    "workMode": "Remote"
  },
  {
    "id": 287,
    "title": "AI RESEARCHER",
    "skills": [
      "AI/ML Algorithms",
      "Python",
      "Research Methodologies",
      "Data Analysis"
    ],
    "description": "Conducts research in artificial intelligence and machine learning, developing new algorithms and techniques.",
    "locations": [
      "Austin, TX",
      "Charlotte, NC",
      "Boston, MA"
    ],
    "salaryMin": 100000,
    "salaryMax": 160000,
    "jobType": "Full-time",
    "workMode": "On-site"
  },
  {
    "id": 288,
    "title": "AI SOFTWARE ARCHITECT",
    "skills": [
      "AI/ML Architecture",
      "Software Design",
      "Cloud Computing",
      "Data Modeling"
    ],
    "description": "Designs and implements AI software systems, ensuring scalability and performance.",
    "locations": [
      "Minneapolis, MN",
      "Phoenix, AZ"
    ],
    "salaryMin": 110000,
    "salaryMax": 170000,
    "jobType": "Part-time",
    "workMode": "On-site"
  },
  {
    "id": 289,
    "title": "BUSINESS INTELLIGENCE DEVELOPER",
    "skills": [
      "Business Intelligence Tools",
      "Data Modeling",
      "SQL",
      "ETL Processes"
    ],
    "description": "Develops business intelligence solutions, creating reports and dashboards.",
    "locations": [
      "Chicago, IL"
    ],
    "salaryMin": 90000,
    "salaryMax": 140000,
    "jobType": "Full-time",
    "workMode": "On-site"
  }
];
