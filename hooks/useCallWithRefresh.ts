import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function useCallWithRefresh(endpoint: any, arg: any) {
  const dispatch = useAppDispatch();
  const { data: session, update } = useSession();
  const [jwtUpdated, setJwtUpdated] = useState(false);
  const [rejectionCount, setRejectionCount] = useState(0); // new state variable

  const result: any = useAppSelector(endpoint.select(arg));

  useEffect(() => {
    if (jwtUpdated) {
      dispatch(endpoint.initiate(arg));
      setJwtUpdated(false);
    } else if (result.status === "rejected") {
      if (rejectionCount >= 3) {
        (async () => {
          await update({
            ...session,
            jwt: "",
          });
        })();
        dispatch(endpoint.initiate(arg));
        return;
      }
      setRejectionCount(rejectionCount + 1); // increment rejectionCount
      (async () => {
        await update({
          ...session,
          jwt: result.error.data,
        });
        setJwtUpdated(true);
      })();
    } else {
      dispatch(endpoint.initiate(arg));
    }
  }, [dispatch, result.status, jwtUpdated, rejectionCount]); // add rejectionCount to dependency array

  return result;
}
