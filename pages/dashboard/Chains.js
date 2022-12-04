import {
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { apiClient } from "../../api";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/system";

const ChainRow = ({ chain }) => {
  const [open, setOpen] = useState();
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{chain.timestamp}</TableCell>
        <TableCell align="right">{chain.transactions.length}</TableCell>
        <TableCell align="right">{chain.nonce}</TableCell>
        <TableCell>{chain.prevHash}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Transactions
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableCell>Date</TableCell>
                  <TableCell>Sender Address</TableCell>
                  <TableCell>Receiver Address</TableCell>
                  <TableCell>Amount</TableCell>
                </TableHead>
                <TableBody>
                  {chain.transactions.map((transaction) => (
                    <TableRow key={transaction.timestamp}>
                      <TableCell>{transaction.timestamp}</TableCell>
                      <TableCell>
                        {transaction.senderBlockchainAddress}
                      </TableCell>
                      <TableCell>
                        {transaction.recipientBlockchainAddress}
                      </TableCell>
                      <TableCell>{transaction.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const Chains = () => {
  const [chains, setChains] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const getChains = async () => {
      const res = await apiClient.getChains();
      const data = await res.data;
      setChains(data);
    };
    getChains();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - chains.length) : 0;

  return (
    <>
      <Typography component="h2" variant="h6" gutterBottom>
        Chains
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Date</TableCell>
              <TableCell align="right">Transaction</TableCell>
              <TableCell align="right">Nonce</TableCell>
              <TableCell>Prev Hash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chains
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((chain) => (
                <ChainRow key={chain.timestamp} chain={chain} />
              ))}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 33 * emptyRows,
                }}
              >
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={chains.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      ></TablePagination>
    </>
  );
};

export default Chains;
