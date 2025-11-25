import { unitDataFixture } from "@/schema/public/unitData/unitData.fixture"
import { programmeFieldsFixture } from "@/schema/public/programmeFields/programmeFields.fixture"
import { type SyntheticUnitvariantsWithLessonIdsBase } from "@/schema/published/syntheticUnitvariantsWithLessonIdsBase/syntheticUnitvariantsWithLessonIdsBase.schema"

export const syntheticUnitvariantsWithLessonIdsFixture = ({
  overrides = {}
}: {
  overrides?: Partial<SyntheticUnitvariantsWithLessonIdsBase>
} = {}): SyntheticUnitvariantsWithLessonIdsBase => ({
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
    unit_order: 1
  },
  expired: false,
  ...overrides
})
