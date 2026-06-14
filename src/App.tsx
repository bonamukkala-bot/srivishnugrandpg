import { PageFadeIn } from "@/components/PageTransition";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <PageFadeIn>
      <HomePage />
    </PageFadeIn>
  );
}

export default App;
