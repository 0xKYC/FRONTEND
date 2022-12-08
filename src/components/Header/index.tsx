import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { ethers } from "ethers";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState(null);
  const [connectButtonText, setConnectButtonText] = useState("Connect Wallet");


  const connectMetamask = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts: any[]) => {
          accountChangedHandler(accounts[0]);
          setConnectButtonText("Connected");
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      console.log("Please install MetaMask!");
    }
  }
  const accountChangedHandler = (account: any) => {
    setDefaultAccount(account);
    getUserBalance(account.toString());
  }
  
  const getUserBalance = (address:any) => {
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
  }

  window.ethereum.on("accountsChanged", accountChangedHandler);

  window.ethereum.on("chainChanged", (chainId: any) => {  
    window.location.reload();
  });

  window.ethereum.on("disconnect", (error: { code: number; message: string; }) => {
    console.log(error);
    window.location.reload();
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
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span>{t("Mission")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>{t("Product")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={connectMetamask}
        >
          <Span>
            <Button>{connectButtonText}</Button>
          </Span>
        </CustomNavLinkSmall>
          <Span>{`${defaultAccount? `...${defaultAccount.slice(-6)}` : ''}`}</Span>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
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
