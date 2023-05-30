import { TwitterOutlined } from "@ant-design/icons";
import { GoBackArrow } from "common/GoBackArrow";

import {
  BlackText,
  Img,
  LargeText,
  StyledContainer,
  StyledLink,
  StyledOlList,
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
        We are a dynamic team of smart contract engineers and KYC/AML
        professionals, who found synergy at the ETHWarsaw 2022. United by a
        vision, we're building a trusted identity verification system to enhance
        security in the digital realm.
      </StyledText>
      
      <Img
        src="img/founders.jpg"
        alt="founders"
        height="620px"
        objectFit="cover"
        objectPosition="top"
      />

      <BlackText> Co-Founders of 0xKYC: Adam (CEO) and Dylan (CTO)</BlackText>

      <a
        href="https://twitter.com/adag1oeth"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "1rem" }}
      >
        <TwitterOutlined /> adag1oeth{" "}
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/wysock_"
      >
        <TwitterOutlined /> wysock_{" "}
      </a>
      <StyledText style={{ marginTop: 0, marginBottom: "3rem" }}>
        We've engineered a decentralized app (dApp), granting users the ability to obtain unique,
        soulbound tokens across Ethereum, Polygon, Scroll, and other networks in the near future. 
        Our solution stands out - it verifies users in our partner applications, all while keeping personal data confidential. 
        It verifies the user's minimum age and non-sanctioned status, concurrently generating a unique identifier (UUID). 
        That's the sum of it - your privacy stays uncompromised and the result of the check remains permissionless 👏
      </StyledText>
      <a
        href="https://medium.com/ethwarsaw/0xkyc-the-ethwarsaw-success-story-5c3663a33996"
        target="_blank"
        rel="noreferrer"
      >
        <Img
          style={{ marginTop: "3rem" }}
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
        <LargeText style={{ textDecoration: "underline" }}>
          We are the winners of the DAO Global Hackathon!
        </LargeText>
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
        plugin protocol. Our app is now available as an Aragon OSx app, 
        with further information accessible on our{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/0xKYC/0xkyc-1vote-aragon-plugin"
        >
          GitHub
        </a>
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
