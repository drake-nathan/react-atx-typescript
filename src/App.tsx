const App = (): React.JSX.Element => {
  return (
    <main className="flex h-svh flex-col items-center gap-12 bg-gray-100 p-8 font-mono text-black dark:bg-gray-950 dark:text-white">
      <h1 className="text-5xl font-semibold">TypeScript Demo</h1>

      <form className="flex min-w-[400px] flex-col gap-8 rounded-xl border border-white p-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Your Name" type="text" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="yourname@email.com"
            type="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            placeholder="password123"
            type="password"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button>Cancel</button>
          <button>Submit</button>
        </div>
      </form>
    </main>
  );
};

export default App;
