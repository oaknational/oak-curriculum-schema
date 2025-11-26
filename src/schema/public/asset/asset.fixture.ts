import camelcaseKeys from "camelcase-keys";

import type { Asset, AssetCamel } from "@/schema/public/asset/asset.schema";

export const assetFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Asset>;
} = {}): Asset => ({
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
  updated_at: "2024-02-28T08:09:20.247619+00:00",
  created_at: "2024-02-28T08:09:20.247619+00:00",
  ...overrides,
});

export const assetFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<AssetCamel>;
} = {}): AssetCamel => ({
  ...camelcaseKeys(assetFixture(), { deep: true }),
  ...overrides,
});

// Backwards compatibility exports
export const assetsFixture = assetFixture;
export const assetsFixtureCamel = assetFixtureCamel;
