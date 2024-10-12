export interface ChatMessage {
    sender: "user" | "bot";
    markdown_text?: string;
    buttons?: {
        button1?: { label: string; payload: string };
        button2?: { label: string; payload: string };
    };
    knowledge_graph: any;
    image: string;
    question: string
}

interface GraphNode {
    id: string;
    label: string[];
    properties: Record<string, string | number | null>;
}

interface GraphRelationship {
    id: string;
    type: string;
    source: string;
    target: string;
}

export interface GraphData {
    nodes: GraphNode[];
    relationships: GraphRelationship[];
}

export type GraphResponse = GraphData;

export interface Imedia {
    type: string | null,
    data: GraphData | string | null,
} 
