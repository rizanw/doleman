import { CLEANUP, FETCH_BY_USER, TicketActionState, TicketList } from "./types";

const initialStateList: TicketList = {
  tickets: [],
};

export function ticketListReducer(
  state: TicketList = initialStateList,
  action: TicketActionState
): TicketList {
  switch (action.type) {
    case FETCH_BY_USER:
      return {
        tickets: action.payload,
      };
    case CLEANUP:
      return initialStateList;
    default:
      return state;
  }
}
