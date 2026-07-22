import { pgEnum } from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", [
  "student",
  "firm_member",
  "school_admin",
  "super_admin",
]);

export const studentDisciplineEnum = pgEnum("student_discipline", [
  "architecture",
  "architectural_technology",
  "interior_design",
  "urban_design",
  "landscape_architecture",
  "construction_management",
  "architectural_engineering",
]);

export const firmIndustryEnum = pgEnum("firm_industry", [
  "architecture",
  "interior_design",
  "landscape_architecture",
  "urban_planning",
  "construction_management",
]);

export const firmVerificationStatusEnum = pgEnum(
  "firm_verification_status",
  ["pending", "approved", "rejected", "suspended"],
);

export const firmMemberRoleEnum = pgEnum("firm_member_role", [
  "owner",
  "admin",
  "member",
]);

export const jobPostingStatusEnum = pgEnum("job_posting_status", [
  "draft",
  "published",
  "closed",
  "in_progress",
  "completed",
  "cancelled",
]);

export const applicationStatusEnum = pgEnum("application_status", [
  "new",
  "reviewed",
  "interviewing",
  "hired",
  "rejected",
  "withdrawn",
]);
