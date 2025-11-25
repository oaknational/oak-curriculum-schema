import { SyntheticUnitvariantLessonsByKs } from "@/schema/published/syntheticUnitvariantLessonsByKs/syntheticUnitvariantLessonsByKs.schema";
import { lessonDataFixture } from "../../public/lessonData/lessonData.fixture";
import { unitDataFixture } from "../../public/unitData/unitData.fixture";
import { programmeFieldsFixture } from "../../public/programmeFields/programmeFields.fixture";

export const syntheticUnitvariantLessonsByKsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantLessonsByKs>;
} = {}): SyntheticUnitvariantLessonsByKs => ({
  lesson_slug: "lesson-slug",
  unit_slug: "unit-slug",
  programme_slug: "programme-slug",
  programme_slug_by_year: ["programme-slug-year"],
  is_legacy: false,
  lesson_data: lessonDataFixture(),
  unit_data: unitDataFixture(),
  null_unitvariant_id: 1,
  unitvariant_id: 1,
  programme_fields: programmeFieldsFixture(),
  order_in_unit: 1,
  static_lesson_list: [
    { slug: "lesson-slug", title: "lesson-title", order: 1 },
  ],
  ...overrides,
});
