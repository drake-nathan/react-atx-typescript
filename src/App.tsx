import type { ReactNode } from "react";

import Button from "./components/button";
import Layout from "./components/layout";

const App = (): ReactNode => {
  return (
    <main className="flex h-svh flex-col items-center gap-12 bg-gray-100 p-8 font-mono text-black dark:bg-gray-950 dark:text-white">
      <h1 className="text-5xl font-semibold">TypeScript Demo</h1>

      <Layout className="flex gap-4">
        <Button id="text-button" type="button">
          Click Me
        </Button>

        <Button id="text-button" type="button">
          Click Me
        </Button>
      </Layout>
    </main>
  );
};

export default App;
