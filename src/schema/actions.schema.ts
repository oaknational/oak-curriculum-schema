import { z } from "zod";
import { programmeFieldsSchema } from "./programmeFields.schema";

export const queriesSchema = z.enum([
  "pupilSubjectListingQuery",
  "pupilProgrammeListingQuery",
  "pupilUnitListingQuery",
  "pupilLessonListingQuery",
  "pupilLessonQuery",
]);

export const journeysSchema = z.enum(["pupil", "teacher", "curriculum"]);

export const journeysAndQueriesSchema = z.union([
  queriesSchema,
  journeysSchema,
]);

export const actionsSchema = z
  .object({
    exclusions: journeysAndQueriesSchema,
    opt_out: journeysAndQueriesSchema,
    programme_field_overrides: programmeFieldsSchema.partial(),
    display_expiring_banner: z.boolean(),
  })
  .partial();
