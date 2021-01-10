import { logout } from "./auth/actions";
import { cleanupTicket } from "./ticket/actions";
// import Timer from "../Timer";

export const loggerMiddleware = (store: any) => (next: any) => (
  action: any
) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.log("result", result);
  console.groupEnd();
  return result;
};

export const checkLoggedInMiddleware = (store: any) => (next: any) => (
  action: any
) => {
  return Promise.resolve(next(action)).catch((err: Error) => {
    console.log(err.message);
    if (err.message == "session-expired") {
      // Snackbar.show({ text: "Session expired" });
      // Timer.stopService();
      next(logout());
      next(cleanupTicket());
    }
  });
};
