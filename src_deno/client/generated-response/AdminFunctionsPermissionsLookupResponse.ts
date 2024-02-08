// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts";
export type AdminFunctionsPermissionsLookupResponse = SlackAPIResponse & {
  error?: string;
  errors?: Errors;
  needed?: string;
  ok: boolean;
  permissions?: { [key: string]: Permission };
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface Errors {}

export interface Permission {
  allowed_by_admin?: AllowedByAdmin;
  allowed_entities?: AllowedEntities;
  distribution?: AllowedByAdmin;
}

export interface AllowedByAdmin {
  type?: string;
  user_ids?: string[];
}

export interface AllowedEntities {
  channel_ids?: string[];
  org_ids?: string[];
  team_ids?: string[];
  type?: string;
  user_ids?: string[];
}

export interface ResponseMetadata {
  messages?: string[];
}
