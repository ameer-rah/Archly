import { index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import {
  firmIndustryEnum,
  firmVerificationStatusEnum,
} from "./enums.js";

export const firms = pgTable(
  "firms",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    industryType: firmIndustryEnum("industry_type").notNull(),
    logoUrl: text("logo_url"),
    stripeCustomerId: text("stripe_customer_id").unique(),
    verificationStatus: firmVerificationStatusEnum("verification_status")
      .default("pending")
      .notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("firms_name_idx").on(table.name),
    index("firms_industry_type_idx").on(table.industryType),
    index("firms_verification_status_idx").on(table.verificationStatus),
  ],
);
