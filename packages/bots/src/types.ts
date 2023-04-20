export type ChatRole = "bot" | "user" | "system" | "context";

export type ChatRecord = {
  role: ChatRole;
  content: string;
};

export interface AnswerParams {
  conversation: ChatRecord[];
  maxTokens?: number;
  signal?: AbortSignal;
}

export type VercelAIModel = `openai:${GPTModel}`;

export type VercelAIPayload = {
  frequencyPenalty: number;
  maxTokens: number;
  model: VercelAIModel;
  presencePenalty: number;
  prompt: string;
  stopSequences: string[];
  temperature: number;
  topK: number;
  topP: number;
};

export type GPTModel = "gpt-3.5-turbo" | "gpt-4";

export type LexPayload = {
  text: string;
  max_tokens: number;
  gpt_model: GPTModel;
  temperature: number;
  authenticity_token: string;
};

export interface ChatBot {
  answer(params: AnswerParams): AsyncIterable<string>;
  answerStream(params: AnswerParams): ReadableStream<Uint8Array>;
}