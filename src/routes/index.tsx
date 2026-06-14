import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Vishnu Grand Men's Hostel - PG & Hostel in Gachibowli, Hyderabad" },
      {
        name: "description",
        content:
          "Exclusive men's hostel, PG & guest house in Gachibowli, Hyderabad. Single, double & triple sharing rooms with AC, meals, Wi-Fi, 24×7 CCTV. Near Raidurg Metro, Microsoft & ISB.",
      },
      { property: "og:title", content: "Sri Vishnu Grand Men's Hostel - PG & Hostel in Gachibowli, Hyderabad" },
      {
        property: "og:description",
        content:
          "An elite residence for IT professionals, executives & serious students. Premium sharing suites in the heart of Gachibowli, Hyderabad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://srivishnugrand.hostel.in" },
      { property: "og:image", content: "/src/assets/image.png" },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}
