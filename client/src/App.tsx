import { Router } from "@/router";
import { GraphqlProvider } from "@/GraphQL";

function App() {
  return (
    <GraphqlProvider>
      <Router />
    </GraphqlProvider>
  );
}

export default App;
