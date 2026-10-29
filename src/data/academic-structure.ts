/**
 * Academic affiliations used across AUPES account forms.
 * Names are based on the colleges, institutes, schools and department pages
 * published by Ambo University. Keep these shared so every form uses the same options.
 */
export const ACADEMIC_UNITS = [
  "College of Agriculture and Veterinary Science",
  "College of Business and Economics",
  "College of Medicine and Health Sciences",
  "College of Natural and Computational Sciences",
  "College of Social Science and Humanities",
  "Institute of Education and Behavioral Sciences",
  "Institute of Technology",
  "School of Law",
  "University Administration / Other",
] as const;

export const DEPARTMENTS_BY_UNIT: Record<string, readonly string[]> = {
  "College of Agriculture and Veterinary Science": [
    "Agribusiness and Value Chain Management",
    "Animal Science",
    "Forestry",
    "Land Administration and Surveying",
    "Natural Resource Management",
    "Plant Science",
    "Veterinary Science",
  ],
  "College of Business and Economics": [
    "Accounting and Finance",
    "Cooperative and Development Studies",
    "Economics",
    "Management",
    "Marketing Management",
    "Public Administration and Development Management",
  ],
  "College of Medicine and Health Sciences": [
    "Anesthesia",
    "Midwifery",
    "Medical Laboratory Sciences",
    "Medicine",
    "Nursing",
    "Pharmacy",
    "Public Health",
  ],
  "College of Natural and Computational Sciences": [
    "Biology",
    "Chemistry",
    "Mathematics",
    "Physics",
    "Sport Science",
    "Statistics",
  ],
  "College of Social Science and Humanities": [
    "Afaan Oromoo and Literature",
    "Civics and Ethical Studies",
    "English Language and Literature",
    "Journalism and Communication",
    "Linguistics",
    "Political Science and International Relations",
    "Social Work",
    "Sociology",
  ],
  "Institute of Education and Behavioral Sciences": [
    "Adult Education and Community Development",
    "Educational Planning and Management",
    "Psychology",
    "Special Needs and Inclusive Education",
    "Teacher Education",
  ],
  "Institute of Technology": [
    "Architecture",
    "Cadastral Surveying and Geomatics Engineering",
    "Civil Engineering",
    "Computer Science",
    "Construction Technology and Management",
    "Electrical and Computer Engineering",
    "Food Process Engineering and Postharvest Technology",
    "Hydraulic and Water Resources Engineering",
    "Industrial Engineering",
    "Information Technology",
    "Mechanical Engineering",
    "Urban and Regional Planning",
  ],
  "School of Law": ["Law"],
  "University Administration / Other": [
    "Academic Affairs",
    "Administration and Finance",
    "Registrar",
    "Research and Community Service",
    "Student Services",
    "Other Administrative Unit",
  ],
};
