import { GoBackArrow } from "common/GoBackArrow";

import {
  BlackText,
  Img,
  LargeText,
  StyledContainer,
  StyledLink,
  StyledText,
  StyledTitle,
} from "../../common/TextContainer/style";

const About = () => {
  return (
    <StyledContainer>
      <GoBackArrow />
      <StyledTitle>About us</StyledTitle>
      <StyledText>
        {" "}
        We are a team of experienced blockchain developers and KYC experts who
        came together during ETHWarsaw September hackathon.
      </StyledText>
      <a
        href="https://medium.com/ethwarsaw/0xkyc-the-ethwarsaw-success-story-5c3663a33996"
        target="_blank"
        rel="noreferrer"
      >
        <Img
          src="img/ethwarsaw.jpg"
          alt="eth warsaw"
          objectFit="cover"
          objectPosition="center"
          height="300px"
        />

        <StyledLink>
          0xKYC — The ETHWarsaw Success Story by Matt Kielczewski
        </StyledLink>
      </a>
      <StyledText>
        Our decentralized app (dApp) allows users to obtain unique, soulbound
        tokens on the Ethereum, Polygon and Scroll networks and soon on others.
      </StyledText>

      <Img
        src="img/founders.jpg"
        alt="founders"
        height="620px"
        objectFit="cover"
        objectPosition="top"
      />

      <BlackText>
        {" "}
        Co-Founders of 0xKYC Adam (CEO) , left and Dylan (CTO), right
      </BlackText>

      <a href="https://twitter.com/adag1oeth" style={{ marginRight: ".5rem" }}>
        {" "}
        adag1oeth{" "}
      </a>
      <a href="https://twitter.com/wysock_"> wysock_ </a>

      <StyledText>
        Our solution is used for anonymous verification in various use cases,
        such as DAO governance, NFT mints and access to DeFi protocols. We have
        the support of Outlier Ventures and New Order, and our team includes
        co-founders Adam and Dylan, a frontend engineer Sebastian, a backend
        engineer MG, an analyst Alicja and a group of advisors who provide
        valuable contributions and support for our company. We are excited to
        bring our vision to our partners, including OKX Web3, Blue, Cryptum and
        more...
      </StyledText>

      <a
        href="https://www.linkedin.com/posts/0xkyc_daoglobalhackathon-daogovernance-kyc-activity-7065325352893497346-Ik04?utm_source=share&utm_medium=member_desktop"
        target="_blank"
        rel="noreferrer"
      >
        <Img
          src="img/dao-hackathon.png"
          alt="dao hackaton"
          height="400px"
          objectFit="contain"
          style={{ marginTop: "1.5rem" }}
          objectPosition="center"
        />
      </a>
      <a
        href="https://www.linkedin.com/posts/0xkyc_daoglobalhackathon-daogovernance-kyc-activity-7065325352893497346-Ik04?utm_source=share&utm_medium=member_desktop"
        target="_blank"
        rel="noreferrer"
      >
        <LargeText>We won the DAO Global Hackathon!</LargeText>
      </a>
      <StyledText>
        Our innovative pluign designed to democratize DAO governance, leverages
        our proprietary Proof of Uniqueness technology. With a simple selfie 📸,
        users get a unique identifier and a single, verified vote. No more fake
        accounts or duplicate votes!
      </StyledText>
      <StyledText>
        See the
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/0xKYC/0xkyc-1vote-aragon-plugin"
        >
          {" "}
          github repository
        </a>{" "}
        for technical details
      </StyledText>
    </StyledContainer>
  );
};
export default About;
