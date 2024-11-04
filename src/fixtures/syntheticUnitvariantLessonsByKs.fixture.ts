import { SyntheticUnitvariantLessonsByKs } from "@/schema/syntheticUnitvariantLessonsByKs.schema";
import { lessonDataFixture } from "./lessonData.fixture";
import { unitDataFixture } from "./unitData.fixture";
import { programmeFieldsFixture } from "./programmeFields.fixture";

export const syntheticUnitvariantLessonsByKsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantLessonsByKs>;
} = {}): SyntheticUnitvariantLessonsByKs => ({
  lesson_slug: "lesson-slug",
  unit_slug: "unit-slug",
  programme_slug: "programme-slug",
  programme_slug_by_year: ["programme-slug-year"],
  is_legacy: false,
  lesson_data: lessonDataFixture(),
  unit_data: unitDataFixture(),
  null_unitvariant_id: 1,
  programme_fields: programmeFieldsFixture(),
  order_in_unit: 1,
  ...overrides,
});
