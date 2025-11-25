import type {
  UnitData,
  UnitDataCamel,
} from "@/schema/public/unitData/unitData.schema";
import camelcaseKeys from "camelcase-keys";

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
  expiration_date: null,
  prior_knowledge_requirements: ["requirement 1", "requirement 2"],
  subjectcategories: [1, 2, 3],
  ...overrides,
});

export const unitDataFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<UnitDataCamel>;
} = {}): UnitDataCamel => ({
  ...camelcaseKeys(unitDataFixture(), { deep: true }),
  ...overrides,
});
