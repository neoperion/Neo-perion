import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    // Here we could also log to an error reporting service like Sentry
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="min-h-[auto] bg-[#050816] flex items-center justify-center p-4">
          <div className="parchment-surface--deep border border-red-500/20 rounded-2xl p-8 max-w-lg w-full text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-slate-400 mb-6">
              An unexpected error has occurred. Our engineering team has been notified.
            </p>
            <div className="parchment-surface--deep rounded border border-white/5 p-4 text-left overflow-auto text-sm text-red-400 font-mono mb-6 max-h-40">
              {this.state.error?.message || 'Unknown error'}
            </div>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-neo-blue hover:bg-neo-blue text-white w-full"
            >
              Reload Application
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

