import type { SSTConfig } from "sst";
import { RemixSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "linkedin-job-tools-web",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new RemixSite(stack, "site", {
        customDomain:
      app.stage === "prod"
        ? {
            domainName: "linkedinjobtools.com",
            domainAlias: "www.linkedinjobtools.com",
          }
        : undefined,
      });
      stack.addOutputs({
        url: site.customDomainUrl || site.url || "http://localhost:3000",
      });
    });
  },
} satisfies SSTConfig;
