import { Grid, TextField, Typography } from "@mui/material";

const SenderInfo = ({
  onChangePublicKey,
  onChangePrivateKey,
  onChangeAddress,
  publicKey,
  privateKey,
  address,
}) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        送信元情報
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="sender_publickey"
            label="Public Key"
            fullWidth
            onChange={onChangePublicKey}
            value={publicKey}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="sender_privatekey"
            label="Private Key"
            fullWidth
            onChange={onChangePrivateKey}
            value={privateKey}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="sender_address"
            label="Address"
            fullWidth
            onChange={onChangeAddress}
            value={address}
          ></TextField>
        </Grid>
      </Grid>
    </>
  );
};

export default SenderInfo;
