import camelcaseKeys from "camelcase-keys";

import type {
  SyntheticUnitvariantLessons,
  SyntheticUnitvariantLessonsCamel,
} from "@/schema/published/syntheticUnitvariantLessons/syntheticUnitvariantLessons.schema";
import { lessonDataFixture } from "@/schema/public/lessonData/lessonData.fixture";
import { unitDataFixture } from "@/schema/public/unitData/unitData.fixture";
import { programmeFieldsFixture } from "@/schema/public/components/programmeFields/programmeFields.fixture";

// To be deprecated
export const syntheticUnitvariantLessonsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantLessons>;
} = {}): SyntheticUnitvariantLessons => ({
  lesson_slug: "lesson-slug",
  unit_slug: "unit-slug",
  programme_slug: "programme-slug",
  is_legacy: false,
  lesson_data: lessonDataFixture(),
  unit_data: unitDataFixture(),
  null_unitvariant_id: 0,
  programme_fields: programmeFieldsFixture(),
  supplementary_data: {
    unit_order: 1,
    order_in_unit: 1,
  },
  ...overrides,
});

export const syntheticUnitvariantLessonsFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantLessonsCamel>;
} = {}): SyntheticUnitvariantLessonsCamel => ({
  ...camelcaseKeys(syntheticUnitvariantLessonsFixture(), { deep: true }),
  ...overrides,
});
