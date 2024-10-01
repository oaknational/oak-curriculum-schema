import { SyntheticUnitvariantLessonsByKs } from "@/schema/syntheticUnitvariantLessonsByKs.schema";
import { lessonDataFixture } from "./lessonData.fixture";
import { unitDataFixture } from "./unitData.fixture";
import { programmeFieldsFixture } from "./programmeFields.fixture";
import { unitvariantFixture } from "./unitvariant.fixture";

export const syntheticUnitvariantLessonsByKsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantLessonsByKs>;
} = {}): SyntheticUnitvariantLessonsByKs => ({
  unitvariant_id: 1,
  lesson_slug: "lesson-slug",
  unit_slug: "unit-slug",
  programme_slug: "programme-slug",
  is_legacy: false,
  lesson_data: lessonDataFixture(),
  unit_data: unitDataFixture(),
  null_unitvariant: unitvariantFixture(),
  programme_fields: programmeFieldsFixture(),
  supplementary_data: {
    unit_order: 1,
    order_in_unit: 1,
  },
  ...overrides,
});
