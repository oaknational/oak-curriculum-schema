import { describe, expect, it } from "vitest";

import { threadFixture } from "@/fixtures/thread.fixture";
import { threadSchema } from "@/schema/thread.schema";

describe("thread", () => {
  it("conforms to the schema", () => {
    const l = threadFixture();
    expect(() => threadSchema.parse(l)).not.toThrow();
  });
});
