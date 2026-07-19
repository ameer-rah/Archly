import { index, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { firmMemberRoleEnum } from "./enums.js";
import { firms } from "./firms.js";
import { users } from "./users.js";

export const firmMembers = pgTable(
  "firm_members",
  {
    userId: uuid("user_id")
      .primaryKey()
      .references(() => users.id, { onDelete: "cascade" }),
    firmId: uuid("firm_id")
      .notNull()
      .references(() => firms.id, { onDelete: "cascade" }),
    role: firmMemberRoleEnum("role").default("member").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [index("firm_members_firm_id_idx").on(table.firmId)],
);
