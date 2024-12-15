/**
 * Module for JSON-related utility functions
 * @module jsonUtils
 */

import { JsonParseResult } from '../types';

/**
 * Validates and formats JSON string
 * 
 * @param jsonString - The JSON string to parse and format
 * @returns Object containing the formatted JSON or error message
 * 
 * @example
 * ```ts
 * const { formatted, error } = parseAndFormatJson('{"key": "value"}');
 * if (formatted) {
 *   console.log('Valid JSON:', formatted);
 * } else {
 *   console.error('Error:', error);
 * }
 * ```
 */
export function parseAndFormatJson(jsonString: string): JsonParseResult {
  if (!jsonString.trim()) {
    return {
      formatted: null,
      error: 'Please enter some JSON to parse'
    };
  }

  try {
    const parsed = JSON.parse(jsonString);
    return {
      formatted: JSON.stringify(parsed, null, 2),
      error: null
    };
  } catch (err) {
    return {
      formatted: null,
      error: err instanceof Error ? err.message : 'Invalid JSON'
    };
  }
}

/**
 * Copies text to clipboard
 * 
 * @param text - The text to copy
 * @returns Promise that resolves when the text is copied
 * 
 * @example
 * ```ts
 * await copyToClipboard('Hello, World!');
 * console.log('Text copied!');
 * ```
 */
export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy text:', err);
    throw new Error('Failed to copy to clipboard');
  }
}