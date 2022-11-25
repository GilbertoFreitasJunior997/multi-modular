import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@bf/layout",
  app: () => System.import<LifeCycles>("@bf/layout"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@bf/financeiro",
  app: () => System.import<LifeCycles>("@bf/financeiro"),
  activeWhen: (location) => location.pathname.includes("/financeiro"),
});

start({
  urlRerouteOnly: true,
});
