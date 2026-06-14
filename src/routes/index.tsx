import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/HomePage";
import { SITE } from "@/lib/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE.title },
      {
        name: "description",
        content: SITE.description,
      },
      { property: "og:title", content: SITE.title },
      {
        property: "og:description",
        content:
          "An elite residence for IT professionals, executives & serious students. Premium sharing suites in the heart of Gachibowli, Hyderabad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.url },
      { property: "og:image", content: SITE.ogImage },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}
