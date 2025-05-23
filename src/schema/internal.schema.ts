import z from "zod";

export const baseIngestStates = z.enum([
  "ingest_started",
  "ingest_complete",
  "ready_to_ingest",
]);

export const assetIngestStates = z.enum(["no_asset"]);

export const videoIngestStates = z.enum([
  "adding_captions",
  "mux_complete",
  "sent_to_mux",
  "sent_captions_to_mux",
  "mux_transcoded",
  "no_audio",
  "rev_complete",
  "sent_to_rev",
  "rev_skipped",
]);
