import { EnumValues } from "zod";

export const JOBTYPE: EnumValues = [
  "Full-Time",
  "Part-Time",
  "Remote",
  "Internship",
];

export const JOB_LISTING_COLUMN: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicant",
  "Needs",
];

export const JOB_LISTING_DATA = [
  {
    roles: "Software Engineer",
    status: "Live",
    datePosted: "12 Aug 2023",
    dueDate: "12 Sep 2023",
    jobType: "Full-Time",
    applicants: 1,
    needs: 10,
  },
  {
    roles: "QA Engineer",
    status: "Live",
    datePosted: "10 Aug 2023",
    dueDate: "10 Sep 2023",
    jobType: "Project Based",
    applicants: 2,
    needs: 5,
  },
];
