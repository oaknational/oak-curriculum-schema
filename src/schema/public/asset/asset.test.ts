import { describe, expect, it } from "vitest";

import { assetSchema } from "@/schema/public/asset/asset.schema";
import { assetFixture } from "@/schema/public/asset/asset.fixture";

describe("asset schema", () => {
  it("asset fixture conforms to the schema", () => {
    const asset = assetFixture();
    expect(() => assetSchema.parse(asset)).not.toThrow();
  });
});
