import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import init from "../../rust_functions/build/browser/rust_functions";
import wasm from "../../rust_functions/build/browser/rust_functions_bg.wasm";

// Load the WASM into memory before hydrating the app
init(wasm).then(() => {
  hydrate(<RemixBrowser />, document);
});
