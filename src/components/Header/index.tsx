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
import { useAccount } from "wagmi";

import { useState } from "react";
import { withTranslation } from "react-i18next";
import { useConnectWallet } from "../../common/hooks/useConnectWallet";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const { open } = useConnectWallet();

  const { address, isConnected } = useAccount();

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

    const handleOpen = () => {
      if (isConnected) {
        open({ route: "Account" });
      } else {
        open({ route: "ConnectWallet" });
      }
    };
    return (
      <>
        <CustomNavLinkSmall style={{ width: "220px" }} onClick={handleOpen}>
          <Span>
            <Button color={address ? "#FFFFFFff" : ""}>
              {address
                ? `Disconnect ...${address.slice(-6)}`
                : "Connect Wallet"}
            </Button>
          </Span>
        </CustomNavLinkSmall>
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
        <Drawer closable={false} open={visible} onClose={onClose} zIndex={50}>
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
