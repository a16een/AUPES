export type FormType = "student" | "department_head" | "peer" | "self";
export type Question = { id: string; area: string; prompt: string; order: number; form_type: FormType };
export const FORM_META: Record<FormType,{label:string;weight:number;shortLabel:string;description:string}> = {
  "student": {
    "label": "Student evaluation",
    "weight": 40,
    "shortLabel": "A",
    "description": "Course delivery, instructional skills and professional conduct"
  },
  "department_head": {
    "label": "Department head evaluation",
    "weight": 35,
    "shortLabel": "B",
    "description": "Core and professional competencies, time management and ethics"
  },
  "peer": {
    "label": "Peer evaluation",
    "weight": 15,
    "shortLabel": "C",
    "description": "Subject expertise, research, collaboration and conduct"
  },
  "self": {
    "label": "Self-evaluation",
    "weight": 10,
    "shortLabel": "D",
    "description": "Reflective assessment of teaching, feedback and professional attitude"
  }
};
export const FORM_QUESTIONS: Record<FormType,Question[]> = {
  "student": [
    {
      "id": "a_001",
      "area": "Instructional skills",
      "prompt": "Presents the course objective clearly.",
      "order": 1,
      "form_type": "student"
    },
    {
      "id": "a_002",
      "area": "Instructional skills",
      "prompt": "Specifies the activities to be done during the lesson clearly.",
      "order": 2,
      "form_type": "student"
    },
    {
      "id": "a_003",
      "area": "Instructional skills",
      "prompt": "Explains the content of each unit or chapter clearly.",
      "order": 3,
      "form_type": "student"
    },
    {
      "id": "a_004",
      "area": "Instructional skills",
      "prompt": "Covers the course content according to the given timetable.",
      "order": 4,
      "form_type": "student"
    },
    {
      "id": "a_005",
      "area": "Instructional skills",
      "prompt": "Presents the course clearly using the language of instruction.",
      "order": 5,
      "form_type": "student"
    },
    {
      "id": "a_006",
      "area": "Instructional skills",
      "prompt": "Responds to students’ questions positively.",
      "order": 6,
      "form_type": "student"
    },
    {
      "id": "a_007",
      "area": "Instructional skills",
      "prompt": "Links the lesson clearly to previous and future lessons.",
      "order": 7,
      "form_type": "student"
    },
    {
      "id": "a_008",
      "area": "Instructional skills",
      "prompt": "Adapts knowledge to the level of the learners.",
      "order": 8,
      "form_type": "student"
    },
    {
      "id": "a_009",
      "area": "Instructional skills",
      "prompt": "Makes students active participants during teaching and learning.",
      "order": 9,
      "form_type": "student"
    },
    {
      "id": "a_010",
      "area": "Instructional skills",
      "prompt": "Supports students’ attempts at solving problems.",
      "order": 10,
      "form_type": "student"
    },
    {
      "id": "a_011",
      "area": "Instructional skills",
      "prompt": "Gives students time during lessons.",
      "order": 11,
      "form_type": "student"
    },
    {
      "id": "a_012",
      "area": "Instructional skills",
      "prompt": "Uses a variety of teaching techniques to accommodate different learning styles.",
      "order": 12,
      "form_type": "student"
    },
    {
      "id": "a_013",
      "area": "Instructional skills",
      "prompt": "Makes the class thought-provoking and interesting.",
      "order": 13,
      "form_type": "student"
    },
    {
      "id": "a_014",
      "area": "Instructional skills",
      "prompt": "Provides make-up classes properly when classes are missed.",
      "order": 14,
      "form_type": "student"
    },
    {
      "id": "a_015",
      "area": "Instructional skills",
      "prompt": "Provides tutorial classes properly when assigned.",
      "order": 15,
      "form_type": "student"
    },
    {
      "id": "a_016",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Begins and ends class on time.",
      "order": 16,
      "form_type": "student"
    },
    {
      "id": "a_017",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Makes effective use of class time.",
      "order": 17,
      "form_type": "student"
    },
    {
      "id": "a_018",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Provides consultation during arranged hours.",
      "order": 18,
      "form_type": "student"
    },
    {
      "id": "a_019",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Shows genuine concern for students’ learning and problems.",
      "order": 19,
      "form_type": "student"
    },
    {
      "id": "a_020",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Encourages students to freely express feelings, opinions and ideas in class.",
      "order": 20,
      "form_type": "student"
    },
    {
      "id": "a_021",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Encourages peer and cooperative learning.",
      "order": 21,
      "form_type": "student"
    },
    {
      "id": "a_022",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Acts in a professionally acceptable manner.",
      "order": 22,
      "form_type": "student"
    },
    {
      "id": "a_023",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Maintains a classroom atmosphere conducive to learning.",
      "order": 23,
      "form_type": "student"
    }
  ],
  "department_head": [
    {
      "id": "b_001",
      "area": "Core Competency",
      "prompt": "Makes efforts toward self-development in their specialization.",
      "order": 1,
      "form_type": "department_head"
    },
    {
      "id": "b_002",
      "area": "Core Competency",
      "prompt": "Demonstrates adequate subject-matter knowledge.",
      "order": 2,
      "form_type": "department_head"
    },
    {
      "id": "b_003",
      "area": "Core Competency",
      "prompt": "Accepts additional teaching assignments when compelling situations arise in the department.",
      "order": 3,
      "form_type": "department_head"
    },
    {
      "id": "b_004",
      "area": "Core Competency",
      "prompt": "Accepts related departmental assignments beyond regular teaching, such as mentorship.",
      "order": 4,
      "form_type": "department_head"
    },
    {
      "id": "b_005",
      "area": "Core Competency",
      "prompt": "Is effective as a mentor in educational development activities, internships and similar work.",
      "order": 5,
      "form_type": "department_head"
    },
    {
      "id": "b_006",
      "area": "Core Competency",
      "prompt": "Actively participates in improving the teaching-learning process.",
      "order": 6,
      "form_type": "department_head"
    },
    {
      "id": "b_007",
      "area": "Core Competency",
      "prompt": "Participates in community-service affairs.",
      "order": 7,
      "form_type": "department_head"
    },
    {
      "id": "b_008",
      "area": "Core Competency",
      "prompt": "Actively participates in seminars, workshops and symposia.",
      "order": 8,
      "form_type": "department_head"
    },
    {
      "id": "b_009",
      "area": "Core Competency",
      "prompt": "Identifies priority areas in their discipline and pursues research in those areas.",
      "order": 9,
      "form_type": "department_head"
    },
    {
      "id": "b_010",
      "area": "Core Competency",
      "prompt": "Participates in research projects and project-proposal development.",
      "order": 10,
      "form_type": "department_head"
    },
    {
      "id": "b_011",
      "area": "Core Competency",
      "prompt": "Performs well as an academic advisor.",
      "order": 11,
      "form_type": "department_head"
    },
    {
      "id": "b_012",
      "area": "Professional Competency",
      "prompt": "Participates in identifying and solving problems at department, college or institution level.",
      "order": 12,
      "form_type": "department_head"
    },
    {
      "id": "b_013",
      "area": "Professional Competency",
      "prompt": "Implements continuous assessment.",
      "order": 13,
      "form_type": "department_head"
    },
    {
      "id": "b_014",
      "area": "Professional Competency",
      "prompt": "Actively participates in departmental, college and institutional affairs.",
      "order": 14,
      "form_type": "department_head"
    },
    {
      "id": "b_015",
      "area": "Professional Competency",
      "prompt": "Provides and reports tutorial activities designed for students.",
      "order": 15,
      "form_type": "department_head"
    },
    {
      "id": "b_016",
      "area": "Professional Competency",
      "prompt": "Participates in preparing and reviewing teaching materials.",
      "order": 16,
      "form_type": "department_head"
    },
    {
      "id": "b_017",
      "area": "Professional Competency",
      "prompt": "Updates teaching materials.",
      "order": 17,
      "form_type": "department_head"
    },
    {
      "id": "b_018",
      "area": "Professional Competency",
      "prompt": "Willingly shares University resources with colleagues.",
      "order": 18,
      "form_type": "department_head"
    },
    {
      "id": "b_019",
      "area": "Time Management",
      "prompt": "Executes assigned classes and invigilation on time.",
      "order": 19,
      "form_type": "department_head"
    },
    {
      "id": "b_020",
      "area": "Time Management",
      "prompt": "Notifies and implements consultation in a timely way.",
      "order": 20,
      "form_type": "department_head"
    },
    {
      "id": "b_021",
      "area": "Time Management",
      "prompt": "Provides timely feedback to students.",
      "order": 21,
      "form_type": "department_head"
    },
    {
      "id": "b_022",
      "area": "Time Management",
      "prompt": "Meets deadlines for reports, SIMS result entry, submissions and related duties.",
      "order": 22,
      "form_type": "department_head"
    },
    {
      "id": "b_023",
      "area": "Ethical Competency",
      "prompt": "Has a positive attitude toward working with others.",
      "order": 23,
      "form_type": "department_head"
    },
    {
      "id": "b_024",
      "area": "Ethical Competency",
      "prompt": "Shows concern for the use of departmental and University resources.",
      "order": 24,
      "form_type": "department_head"
    },
    {
      "id": "b_025",
      "area": "Ethical Competency",
      "prompt": "Willingly participates in committees at department and University level.",
      "order": 25,
      "form_type": "department_head"
    },
    {
      "id": "b_026",
      "area": "Ethical Competency",
      "prompt": "Is willing to take assignments outside the University in their area of specialization.",
      "order": 26,
      "form_type": "department_head"
    },
    {
      "id": "b_027",
      "area": "Ethical Competency",
      "prompt": "Demonstrates professional ethics in dress, presentation and conduct.",
      "order": 27,
      "form_type": "department_head"
    }
  ],
  "peer": [
    {
      "id": "c_001",
      "area": "Subject Matter Competency",
      "prompt": "Contributes to preparing and searching for teaching materials.",
      "order": 1,
      "form_type": "peer"
    },
    {
      "id": "c_002",
      "area": "Subject Matter Competency",
      "prompt": "Continuously updates subject-matter knowledge.",
      "order": 2,
      "form_type": "peer"
    },
    {
      "id": "c_003",
      "area": "Subject Matter Competency",
      "prompt": "Attends seminars organized by the department, college, school or institute.",
      "order": 3,
      "form_type": "peer"
    },
    {
      "id": "c_004",
      "area": "Subject Matter Competency",
      "prompt": "Demonstrates subject-matter knowledge and skill.",
      "order": 4,
      "form_type": "peer"
    },
    {
      "id": "c_005",
      "area": "Research & Community Services",
      "prompt": "Shows willingness and engagement in community-service activities.",
      "order": 5,
      "form_type": "peer"
    },
    {
      "id": "c_006",
      "area": "Research & Community Services",
      "prompt": "Participates in seminars and workshops at department, college, school or institute level during the year.",
      "order": 6,
      "form_type": "peer"
    },
    {
      "id": "c_007",
      "area": "Research & Community Services",
      "prompt": "Identifies priority areas in their discipline and pursues research in those areas.",
      "order": 7,
      "form_type": "peer"
    },
    {
      "id": "c_008",
      "area": "Research & Community Services",
      "prompt": "Is willing to prepare research projects with colleagues.",
      "order": 8,
      "form_type": "peer"
    },
    {
      "id": "c_009",
      "area": "Research & Community Services",
      "prompt": "Helps colleagues identify research areas and develop proposals.",
      "order": 9,
      "form_type": "peer"
    },
    {
      "id": "c_010",
      "area": "Professional Competency",
      "prompt": "Provides guidance and counseling to students.",
      "order": 10,
      "form_type": "peer"
    },
    {
      "id": "c_011",
      "area": "Professional Competency",
      "prompt": "Contributes ideas and activities that improve the teaching-learning process.",
      "order": 11,
      "form_type": "peer"
    },
    {
      "id": "c_012",
      "area": "Professional Competency",
      "prompt": "Participates in identifying and solving problems at department, college or institution level.",
      "order": 12,
      "form_type": "peer"
    },
    {
      "id": "c_013",
      "area": "Professional Competency",
      "prompt": "Shows willingness and preparedness to implement change tools.",
      "order": 13,
      "form_type": "peer"
    },
    {
      "id": "c_014",
      "area": "Professional Competency",
      "prompt": "Actively participates in 1–5 grouping (Education Development Army) activities.",
      "order": 14,
      "form_type": "peer"
    },
    {
      "id": "c_015",
      "area": "Professional Competency",
      "prompt": "Implements different teaching methods in their discipline.",
      "order": 15,
      "form_type": "peer"
    },
    {
      "id": "c_016",
      "area": "Professional Competency",
      "prompt": "Properly invigilates exams and tests to ensure academic integrity.",
      "order": 16,
      "form_type": "peer"
    },
    {
      "id": "c_017",
      "area": "Ethical Competency",
      "prompt": "Willingly participates in committee work and demonstrates commitment.",
      "order": 17,
      "form_type": "peer"
    },
    {
      "id": "c_018",
      "area": "Ethical Competency",
      "prompt": "Actively participates in departmental, college and institute meetings.",
      "order": 18,
      "form_type": "peer"
    },
    {
      "id": "c_019",
      "area": "Ethical Competency",
      "prompt": "Willingly shares University resources with colleagues.",
      "order": 19,
      "form_type": "peer"
    },
    {
      "id": "c_020",
      "area": "Ethical Competency",
      "prompt": "Shows cordiality toward others.",
      "order": 20,
      "form_type": "peer"
    },
    {
      "id": "c_021",
      "area": "Ethical Competency",
      "prompt": "Has a positive attitude toward working with others.",
      "order": 21,
      "form_type": "peer"
    },
    {
      "id": "c_022",
      "area": "Ethical Competency",
      "prompt": "Respects other people’s ideas.",
      "order": 22,
      "form_type": "peer"
    },
    {
      "id": "c_023",
      "area": "Ethical Competency",
      "prompt": "Respects institutional rules and guidelines.",
      "order": 23,
      "form_type": "peer"
    },
    {
      "id": "c_024",
      "area": "Ethical Competency",
      "prompt": "Maintains appropriate professional discipline and conduct.",
      "order": 24,
      "form_type": "peer"
    },
    {
      "id": "c_025",
      "area": "Time Management",
      "prompt": "Manages time effectively in departmental affairs.",
      "order": 25,
      "form_type": "peer"
    },
    {
      "id": "c_026",
      "area": "Time Management",
      "prompt": "Uses consultation hours effectively.",
      "order": 26,
      "form_type": "peer"
    }
  ],
  "self": [
    {
      "id": "d_001",
      "area": "Instructional skills",
      "prompt": "Presents the course objective clearly.",
      "order": 1,
      "form_type": "self"
    },
    {
      "id": "d_002",
      "area": "Instructional skills",
      "prompt": "Specifies the activities to be done during the lesson clearly.",
      "order": 2,
      "form_type": "self"
    },
    {
      "id": "d_003",
      "area": "Instructional skills",
      "prompt": "Explains the content of each unit or chapter clearly.",
      "order": 3,
      "form_type": "self"
    },
    {
      "id": "d_004",
      "area": "Instructional skills",
      "prompt": "Covers the course content according to the given timetable.",
      "order": 4,
      "form_type": "self"
    },
    {
      "id": "d_005",
      "area": "Instructional skills",
      "prompt": "Presents the course clearly using the language of instruction.",
      "order": 5,
      "form_type": "self"
    },
    {
      "id": "d_006",
      "area": "Instructional skills",
      "prompt": "Responds to students’ questions positively.",
      "order": 6,
      "form_type": "self"
    },
    {
      "id": "d_007",
      "area": "Instructional skills",
      "prompt": "Links the lesson clearly to previous and future lessons.",
      "order": 7,
      "form_type": "self"
    },
    {
      "id": "d_008",
      "area": "Instructional skills",
      "prompt": "Adapts knowledge to the level of the learners.",
      "order": 8,
      "form_type": "self"
    },
    {
      "id": "d_009",
      "area": "Instructional skills",
      "prompt": "Makes students active participants during teaching and learning.",
      "order": 9,
      "form_type": "self"
    },
    {
      "id": "d_010",
      "area": "Instructional skills",
      "prompt": "Supports students’ attempts at solving problems.",
      "order": 10,
      "form_type": "self"
    },
    {
      "id": "d_011",
      "area": "Instructional skills",
      "prompt": "Gives students time during lessons.",
      "order": 11,
      "form_type": "self"
    },
    {
      "id": "d_012",
      "area": "Instructional skills",
      "prompt": "Uses a variety of teaching techniques to accommodate different learning styles.",
      "order": 12,
      "form_type": "self"
    },
    {
      "id": "d_013",
      "area": "Instructional skills",
      "prompt": "Makes the class thought-provoking and interesting.",
      "order": 13,
      "form_type": "self"
    },
    {
      "id": "d_014",
      "area": "Instructional skills",
      "prompt": "Provides make-up classes properly when classes are missed.",
      "order": 14,
      "form_type": "self"
    },
    {
      "id": "d_015",
      "area": "Instructional skills",
      "prompt": "Provides tutorial classes properly when assigned.",
      "order": 15,
      "form_type": "self"
    },
    {
      "id": "d_016",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Begins and ends class on time.",
      "order": 16,
      "form_type": "self"
    },
    {
      "id": "d_017",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Makes effective use of class time.",
      "order": 17,
      "form_type": "self"
    },
    {
      "id": "d_018",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Provides consultation during arranged hours.",
      "order": 18,
      "form_type": "self"
    },
    {
      "id": "d_019",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Shows genuine concern for students’ learning and problems.",
      "order": 19,
      "form_type": "self"
    },
    {
      "id": "d_020",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Encourages students to freely express feelings, opinions and ideas in class.",
      "order": 20,
      "form_type": "self"
    },
    {
      "id": "d_021",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Encourages peer and cooperative learning.",
      "order": 21,
      "form_type": "self"
    },
    {
      "id": "d_022",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Acts in a professionally acceptable manner.",
      "order": 22,
      "form_type": "self"
    },
    {
      "id": "d_023",
      "area": "Professional Ethics & Attitude Towards Students",
      "prompt": "Maintains a classroom atmosphere conducive to learning.",
      "order": 23,
      "form_type": "self"
    },
    {
      "id": "d_024",
      "area": "Assessment Methods & Feedback",
      "prompt": "Provides students with appropriate assignments.",
      "order": 24,
      "form_type": "self"
    },
    {
      "id": "d_025",
      "area": "Assessment Methods & Feedback",
      "prompt": "Checks whether students have understood the topic.",
      "order": 25,
      "form_type": "self"
    },
    {
      "id": "d_026",
      "area": "Assessment Methods & Feedback",
      "prompt": "Assesses student learning with a variety of techniques.",
      "order": 26,
      "form_type": "self"
    },
    {
      "id": "d_027",
      "area": "Assessment Methods & Feedback",
      "prompt": "Publishes students’ results on time for every assessment.",
      "order": 27,
      "form_type": "self"
    },
    {
      "id": "d_028",
      "area": "Assessment Methods & Feedback",
      "prompt": "Provides follow-up feedback on time.",
      "order": 28,
      "form_type": "self"
    },
    {
      "id": "d_029",
      "area": "Assessment Methods & Feedback",
      "prompt": "Constructs tests that represent the course content.",
      "order": 29,
      "form_type": "self"
    },
    {
      "id": "d_030",
      "area": "Assessment Methods & Feedback",
      "prompt": "Allots appropriate time to complete exams.",
      "order": 30,
      "form_type": "self"
    },
    {
      "id": "d_031",
      "area": "Assessment Methods & Feedback",
      "prompt": "Continuously assesses student performance to improve instruction.",
      "order": 31,
      "form_type": "self"
    },
    {
      "id": "d_032",
      "area": "Assessment Methods & Feedback",
      "prompt": "Uses continuous assessment during instruction.",
      "order": 32,
      "form_type": "self"
    },
    {
      "id": "d_033",
      "area": "Overall Personal Behavior",
      "prompt": "Shows appropriate respect for colleagues and department heads.",
      "order": 33,
      "form_type": "self"
    },
    {
      "id": "d_034",
      "area": "Overall Personal Behavior",
      "prompt": "Maintains the dignity of the job and professional ethics.",
      "order": 34,
      "form_type": "self"
    },
    {
      "id": "d_035",
      "area": "Overall Personal Behavior",
      "prompt": "Remains free from alcohol and drug addiction.",
      "order": 35,
      "form_type": "self"
    },
    {
      "id": "d_036",
      "area": "Overall Personal Behavior",
      "prompt": "Arrives on time for appointments and institutional meetings.",
      "order": 36,
      "form_type": "self"
    },
    {
      "id": "d_037",
      "area": "Overall Personal Behavior",
      "prompt": "Acts as a role model for students and the surrounding society.",
      "order": 37,
      "form_type": "self"
    },
    {
      "id": "d_038",
      "area": "Overall Personal Behavior",
      "prompt": "Takes appropriate care of materials borrowed from the institution for teaching and learning.",
      "order": 38,
      "form_type": "self"
    },
    {
      "id": "d_039",
      "area": "Overall Personal Behavior",
      "prompt": "Does not present others’ work or findings as their own.",
      "order": 39,
      "form_type": "self"
    },
    {
      "id": "d_040",
      "area": "Overall Personal Behavior",
      "prompt": "Raises complaints through the appropriate channel.",
      "order": 40,
      "form_type": "self"
    },
    {
      "id": "d_041",
      "area": "Overall Personal Behavior",
      "prompt": "Proposes ideas to improve teaching and learning in the department.",
      "order": 41,
      "form_type": "self"
    },
    {
      "id": "d_042",
      "area": "Professional Attitude",
      "prompt": "Attends professional meetings and seminars.",
      "order": 42,
      "form_type": "self"
    },
    {
      "id": "d_043",
      "area": "Professional Attitude",
      "prompt": "Participates in activities to improve personal knowledge.",
      "order": 43,
      "form_type": "self"
    },
    {
      "id": "d_044",
      "area": "Professional Attitude",
      "prompt": "Participates in solving problems that arise in the department.",
      "order": 44,
      "form_type": "self"
    },
    {
      "id": "d_045",
      "area": "Professional Attitude",
      "prompt": "Conducts professional research in their field.",
      "order": 45,
      "form_type": "self"
    },
    {
      "id": "d_046",
      "area": "Professional Attitude",
      "prompt": "Shares research outcomes with the concerned college community.",
      "order": 46,
      "form_type": "self"
    },
    {
      "id": "d_047",
      "area": "Professional Attitude",
      "prompt": "Is ready to share knowledge and experience with colleagues.",
      "order": 47,
      "form_type": "self"
    },
    {
      "id": "d_048",
      "area": "Professional Attitude",
      "prompt": "Accepts constructive evaluation comments and attempts to apply them.",
      "order": 48,
      "form_type": "self"
    },
    {
      "id": "d_049",
      "area": "Professional Attitude",
      "prompt": "Helps less experienced colleagues identify research areas and develop proposals.",
      "order": 49,
      "form_type": "self"
    },
    {
      "id": "d_050",
      "area": "Professional Attitude",
      "prompt": "Performs additional mandates and responsibilities.",
      "order": 50,
      "form_type": "self"
    },
    {
      "id": "d_051",
      "area": "Professional Attitude",
      "prompt": "Participates in instructor performance-efficiency evaluations in the department.",
      "order": 51,
      "form_type": "self"
    },
    {
      "id": "d_052",
      "area": "Professional Attitude",
      "prompt": "Works with the college and department head on curriculum development and instructional goals.",
      "order": 52,
      "form_type": "self"
    },
    {
      "id": "d_053",
      "area": "Professional Attitude",
      "prompt": "Adheres to established laws, policies, rules and regulations for effective teaching and learning.",
      "order": 53,
      "form_type": "self"
    },
    {
      "id": "d_054",
      "area": "Professional Attitude",
      "prompt": "Serves, especially in leadership roles, on major University and college committees.",
      "order": 54,
      "form_type": "self"
    },
    {
      "id": "d_055",
      "area": "Professional Attitude",
      "prompt": "Handles institutional resources and materials carefully and wisely.",
      "order": 55,
      "form_type": "self"
    }
  ]
};
export const ROLE_OPTIONS = [
 {value:"student",label:"Student"},{value:"department_head",label:"Department head"},
 {value:"peer",label:"Peer instructor"},{value:"instructor",label:"Instructor (self-evaluation)"},
 {value:"admin",label:"System administrator"},{value:"adhoc_committee",label:"Ad-hoc evaluation committee"},
 {value:"college_admin",label:"College / school administration"},{value:"dean",label:"College dean / vice dean"},
 {value:"academic_affairs",label:"Academic Affairs leadership"}
] as const;
export const roleLabel=(role:string)=>ROLE_OPTIONS.find((r)=>r.value===role)?.label??role;
export const formLabel=(form:FormType)=>FORM_META[form].label;
