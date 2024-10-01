import { z } from "zod";

import { quizQuestionSchema } from "./quizQuestion.schema";
import { _stateSchema } from "./base.schema";

export const lessonEquipmentAndResourcesSchema = z.object({
  equipment: z.string(),
});

export type LessonEquipmentAndResources = z.infer<
  typeof lessonEquipmentAndResourcesSchema
>;

export const keyLearningPointsSchema = z.object({
  key_learning_point: z.string(),
});

export type KeyLearningPoints = z.infer<typeof keyLearningPointsSchema>;

export const keywordsSchema = z.object({
  keyword: z.string(),
  description: z.string(),
});

export type Keywords = z.infer<typeof keywordsSchema>;

export const misconceptionsAndCommonMistakesSchema = z.object({
  misconception: z.string(),
  response: z.string(),
});

export type MisconceptionsAndCommonMistakes = z.infer<
  typeof misconceptionsAndCommonMistakesSchema
>;

export const teacherTipsSchema = z.object({
  teacher_tip: z.string(),
});

export type TeacherTips = z.infer<typeof teacherTipsSchema>;

export const contentGuidanceSchema = z.object({
  contentguidance_label: z.string().nullable(),
  contentguidance_description: z.string().nullable(),
  contentguidance_area: z.string().nullable(),
});

export type ContentGuidance = z.infer<typeof contentGuidanceSchema>;

export const lessonContentSchema = z.object({
  lesson_id: z.number(),
  lesson_slug: z.string(),
  lesson_title: z.string().nullable(),
  content_guidance: z.array(contentGuidanceSchema).nullable(),
  misconceptions_and_common_mistakes: z
    .array(misconceptionsAndCommonMistakesSchema)
    .nullable(),
  teacher_tips: z.array(teacherTipsSchema).nullable(),
  equipment_and_resources: z
    .array(lessonEquipmentAndResourcesSchema)
    .nullable(),
  pupil_lesson_outcome: z.string().nullable(),
  lesson_keywords: z.array(keywordsSchema).nullable(),
  supervision_level: z.string().nullable(),
  key_learning_points: z.array(keyLearningPointsSchema).nullable().optional(),
  video_mux_playback_id: z.string().nullable(),
  video_with_sign_language_mux_playback_id: z.string().nullable(),
  video_id: z.number().nullable(),
  video_duration: z.string().nullable(),
  video_title: z.string().nullable(),
  transcript_sentences: z.string().nullable(),
  starter_quiz: z.array(quizQuestionSchema).optional().nullable(),
  exit_quiz: z.array(quizQuestionSchema).optional().nullable(),
  starter_quiz_id: z.number().nullable(),
  exit_quiz_id: z.number().nullable(),
  _state: _stateSchema,
  is_legacy: z.boolean().nullable(),
  deprecated_fields: z.record(z.unknown()).nullable(),
  has_worksheet_google_drive_downloadable_version: z.boolean().nullable(),
  slide_deck_asset_id: z.number().nullable(),
  has_slide_deck_asset_object: z.boolean().nullable(),
  worksheet_asset_id: z.number().nullable(),
  has_worksheet_asset_object: z.boolean().nullable(),
  worksheet_answers_asset_id: z.number().nullable(),
  has_worksheet_answers_asset_object: z.boolean().nullable(),
  supplementary_asset_id: z.number().nullable(),
  has_supplementary_asset_object: z.boolean().nullable(),
  supplementary_asset_object_url: z.string().nullable(),
  worksheet_asset_object_url: z.string().nullable(),
  slide_deck_asset_object_url: z.string().nullable(),
  geo_restricted: z.boolean().nullable(),
  login_required: z.boolean().nullable(),
});

export type LessonContent = z.infer<typeof lessonContentSchema>;
