import {
  boolean,
  date,
  index,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { studentDisciplineEnum } from "./enums.js";
import { schools } from "./schools.js";
import { users } from "./users.js";

export const students = pgTable(
  "students",
  {
    userId: uuid("user_id")
      .primaryKey()
      .references(() => users.id, { onDelete: "cascade" }),
    schoolId: uuid("school_id").references(() => schools.id, {
      onDelete: "set null",
    }),
    discipline: studentDisciplineEnum("discipline").notNull(),
    major: text("major"),
    graduationDate: date("graduation_date").notNull(),
    cunyEmailVerified: boolean("cuny_email_verified")
      .default(false)
      .notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("students_school_id_idx").on(table.schoolId),
    index("students_discipline_idx").on(table.discipline),
  ],
);
