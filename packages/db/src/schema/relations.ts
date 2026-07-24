import { relations } from "drizzle-orm";
import { applications } from "./applications.js";
import { firmMembers } from "./firm-members.js";
import { firms } from "./firms.js";
import { jobPostings } from "./job-postings.js";
import { schools } from "./schools.js";
import { students } from "./students.js";
import { users } from "./users.js";

export const schoolsRelations = relations(schools, ({ many }) => ({
  students: many(students),
}));

export const usersRelations = relations(users, ({ one }) => ({
  student: one(students, {
    fields: [users.id],
    references: [students.userId],
  }),
  firmMember: one(firmMembers, {
    fields: [users.id],
    references: [firmMembers.userId],
  }),
}));

export const studentsRelations = relations(students, ({ many, one }) => ({
  user: one(users, {
    fields: [students.userId],
    references: [users.id],
  }),
  school: one(schools, {
    fields: [students.schoolId],
    references: [schools.id],
  }),
  applications: many(applications),
}));

export const firmsRelations = relations(firms, ({ many }) => ({
  members: many(firmMembers),
  jobPostings: many(jobPostings),
}));

export const firmMembersRelations = relations(firmMembers, ({ one }) => ({
  user: one(users, {
    fields: [firmMembers.userId],
    references: [users.id],
  }),
  firm: one(firms, {
    fields: [firmMembers.firmId],
    references: [firms.id],
  }),
}));

export const jobPostingsRelations = relations(
  jobPostings,
  ({ many, one }) => ({
    firm: one(firms, {
      fields: [jobPostings.firmId],
      references: [firms.id],
    }),
    applications: many(applications),
  }),
);

export const applicationsRelations = relations(
  applications,
  ({ one }) => ({
    student: one(students, {
      fields: [applications.studentId],
      references: [students.userId],
    }),
    jobPosting: one(jobPostings, {
      fields: [applications.jobPostingId],
      references: [jobPostings.id],
    }),
  }),
);
