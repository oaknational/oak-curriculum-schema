import { describe, expect, it } from "vitest";

import { syntheticUnitvariantLessonsFixture } from "@/fixtures/syntheticUnitvariantLessons.fixture";
import { syntheticUnitvariantLessonsSchema } from "@/schema/syntheticUnitvariantLessons.schema";

describe("syntheticUnitvariantLessons", () => {
  it("conforms to the schema", () => {
    const l = syntheticUnitvariantLessonsFixture();
    expect(() => syntheticUnitvariantLessonsSchema.parse(l)).not.toThrow();
  });
});
