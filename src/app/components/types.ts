// src/app/components/types.ts
interface CompanyReview {
    userId: string;
    companyId: string;
    workLifeBalance: number; // Rating from 0-100
    mentalHealthResources: number; // Rating from 0-100
    cultureAndEnvironment: number; // Rating from 0-100
    comment?: string; // Optional feedback text
    date: Date;
  }
  
  export default CompanyReview;
  