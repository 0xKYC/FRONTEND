import { useEffect, useState } from "react";

import { User } from "service/user/types";
import { findUserInDB } from "service/user/user.service";

export const useFetchUser = (address: string | undefined) => {
  const [data, setData] = useState<User>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!address) return;
    (async function () {
      try {
        setLoading(true);
        const response = await findUserInDB(address);
        setData(response);
        console.log(response);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [address]);

  return { data, error, loading };
};
