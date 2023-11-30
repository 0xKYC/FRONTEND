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
import { selectGuildId, setGuildId } from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const SunscreenPage = lazy(
  () => import("../../../modules/verification/sunscreen"),
);
const Sunscreen = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const code = searchParams.get("code");
  const guildIdFromUrl = searchParams.get("guildId");

  const guildId = useAppSelector(selectGuildId);

  const { data, isLoading } = useGetDiscordUserQuery();
  const [auth] = useAuthDiscordMutation();
  const [called, setCalled] = useState(false);

  useEffect(() => {
    if (guildIdFromUrl) {
      dispatch(setGuildId(guildIdFromUrl));
    }
  }, [guildIdFromUrl, dispatch]);

  useEffect(() => {
    if (code && !called && !isLoading && !data) {
      auth({ code, guildId }).unwrap();
      setCalled(true);
    }
  }, [auth, called, code, data, isLoading, guildId]);

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
