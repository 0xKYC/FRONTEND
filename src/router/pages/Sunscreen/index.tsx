import { lazy, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import tosContent from "content/TermsOfService.json";
import Container from "core/UI/Container";
import { LoadingSpinner } from "core/UI/LoadingSpinner";
import { TosModalDiscord } from "core/UI/Modals/TosModal/DiscordSign";
import { DiscordProfilePage } from "modules/profile/Discord";
import {
  useAuthDiscordMutation,
  useGetDiscordUserQuery,
} from "redux/api/user/userApi";

const SunscreenPage = lazy(
  () => import("../../../modules/verification/sunscreen"),
);
const Sunscreen = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  const { data, isLoading } = useGetDiscordUserQuery();
  const [auth] = useAuthDiscordMutation();

  const [called, setCalled] = useState(false);
  useEffect(() => {
    if (code && !called && !isLoading && !data) {
      const result = auth({ code }).unwrap();
      console.log(result);
      setCalled(true);
    }
  }, [auth, called, code, data, isLoading]);

  if (isLoading) return <LoadingSpinner tip="Loading..." height="90vh" />;
  return (
    <Container>
      {data?.discordAccount.isVerified ? (
        <DiscordProfilePage />
      ) : (
        <SunscreenPage userData={data} />
      )}

      {data && (
        <TosModalDiscord
          signed={Boolean(
            data?.discordAccount.tosVersion === tosContent.version,
          )}
        />
      )}
    </Container>
  );
};

export default Sunscreen;
