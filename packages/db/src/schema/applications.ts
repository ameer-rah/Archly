import {
  index,
  pgTable,
  timestamp,
  unique,
  uuid,
} from "drizzle-orm/pg-core";
import { applicationStatusEnum } from "./enums.js";
import { jobPostings } from "./job-postings.js";
import { students } from "./students.js";

export const applications = pgTable(
  "applications",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    studentId: uuid("student_id")
      .notNull()
      .references(() => students.userId, { onDelete: "cascade" }),
    jobPostingId: uuid("job_posting_id")
      .notNull()
      .references(() => jobPostings.id, { onDelete: "cascade" }),
    status: applicationStatusEnum("status").default("new").notNull(),
    appliedAt: timestamp("applied_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    unique("applications_student_id_job_posting_id_unique").on(
      table.studentId,
      table.jobPostingId,
    ),
    index("applications_student_id_applied_at_idx").on(
      table.studentId,
      table.appliedAt,
    ),
    index("applications_job_posting_id_status_idx").on(
      table.jobPostingId,
      table.status,
    ),
  ],
);
