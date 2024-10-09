import { ConfigProvider, Switch } from "antd";
import React, { Suspense, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import { routeList, routeListProps } from "./routes";
import { configProvider, darkTheme, lightTheme } from "./utils";
import { ErrorBoundary } from "./components/ErrorBoundary";
import ChatApp from "./components/ChatApp";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<>Loading</>}>
          <ConfigProvider
            {...configProvider}
            theme={isDarkMode ? darkTheme : lightTheme}
          >
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <ChatApp />
                      <div style={{ marginBottom: "16px" }}>
                        <Switch
                          checked={isDarkMode}
                          onChange={toggleTheme}
                          checkedChildren="Dark"
                          unCheckedChildren="Light"
                        />
                      </div>
                    </>
                  }
                />
                <Route element={<Layout />}>
                  {routeList.map((route: routeListProps) => (
                    <Route
                      key={route.id}
                      path={route.to}
                      element={route.element}
                    />
                  ))}
                </Route>
              </Routes>
            </Router>
          </ConfigProvider>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
