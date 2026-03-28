export type Location = 'gwalior' | 'orchha';
export type Mode = 'story' | 'qa';
export type Audience = 'kids' | 'general' | 'expert';

export interface Site {
  slug: string;
  name: string;
  description: string;
  image: string;
  shortDescription: string;
}

export interface AIQueryRequest {
  query: string;
  location: Location;
  mode: Mode;
  audience: Audience;
}

export interface AIQueryResponse {
  text: string;
  audioUrl?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isLoading?: boolean;
}

export interface PlannerFormData {
  location: string;
  days: number;
  budget: 'low' | 'medium' | 'high';
  interests: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}
