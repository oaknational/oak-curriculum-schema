import camelcaseKeys from "camelcase-keys";

import type {
  EquipmentAndResources,
  EquipmentAndResourcesCamel,
} from "@/schema/public/components/equipmentAndResources/equipmentAndResources.schema";

export const equipmentAndResourcesFixture = ({
  overrides = {},
}: {
  overrides?: Partial<EquipmentAndResources>;
} = {}): EquipmentAndResources => ({
  equipment: "Example equipment",
  ...overrides,
});

export const equipmentAndResourcesFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<EquipmentAndResourcesCamel>;
} = {}): EquipmentAndResourcesCamel =>
  camelcaseKeys(
    equipmentAndResourcesFixture({
      overrides: overrides as Partial<EquipmentAndResources>,
    }),
  );
