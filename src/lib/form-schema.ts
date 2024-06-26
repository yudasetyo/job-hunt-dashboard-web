import { JOBTYPE } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job title is required!" })
    .min(80, { message: "Job title must be at least 80 characters" }),
  jobType: z.enum(JOBTYPE, { required_error: "You need to select a job type" }),
  salaryFrom: z.string({ required_error: "Salary From is required" }),
  salaryTo: z.string({ required_error: "Salary To is required" }),
  categoryId: z.string({ required_error: "You need to select a category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required skill must be at least one" }),
  jobDescription: z
    .string({ required_error: "Job description is required" })
    .min(10, { message: "Job description must be at least 10 characters" }),
  responsibility: z
    .string({ required_error: "Responsibility section is required" })
    .min(10, {
      message: "Responsibility section must be at least 10 characters",
    }),
  whoYouAre: z
    .string({ required_error: "Who You Are section is required" })
    .min(10, {
      message: "Who You Are section must be at least 10 characters",
    }),
  niceToHave: z
    .string({ required_error: "Nice To Have section is required" })
    .min(10, {
      message: "Nice To Have section must be at least 10 characters",
    }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits are required" }),
});
