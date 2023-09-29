import UniquenessContent from "content/UniquenessVerified.json";
import vContent from "content/VerifiedContent.json";
import { ChainId, getChainInfo } from "core/constans/chains";
import { Heading } from "modules/verification/styles";
import { Flow } from "redux/api/onfido/types";

import { Checkmark } from "../../../components/Checkmark";
import { Box, Content, Flex } from "../../../styles";
import { StyledCard, StyledLink, StyledRedirectLink } from "./styles";

type Props = {
  redirectUrlFromPartner: string | null;
  chainId: ChainId;
  txHash: string | null | undefined;
  flow: Flow | null;
};
export const VerifiedCard = ({
  redirectUrlFromPartner,
  chainId,
  txHash,
  flow,
}: Props) => {
  const { logoUrl, label, explorer, explorerName, color } =
    getChainInfo(chainId);
  return (
    <StyledCard>
      <Box>
        <Flex>
          <Heading>{vContent.title}</Heading>
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
      {redirectUrlFromPartner || flow === "sunscreen"
        ? UniquenessContent.info.map(({ text, id }) => {
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
          properColor={color}
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
