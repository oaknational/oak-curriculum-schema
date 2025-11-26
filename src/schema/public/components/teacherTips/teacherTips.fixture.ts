import camelcaseKeys from "camelcase-keys";

import type {
  TeacherTips,
  TeacherTipsCamel,
} from "@/schema/public/components/teacherTips/teacherTips.schema";

export const teacherTipsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<TeacherTips>;
} = {}): TeacherTips => ({
  teacher_tip: "Example teacher tip",
  ...overrides,
});

export const teacherTipsFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<TeacherTipsCamel>;
} = {}): TeacherTipsCamel =>
  camelcaseKeys(
    teacherTipsFixture({
      overrides: overrides as Partial<TeacherTips>,
    }),
  );
