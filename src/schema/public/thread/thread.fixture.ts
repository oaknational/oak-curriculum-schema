import type { Thread, ThreadCamel } from "@/schema/public/thread/thread.schema";
import camelcaseKeys from "camelcase-keys";

export const threadFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Thread>;
} = {}): Thread => ({
  thread_id: 1,
  thread_title: "A thread",
  thread_slug: "a-thread",
  ...overrides,
});

export const threadFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<ThreadCamel>;
} = {}): ThreadCamel => ({
  ...camelcaseKeys(threadFixture(), { deep: true }),
  ...overrides,
});
