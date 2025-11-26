import { describe, it, expect } from "vitest";

import {
  contentGuidanceSchema,
  contentGuidanceSchemaCamel,
} from "./contentGuidance.schema";
import {
  contentGuidanceFixture,
  contentGuidanceFixtureCamel,
} from "./contentGuidance.fixture";

describe("contentGuidanceSchema", () => {
  it("should parse valid content guidance", () => {
    const validData = contentGuidanceFixture();
    const result = contentGuidanceSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should allow null values", () => {
    const validData = {
      contentguidance_label: null,
      contentguidance_description: null,
      contentguidance_area: null,
    };
    const result = contentGuidanceSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});

describe("contentGuidanceSchemaCamel", () => {
  it("should parse camelCase content guidance", () => {
    const validData = contentGuidanceFixtureCamel();
    const result = contentGuidanceSchemaCamel.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
