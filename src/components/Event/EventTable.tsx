import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IEvent } from "../../types/events";

const ReportTable = (props: IEvent[]) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="report table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Type</b>
            </TableCell>
            <TableCell>
              <b>Description</b>
            </TableCell>
            <TableCell>
              <b>Seed Name</b>
            </TableCell>
            <TableCell>
              <b>Seed Domain</b>
            </TableCell>
            <TableCell>
              <b>Threat</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{props.map((row) => tableRow(row))}</TableBody>
      </Table>
    </TableContainer>
  );
};

const tableRow = (props: IEvent) => {
  const threatColour =
    props.threatLevel.split(":")[1] === "Red"
      ? "Red"
      : props.threatLevel.split(":")[1] === "Green"
      ? "Green"
      : "Orange";

  return (
    <TableRow>
      <TableCell>{props.type}</TableCell>
      <TableCell>{props.description}</TableCell>
      <TableCell>{props.seed.name}</TableCell>
      <TableCell>{props.seed.domain}</TableCell>
      <TableCell style={{ backgroundColor: threatColour }}></TableCell>
    </TableRow>
  );
};

export default ReportTable;
