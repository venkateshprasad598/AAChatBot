import React from "react";

interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div role="alert">
      <h2>Something went wrong:</h2>
      <button onClick={reloadPage}>Try again</button>
    </div>
  );
};

export default ErrorFallback;
