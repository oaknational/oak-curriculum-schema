import type {
  AssetType,
  AssetTypeCamel,
} from "@/schema/public/assets/assets.schema";
import camelcaseKeys from "camelcase-keys";

export const assetsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<AssetType>;
} = {}): AssetType => ({
  asset_id: 1,
  asset_uid: "asset-uid-123",
  _state: "new",
  title: "Sample Asset",
  description: "This is a sample asset for testing.",
  asset_type: "worksheet",
  url: "https://example.com/asset.pdf",
  asset_object: {
    pdf: {
      bucket_name: "sample-bucket",
      bucket_path: "path/to/asset.pdf",
    },
    google_drive: {
      id: "google-drive-id-123",
      url: "https://drive.google.com/file/d/google-drive-id-123/view",
    },
  },
  tpc_media_ids: [101, 102],
  tpc_works_ids: [201, 202],
  ...overrides,
});

export const assetsFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<AssetTypeCamel>;
} = {}): AssetTypeCamel => ({
  ...camelcaseKeys(assetsFixture(), { deep: true }),
  ...overrides,
});
