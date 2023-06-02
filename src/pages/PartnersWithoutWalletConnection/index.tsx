import { PartnersWithoutWalletConnectionScreen } from "components/PartnersWithoutWalletConnection";

import { LoadingSpinner } from "../../common/LoadingSpinner";

const PartnersWithoutWalletConnection = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading) return <LoadingSpinner tip="Loading..." height="90vh" />;

  return <PartnersWithoutWalletConnectionScreen />;
};

export default PartnersWithoutWalletConnection;
