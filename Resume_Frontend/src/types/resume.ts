export interface Resume {
  _id: string;
  fileName: string;

  analysis: {
    atsScore: number;
    summary: string;
    strengths: string[];
    weaknesses: string[];
    suggestions: string[];
    missingKeywords: string[];
  };

  createdAt: string;
}