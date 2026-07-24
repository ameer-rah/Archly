ALTER TABLE "job_postings" ALTER COLUMN "discipline" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "discipline" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."student_discipline";--> statement-breakpoint
CREATE TYPE "public"."student_discipline" AS ENUM('architecture', 'architectural_technology', 'interior_design', 'urban_design', 'landscape_architecture', 'construction_management', 'architectural_engineering');--> statement-breakpoint
ALTER TABLE "job_postings" ALTER COLUMN "discipline" SET DATA TYPE "public"."student_discipline" USING "discipline"::"public"."student_discipline";--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "discipline" SET DATA TYPE "public"."student_discipline" USING "discipline"::"public"."student_discipline";