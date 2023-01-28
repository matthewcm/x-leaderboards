import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const LeaderboardTable = ({
  rows
}: {
    rows: {
      name: string,
      score: number
    }[]
  }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="leaderboard table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">X Score</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rank) => (
            <TableRow key={row.name}>
              <TableCell>{rank + 1}</TableCell>
              <TableCell> {row.name} </TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
