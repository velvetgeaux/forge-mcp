#!/usr/bin/env node
/**
 * Forge MCP Server
 * Connect Forge's AI generation stack to Claude Desktop, Cursor, Windsurf,
 * or any MCP-compatible client.
 *
 * Setup:
 *   npx forge-mcp
 *
 * Required env:
 *   FORGE_API_KEY   — your Forge API key (starts with fmcp_)
 *
 * Optional env:
 *   FORGE_API_URL   — override the API endpoint (advanced)
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ErrorCode,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";

const API_KEY = process.env.FORGE_API_KEY;
const API_BASE = (process.env.FORGE_API_URL ?? "https://velvetgeaux.com").replace(/\/$/, "");

if (!API_KEY) {
  process.stderr.write(
    "Error: FORGE_API_KEY environment variable is required.\n" +
    "Get your key at https://velvetgeaux.com/forge-mcp\n"
  );
  process.exit(1);
}