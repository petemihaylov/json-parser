import React, { useState } from 'react';
import { Copy, Check, AlertCircle } from 'lucide-react';
import { parseAndFormatJson, copyToClipboard } from '../utils/jsonUtils';

/**
 * Props for the JsonEditor component
 */
interface JsonEditorProps {
  /** Callback function called when JSON is successfully parsed */
  onParse: (value: string) => void;
}

/**
 * JsonEditor component provides a textarea for JSON input with parsing and copying functionality
 * 
 * @component
 * @example
 * ```tsx
 * <JsonEditor onParse={(formattedJson) => console.log(formattedJson)} />
 * ```
 */
export function JsonEditor({ onParse }: JsonEditorProps) {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles JSON parsing and formatting
   */
  const handleParse = () => {
    const { formatted, error: parseError } = parseAndFormatJson(input);
    if (formatted) {
      setInput(formatted);
      onParse(formatted);
      setError(null);
    } else {
      setError(parseError);
    }
  };

  /**
   * Handles copying JSON to clipboard
   */
  const handleCopy = async () => {
    await copyToClipboard(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-[400px] p-4 font-mono text-sm bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          placeholder="Paste your JSON here..."
        />
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          title="Copy to clipboard"
        >
          {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
        </button>
      </div>

      {error && (
        <div className="flex items-center space-x-2 text-red-500 bg-red-50 p-3 rounded-lg animate-fadeIn">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleParse}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Parse
        </button>
      </div>
    </div>
  );
}