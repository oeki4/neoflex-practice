import { Navbar } from "@/shared/ui/Navbar/Navbar.tsx";
import { AppProvider } from "./providers/AppProvider.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <AppProvider />
    </div>
  );
}

export default App;
