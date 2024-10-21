'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';

// Define the columns for the crypto table
const columns: GridColDef[] = [
  {
    field: 'cryptoName',
    headerName: 'Crypto name',
    width: 120,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Box
          alt="logo"
          component="img"
          height={25}
          src="/assets/TableIcons/bitcoin.png"
          width={25}
          sx={{ marginRight: '8px' }}
        />
        {params.value}
        <Box
          sx={{
            backgroundColor: '#F5931C1A',
            borderRadius: '7px',
            marginLeft: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#F5931C',
            fontSize: '8px',
            padding: '4px',
          }}
          height={20}
          borderRadius={30}
        >
          BTC
        </Box>
      </div>
    ),
  },
  { field: 'price', headerName: 'Price', width: 150, type: 'number' },
  { field: 'high', headerName: '24 High', width: 150, type: 'number' },
  { field: 'low', headerName: '24 Low', width: 150, type: 'number' },
  {
    field: 'buy',
    headerName: 'Buy',
    width: 120,
    renderCell: () => (
      <Button
        style={{
          background: 'linear-gradient(to right,#81CBEC, #00AEEF)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '31px',
          border: 'none',
          width: '90px',
        }}
      >
        Buy
      </Button>
    ),
  },
  {
    field: 'sell',
    headerName: 'Sell',
    width: 120,
    renderCell: () => (
      <Button
        style={{
          background: 'linear-gradient(to right, #81CBEC,#B100EF)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '31px',
          border: 'none',
          width: '90px',
        }}
      >
        Sell
      </Button>
    ),
  },
];

// Define the dummy data for the rows
const rows = [
  { id: 1, cryptoName: 'Bitcoin', price: 78654.98, high: 78654.98, low: 78322.51 },
  { id: 2, cryptoName: 'Bitcoin', price: 78654.98, high: 78654.98, low: 78322.51 },
  { id: 3, cryptoName: 'Bitcoin', price: 78654.98, high: 78654.98, low: 78322.51 },
  { id: 4, cryptoName: 'Bitcoin', price: 78654.98, high: 78654.98, low: 78322.51 },
  { id: 5, cryptoName: 'Bitcoin', price: 78654.98, high: 78654.98, low: 78322.51 },
];
interface CryptoTableProps {
  handleTable: () => void;
}

export default function CryptoTable({ handleTable }: CryptoTableProps): React.JSX.Element {
  return (
    <Box sx={{ height: 'auto', width: '100%', background: 'var(--mui-palette-background-paper)',borderRadius:2 }}>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'flex-end', padding: '0 10px' }}>
        <Typography
          variant="subtitle1"
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
          Traders
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
        sx={{
          backgroundColor: 'var(--mui-palette-background-paper)',
          '& .MuiDataGrid-root': {
            backgroundColor: 'inherit !important', // Change this color to your desired header color
            // You can also change the text color of the header
          },
        }}

      />
    </Box>
  );
}
