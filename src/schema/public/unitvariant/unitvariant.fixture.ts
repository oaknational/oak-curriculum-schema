import { type Unitvariant } from "@/schema/public/unitvariant/unitvariant.schema"

export const unitvariantFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Unitvariant>
} = {}): Unitvariant => ({
  unitvariant_id: 1,
  unit_id: 1,
  _deleted: false,
  _state: "published",
  _cohort: "2023-2024",
  unit_overrides: {},
  programme_fields: {},
  ...overrides,
})
