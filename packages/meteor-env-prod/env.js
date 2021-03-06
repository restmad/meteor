if (typeof global === "object" && global.process) {
  // We're on the server, just use the real `process` object.
  process = global.process;
} else {
  if (typeof process !== "object") {
    process = {};
  }

  if (typeof process.env !== "object") {
    process.env = {};
  }

  if (typeof process.env.NODE_ENV !== "string") {
    process.env.NODE_ENV = "production";
  }
}
