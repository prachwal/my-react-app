import React from "react";
import Counter from "./components/Counter";
import NbpTable from "./components/NbpTable";
import LanguageSwitcher from "./components/LanguageSwitcher";

const App: React.FC = () => {
  return (
    <div>
      <h1>My React App</h1>
      <LanguageSwitcher />
      <Counter />
      <NbpTable />
    </div>
  );
};

export default App;
