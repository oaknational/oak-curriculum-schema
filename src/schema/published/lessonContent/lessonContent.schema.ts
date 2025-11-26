import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

import { quizQuestionSchema } from "@/schema/public/question/question.schema";
import { additionalFileObjectSchema } from "@/schema/public/components/additionalFiles/additionalFiles.schema";
import { lessonSchema } from "@/schema/public/lesson/lesson.schema";
import { misconceptionsAndCommonMistakesSchema } from "@/schema/public/components/misconceptionsAndCommonMistakes/misconceptionsAndCommonMistakes.schema";
import { teacherTipsSchema } from "@/schema/public/components/teacherTips/teacherTips.schema";
import { contentGuidanceSchema } from "@/schema/public/components/contentGuidance/contentGuidance.schema";

export const lessonContentSchema = lessonSchema
  .pick({
    lesson_id: true,
    video_id: true,
    phonics_outcome: true,
    key_learning_points: true,
    equipment_and_resources: true,
    supervision_level: true,
    lesson_outline: true,
    media_clips: true,
    deprecated_fields: true,
    _state: true,
    lesson_release_date: true,
  })
  .extend({
    lesson_slug: z.string(),
    lesson_title: z.string().nullable(),
    content_guidance: z.array(contentGuidanceSchema).nullable(),
    misconceptions_and_common_mistakes: z
      .array(misconceptionsAndCommonMistakesSchema)
      .nullable(),
    teacher_tips: z.array(teacherTipsSchema).nullable(),
    pupil_lesson_outcome: z.string().nullable(),
    lesson_keywords: lessonSchema.shape.keywords,
    video_mux_playback_id: z.string().nullable(),
    video_with_sign_language_mux_playback_id: z.string().nullable(),
    video_duration: z.string().nullable(),
    video_title: z.string().nullable(),
    transcript_sentences: z.string().nullable(),
    starter_quiz: z.array(quizQuestionSchema).optional().nullable(),
    exit_quiz: z.array(quizQuestionSchema).optional().nullable(),
    starter_quiz_id: z.number().nullable(),
    exit_quiz_id: z.number().nullable(),
    is_legacy: z.boolean().nullable(),
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
    lesson_guide_asset_id: z.number().nullable().optional(),
    has_lesson_guide_object: z.boolean().nullable().optional(),
    lesson_guide_asset_object_url: z.string().nullable().optional(),
    has_lesson_guide_google_drive_downloadable_version: z
      .boolean()
      .nullable()
      .optional(),
    geo_restricted: z.boolean().nullable(),
    login_required: z.boolean().nullable(),
    downloadable_files: z
      .array(additionalFileObjectSchema)
      .nullable()
      .optional(),
  });

export type LessonContent = z.infer<typeof lessonContentSchema>;

export const lessonContentSchemaCamel = zodToCamelCase(lessonContentSchema);
export type LessonContentCamel = z.infer<typeof lessonContentSchemaCamel>;
