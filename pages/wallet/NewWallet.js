import { Button, Grid, TextField } from "@mui/material";

const NewWallet = ({ walletData, onClick }) => {
  return (
    <>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 4 }}
        onClick={onClick}
      >
        新規発行
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="standard-read-only-input"
            label="PublickKey"
            value={walletData.publicKey}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="PrivateKey"
            value={walletData.privateKey}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            value={walletData.blockchainAddress}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default NewWallet;
