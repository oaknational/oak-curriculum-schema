import { LessonData } from "@/schema/lessonData.schema";

export const lessonDataFixture = ({
  overrides = {},
}: {
  overrides?: Partial<LessonData>;
} = {}): LessonData => ({
  lesson_id: 1,
  lesson_uid: "lesson-uid",
  title: "lesson-title",
  description: "lesson-description",
  slug: "lesson-slug",
  pupil_lesson_outcome: "pupil-lesson-outcome",
  key_learning_points: [{}],
  equipment_and_resources: null,
  content_guidance_details: null,
  content_guidance: null,
  supervision_level: null,
  thirdpartycontent_list: null,
  misconceptions_and_common_mistakes: null,
  keywords: null,
  video_id: null,
  sign_language_video_id: null,
  quiz_id_starter: null,
  quiz_id_exit: null,
  asset_id_slidedeck: null,
  asset_id_worksheet: null,
  copyright_content: null,
  _state: "published",
  _cohort: "2023-2024",
  deprecated_fields: null,
  ...overrides,
});
