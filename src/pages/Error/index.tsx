import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Result } from "antd";
import { useAccount } from "wagmi";

import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  selectMockedWalletAddress,
  setMinting,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import styled from "styled-components";

const Error = () => {
  const dispatch = useAppDispatch();
  const { address } = useAccount();
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const walletAddress = address || mockedWalletAddress || "";

  useEffect(() => {
    dispatch(
      setMinting({
        minting: false,
        chainId: null,
        walletAddress,
        error: true,
      }),
    );
  }, [dispatch, walletAddress]);

  return (
    <Container>
      <Result
        status="error"
        title="Verification failed"
        extra={
          <Link to="/">
            <ArrowLeftOutlined style={{ fontSize: ".75rem" }} /> Try again
          </Link>
        }
      />
      <TextBox>
        <Text>
          We weren't able to verify your request, if this issue persists please
          contact <a href="mailto:support@0xkyc.id">support@0xkyc.id</a> and
          carefully explain your situation. We are trying to provide the best
          service for our users and clients and therefore, we have to block some
          people, however you might have been blocked in error. Please check
          your internet connection and try again using the above button.
        </Text>
      </TextBox>
    </Container>
  );
};

export default Error;

const Text = styled("p")`
  color: #616161;
`;
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  padding-bottom: 15rem;
`;
const TextBox = styled("div")`
  text-align: center;
  max-width: 70%;
`;
