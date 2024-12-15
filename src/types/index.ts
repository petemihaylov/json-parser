/**
 * Interface for JSON parsing result
 */
export interface JsonParseResult {
  /** Formatted JSON string if parsing successful */
  formatted: string | null;
  /** Error message if parsing failed */
  error: string | null;
}

/**
 * Interface for feature items in the hero section
 */
export interface Feature {
  /** Icon component to display */
  icon: React.ReactNode;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
}