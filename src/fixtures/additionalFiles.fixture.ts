import { AdditionalFiles } from "@/schema/additionalFiles.schema";

export const additionalFilesFixture = ({
  overrides,
}: {
  overrides?: Partial<AdditionalFiles>;
} = {}): AdditionalFiles => ({
  tpc_downloadablefiles: [
    {
      asset_id: 123,
      media_object: {
        url: "https://www.example.com",
        type: "image",
        bytes: 1000,
        width: 1280,
        backup: false,
        format: "jpg",
        height: 720,
        version: 1,
        asset_id: "image123",
        metadata: {
          asset_type: "image",
          source_type: "stock",
          asset_source: "stock",
          licence_type: "cc0",
          content_cycle: "2023",
          permissionGranted: "yes",
          source_partner_name: "stock",
        },
        public_id: "image123",
        created_at: "2023-01-01T00:00:00Z",
        moderation: {
          kind: "image",
          status: "approved",
          updated_at: "2023-01-01T00:00:00Z",
        },
        secure_url: "https://www.example.com",
        next_cursor: null,
        asset_folder: "images",
        display_name: "Display Name",
        resource_type: "image",
        moderation_kind: "image",
        moderation_status: "approved",
        rate_limit_allowed: 100,
        rate_limit_reset_at: "2023-01-01T00:00:00Z",
        rate_limit_remaining: 99,
      },
    },
    {
      asset_id: 456,
      media_object: {
        url: "https://www.example.com",
        type: "mp3",
        bytes: 1000,
        width: 0,
        backup: true,
        format: "mp3",
        height: 0,
        version: 1,
        asset_id: "audio123",
        metadata: {
          asset_type: "audio",
          source_type: "stock",
          asset_source: "stock",
          licence_type: "cc0",
          content_cycle: "2023",
          permissionGranted: "yes",
          source_partner_name: "stock",
        },
        public_id: "audio123",
        created_at: "2023-01-01T00:00:00Z",
        moderation: {
          kind: "audio",
          status: "approved",
          updated_at: "2023-01-01T00:00:00Z",
        },
        secure_url: "https://www.example.com",
        next_cursor: null,
        asset_folder: "audio",
        display_name: "Display Name",
        resource_type: "audio",
        moderation_kind: "audio",
        moderation_status: "approved",
        rate_limit_allowed: 100,
        rate_limit_reset_at: "2023-01-01T00:00:00Z",
        rate_limit_remaining: 99,
      },
    },
  ],
  ...overrides,
});
export default additionalFilesFixture;
