import camelcaseKeys from "camelcase-keys";

import type { Unit, UnitCamel } from "@/schema/public/unit/unit.schema";

export const unitFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Unit>;
} = {}): Unit => ({
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

export const unitFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<UnitCamel>;
} = {}): UnitCamel => ({
  ...camelcaseKeys(unitFixture(), { deep: true }),
  ...overrides,
});

// Backwards compatibility exports
/**
 * @deprecated Use unitFixture instead.
 */
export const unitDataFixture = unitFixture;
export const unitDataFixtureCamel = unitFixtureCamel;
