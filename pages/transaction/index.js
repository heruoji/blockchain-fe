import {
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { apiClient } from "../../api";
import Confirm from "./Confirm";
import ReceiverInfo from "./ReceiverInfo";
import SenderInfo from "./SenderInfo";

const Transaction = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [senderPublicKey, setSenderPublicKey] = useState();
  const [senderPrivateKey, setSenderPrivateKey] = useState();
  const [senderAddress, setSenderAddress] = useState();
  const [receiverAddress, setReceiverAddress] = useState();
  const [amount, setAmount] = useState();

  const steps = ["送信元情報", "送信先と金額", "最終確認"];

  const senderPublicKeyChangeHandler = (event) => {
    setSenderPublicKey(event.target.value);
  };

  const senderPrivateKeyChangeHandler = (event) => {
    setSenderPrivateKey(event.target.value);
  };

  const senderAddressChangeHandler = (event) => {
    setSenderAddress(event.target.value);
  };

  const receiverAddressChangeHandler = (event) => {
    setReceiverAddress(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = () => {
    const requestBody = {
      senderBlockchainAddress: senderAddress,
      recipientBlockchainAddress: receiverAddress,
      value: amount,
      privateKey: senderPrivateKey,
      publicKey: senderPublicKey,
    };

    apiClient
      .postTransaction(requestBody)
      .then((res) => alert("送信しました。"));
  };

  const getContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <SenderInfo
            onChangePublicKey={senderPublicKeyChangeHandler}
            onChangePrivateKey={senderPrivateKeyChangeHandler}
            onChangeAddress={senderAddressChangeHandler}
            publicKey={senderPublicKey}
            privateKey={senderPrivateKey}
            address={senderAddress}
          />
        );
      case 1:
        return (
          <ReceiverInfo
            onChangeAddress={receiverAddressChangeHandler}
            onChangeAmount={amountChangeHandler}
            address={receiverAddress}
            amount={amount}
          />
        );
      case 2:
        return (
          <Confirm
            senderPublicKey={senderPublicKey}
            senderPrivateKey={senderPrivateKey}
            senderAddress={senderAddress}
            receiverAddress={receiverAddress}
            amount={amount}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Send Money
        </Typography>
        <Stepper sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {getContent()}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
              Back
            </Button>
          )}
          {activeStep !== steps.length - 1 && (
            <Button
              variant="contained"
              sx={{ mt: 3, ml: 1 }}
              onClick={handleNext}
            >
              Next
            </Button>
          )}
          {activeStep === steps.length - 1 && (
            <Button
              variant="contained"
              sx={{ mt: 3, ml: 1 }}
              onClick={submitHandler}
            >
              Send
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default Transaction;
