import { lazy } from "react";

import Container from "core/UI/Container";
import { LoadingSpinner } from "core/UI/LoadingSpinner";
import { TosModalWeb2 } from "core/UI/Modals/TosModal/PartnerSign";
import { DiscordProfilePage } from "modules/profile/Discord";
import { useGetDiscordUserQuery } from "redux/api/user/userApi";

const SunscreenPage = lazy(
  () => import("../../../modules/verification/sunscreen"),
);
const Sunscreen = () => {
  const { isLoading, data } = useGetDiscordUserQuery();

  if (isLoading) return <LoadingSpinner tip="Loading..." height="90vh" />;

  return (
    <Container>
      {data?.discordAccount.isVerified ? (
        <DiscordProfilePage />
      ) : (
        <SunscreenPage userData={data} />
      )}

      <TosModalWeb2 redirect={true} />
    </Container>
  );
};

export default Sunscreen;
