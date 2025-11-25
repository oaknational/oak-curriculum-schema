import { describe, expect, it } from "vitest";

import { syntheticUnitvariantLessonsFixture } from "@/fixtures/syntheticUnitvariantLessons.fixture";
import { syntheticUnitvariantLessonsSchema } from "@/schema/published/syntheticUnitvariantLessons/syntheticUnitvariantLessons.schema";

describe("syntheticUnitvariantLessons", () => {
  it("conforms to the schema", () => {
    const l = syntheticUnitvariantLessonsFixture();
    expect(() => syntheticUnitvariantLessonsSchema.parse(l)).not.toThrow();
  });
});
