import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 414,
  site: "xboxgame",
  domains: ["xboxgame.deco.site"],
});