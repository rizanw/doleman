import { Wisata } from "../wisata/types";

export interface Ticket {
  user: string;
  wisata: string | Wisata;
  code: string;
  date: Date;
  quantity: number;
  price: number;
  status: string;
}

export const BUY_TICKET = "ticket/BUY";
export const FETCH_BY_USER = "ticket/BY_USER";
export const UPDATE_STATUS = "ticket/UPDATE_STATUS";
export const CLEANUP = "ticket/CLEANUP";

export interface TicketList {
  tickets: Ticket[];
}

interface FetchByUser {
  type: typeof FETCH_BY_USER;
  payload: Ticket[];
}

interface BuyTicket {
  type: typeof BUY_TICKET;
  payload: Ticket[];
}

interface UpdateStatusTicket {
  type: typeof UPDATE_STATUS;
  payload: Ticket[];
}

interface CleanupTicket {
  type: typeof CLEANUP;
}

export type TicketActionState =
  | FetchByUser
  | BuyTicket
  | UpdateStatusTicket
  | CleanupTicket;
