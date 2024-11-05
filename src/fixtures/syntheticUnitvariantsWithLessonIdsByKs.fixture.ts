import { unitDataFixture } from "./unitData.fixture";
import { programmeFieldsFixture } from "./programmeFields.fixture";
import { SyntheticUnitvariantsWithLessonIdsByKs } from "@/schema/syntheticUnitvariantsWithLessonIdsByKs.schema";

export const syntheticUnitvariantsWithLessonIdsByKsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantsWithLessonIdsByKs>;
} = {}): SyntheticUnitvariantsWithLessonIdsByKs => ({
  base_slug: "base-slug",
  unit_slug: "unit-slug",
  programme_slug: "programme-slug",
  programme_slug_by_year: "programme-slug-by-year",
  is_legacy: false,
  lesson_count: 1,
  lesson_sensitive_count: 0,
  lesson_expired_count: 0,
  unit_data: unitDataFixture(),
  null_unitvariant_id: 0,
  programme_fields: programmeFieldsFixture(),
  supplementary_data: {
    unit_order: 1,
  },
  expired: false,
  threads: null,
  ...overrides,
});
