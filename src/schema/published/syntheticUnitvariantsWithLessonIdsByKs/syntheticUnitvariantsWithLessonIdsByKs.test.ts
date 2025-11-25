import { describe, expect, it } from "vitest"

import { syntheticUnitvariantsWithLessonIdsByKsFixture } from "@/schema/published/syntheticUnitvariantsWithLessonIdsByKs/syntheticUnitvariantsWithLessonIdsByKs.fixture"
import { syntheticUnitvariantsWithLessonIdsByKsSchema } from "@/schema/published/syntheticUnitvariantsWithLessonIdsByKs/syntheticUnitvariantsWithLessonIdsByKs.schema"

describe("syntheticUnitvariantsWithLessonIds", () => {
  it("conforms to the schema", () => {
    const l = syntheticUnitvariantsWithLessonIdsByKsFixture()
    expect(() =>
      syntheticUnitvariantsWithLessonIdsByKsSchema.parse(l),
    ).not.toThrow()
  })
})
