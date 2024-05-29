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
  asset_id_slide_deck: 301,
  has_asset_object_slide_deck: true,
  asset_id_worksheet: 302,
  has_asset_object_worksheet: true,
  asset_id_worksheet_answers: 303,
  has_asset_object_worksheet_answers: false,
  asset_id_supplementary_asset: 304,
  has_asset_object_supplementary_asset: true,
  has_worksheet_google_drive_downloadable_version: true,
  ...overrides,
});
