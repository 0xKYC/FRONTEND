import { Result, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import {
  addTxHash,
  checkIfVerified,
} from "../../redux/features/wallet/onfidoSlice";
import { useAppDispatch } from "../../redux/hooks";
import { checkForSBT, findUserInDB } from "../../service/user.service";
import { Container, StyledBox } from "./styled";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const MintContent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { address } = useAccount();

  const [apiCall, setApiCall] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!address) return;

    if (apiCall < 11) {
      const interval = setInterval(async () => {
        try {
          setApiCall((currentApiCall) => currentApiCall + 1);
          const isVerified = await checkForSBT(address);

          console.log(isVerified);

          if (apiCall === 10) {
            clearInterval(interval);
            setError(true);
          }
          if (isVerified) {
            const { txHash } = await findUserInDB(address);

            console.log("verified");
            dispatch(checkIfVerified(isVerified));
            dispatch(addTxHash(txHash));
            navigate("/profile");
          }
        } catch (err) {
          console.error(err);
          setError(true);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [apiCall, navigate, address, dispatch]);

  return (
    <Container>
      {error ? (
        <Result
          status="warning"
          title="Please go back and refresh the page, we've encountered an issue."
          extra={
            <Link to="/">
              <ArrowLeftOutlined style={{ marginRight: ".4rem" }} />
              Go back
            </Link>
          }
        />
      ) : (
        <StyledBox>
          <Spin
            tip="Please wait a few moments, you will be automatically redirected."
            size="large"
            style={{
              width: "300px",
              color: "#fb7324",
              fontSize: "1.2rem",
            }}
          >
            <div></div>
          </Spin>
        </StyledBox>
      )}
    </Container>
  );
};
