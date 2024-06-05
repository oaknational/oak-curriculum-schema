import {
  Keywords,
  LessonContent,
  TeacherTips,
  LessonEquipmentAndResources,
} from "@/schema/lessonContent.schema";
import {
  matchQuestion,
  multipleChoiceQuestion,
  orderQuestion,
  shortAnswerQuestion,
} from "./quizQuestion.fixture";

export const lessonEquipmentAndResourcesFixture =
  (): LessonEquipmentAndResources => ({
    equipment: "equipment",
  });

export const teacherTipsFixture = (): TeacherTips => ({
  teacher_tip: "teacher-tip",
});

export const keywordsFixture = (): Keywords => ({
  keyword: "keyword",
  description: "description",
});

export const misconceptionsAndCommonMistakesFixture = () => ({
  misconception: "misconception",
  response: "response",
});

export const contentGuidanceFixture = () => ({
  contentguidance_label: "contentguidance-label",
  contentguidance_description: "contentguidance-description",
  contentguidance_area: "contentguidance-area",
});

export const lessonContentFixture = ({
  overrides = {},
}: {
  overrides?: Partial<LessonContent>;
} = {}): LessonContent => ({
  lesson_id: 1,
  lesson_title: "lesson-title",
  lesson_slug: "lesson-slug",
  deprecated_fields: {},
  is_legacy: false,
  misconceptions_and_common_mistakes: [
    misconceptionsAndCommonMistakesFixture(),
  ],
  equipment_and_resources: [lessonEquipmentAndResourcesFixture()],
  teacher_tips: [teacherTipsFixture()],
  key_learning_points: null,
  pupil_lesson_outcome: "pupil-lesson-outcome",
  lesson_keywords: [keywordsFixture()],
  content_guidance: [contentGuidanceFixture()],
  video_mux_playback_id: "video-mux-playback-id",
  video_id: null,
  video_duration: "5 minutes",
  video_with_sign_language_mux_playback_id:
    "video-with-sign-language-mux-playback-id",
  video_title: "video-title",
  transcript_sentences: "this is the transcript",
  starter_quiz: [
    multipleChoiceQuestion({
      overrides: { order: 1, question_uid: "starter-quiz-1" },
    }),
    orderQuestion({ overrides: { order: 2, question_uid: "starter-quiz-2" } }),
    matchQuestion({ overrides: { order: 3, question_uid: "starter-quiz-3" } }),
    shortAnswerQuestion({
      overrides: { order: 4, question_uid: "starter-quiz-4" },
    }),
  ],
  starter_quiz_id: 1,
  exit_quiz: null,
  exit_quiz_id: null,
  supervision_level: null,
  state: "published",
  slide_deck_asset_id: 301,
  has_slide_deck_asset_object: true,
  worksheet_asset_id: 302,
  has_worksheet_answers_asset_object: true,
  worksheet_answers_asset_id: 303,
  has_worksheet_google_drive_downloadable_version: true,
  has_supplementary_asset_object: true,
  supplementary_asset_id: 304,
  supplementary_asset_object_url: "supplementary-asset-object-url",
  slide_deck_asset_object_url: "slide-deck-asset-object-url",
  worksheet_asset_object_url: "worksheet-asset-object-url",
  has_worksheet_asset_object: true,
  ...overrides,
});
