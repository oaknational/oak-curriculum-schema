import type { Thread, ThreadCamel } from "@/schema/public/thread/thread.schema";
import camelcaseKeys from "camelcase-keys";

const baseThreadFixture: Thread = {
  thread_id: 1,
  thread_title: "A thread",
  thread_slug: "a-thread",
};

const baseThreadFixtureCamel: ThreadCamel = camelcaseKeys(baseThreadFixture, {
  deep: true,
});

export const threadFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Thread>;
} = {}): Thread => ({
  ...baseThreadFixture,
  ...overrides,
});

export const threadFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<ThreadCamel>;
} = {}): ThreadCamel => ({
  ...baseThreadFixtureCamel,
  ...overrides,
});
