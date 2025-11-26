import type {
  Unitvariant,
  UnitvariantCamel,
} from "@/schema/public/unitvariant/unitvariant.schema";
import camelcaseKeys from "camelcase-keys";

export const unitvariantFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Unitvariant>;
} = {}): Unitvariant => ({
  unitvariant_id: 1,
  unit_id: 1,
  _deleted: false,
  _state: "published",
  _cohort: "2023-2024",
  unit_overrides: {},
  programme_fields: {},
  ...overrides,
});

export const unitvariantFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<UnitvariantCamel>;
} = {}): UnitvariantCamel => ({
  ...camelcaseKeys(unitvariantFixture(), { deep: true }),
  ...overrides,
});
