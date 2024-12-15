import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {children}
      </div>
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>Built with modern web technologies for optimal performance</p>
      </footer>
    </div>
  );
}