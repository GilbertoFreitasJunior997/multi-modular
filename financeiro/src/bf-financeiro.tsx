import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from ".";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  renderType: "hydrate",
  domElementGetter: () => document.getElementById("content-root"),
  errorBoundary: () => <> ERROR FINANCEIRO </>,
});

export const { bootstrap, mount, unmount } = lifecycles;
