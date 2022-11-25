import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from ".";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary: () => {
    return <> ERROR </>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
