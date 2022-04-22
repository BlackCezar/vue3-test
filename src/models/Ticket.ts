import { Segment } from "./Segment";

export interface Ticket {
    id: string;
    price: number;
    companyId: string;
    segments: Array<Segment>;
}