import { unitDataFixture } from "./unitData.fixture";
import { unitvariantFixture } from "./unitvariant.fixture";
import { programmeFieldsFixture } from "./programmeFields.fixture";
import { syntheticUnitvariantsWithLessonIds } from "@/schema/syntheticUnitvariantsWithLessonIds.schema";

export const syntheticUnitvariantsWithLessonIdsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<syntheticUnitvariantsWithLessonIds>;
} = {}): syntheticUnitvariantsWithLessonIds => ({
  unit_slug: "unit-slug",
  programme_slug: "programme-slug",
  is_legacy: false,
  lesson_count: 1,
  unit_data: unitDataFixture(),
  null_unitvariant: unitvariantFixture(),
  programme_fields: programmeFieldsFixture(),
  supplementary_data: {
    unit_order: 1,
  },
  expired: false,
  ...overrides,
});
