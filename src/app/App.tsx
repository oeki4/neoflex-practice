import { Navbar } from "@/shared/ui/Navbar/Navbar.tsx";
import { AppProvider } from "./providers/AppProvider.tsx";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppProvider />
    </BrowserRouter>
  );
}

export default App;
