import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { JsonEditor } from './components/JsonEditor';

// The original issue was here - missing default export
function App() {
  const [parsedJson, setParsedJson] = useState<string>('');

  return (
    <Layout>
      <Hero />
      <div className="max-w-4xl mx-auto pb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
          <JsonEditor onParse={setParsedJson} />
        </div>
      </div>
    </Layout>
  );
}

// This line was missing in the original file, causing the export error
export default App;