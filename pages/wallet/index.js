import { Container, Paper, Grid } from "@mui/material";
import { useState } from "react";
import { apiClient } from "../../api";
import Deposits from "./Deposits";
import NewWallet from "./NewWallet";

const Wallet = () => {
  const [walletData, setWalletData] = useState({
    publicKey: "",
    privateKey: "",
    blockchainAddress: "",
  });

  const clickButtonHandler = async () => {
    const res = await apiClient.getWallet();
    const data = await res.data;
    setWalletData(data);
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            variant="outlined"
            sx={{ mt: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Deposits />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
            <NewWallet walletData={walletData} onClick={clickButtonHandler} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Wallet;
