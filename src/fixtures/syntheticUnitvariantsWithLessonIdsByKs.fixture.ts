import { unitDataFixture } from "./unitData.fixture";
import { programmeFieldsFixture } from "./programmeFields.fixture";
import type {
  SyntheticUnitvariantsWithLessonIdsByKs,
  SyntheticUnitvariantsWithLessonIdsByKsCamel,
} from "@/schema/published/syntheticUnitvariantsWithLessonIdsByKs/syntheticUnitvariantsWithLessonIdsByKs.schema";
import camelcaseKeys from "camelcase-keys";

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
});

export const syntheticUnitvariantsWithLessonIdsByKsFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantsWithLessonIdsByKsCamel>;
} = {}): SyntheticUnitvariantsWithLessonIdsByKsCamel => ({
  ...camelcaseKeys(syntheticUnitvariantsWithLessonIdsByKsFixture(), {
    deep: true,
  }),
  ...overrides,
});
