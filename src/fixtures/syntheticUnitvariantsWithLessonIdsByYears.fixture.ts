import { unitDataFixture } from "./unitData.fixture";
import { programmeFieldsFixture } from "./programmeFields.fixture";
import { SyntheticUnitvariantsWithLessonIdsByYears } from "@/schema/syntheticUnitvariantsWithLessonIdsByYears.schema";

export const syntheticUnitvariantsWithLessonIdsByYearsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantsWithLessonIdsByYears>;
} = {}): SyntheticUnitvariantsWithLessonIdsByYears => ({
  base_slug: "base-slug",
  unit_slug: "unit-slug",
  programme_slug: "programme-slug",
  is_legacy: false,
  lesson_count: 1,
  lesson_sensitive_count: 0,
  lesson_expired_count: 0,
  unit_data: unitDataFixture(),
  null_unitvariant_id: 0,
  programme_fields: programmeFieldsFixture(),
  supplementary_data: {
    unit_order: 1,
    static_lesson_list: [
      { slug: "lesson-slug", title: "lesson-title", order: 1 },
    ],
  },
  expired: false,
  age_restricted_lesson_count: 0,
  ...overrides,
});
