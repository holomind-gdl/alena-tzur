"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="font-serif text-xl font-bold text-text-primary mb-2">
            Что-то пошло не так
          </h3>
          <p className="text-sm text-text-secondary mb-6 max-w-md">
            Произошла ошибка при загрузке этого раздела. Пожалуйста, попробуйте
            обновить страницу.
          </p>
          <button
            onClick={this.handleRetry}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-text-primary px-6 py-3 text-sm font-semibold hover:bg-accent transition-colors min-h-[44px]"
          >
            <RefreshCw className="h-4 w-4" />
            Попробовать снова
          </button>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <details className="mt-6 text-left w-full max-w-md">
              <summary className="text-xs text-text-secondary cursor-pointer">
                Детали ошибки (development)
              </summary>
              <pre className="mt-2 p-3 text-xs bg-surface border border-border rounded overflow-auto">
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;