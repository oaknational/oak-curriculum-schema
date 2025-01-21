import { z } from "zod";

import { _stateSchema, _cohortSchema } from "./base.schema";
import {
  lessonEquipmentAndResourcesSchema,
  lessonOutlineSchema,
} from "./lessonContent.schema";
import { mediaClipsRecordSchema } from "./mediaClips.schema";

export const lessonDataSchema = z.object({
  lesson_id: z.number(),
  lesson_uid: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  pupil_lesson_outcome: z.string(),
  phonics_outcome: z.string().nullable(),
  key_learning_points: z.array(z.object({})),
  equipment_and_resources: z
    .array(lessonEquipmentAndResourcesSchema)
    .nullable(),
  content_guidance_details: z.array(z.object({})).nullable(),
  content_guidance: z.array(z.number()).nullable(),
  copyright_content: z.array(z.object({})).nullable(),
  supervision_level: z.string().nullable(),
  thirdpartycontent_list: z.array(z.number()).nullable(),
  misconceptions_and_common_mistakes: z.array(z.object({})).nullable(),
  keywords: z.array(z.object({})).nullable(),
  video_id: z.number().nullable(),
  sign_language_video_id: z.number().nullable(),
  quiz_id_starter: z.number().nullable(),
  quiz_id_exit: z.number().nullable(),
  asset_id_slidedeck: z.number().nullable(),
  asset_id_worksheet: z.number().nullable(),
  expiration_date: z.string().nullable(),
  lesson_outline: z.array(lessonOutlineSchema).nullable().optional(),
  media_clips: mediaClipsRecordSchema.nullable().optional(),
  deprecated_fields: z.record(z.unknown()).nullable(),
  _state: _stateSchema,
  _cohort: _cohortSchema,
  updated_at: z.string(),
});

export type LessonData = z.infer<typeof lessonDataSchema>;
