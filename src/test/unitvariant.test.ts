import { describe, expect, it } from "vitest";

import { unitvariantFixture } from "@/fixtures/unitvariant.fixture";
import { unitvariantSchema } from "@/schema/public/unitvariant.schema";

describe("unitvariant", () => {
  it("conforms to the schema", () => {
    const l = unitvariantFixture();
    expect(() => unitvariantSchema.parse(l)).not.toThrow();
  });
});
