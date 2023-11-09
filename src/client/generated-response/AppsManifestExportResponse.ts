// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type AppsManifestExportResponse = SlackAPIResponse & {
  error?: string;
  manifest?: Manifest;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export interface Manifest {
  _metadata?: Metadata;
  display_information?: DisplayInformation;
  features?: Features;
  oauth_config?: OauthConfig;
  settings?: Settings;
}

export interface Metadata {
  major_version?: string;
  minor_version?: string;
}

export interface DisplayInformation {
  background_color?: string;
  description?: string;
  long_description?: string;
  name?: string;
}

export interface Features {
  app_home?: AppHome;
  bot_user?: BotUser;
  shortcuts?: Shortcut[];
  slash_commands?: SlashCommand[];
  unfurl_domains?: string[];
}

export interface AppHome {
  home_tab_enabled?: boolean;
  messages_tab_enabled?: boolean;
  messages_tab_read_only_enabled?: boolean;
}

export interface BotUser {
  always_online?: boolean;
  display_name?: string;
}

export interface Shortcut {
  callback_id?: string;
  description?: string;
  name?: string;
  type?: string;
}

export interface SlashCommand {
  command?: string;
  description?: string;
  should_escape?: boolean;
  url?: string;
  usage_hint?: string;
}

export interface OauthConfig {
  redirect_urls?: string[];
  scopes?: Scopes;
}

export interface Scopes {
  bot?: string[];
  user?: string[];
}

export interface Settings {
  allowed_ip_address_ranges?: string[];
  background_color?: string;
  description?: string;
  event_subscriptions?: EventSubscriptions;
  interactivity?: Interactivity;
  long_description?: string;
  org_deploy_enabled?: boolean;
  socket_mode_enabled?: boolean;
  token_rotation_enabled?: boolean;
}

export interface EventSubscriptions {
  bot_events?: string[];
  request_url?: string;
  user_events?: string[];
}

export interface Interactivity {
  is_enabled?: boolean;
  message_menu_options_url?: string;
  request_url?: string;
}
