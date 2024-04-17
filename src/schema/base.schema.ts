import { z } from "zod";

export const _stateSchema = z.enum(["published", "new", "migration"]);
export const _cohortSchema = z.enum(["2020-2023", "2023-2024", "0"]);
