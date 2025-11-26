import camelcaseKeys from "camelcase-keys";

import type {
  LessonOutline,
  LessonOutlineCamel,
} from "@/schema/public/components/lessonOutline/lessonOutline.schema";

export const lessonOutlineFixture = ({
  overrides = {},
}: {
  overrides?: Partial<LessonOutline>;
} = {}): LessonOutline => ({
  lesson_outline: "Example lesson outline",
  ...overrides,
});

export const lessonOutlineFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<LessonOutlineCamel>;
} = {}): LessonOutlineCamel =>
  camelcaseKeys(
    lessonOutlineFixture({
      overrides: overrides as Partial<LessonOutline>,
    }),
  );
