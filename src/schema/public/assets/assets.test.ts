import { describe, it, expect } from "vitest";

import { assetsSchema } from "@/schema/public/assets/assets.schema";
import { assetsFixture } from "@/fixtures/assets.fixture";

describe("assets schema", () => {
  it("assets fixture conforms to the schema", () => {
    const asset = assetsFixture();
    expect(() => assetsSchema.parse(asset)).not.toThrow();
  });
});
