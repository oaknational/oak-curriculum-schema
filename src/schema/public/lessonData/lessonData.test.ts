import { describe, expect, it } from "vitest"

import { lessonDataFixture } from "@/schema/public/lessonData/lessonData.fixture"
import { lessonDataSchema } from "@/schema/public/lessonData/lessonData.schema"

describe("lessonData", () => {
  it("conforms to the schema", () => {
    const l = lessonDataFixture()
    expect(() => lessonDataSchema.parse(l)).not.toThrow()
  })
})
