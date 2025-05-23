import { z } from "zod";

export const _stateSchema = z.enum(["published", "new", "migration"]);
export const _cohortSchema = z.enum([
  "2020-2023",
  "2023-2024",
  "2024-2025",
  "0",
]);

export const phaseSlugs = z.enum(["foundation", "primary", "secondary"]);
export const phaseDescriptions = z.enum([
  "Early Years Foundation Stage",
  "Primary",
  "Secondary",
]);
export const phases = z.enum(["foundation", "primary", "secondary"]);

export const keystages = z.enum([
  "KS1",
  "KS2",
  "KS3",
  "KS4",
  "EYFS",
  "All key stages",
]);
export const keystageSlugs = z.enum([
  "ks1",
  "ks2",
  "ks3",
  "ks4",
  "early-years-foundation-stage",
  "all-ks",
]);
export const keystageDescriptions = z.enum([
  "Key Stage 1",
  "Key Stage 2",
  "Key Stage 3",
  "Key Stage 4",
  "Early Years Foundation Stage",
  "All Key Stages",
]);

export const years = z.enum([
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "R",
  "All",
]);
export const yearSlugs = z.enum([
  "reception",
  "year-1",
  "year-2",
  "year-3",
  "year-4",
  "year-5",
  "year-6",
  "year-7",
  "year-8",
  "year-9",
  "year-10",
  "year-11",
  "year-12",
  "year-13",
  "all-years",
]);
export const yearDescriptions = z.enum([
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
  "Year 11",
  "Year 12",
  "Year 13",
  "Reception",
  "All years",
]);

export const tiers = z.enum(["core", "foundation", "higher"]);
export const tierSlugs = z.enum(["core", "foundation", "higher"]);
export const tierDescriptions = z.enum(["Core", "Foundation", "Higher"]);

export const pathways = z.enum(["Core", "GCSE"]);
export const pathwaySlugs = z.enum(["core", "gcse"]);
export const pathwayDescriptions = z.enum(["Core", "GCSE"]);

export const examboardSlugs = z.enum([
  "aqa",
  "edexcel",
  "eduqas",
  "ocr",
  "wjec",
  "edexcelb",
]);
export const examboards = z.enum([
  "AQA",
  "Edexcel",
  "Eduqas",
  "OCR",
  "WJEC",
  "Edexcel B",
]);
export const examboardDescriptions = z.enum([
  "Assessment and Qualifications Alliance",
  "Edexcel",
  "Eduqas",
  "Oxford, Cambridge and RSA Examinations",
  "Welsh Joint Education Committee",
  "Edexcel B",
]);

export const subjects = z.enum([
  "Computing (non-GCSE)",
  "Art and design",
  "Citizenship",
  "Computing",
  "Computer Science",
  "Design and technology",
  "Drama",
  "English",
  "English grammar",
  "English reading for pleasure",
  "English spelling",
  "Expressive arts and design",
  "Financial education",
  "French",
  "Geography",
  "German",
  "History",
  "Latin",
  "Literacy",
  "Maths",
  "Music",
  "Personal, social and emotional development",
  "Physical education",
  "RSHE (PSHE)",
  "Religious education",
  "Science",
  "Biology",
  "Chemistry",
  "Combined science",
  "Physics",
  "Spanish",
  "Understanding the world",
  "Specialist",
  "Communication and language",
  "Creative arts",
  "Independent living",
  "Numeracy",
  "Physical development",
  "Therapies",
  "Occupational therapy",
  "Physical therapy",
  "Sensory integration",
  "Speech and language therapy",
  "QA testing only",
  "Cooking and nutrition",
]);
export const subjectSlugs = z.enum([
  "computing-non-gcse",
  "art",
  "citizenship",
  "computing",
  "design-technology",
  "drama",
  "english",
  "english-grammar",
  "english-reading-for-pleasure",
  "english-spelling",
  "expressive-arts-and-design",
  "financial-education",
  "french",
  "geography",
  "german",
  "history",
  "latin",
  "literacy",
  "maths",
  "music",
  "personal-social-and-emotional-development",
  "physical-education",
  "rshe-pshe",
  "religious-education",
  "science",
  "biology",
  "chemistry",
  "combined-science",
  "physics",
  "spanish",
  "understanding-the-world",
  "specialist",
  "communication-and-language",
  "creative-arts",
  "independent-living",
  "numeracy",
  "physical-development",
  "therapies",
  "occupational-therapy",
  "physical-therapy",
  "sensory-integration",
  "speech-and-language-therapy",
  "testing-not-for-publication",
  "cooking-nutrition",
]);
