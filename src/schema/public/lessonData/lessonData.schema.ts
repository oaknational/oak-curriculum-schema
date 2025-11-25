import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

import {
  _stateSchema,
  _cohortSchema,
  timestampsSchema,
  newState,
  publishedState,
} from "@/schema/public/base/base.schema";
import {
  keyLearningPointsSchema,
  keywordsSchema,
  lessonEquipmentAndResourcesSchema,
  lessonOutlineSchema,
} from "@/schema/lessonContent.schema";
import { mediaClipsRecordSchema } from "@/schema/public/mediaClips/mediaClips.schema";

export const lessonDataSchema = timestampsSchema.extend({
  lesson_id: z.number(),
  lesson_uid: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  pupil_lesson_outcome: z.string(),
  phonics_outcome: z.string().nullable(),
  key_learning_points: z.array(keyLearningPointsSchema).nullable(),
  equipment_and_resources: z
    .array(lessonEquipmentAndResourcesSchema)
    .nullable(),
  content_guidance_details: z
    .array(z.object({ details: z.string() }))
    .nullable(),
  content_guidance: z.array(z.number()).nullable(),
  copyright_content: z.array(z.object({})).nullable(),
  supervision_level: z.string().nullable(),
  thirdpartycontent_list: z.array(z.number()).nullable(),
  misconceptions_and_common_mistakes: z.array(z.object({})).nullable(),
  keywords: z.array(keywordsSchema).nullable(),
  video_id: z.number().nullable(),
  sign_language_video_id: z.number().nullable(),
  quiz_id_starter: z.number().nullable(),
  quiz_id_exit: z.number().nullable(),
  asset_id_slidedeck: z.number().nullable(),
  asset_id_worksheet: z.number().nullable(),
  asset_id_worksheet_answers: z.number().nullable(),
  asset_id_supplementary_asset: z.number().nullable(),
  asset_id_lesson_guide: z.number().nullable(),
  expiration_date: z.string().nullable(),
  lesson_outline: z.array(lessonOutlineSchema).nullable().optional(),
  media_clips: mediaClipsRecordSchema.nullable().optional(),
  deprecated_fields: z.record(z.string(), z.unknown()).nullable(),
  _state: _stateSchema,
  _cohort: _cohortSchema,
  lesson_release_date: z.string().nullable(),
});
export type LessonData = z.infer<typeof lessonDataSchema>;

export const lessonDataNewSchema = lessonDataSchema
  .pick({
    lesson_id: true,
    lesson_uid: true,
    phonics_outcome: true,
    key_learning_points: true,
    equipment_and_resources: true,
    content_guidance_details: true,
    content_guidance: true,
    copyright_content: true,
    supervision_level: true,
    thirdpartycontent_list: true,
    misconceptions_and_common_mistakes: true,
    keywords: true,
    video_id: true,
    sign_language_video_id: true,
    quiz_id_starter: true,
    quiz_id_exit: true,
    asset_id_slidedeck: true,
    asset_id_worksheet: true,
    asset_id_worksheet_answers: true,
    asset_id_supplementary_asset: true,
    asset_id_lesson_guide: true,
    expiration_date: true,
    lesson_outline: true,
    media_clips: true,
    deprecated_fields: true,
    _cohort: true,
    lesson_release_date: true,
  })
  .extend({
    _state: newState,
    pupil_lesson_outcome: z.string().nullable(),
  });

export const lessonDataPublishedSchema = lessonDataSchema.extend({
  _state: publishedState,
});

export type LessonDataNew = z.infer<typeof lessonDataNewSchema>;
export type LessonDataPublished = z.infer<typeof lessonDataPublishedSchema>;

export const lessonDataSchemaCamel = zodToCamelCase(lessonDataSchema);
export type LessonDataCamel = z.infer<typeof lessonDataSchemaCamel>;

export const lessonDataNewSchemaCamel = zodToCamelCase(lessonDataNewSchema);
export type LessonDataNewCamel = z.infer<typeof lessonDataNewSchemaCamel>;

export const lessonDataPublishedSchemaCamel = zodToCamelCase(
  lessonDataPublishedSchema,
);
export type LessonDataPublishedCamel = z.infer<
  typeof lessonDataPublishedSchemaCamel
>;
