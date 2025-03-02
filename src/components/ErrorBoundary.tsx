import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
    // Tutaj można dodać logowanie błędów do serwera
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Coś poszło nie tak.</h2>
          <details>
            <summary>Szczegóły błędu</summary>
            <p>{this.state.error?.toString()}</p>
          </details>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="error-reset-button"
          >
            Spróbuj ponownie
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
