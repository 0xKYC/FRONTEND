import Container from "core/UI/Container";
import { Heading, SectionWrapper } from "modules/verification/styles";
import styled from "styled-components";

const DiscordVerification = () => {
  return (
    <Container>
      <SectionWrapper style={{ minHeight: "50vh", textAlign: "center" }}>
        <Heading>
          How to use our service if <br /> you are coming from Insert Stonks
        </Heading>
        <Box>
          <Text>
            1. Go to{" "}
            <a href="https://insertstonks.io/user">
              https://insertstonks.io/user
            </a>
            , open the menu by clicking the white arrow located in the upper
            right corner then choose <b>Settings</b>.
          </Text>
          <ImgBox>
            <img src="/img/is-1.png" alt="Insert stonks website" />
          </ImgBox>
          <Text>
            2.Scroll down to the section titled <b>"KYC your profile"</b>.
          </Text>
          <Text>
            3. Click the orange button labeled <b>"START THE 0xKYC"</b>
          </Text>
          <ImgBox>
            <img src="/img/is-2.png" alt="Insert stonks website" />
          </ImgBox>
          <Text>4. You'll be redirected back to our website.</Text>
          <Text>
            5. Follow the on-screen instructions to complete the verification
            process.
          </Text>

          <InfoText>
            If your verification process encounters any issues, we recommend
            trying the following steps:
            <p>
              - Switch to a desktop device if you were using a mobile device.
            </p>
            <p>
              - Click the designated button to switch the verification flow.
            </p>
          </InfoText>
          <InfoText>
            If you encounter any further difficulties, don't hesitate to reach
            out to <a href="mailto:support@0xkyc.id">our support team</a>.
          </InfoText>
        </Box>
      </SectionWrapper>
    </Container>
  );
};

export default DiscordVerification;

const ImgBox = styled.div`
  width: 100%;
  margin: 2rem 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Box = styled.div`
  margin: 1rem 0;
  @media screen and (min-width: 1024px) {
    margin: 1rem 8rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const InfoText = styled.p`
  margin-top: 3rem;
  font-size: 1.3rem;

  p {
    margin: 1rem;
  }
  a {
    color: #fb7324;
  }
`;
