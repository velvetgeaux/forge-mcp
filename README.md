# Forge MCP

**AI agency tools inside Claude Desktop, Cursor, and Windsurf.**

Forge gives you specialized AI tools built for agency owners, freelancers, and consultants — powered by Claude Sonnet and a live marketing knowledge base trained on real client conversions.

## Tools

| Tool | What it does | Time saved |
|---|---|---|
| `forge_generate` | AI content generation with agency KB injection | 1–3 hrs/task |
| `query_knowledge` | Search proven conversion tactics by industry | 30 min/search |
| `build_pitch` | Full cold outreach: subject line + DM + Day 3 + Day 7 follow-ups | 2–3 hrs/pitch |
| `generate_proposal` | Scoped proposal with investment, timeline, and deliverables | 3–4 hrs/proposal |
| `market_research` | Competitive landscape by city + industry | 5–8 hrs/analysis |
| `analyze_website` | SEO + positioning gap analysis on any URL | 1–2 hrs/audit |
| `build_social_calendar` | 30-day social content calendar for any business | 2–3 hrs/month |

## Setup (2 minutes)

**1. Get a key** → [velvetgeaux.com/forge-mcp](https://velvetgeaux.com/forge-mcp)

**2. Add to Claude Desktop** (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "forge": {
      "command": "npx",
      "args": ["-y", "velvetgeaux-forge"],
      "env": {
        "FORGE_API_KEY": "fmcp_your_key_here"
      }
    }
  }
}
```

**3. Restart Claude Desktop** — Forge tools appear automatically.

## Pricing

| Plan | Price | Calls/mo | Best for |
|---|---|---|---|
| Starter | $29/mo | 300 | Freelancers, solo operators |
| Pro | $79/mo | 1,500 | Active agency owners |
| Agency | $197/mo | Unlimited | Teams, high-volume outreach |

## License

MIT © VelvetGeaux
