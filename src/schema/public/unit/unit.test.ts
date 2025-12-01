import { describe, expect, it } from "vitest";

import { unitFixture } from "@/schema/public/unit/unit.fixture";
import { unitSchema } from "@/schema/public/unit/unit.schema";

describe("unit", () => {
  it("conforms to the schema", () => {
    const l = unitFixture();
    expect(() => unitSchema.parse(l)).not.toThrow();
  });
});
