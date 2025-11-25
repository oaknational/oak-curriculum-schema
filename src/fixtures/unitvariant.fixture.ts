import type {
  Unitvariant,
  UnitvariantCamel,
} from "@/schema/public/unitvariant/unitvariant.schema";
import camelcaseKeys from "camelcase-keys";

const baseUnitvariantFixture: Unitvariant = {
  unitvariant_id: 1,
  unit_id: 1,
  _deleted: false,
  _state: "published",
  _cohort: "2023-2024",
  unit_overrides: {},
  programme_fields: {},
};

const baseUnitvariantFixtureCamel: UnitvariantCamel = camelcaseKeys(
  baseUnitvariantFixture,
  { deep: true },
);

export const unitvariantFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Unitvariant>;
} = {}): Unitvariant => ({
  ...baseUnitvariantFixture,
  ...overrides,
});

export const unitvariantFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<UnitvariantCamel>;
} = {}): UnitvariantCamel => ({
  ...baseUnitvariantFixtureCamel,
  ...overrides,
});
