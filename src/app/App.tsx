import { AppProvider } from "./providers/AppProvider.tsx";

function App() {
  return (
    <AppProvider>
      <h1 className="text-3xl font-rubik font-bold underline">Hello world!</h1>
    </AppProvider>
  );
}

export default App;
