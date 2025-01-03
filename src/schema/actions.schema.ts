import { z } from "zod";
import { programmeFieldsSchema } from "./programmeFields.schema";

export const queriesSchema = z.enum([
  "pupilSubjectListingQuery",
  "pupilProgrammeListingQuery",
  "pupilUnitListingQuery",
  "pupilLessonListingQuery",
  "pupilLessonQuery",
  "unitListingQuery",
  "lessonListingQuery",
  "programmeListingQuery",
  "subjectListingQuery",
  "lessonOverviewQuery",
  "lessonDownloadsQuery",
  "lessonShareQuery",
  "lessonMediaClipsQuery",
  "teacherPreviewLessonQuery",
]);

export const journeysSchema = z.enum(["pupil", "teacher", "curriculum"]);

export const journeysAndQueriesSchema = z.union([
  queriesSchema,
  journeysSchema,
]);

export const actionsSchema = z
  .object({
    exclusions: z.array(journeysAndQueriesSchema),
    opt_out: z.array(journeysAndQueriesSchema),
    programme_field_overrides: programmeFieldsSchema.partial(),
    display_expiring_banner: z.boolean(),
    disable_pupil_share: z.boolean(),
  })
  .partial();
