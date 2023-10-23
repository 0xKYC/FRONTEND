import { lazy } from "react";

import tosContent from "content/TermsOfService.json";
import Container from "core/UI/Container";
import { LoadingSpinner } from "core/UI/LoadingSpinner";
import { TosModalDiscord } from "core/UI/Modals/TosModal/DiscordSign";
import { DiscordProfilePage } from "modules/profile/Discord";
import { useGetDiscordUserQuery } from "redux/api/user/userApi";

const SunscreenPage = lazy(
  () => import("../../../modules/verification/sunscreen"),
);
const Sunscreen = () => {
  const { data, isLoading } = useGetDiscordUserQuery();

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
