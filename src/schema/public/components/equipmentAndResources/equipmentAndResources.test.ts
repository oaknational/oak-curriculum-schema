import { describe, it, expect } from "vitest";

import {
  equipmentAndResourcesSchema,
  equipmentAndResourcesSchemaCamel,
} from "./equipmentAndResources.schema";
import {
  equipmentAndResourcesFixture,
  equipmentAndResourcesFixtureCamel,
} from "./equipmentAndResources.fixture";

describe("equipmentAndResourcesSchema", () => {
  it("should parse valid equipment and resources", () => {
    const validData = equipmentAndResourcesFixture();
    const result = equipmentAndResourcesSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should reject invalid data", () => {
    const invalidData = { equipment: 123 };
    const result = equipmentAndResourcesSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe("equipmentAndResourcesSchemaCamel", () => {
  it("should parse camelCase equipment and resources", () => {
    const validData = equipmentAndResourcesFixtureCamel();
    const result = equipmentAndResourcesSchemaCamel.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
