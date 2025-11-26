import { describe, expect, it } from "vitest";

import { threadFixture } from "@/schema/public/thread/thread.fixture";
import { threadSchema } from "@/schema/public/thread/thread.schema";

describe("thread", () => {
  it("conforms to the schema", () => {
    const l = threadFixture();
    expect(() => threadSchema.parse(l)).not.toThrow();
  });
});
