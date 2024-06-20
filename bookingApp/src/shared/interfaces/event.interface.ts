export interface EventItem {
    event: EventInfo;
    sessions: SessionItem[];
}

export interface EventInfo {
    id: string;
    image: string;
    title: string;
    subtitle: string;
}

export interface SessionItem {
    availability: number;
    date: string;
}