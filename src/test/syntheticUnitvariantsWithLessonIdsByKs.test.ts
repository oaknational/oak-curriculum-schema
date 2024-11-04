import { describe, expect, it } from "vitest";

import { syntheticUnitvariantsWithLessonIdsByKsFixture } from "@/fixtures/syntheticUnitvariantsWithLessonIdsByKs.fixture";
import { syntheticUnitvariantsWithLessonIdsByKsSchema } from "@/schema/syntheticUnitvariantsWithLessonIdsByKs.schema";

describe("syntheticUnitvariantsWithLessonIds", () => {
  it("conforms to the schema", () => {
    const l = syntheticUnitvariantsWithLessonIdsByKsFixture();
    expect(() =>
      syntheticUnitvariantsWithLessonIdsByKsSchema.parse(l),
    ).not.toThrow();
  });
});
