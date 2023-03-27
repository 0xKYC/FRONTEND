import {
  StyledContainer,
  StyledText,
  StyledTitle,
} from "../../common/TextContainer/style";

const About = () => {
  return (
    <StyledContainer>
      <StyledTitle>About us</StyledTitle>
      <StyledText>
        {" "}
        &emsp; &emsp; &emsp;We are a team of experienced blockchain developers
        and KYC experts who came together during ETHWarsaw September hackathon.
      </StyledText>
      <StyledText>
        &emsp; &emsp; &emsp;Our decentralized app (dApp) allows users to obtain
        unique, soulbound tokens on the Ethereum, Polygon and Scroll networks
        and soon on others. Our dApp ensures users' personal information remains
        private and is only used to generate a zero-knowledge proof that
        verifies the user's age and sanctions status.
      </StyledText>
      <StyledText>
        &emsp; &emsp; &emsp;This solution is used for anonymous verification in
        various use cases, such as DAO governance, NFT mints and access to DeFi
        products. We have the support of Outlier Ventures and New Order, and our
        team includes co-founders Adam and Dylan, a frontend engineer Sebastian,
        a backend engineer MG, an analyst Alicja and a group of advisors who
        provide valuable contributions and support for our company. We are
        excited to bring our vision to our partners, including OKX Web3, Blue,
        Cryptum and more...
      </StyledText>
    </StyledContainer>
  );
};
export default About;
