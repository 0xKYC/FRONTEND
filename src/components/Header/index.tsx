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
import { createUserInDB, onfidoCheckForApplicant, onfidoCreateApplicant } from "../../service/onfido.service";
import {findUserInDB, initUserInDB, updateUserInDB} from "../../service/user.service";

import { Button } from "../../common/Button";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { ethers } from "ethers";
import { useState } from "react";
import { withTranslation } from "react-i18next";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState(null);
  const [connectButtonText, setConnectButtonText] = useState("Connect Wallet");


  const connectMetamask = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (accounts: any[]) => {
          if(connectButtonText === "Connect Wallet"){
            const account = accounts[0];
            const changeAccount = accountChangedHandler(account);
            let user = await findUserInDB(account);
            if (user === "noUserError") {
            const initUser = await initUserInDB(account);
          }
            const userProfile = await findUserInDB(account);
            console.log('userProfile', userProfile)

            if(userProfile.onfidoApplicantId !== null){
              console.log('onfidoApplicantId is not null', userProfile.onfidoApplicantId) 
            } 

            if(userProfile.onfidoApplicantId === null) { 
              const newApplicant = await onfidoCreateApplicant();
              const uploadNewApplicant = await updateUserInDB(account, newApplicant.id);
            }

            setConnectButtonText("Disconnect");
          }
          if (connectButtonText === "Disconnect"){
            accountChangedHandler('')
            setConnectButtonText("Connect Wallet");
            window.ethereum.request({
              method: "eth_requestAccounts",
              params: [{eth_accounts: {}}]
          })
          }

        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      console.log("Please install MetaMask!");
    }
  }
  const accountChangedHandler = (account: string) => {
    setDefaultAccount(account);
    //getUserBalance(account.toString());
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
    
    window.ethereum.on("chainChanged", (chainId: string) => {  
      window.location.reload();
    });
  
    window.ethereum.on("accountsChanged", (accountsChanged: any) => {
      if (defaultAccount === '' && accountsChanged[0] === '') {
       window.location.reload();
    }});
    
  
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
            <Button
            color={ connectButtonText === 'Disconnect'? "#FFFFFFff": "" }
            >{connectButtonText}</Button>
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
