import { syntheticUnitvariantLessonsByKsFixture } from "@/fixtures/syntheticUnitvariantLessonsByKs.fixture";
import { syntheticUnitvariantLessonsByKsSchema } from "@/schema/syntheticUnitvariantLessonsByKs.schema";
import { describe, expect, it } from "vitest";

describe("syntheticUnitvariantsByKsLessons", () => {
  it("conforms to the schema", () => {
    const l = syntheticUnitvariantLessonsByKsFixture();
    expect(() => syntheticUnitvariantLessonsByKsSchema.parse(l)).not.toThrow();
  });
});
