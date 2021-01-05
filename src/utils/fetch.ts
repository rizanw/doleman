import axios from "axios";

const checkLogin = (resBody: any) => {
  if (!resBody.success && resBody.message == "User is logged out") {
    throw Error("session-expired");
  }
};

export const fetchPost = async (
  uri: string,
  payload?: any,
  logTag?: string
) => {
  try {
    const res = await axios.post(uri, payload);
    checkLogin(res.data);
    return res.data;
  } catch (err) {
    console.info(logTag ? `${logTag}: ${err}` : `Fetch error: ${err}`);

    if (err.message == "session-expired") {
      throw err;
    }
  }
};
