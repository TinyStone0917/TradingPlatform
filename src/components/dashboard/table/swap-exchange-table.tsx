'use client';

import React from 'react';
import { Box, Button, IconButton, InputAdornment, OutlinedInput, Popover, Typography } from '@mui/material'; // For layout styling
import { DataGrid, GridColDef, GridFilterListIcon, GridFilterModel, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Stack } from '@phosphor-icons/react';

import MouseHoverPopover from '@/styles/theme/components/popover';
import BasicPopover from '@/styles/theme/components/popover';

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const columns: GridColDef[] = [
  { field: 'Name', width: 200 },
  {
    field: 'View',
    width: 200,
  },
  {
    field: 'Reserve',
    width: 200,
  },
  {
    field: 'TrustPilot',
    width: 200,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            textOverflow: 'ellipsis', // Ellipsis for overflow text
            whiteSpace: 'nowrap',
          }}
          height={20}
          borderRadius={70}
          width={40}
          marginTop={1}
        >
          <img src="/assets/footer/Vector.png" alt="Trustpilot" style={{ height: '10px', marginRight: '3px' }} />
          {params.row.TrustRating}
        </Box>
        <Box
          sx={{
            backgroundColor: '#FB58581A',
            marginLeft: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'red',
            fontSize: '10px', // Reduced font size
            padding: '4px', // Reduced padding
            overflow: 'hidden', // Hide overflow
            textOverflow: 'ellipsis', // Ellipsis for overflow text
            whiteSpace: 'nowrap', // Prevent text wrapping
          }}
          height={20}
          borderRadius={70}
          width={60} // Increased width
          marginTop={1}
        >
          {params.row.TrustReview} reviews
        </Box>
      </div>
    ),
  },
];

const rows = [
  { id: 1, Name: 'Cafe', View: 'View 1', Reserve: 'Reserve 1', TrustRating: '4.5', TrustReview: 100 },
  { id: 2, Name: 'Bistro', View: 'View 2', Reserve: 'Reserve 2', TrustRating: '4.0', TrustReview: 80 },
  { id: 3, Name: 'Diner', View: 'View 3', Reserve: 'Reserve 3', TrustRating: '3.5', TrustReview: 60 },
  { id: 4, Name: 'Restaurant', View: 'View 4', Reserve: 'Reserve 4', TrustRating: '4.8', TrustReview: 120 },
  { id: 5, Name: 'Eatery', View: 'View 5', Reserve: 'Reserve 5', TrustRating: '4.2', TrustReview: 90 },
  { id: 6, Name: 'Grill', View: 'View 6', Reserve: 'Reserve 6', TrustRating: '3.8', TrustReview: 70 },
  { id: 7, Name: 'Steakhouse', View: 'View 7', Reserve: 'Reserve 7', TrustRating: '4.7', TrustReview: 110 },
  { id: 8, Name: 'Buffet', View: 'View 8', Reserve: 'Reserve 8', TrustRating: '3.9', TrustReview: 75 },
  { id: 9, Name: 'Cafe Deluxe', View: 'View 9', Reserve: 'Reserve 9', TrustRating: '4.6', TrustReview: 105 },
  { id: 10, Name: 'Fine Dining', View: 'View 10', Reserve: 'Reserve 10', TrustRating: '4.9', TrustReview: 130 },
];

export default function SwapExchangeTable() {
  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [],
    quickFilterValues: [],
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Box sx={{ height: 'auto', width: '100%', background: 'var(--mui-palette-background-paper)', borderRadius: 2 }}>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'flex-end', padding: '0 10px' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          filterModel={filterModel}
          onFilterModelChange={setFilterModel}
          disableColumnSelector
          disableDensitySelector
          hideFooter
          slots={{
            toolbar: () => (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between', // Space between items
                  padding: '8px 16px',
                  width: '100%',
                  cursor: 'default', // Turn off pointer
                  backgroundColor: 'var(--mui-palette-background-paper)', // Custom background color
                  borderRadius: '4px', // Rounded corners
                }}
              >
                <GridToolbarQuickFilter
                  placeholder="Search..."
                  quickfilterprops={{ debounceMs: 300 }} // Faster debounce
                  sx={{
                    '& .MuiInputBase-root': {
                      '&:focus': {
                        outline: 'none',
                        boxShadow: 'none',
                      },
                    },
                    width: '50%', // Custom width
                  }}
                />
                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <Button variant="outlined" color="secondary" sx={{ borderRadius: 0.8, height: '40px', gap: '10' }}>
                    <GridFilterListIcon />
                    <BasicPopover title="Filter" key={'a'} content={'filter '} />
                  </Button>

                  <Button variant="outlined" color="secondary" sx={{ borderRadius: 0.8, height: '40px', gap: '10' }}>
                    <Stack />
                    <BasicPopover title=" Columns" key={'b'} content={'column '} />
                  </Button>
                </Box>
              </Box>
            ),
          }}
        />
      </Box>
    </Box>
  );
}
