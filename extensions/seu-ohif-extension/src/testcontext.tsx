import React from 'react';
import { createContext, useState } from 'react';
const TestContext = createContext(null);
function TestContextProvider({ children }) {
  const [choice, setchoice] = useState("default");
  function updateChoice(newChoice) {
    setchoice(newChoice);
  }
  return (
    <TestContext.Provider value={{ choice }} >
      {children}
    </TestContext.Provider>
  );
}
export { TestContext, TestContextProvider };
