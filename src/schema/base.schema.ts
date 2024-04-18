import { z } from "zod";

export const _stateSchema = z.enum(["published", "new", "migration"]);
export const _cohortSchema = z.enum(["2020-2023", "2023-2024", "0"]);
export const keystages = z.enum(["KS1", "KS2", "KS3", "KS4", "EYFS"]);
export const keystageSlugs = z.enum([
  "ks1",
  "ks2",
  "ks3",
  "ks4",
  "early-years-foundation-stage",
]);
export const keystageDescriptions = z.enum([
  "Key Stage 1",
  "Key Stage 2",
  "Key Stage 3",
  "Key Stage 4",
  "Early Years Foundation Stage",
]);
