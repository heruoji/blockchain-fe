import { Grid, TextField, Typography } from "@mui/material";

const ReceiverInfo = ({ onChangeAddress, onChangeAmount, address, amount }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        送信先と金額
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="receiverAddress"
            label="Address"
            fullWidth
            onChange={onChangeAddress}
            value={address}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="amount"
            label="金額"
            fullWidth
            onChange={onChangeAmount}
            value={amount}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ReceiverInfo;
