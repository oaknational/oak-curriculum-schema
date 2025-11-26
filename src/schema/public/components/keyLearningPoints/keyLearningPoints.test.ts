import { describe, it, expect } from "vitest";

import {
  keyLearningPointsSchema,
  keyLearningPointsSchemaCamel,
} from "./keyLearningPoints.schema";
import {
  keyLearningPointsFixture,
  keyLearningPointsFixtureCamel,
} from "./keyLearningPoints.fixture";

describe("keyLearningPointsSchema", () => {
  it("should parse a valid key learning point", () => {
    const validData = keyLearningPointsFixture();
    const result = keyLearningPointsSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should reject invalid data", () => {
    const invalidData = { key_learning_point: 123 };
    const result = keyLearningPointsSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe("keyLearningPointsSchemaCamel", () => {
  it("should parse camelCase key learning point", () => {
    const validData = keyLearningPointsFixtureCamel();
    const result = keyLearningPointsSchemaCamel.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
