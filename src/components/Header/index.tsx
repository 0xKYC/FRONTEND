import {
  Burger,
  CustomNavLinkSmall,
  HeaderSection,
  Label,
  LogoContainer,
  Menu,
  NotHidden,
  Outline,
  Span,
} from "./styles";
import { Col, Drawer, Row } from "antd";

import { Button } from "../../common/Button";
import Container from "../../common/Container";

import { ethers } from "ethers";

import { useState } from "react";
import { withTranslation } from "react-i18next";
import { useConnectMetamask } from "../../common/hooks/useConnectMetamask";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);
  const { connectMetamask, walletAddress } = useConnectMetamask();
  const [userBalance, setUserBalance] = useState(null);

  const getUserBalance = (address: any) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance: any) => {
        balance = ethers.utils.formatEther(balance);
        setUserBalance(balance);
        console.log(balance);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  window.ethereum.on("chainChanged", (chainId: string) => {
    window.location.reload();
  });

  window.ethereum.on("accountsChanged", (accountsChanged: any) => {
    if (walletAddress === "" && accountsChanged[0] === "") {
      window.location.reload();
    }
  });

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };

    return (
      <>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={connectMetamask}
        >
          <Span>
            <Button color={walletAddress ? "#FFFFFFff" : ""}>
              {walletAddress ? "Disconnect" : "Connect Wallet"}
            </Button>
          </Span>
        </CustomNavLinkSmall>
        <Span>{`${walletAddress ? `...${walletAddress.slice(-6)}` : ""}`}</Span>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <img
              src="/img/icons/new-logo.png"
              alt="logo"
              width="180px"
              height="54px"
            />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
