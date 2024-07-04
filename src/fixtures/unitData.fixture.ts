import { UnitData } from "@/schema/unitData.schema";

export const unitDataFixture = ({
  overrides = {},
}: {
  overrides?: Partial<UnitData>;
} = {}): UnitData => ({
  unit_id: 0,
  unit_uid: "unit-uid",
  description: null,
  slug: "unit-slug",
  tags: null,
  title: "unit-title",
  _state: "published",
  _cohort: "2023-2024",
  subjectcategories: [1, 2, 3],
  ...overrides,
});
