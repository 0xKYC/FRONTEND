import vContent from "content/VerifiedContent.json";
import PartnerContent from "content/VerifiedPartnerContent.json";
import { ChainId, getChainInfo } from "core/constans/chains";
import { Heading } from "modules/verification/styles";

import { Checkmark } from "../../../components/Checkmark";
import { Box, Content, Flex } from "../../../styles";
import { StyledCard, StyledLink, StyledRedirectLink } from "./styles";

type Props = {
  redirectUrlFromPartner: string | null;
  chainId: ChainId;
  txHash: string | null | undefined;
};
export const VerifiedCard = ({
  redirectUrlFromPartner,
  chainId,
  txHash,
}: Props) => {
  const { logoUrl, label, explorer, explorerName } = getChainInfo(chainId);
  return (
    <StyledCard>
      <Box>
        <Heading>{vContent.title}</Heading>
        <Flex>
          <Checkmark />

          <img
            alt={label}
            src={redirectUrlFromPartner ? "/img/IS-logo.png" : logoUrl}
            width={44}
            height={42}
            style={{ marginTop: "3px", marginLeft: "6px" }}
          />
        </Flex>
      </Box>
      {redirectUrlFromPartner
        ? PartnerContent.info.map(({ text, id }) => {
            return <Content key={id}>{text}</Content>;
          })
        : vContent.info.map(({ text, id }) => {
            return <Content key={id}>{text}</Content>;
          })}

      {redirectUrlFromPartner ? (
        <StyledRedirectLink href={redirectUrlFromPartner}>
          Continue to Insert Stonks
        </StyledRedirectLink>
      ) : (
        <StyledLink
          chainId={chainId}
          href={explorer + txHash}
          target="_blank"
          rel="noreferrer"
        >
          Link to {explorerName}
        </StyledLink>
      )}
    </StyledCard>
  );
};
