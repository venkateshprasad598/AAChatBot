import { ConfigProvider } from "antd";
import { Suspense, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Layout from "./layout/Layout";
import { routeList, routeListProps } from "./routes";
import { configProvider, darkTheme, lightTheme } from "./utils";
import { LoginForm } from "./components/login";

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
                <Route path="/" element={<h1>Hi</h1>} />
                <Route path="/login" element={<LoginForm />} />
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
