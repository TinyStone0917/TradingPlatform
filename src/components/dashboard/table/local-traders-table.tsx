'use client';

import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';

// Define the columns for the crypto table
const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 250,
    headerAlign: 'center',
    renderCell: (params) => (
      <div style={{ display: 'flex', justifySelf: 'center' }}>
        <Box
          alt="logo"
          component="img"
          height={40}
          src="/assets/TableIcons/local_trade.png"
          width={40}
          sx={{ marginRight: '8px' }}
        />
        <Box component="div" marginTop={1}>
          <Typography style={{ fontSize: '0.75rem', color: 'black' }} variant="h3">
            {params.value}
          </Typography>
          <Typography style={{ fontSize: '0.75rem', color: 'gray' }}>ID {params.row.ID}</Typography>
        </Box>
      </div>
    ),
  },
  {
    field: 'fee',
    headerName: 'Fee',
    width: 150,
    type: 'number',
    headerAlign: 'center',
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          sx={{
            backgroundColor: '#FB58581A',

            marginLeft: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'red',
            fontSize: '12px',
            padding: '8px',
          }}
          height={20}
          borderRadius={70}
          width={40}
          marginTop={1}
        >
          {params.value}%
        </Box>
      </div>
    ),
  },
  {
    field: 'paymentMethod',
    headerName: 'Payment Method',
    width: 200,
    headerAlign: 'center',
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box component="div" marginTop={1}>
          <Typography style={{ fontSize: '0.75rem', color: 'black' }} variant="h3">
            {params.value}
          </Typography>
          <Box component="div" display={'flex'} gap={1}>
            <Typography style={{ fontSize: '0.75rem', color: 'gray' }}>Max {params.row.max}</Typography>
            <Typography style={{ fontSize: '0.75rem', color: 'gray' }}>Min {params.row.min}</Typography>
          </Box>
        </Box>
      </div>
    ),
  },
  {
    field: 'user',
    headerName: 'User',
    width: 180,
    headerAlign: 'center',
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box component="div" marginTop={1}>
          <Typography style={{ fontSize: '0.75rem', color: 'black' }} variant="h3">
            {params.value}
          </Typography>
          <Typography style={{ fontSize: '0.75rem', color: 'gray' }}>Trades {params.row.trades}</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#0FBA811A',

            marginLeft: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'green',
            fontSize: '12px',
            padding: '8px',
          }}
          height={20}
          borderRadius={70}
          width={40}
          marginTop={1}
        >
          {params.row.gain}
        </Box>
        <Box
          sx={{
            backgroundColor: '#FB58581A',

            marginLeft: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'red',
            fontSize: '12px',
            padding: '8px',
          }}
          height={20}
          borderRadius={70}
          width={40}
          marginTop={1}
        >
          {params.row.loss}
        </Box>
      </div>
    ),
  },
];

// Define the dummy data for the rows
const rows = [
  {
    id: 1,
    name: 'Fastest Funds to Most Banks',
    fee: 0.5,
    paymentMethod: 'Bank Transfer',
    user: 'AusBitcoins',
    ID: 'Q4D86nMUdcR',
    max: 41,
    min: 10,
    trades: 1348,
    gain: 439,
    loss: 0,
  },
  {
    id: 2,
    name: 'Fastest Funds to Most Banks',
    fee: 0.7,
    paymentMethod: 'Credit Card',
    user: 'AusBitcoins',
    ID: 'Q4D86nMUdcR',
    max: 41,
    min: 10,
    trades: 1348,
    gain: 439,
    loss: 0,
  },
  {
    id: 3,
    name: 'Fastest Funds to Most Banks',
    fee: 0.3,
    paymentMethod: 'PayPal',
    user: 'AusBitcoins',
    ID: 'Q4D86nMUdcR',
    max: 41,
    min: 10,
    trades: 1348,
    gain: 439,
    loss: 0,
  },
  {
    id: 4,
    name: 'Fastest Funds to Most Banks',
    fee: 0.4,
    paymentMethod: 'Crypto Wallet',
    user: 'AusBitcoins',
    ID: 'Q4D86nMUdcR',
    max: 41,
    min: 10,
    trades: 1348,
    gain: 439,
    loss: 0,
  },
  {
    id: 5,
    name: 'Fastest Funds to Most Banks',
    fee: 0.6,
    paymentMethod: 'Cash',
    user: 'AusBitcoins',
    ID: 'Q4D86nMUdcR',
    max: 41,
    min: 10,
    trades: 1348,
    gain: 439,
    loss: 0,
  },
];

interface CryptoTableProps {
  handleTable: () => void;
}
export default function LocalTradersTable({ handleTable }: CryptoTableProps): React.JSX.Element {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
        <Typography variant="h6" gutterBottom>
          Local Traders Table
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          onClick={() => {
            handleTable();
          }}
          sx={{
            cursor: 'pointer',
            textDecoration: 'underline',
            color: '#2289E8',
          }}
        >
          Back
        </Typography>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
