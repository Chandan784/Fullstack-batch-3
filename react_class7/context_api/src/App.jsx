import CompA from "./components/CompA";

import Store from "./store/store";

function App() {
  return (
    <>
      <div>
        <Store.Provider
          value={{
            name: "chandan",
          }}
        >
          <CompA />
        </Store.Provider>
      </div>
    </>
  );
}

export default App;
