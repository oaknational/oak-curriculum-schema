import { describe, expect, it } from "vitest";

import { syntheticUnitvariantLessonsByKsFixture } from "@/schema/published/syntheticUnitvariantLessonsByKs/syntheticUnitvariantLessonsByKs.fixture";
import { syntheticUnitvariantLessonsByKsSchema } from "@/schema/published/syntheticUnitvariantLessonsByKs/syntheticUnitvariantLessonsByKs.schema";

describe("syntheticUnitvariantsByKsLessons", () => {
  it("conforms to the schema", () => {
    const l = syntheticUnitvariantLessonsByKsFixture();
    expect(() => syntheticUnitvariantLessonsByKsSchema.parse(l)).not.toThrow();
  });
});
