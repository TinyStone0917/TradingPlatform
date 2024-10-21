import * as React from 'react';
import {  Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid2 is a newer version

import { Box } from '@mui/system';
import Footer from '@/components/dashboard/footer/footer';
import SwapExchangeTable from '@/components/dashboard/table/swap-exchange-table';



export default function Page(): React.JSX.Element {
  
  return (
    <Box
      sx={{
        padding: 4,
        textAlign: 'center',
        borderRadius: 2,
        maxWidth: '900px',
        margin: 'auto',
      }}
    >
      <Grid container spacing={12} gap={2} sx={{display:'flex',justifyContent:'center'}}>
        {/* Title */}
        <Card sx={{ padding: 8, background: 'var(--mui-palette-background-paper)',flex:1 }}>
          <CardContent>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '2.rem',
              textAlign: 'center',
              background: 'linear-gradient(to right, #0EB0B2, #2289E8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Instant swap crypto Exchanges
          </Typography>
        </CardContent>
        </Card>

        {/* TextField */}
        
        <Grid xs={12} sm={12} sx={{ backgroundColor: 'var(--mui-palette-background-paper)' }} borderRadius={2}>
          <SwapExchangeTable />
        </Grid>
        <Grid xs={12} sm={12} borderRadius={2}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}
