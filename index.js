if (!require("detect-node")) {
  throw new Error("Server-only module must not be imported in browsers");
}
