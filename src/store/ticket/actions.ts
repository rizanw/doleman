import { Dispatch } from "redux";
import { TICKET } from "../../resources/api";
import { fetchPost } from "../../utils/fetch";
import { CLEANUP, FETCH_BY_USER, Ticket } from "./types";

export function fetchByUser(id: string) {
  return async (dispatch: Dispatch) => {
    const res = await fetchPost(TICKET.myTickets, { user: id });
    if (res.success == false) return [];
    dispatch({ type: FETCH_BY_USER, payload: res }); 
    return res;
  };
}

export function buyTicket(ticket: Ticket) {
  return async (dispatch: Dispatch) => {
    const res = await fetchPost(TICKET.buy, ticket); 
    return res;
  };
}

export function updateStatusTicket(code: string, status: string) {
  return async (dispatch: Dispatch) => {
    const res = await fetchPost(TICKET.updateStatus, {
      code: code,
      status: status,
    });
    fetchByUser(res.user);
    return res;
  };
}

export function cleanupTicket() {
  return {
    type: CLEANUP,
  };
}
