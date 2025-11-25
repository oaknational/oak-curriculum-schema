import { describe, expect, it } from "vitest";

import { syntheticUnitvariantsWithLessonIdsFixture } from "@/fixtures/syntheticUnitvariantsWithLessonIds.fixture";
import { syntheticUnitvariantsWithLessonIdsBaseSchema } from "@/schema/published/syntheticUnitvariantsWithLessonIdsBase/syntheticUnitvariantsWithLessonIdsBase.schema";

describe("syntheticUnitvariantsWithLessonIds", () => {
  it("conforms to the schema", () => {
    const l = syntheticUnitvariantsWithLessonIdsFixture();
    expect(() =>
      syntheticUnitvariantsWithLessonIdsBaseSchema.parse(l),
    ).not.toThrow();
  });
});
