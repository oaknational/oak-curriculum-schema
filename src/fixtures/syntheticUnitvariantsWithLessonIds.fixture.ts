import { unitDataFixture } from "./unitData.fixture";
import { programmeFieldsFixture } from "./programmeFields.fixture";
import type {
  SyntheticUnitvariantsWithLessonIdsBase,
  SyntheticUnitvariantsWithLessonIdsBaseCamel,
} from "@/schema/published/syntheticUnitvariantsWithLessonIdsBase/syntheticUnitvariantsWithLessonIdsBase.schema";
import camelcaseKeys from "camelcase-keys";

export const syntheticUnitvariantsWithLessonIdsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantsWithLessonIdsBase>;
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
    unit_order: 1,
  },
  expired: false,
  ...overrides,
});

export const syntheticUnitvariantsWithLessonIdsFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantsWithLessonIdsBaseCamel>;
} = {}): SyntheticUnitvariantsWithLessonIdsBaseCamel => ({
  ...camelcaseKeys(syntheticUnitvariantsWithLessonIdsFixture(), { deep: true }),
  ...overrides,
});
