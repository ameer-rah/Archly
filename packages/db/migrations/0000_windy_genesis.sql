CREATE TYPE "public"."application_status" AS ENUM('new', 'reviewed', 'interviewing', 'hired', 'rejected', 'withdrawn');--> statement-breakpoint
CREATE TYPE "public"."firm_industry" AS ENUM('architecture', 'interior_design', 'landscape_architecture', 'urban_planning', 'construction_management');--> statement-breakpoint
CREATE TYPE "public"."firm_member_role" AS ENUM('owner', 'admin', 'member');--> statement-breakpoint
CREATE TYPE "public"."firm_verification_status" AS ENUM('pending', 'approved', 'rejected', 'suspended');--> statement-breakpoint
CREATE TYPE "public"."job_posting_status" AS ENUM('draft', 'published', 'closed', 'in_progress', 'completed', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."student_discipline" AS ENUM('architecture', 'architectural_technology', 'interior_design', 'urban_design', 'urban_planning', 'landscape_architecture', 'construction_management', 'architectural_engineering');--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('student', 'firm_member', 'school_admin', 'super_admin');--> statement-breakpoint
CREATE TABLE "applications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"student_id" uuid NOT NULL,
	"job_posting_id" uuid NOT NULL,
	"status" "application_status" DEFAULT 'new' NOT NULL,
	"applied_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "applications_student_id_job_posting_id_unique" UNIQUE("student_id","job_posting_id")
);
--> statement-breakpoint
CREATE TABLE "firm_members" (
	"user_id" uuid PRIMARY KEY NOT NULL,
	"firm_id" uuid NOT NULL,
	"role" "firm_member_role" DEFAULT 'member' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "firms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"industry_type" "firm_industry" NOT NULL,
	"logo_url" text,
	"stripe_customer_id" text,
	"verification_status" "firm_verification_status" DEFAULT 'pending' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "firms_stripe_customer_id_unique" UNIQUE("stripe_customer_id")
);
--> statement-breakpoint
CREATE TABLE "job_postings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"firm_id" uuid NOT NULL,
	"discipline" "student_discipline" NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"budget_cents" integer,
	"timeline" text,
	"status" "job_posting_status" DEFAULT 'draft' NOT NULL,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "job_postings_budget_cents_nonnegative" CHECK ("job_postings"."budget_cents" >= 0)
);
--> statement-breakpoint
CREATE TABLE "schools" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"cuny_campus_code" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "schools_cuny_campus_code_unique" UNIQUE("cuny_campus_code")
);
--> statement-breakpoint
CREATE TABLE "students" (
	"user_id" uuid PRIMARY KEY NOT NULL,
	"school_id" uuid,
	"discipline" "student_discipline" NOT NULL,
	"major" text,
	"graduation_date" date NOT NULL,
	"cuny_email_verified" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"role" "user_role" NOT NULL,
	"workos_user_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_workos_user_id_unique" UNIQUE("workos_user_id")
);
--> statement-breakpoint
ALTER TABLE "applications" ADD CONSTRAINT "applications_student_id_students_user_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "applications" ADD CONSTRAINT "applications_job_posting_id_job_postings_id_fk" FOREIGN KEY ("job_posting_id") REFERENCES "public"."job_postings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "firm_members" ADD CONSTRAINT "firm_members_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "firm_members" ADD CONSTRAINT "firm_members_firm_id_firms_id_fk" FOREIGN KEY ("firm_id") REFERENCES "public"."firms"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_postings" ADD CONSTRAINT "job_postings_firm_id_firms_id_fk" FOREIGN KEY ("firm_id") REFERENCES "public"."firms"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "students" ADD CONSTRAINT "students_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "students" ADD CONSTRAINT "students_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "applications_student_id_applied_at_idx" ON "applications" USING btree ("student_id","applied_at");--> statement-breakpoint
CREATE INDEX "applications_job_posting_id_status_idx" ON "applications" USING btree ("job_posting_id","status");--> statement-breakpoint
CREATE INDEX "firm_members_firm_id_idx" ON "firm_members" USING btree ("firm_id");--> statement-breakpoint
CREATE INDEX "firms_name_idx" ON "firms" USING btree ("name");--> statement-breakpoint
CREATE INDEX "firms_industry_type_idx" ON "firms" USING btree ("industry_type");--> statement-breakpoint
CREATE INDEX "firms_verification_status_idx" ON "firms" USING btree ("verification_status");--> statement-breakpoint
CREATE INDEX "job_postings_firm_id_status_idx" ON "job_postings" USING btree ("firm_id","status");--> statement-breakpoint
CREATE INDEX "job_postings_discipline_status_idx" ON "job_postings" USING btree ("discipline","status");--> statement-breakpoint
CREATE INDEX "job_postings_created_at_idx" ON "job_postings" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "job_postings_published_at_idx" ON "job_postings" USING btree ("published_at");--> statement-breakpoint
CREATE INDEX "schools_name_idx" ON "schools" USING btree ("name");--> statement-breakpoint
CREATE INDEX "students_school_id_idx" ON "students" USING btree ("school_id");--> statement-breakpoint
CREATE INDEX "students_discipline_idx" ON "students" USING btree ("discipline");