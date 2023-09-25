import { TwitterOutlined } from "@ant-design/icons";
import { GoBackArrow } from "core/UI/TextContainer/GoBackArrow";

import {
  Anchor,
  BlackText,
  Img,
  StyledContainer,
  StyledLink,
  StyledOlList,
  StyledText,
  StyledTitle,
  TwitterLinksWrapper,
} from "../../../core/UI/TextContainer/style";

const About = () => {
  return (
    <StyledContainer style={{ marginTop: "2rem" }}>
      <GoBackArrow />
      <StyledTitle>About us</StyledTitle>
      <StyledText>
        {" "}
        We are a vibrant team of smart contract engineers and KYC/AML experts
        who discovered collaborative energy at the ETHWarsaw 2022 Hackathon.
        Brought together by a common vision, we're constructing a trusted
        identity verification system to elevate security in the digital sphere.
        We are leaders of the virtual world.
      </StyledText>

      <Img
        src="img/team-photo1.jpg"
        alt="0xKYC team picture"
        height="620px"
        objectFit="cover"
        objectPosition="bottom"
      />

      <BlackText> 0xKYC Team</BlackText>
      <TwitterLinksWrapper>
        <Anchor
          href="https://twitter.com/DesCryptShion"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "1rem" }}
        >
          <TwitterOutlined /> DesCryptShion{" "}
        </Anchor>
        <Anchor
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/sebastian_oldak"
        >
          <TwitterOutlined /> sebastian_oldak{" "}
        </Anchor>
      </TwitterLinksWrapper>
      <Anchor
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/wysock_"
      >
        <TwitterOutlined /> wysock_ (CTO){" "}
      </Anchor>
      <Anchor
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/adag1oeth"
      >
        <TwitterOutlined /> adag1oeth (CEO){" "}
      </Anchor>
      <Anchor
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/philip_nomad"
      >
        <TwitterOutlined /> MG{" "}
      </Anchor>
      <StyledText style={{ marginTop: "1.5rem" }}>
        We've designed a decentralized app (dApp) that provides users the
        ability to secure unique, soulbound tokens across Ethereum, Polygon,
        Scroll, and soon other networks. Our unique solution verifies users in
        our partnered applications, all while maintaining confidentiality of
        personal data. It confirms a user's minimum age and non-sanctioned
        status while simultaneously generating a unique identifier (UUID).
        Simply put - your privacy remains safeguarded and the results of the
        verification are permissionless. 👍
      </StyledText>
      <a
        href="https://medium.com/ethwarsaw/0xkyc-the-ethwarsaw-success-story-5c3663a33996"
        target="_blank"
        rel="noreferrer"
      >
        <Img
          style={{ marginTop: "1.5rem" }}
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
        Our solution, armed with Proof of Uniqueness and sanctions checks,
        extends beyond the blockchain, providing unique and versatile
        applications. Here are a few cases where our anonymous verification
        comes into play:
      </StyledText>
      <StyledOlList type="i">
        <li>
          DAO Governance – Our solution emerged as a winner at the DAO Global
          Hackathon.
        </li>
        <li>
          Web3 Games, Casinos, and DAO Governance Protocols – We ensure the
          uniqueness of participants.
        </li>
        <li>
          Social Networks – We validate the 'realness' and uniqueness of
          profiles across platforms like Discord.
        </li>
        <li>
          Token Launches – We cater to the verification requirements during
          token launches in specific jurisdictions.
        </li>
        <li>DeFi Protocols – We verify sanctions of DeFi protocol users.</li>
        <li>
          Giveaways and Airdrops – We identify and verify individuals for fair
          distribution.
        </li>
        <li>
          Deepfakes and AI Generation – We verify authenticity, providing a
          solid defense against AI manipulations.
        </li>
      </StyledOlList>
      <a
        href="https://blog.aragon.org/dao-global-hackathon-bounty-winners/"
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
        href="https://blog.aragon.org/dao-global-hackathon-bounty-winners/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledLink style={{ fontSize: "1.5rem", marginTop: "1.2rem" }}>
          We are the winners of the DAO Global Hackathon!
        </StyledLink>
      </a>
      <StyledText style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        We're proud to have clinched victory at the{" "}
        <a
          href="https://blog.aragon.org/dao-global-hackathon-bounty-winners/"
          target="_blank"
          rel="noreferrer"
        >
          DAO Global Hackathon{" "}
        </a>
        for the most inventive use of the{" "}
        <a href=" https://aragon.org/" target="_blank" rel="noreferrer">
          Aragon OSx{" "}
        </a>{" "}
        plugin protocol. Our app is now available as an Aragon OSx app, with
        further information accessible on our{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/0xKYC/0xkyc-1vote-aragon-plugin"
        >
          GitHub
        </a>
        .
      </StyledText>

      <StyledText>
        Our strength lies in our team - a global ensemble of 10 individuals,
        hailing from different corners of the world. We have MG from Korea,
        Alicja from Poland, Sebastian from Brazil, and many more. We operate on
        a decentralized, remote-work model, but our heart beats in sync with
        Warsaw, Poland.
      </StyledText>
    </StyledContainer>
  );
};
export default About;
