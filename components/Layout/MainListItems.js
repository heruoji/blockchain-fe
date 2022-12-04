import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useRouter } from "next/router";

const MainListItems = () => {
  const router = useRouter();

  return (
    <>
      <ListItemButton
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="ダッシュボード" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          router.push("/transaction");
        }}
      >
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="送金" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          router.push("/wallet");
        }}
      >
        <ListItemIcon>
          <WalletIcon />
        </ListItemIcon>
        <ListItemText primary="ウォレット" />
      </ListItemButton>
    </>
  );
};

export default MainListItems;
