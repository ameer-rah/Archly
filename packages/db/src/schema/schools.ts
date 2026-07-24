import { index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const schools = pgTable(
  "schools",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    cunyCampusCode: text("cuny_campus_code").unique(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [index("schools_name_idx").on(table.name)],
);
