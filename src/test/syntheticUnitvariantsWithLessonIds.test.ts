import { describe, expect, it } from "vitest";

import { syntheticUnitvariantsWithLessonIdsFixture } from "@/fixtures/syntheticUnitvariantsWithLessonIds.fixture";
import { syntheticUnitvariantsWithLessonIdsSchema } from "@/schema/syntheticUnitvariantsWithLessonIds.schema";

describe("syntheticUnitvariantsWithLessonIds", () => {
  it("conforms to the schema", () => {
    const l = syntheticUnitvariantsWithLessonIdsFixture();
    expect(() =>
      syntheticUnitvariantsWithLessonIdsSchema.parse(l),
    ).not.toThrow();
  });
});
