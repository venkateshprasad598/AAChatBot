import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LoginForm } from "./components/login";
import Layout from "./layout/Layout";
import { routeList, routeListProps } from "./routes";
import { configProvider, lightTheme } from "./utils";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<>Loading</>}>
          <ConfigProvider {...configProvider} theme={lightTheme}>
            <Router>
              <Routes>
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
