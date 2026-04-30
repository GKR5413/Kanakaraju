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
  gpa: string;
  gpaMax: string;
}

export const CERTS: CertEntry[] = [
  {
    code: "AIP-C01",
    img: asset("/assets/cert-aws-genai.png"),
    alt: "AWS Certified Generative AI Developer badge",
    title: "AWS Certified\nGenerative AI Developer",
    issuer: "Amazon Web Services",
  },
  {
    code: "AI-103",
    img: asset("/assets/cert-azure-ai.png"),
    alt: "Microsoft Certified Azure AI Engineer badge",
    title: "Microsoft Certified\nAzure AI Apps & Agents Developer Associate",
    issuer: "Microsoft",
  },
  {
    code: "MLA-C01",
    img: asset("/assets/cert-aws-ml.png"),
    alt: "AWS Certified Machine Learning Engineer Associate badge",
    title: "AWS Certified\nMachine Learning Engineer Associate",
    issuer: "Amazon Web Services",
  },
];

export const EDUCATION: EducationEntry = {
  degree: "Master of Science, Computer Science",
  institution: "University of Missouri — Kansas City",
  gpa: "3.82",
  gpaMax: "/4.0",
};
