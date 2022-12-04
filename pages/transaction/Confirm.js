import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Confirm = ({
  senderPublicKey,
  senderPrivateKey,
  senderAddress,
  receiverAddress,
  amount,
}) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        確認画面
      </Typography>
      <Box>
        <List>
          <Typography>送信元公開鍵</Typography>
          <Typography gutterBottom>{senderPublicKey}</Typography>
        </List>
        <List>
          <Typography>送信元秘密鍵</Typography>
          <Typography gutterBottom>{senderPrivateKey}</Typography>
        </List>
        <List>
          <Typography>送信元アドレス</Typography>
          <Typography gutterBottom>{senderAddress}</Typography>
        </List>
        <List>
          <Typography>送信先アドレス</Typography>
          <Typography gutterBottom>{receiverAddress}</Typography>
        </List>
        <List>
          <Typography>金額</Typography>
          <Typography gutterBottom>{amount}</Typography>
        </List>
      </Box>
    </>
  );
};

export default Confirm;
