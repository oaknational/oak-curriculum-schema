import { additionalFilesSchema } from "@/schema/additionalFiles.schema";

export const additionalFilesFixture = ({
  overrides,
}: {
  overrides?: Partial<typeof additionalFilesSchema._type>;
} = {}): typeof additionalFilesSchema._type => ({
  files: [
    {
      title: "Sample File 1",
      file_object: {
        format: "jpg",
        id: "file123",
        url: "https://www.example.com",
        type: "image",
        bytes: 5000,
        width: 1920,
        height: 1080,
        version: 1,
        duration: 120,
        metadata: {
          source: "camera",
          usageRestrictions: "none",
          attribution_required: "yes",
        },
        created_at: "2023-01-01T00:00:00Z",
        created_by: {
          id: "user123",
          type: "admin",
        },
        display_name: "Sample Display Name",
        resource_type: "image",
      },
    },
    {
      title: "Sample File 2",
      file_object: {
        id: "file456",
        url: "https://www.example.com",
        type: "video",
        bytes: 10000,
        width: 1280,
        format: "mp4",
        height: 720,
        version: 2,
        duration: 300,
        metadata: {
          source: "screen_recording",
          usageRestrictions: "internal",
          attribution_required: "no",
        },
        created_at: "2023-02-01T00:00:00Z",
        created_by: {
          id: "user456",
          type: "user",
        },
        display_name: "Another Display Name",
        resource_type: "video",
      },
    },
  ],
  ...overrides,
});
export default additionalFilesFixture;
