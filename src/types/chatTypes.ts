export interface ChatMessage {
    sender: "user" | "bot";
    text?: string;
    buttons?: {
        button1?: { label: string; payload: string };
        button2?: { label: string; payload: string };
    };
}