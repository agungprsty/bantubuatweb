export declare const DEFAULTS: Record<string, unknown>;
export declare function detectEscalation(text: unknown): boolean;
export declare function buildWhatsAppUrl(phone: string, ctx?: { lastQuestion?: string; intent?: string; page?: string }): string;
export declare function sanitizeHistory(history: unknown, max?: number): { role: "user" | "assistant"; content: string }[];
export declare function mountBantuBot(options?: Record<string, unknown>): { open(): void; close(): void; destroy(): void } | null;
