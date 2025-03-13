import { z } from "zod";
import { programmeFieldsSchema } from "./programmeFields.schema";
import { subjectSlugs } from "./base.schema";

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
  "lessonBetaDownloadsQuery",
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
    display_PE_title: z.boolean(),
    display_vocab_button: z.boolean(),
    override_pathway: z.string(), // we have to override pathway in this way because we don't have the functionality to override different selection of programme fields across different queries
    is_pe_practical: z.boolean(),
    related_subject_slugs: z.array(subjectSlugs),
  })
  .partial();

export type Actions = z.infer<typeof actionsSchema>;
