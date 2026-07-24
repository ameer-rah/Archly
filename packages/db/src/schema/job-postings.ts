import { sql } from "drizzle-orm";
import {
  check,
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import {
  jobPostingStatusEnum,
  studentDisciplineEnum,
} from "./enums.js";
import { firms } from "./firms.js";

export const jobPostings = pgTable(
  "job_postings",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    firmId: uuid("firm_id")
      .notNull()
      .references(() => firms.id, { onDelete: "cascade" }),
    discipline: studentDisciplineEnum("discipline").notNull(),
    title: text("title").notNull(),
    description: text("description"),
    budgetCents: integer("budget_cents"),
    timeline: text("timeline"),
    status: jobPostingStatusEnum("status").default("draft").notNull(),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    check(
      "job_postings_budget_cents_nonnegative",
      sql`${table.budgetCents} >= 0`,
    ),
    index("job_postings_firm_id_status_idx").on(table.firmId, table.status),
    index("job_postings_discipline_status_idx").on(
      table.discipline,
      table.status,
    ),
    index("job_postings_created_at_idx").on(table.createdAt),
    index("job_postings_published_at_idx").on(table.publishedAt),
  ],
);
