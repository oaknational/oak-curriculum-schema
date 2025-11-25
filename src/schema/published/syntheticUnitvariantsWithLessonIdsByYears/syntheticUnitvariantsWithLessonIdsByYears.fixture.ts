import { unitDataFixture } from "@/schema/public/unitData/unitData.fixture";
import { programmeFieldsFixture } from "@/schema/public/programmeFields/programmeFields.fixture";
import type {
  SyntheticUnitvariantsWithLessonIdsByYears,
  SyntheticUnitvariantsWithLessonIdsByYearsCamel,
} from "@/schema/published/syntheticUnitvariantsWithLessonIdsByYears/syntheticUnitvariantsWithLessonIdsByYears.schema";
import camelcaseKeys from "camelcase-keys";

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
  complex_copyright_lesson_count: 0,
  ...overrides,
});

export const syntheticUnitvariantsWithLessonIdsByYearsFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantsWithLessonIdsByYearsCamel>;
} = {}): SyntheticUnitvariantsWithLessonIdsByYearsCamel => ({
  ...camelcaseKeys(syntheticUnitvariantsWithLessonIdsByYearsFixture(), {
    deep: true,
  }),
  ...overrides,
});
