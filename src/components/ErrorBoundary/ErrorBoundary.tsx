// src/components/ErrorBoundary/ErrorBoundary.tsx
import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const handleError = (error: Error, info: { componentStack: string }) => {
    console.error("Error caught by ErrorBoundary:", error);
    console.error("Component stack:", info.componentStack);
  };

  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
