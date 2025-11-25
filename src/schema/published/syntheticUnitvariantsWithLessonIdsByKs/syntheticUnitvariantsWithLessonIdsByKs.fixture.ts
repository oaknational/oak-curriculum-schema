import { unitDataFixture } from "@/schema/public/unitData/unitData.fixture"
import { programmeFieldsFixture } from "@/schema/public/programmeFields/programmeFields.fixture"
import { type SyntheticUnitvariantsWithLessonIdsByKs } from "@/schema/published/syntheticUnitvariantsWithLessonIdsByKs/syntheticUnitvariantsWithLessonIdsByKs.schema"

export const syntheticUnitvariantsWithLessonIdsByKsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantsWithLessonIdsByKs>
} = {}): SyntheticUnitvariantsWithLessonIdsByKs => ({
  base_slug: "base-slug",
  unit_slug: "unit-slug",
  programme_slug: "programme-slug",
  programme_slug_by_year: "programme-slug-by-year",
  is_legacy: false,
  lesson_count: 1,
  lesson_sensitive_count: 0,
  lesson_expired_count: 0,
  lesson_ids: [1],
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
  threads: null,
  ...overrides,
})
