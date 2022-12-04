import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { useRef, useState } from "react";
import { apiClient } from "../../api";

const Deposits = () => {
  const inputRef = useRef();
  const [deposits, setDeposits] = useState();

  const clickSearchButtonHandler = async () => {
    const address = inputRef.current.value;
    console.log(address);
    const res = await apiClient.getTotalAmount(address);
    const data = await res.data;
    setDeposits(data.totalAmount);
  };

  return (
    <>
      <Typography component="h2" variant="h6" gutterBottom>
        Deposits
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", my: 3 }}>
        <TextField fullWidth label="Address" inputRef={inputRef}></TextField>
        <Button sx={{ ml: 1 }} onClick={clickSearchButtonHandler}>
          Search
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
        <CurrencyBitcoinIcon />
        <Typography component="p" variant="h6">
          {deposits}
        </Typography>
      </Box>
    </>
  );
};

export default Deposits;
