import { describe, expect, it } from "vitest"

import { unitDataFixture } from "@/schema/public/unitData/unitData.fixture"
import { unitDataSchema } from "@/schema/public/unitData/unitData.schema"

describe("unitData", () => {
  it("conforms to the schema", () => {
    const l = unitDataFixture()
    expect(() => unitDataSchema.parse(l)).not.toThrow()
  })
})
