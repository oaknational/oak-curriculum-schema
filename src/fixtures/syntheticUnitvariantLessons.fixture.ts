import { SyntheticUnitvariantLessons } from "@/schema/syntheticUnitvariantLessons.schema";

import { lessonDataFixture } from "./lessonData.fixture";
import { unitDataFixture } from "./unitData.fixture";
import { unitvariantFixture } from "./unitvariant.fixture";
import { programmeFieldsFixture } from "./programmeFields.fixture";

export const syntheticUnitvariantLessonsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantLessons>;
} = {}): SyntheticUnitvariantLessons => ({
  lesson_slug: "lesson-slug",
  unit_slug: "unit-slug",
  base_slug: "base-slug",
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
