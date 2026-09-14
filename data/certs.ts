import { asset } from "@/lib/asset";

export interface CertEntry {
  code: string;
  img: string;
  alt: string;
  title: string;
  issuer: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  when: string;
  gpa: string;
  gpaMax: string;
}

export const CERTS: CertEntry[] = [
  {
    code: "AIP-C01",
    img: asset("/assets/cert-aws-genai.png"),
    alt: "AWS Certified Generative AI Developer badge",
    title: "AWS Certified\nGenerative AI Developer — Professional",
    issuer: "Amazon Web Services",
  },
  {
    code: "AI-103",
    img: asset("/assets/cert-azure-ai.png"),
    alt: "Microsoft Certified Azure AI Apps and Agents Developer badge",
    title: "Microsoft Certified\nAzure AI Apps & Agents Developer Associate",
    issuer: "Microsoft",
  },
];

export const EDUCATION: EducationEntry = {
  degree: "Master of Science, Computer Science",
  institution: "University of Missouri — Kansas City",
  when: "Aug 2023 — May 2025",
  gpa: "3.82",
  gpaMax: "/4.0",
};
