import { describe, expect, it } from "vitest";

import { unitDataFixture } from "@/fixtures/unitData.fixture";
import { unitDataSchema } from "@/schema/unitData.schema";

describe("unitData", () => {
  it("conforms to the schema", () => {
    const l = unitDataFixture();
    expect(() => unitDataSchema.parse(l)).not.toThrow();
  });
});
