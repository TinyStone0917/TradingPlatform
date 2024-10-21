'use client';

import * as React from 'react';
import type { Metadata } from 'next';
import SearchIcon from '@mui/icons-material/Search'; // Example icon, you can use any other icon
import {
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid2 is a newer version

import { Box, Stack } from '@mui/system';
import { set } from 'react-hook-form';

import Footer from '@/components/dashboard/footer/footer';
import CryptoTable from '@/components/dashboard/table/home-table';
import LocalTradersTable from '@/components/dashboard/table/local-traders-table';

// export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'Exchange',
    label: 'Exchange',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

interface CryptoTableProps {
  handleTable: () => void;
}
export default function Page(): React.JSX.Element {
  const [cryptoTable, setCryptoTable] = React.useState(true);

  const handleTable = () => {
    setCryptoTable((prevCryptoTable) => !prevCryptoTable);
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        borderRadius: 2,
        maxWidth: '900px',
        margin: 'auto',
      }}
    >
      <Grid container spacing={12} gap={2}>
        {/* Title */}
        <Card sx={{ padding: 8, background: 'var(--mui-palette-background-paper)' }}>
          <CardContent>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '2.9rem' },
                textAlign: 'center',
                background: 'linear-gradient(to right, #0EB0B2, #2289E8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Compare Rates from 400+ Exchanges
            </Typography>
            <Typography variant="body1" gutterBottom color="var(--mui-palette-text-secondary)">
              Pick the right exchanger for swapping your crypto with tables
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
              <TextField
                id="outlined-select-currency"
                select
                defaultValue="Exchange"
                placeholder="Exchange"
                size="medium"
                InputProps={{
                  sx: { borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRight: 'none', height: '40px' },
                }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <OutlinedInput
                size="small"
                placeholder="Currency Search"
                sx={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderLeft: 'none',
                  width: '50%',
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
          </CardContent>
        </Card>

        {/* TextField */}
        <Stack gap={2} direction={{ xs: 'column', sm: 'row' }}>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              {/* Adjust grid for responsiveness */}
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '2rem',
                  background: 'linear-gradient(to right, #0EB0B2, #2289E8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '1rem',
                }}
              >
                Compare
              </Typography>
              <Typography variant="body2" fontSize="1rem" color="var(--mui-palette-text-secondary)">
                Compare exchanges with intuitive tables, sorted by fees, volume, liquidity, and more.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '2rem',
                  background: 'linear-gradient(to right, #EE5B38, #EB9B15)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '1rem',
                }}
              >
                Redirect
              </Typography>
              <Typography variant="body2" fontSize="1rem" color="var(--mui-palette-text-secondary)">
                Pick the exchanges that fit youre needs without any hidden fees or sponsored ads, our service is free
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '2rem',
                  background: 'linear-gradient(to right, #CE4EB6, #A856DB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '1rem',
                }}
              >
                Privacy
              </Typography>
              <Typography variant="body2" fontSize="1rem"></Typography>
              <Typography variant="body2"></Typography>
              <Typography variant="body2" fontSize="1rem" color="var(--mui-palette-text-secondary)">
                We do not store any data about you, we do not track you, and we do not sell your data.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
        <Grid flex={1} sx={{background:'var(--mui-palette-background-paper)',borderRadius:2}}>
          {cryptoTable ? <CryptoTable handleTable={handleTable} /> : <LocalTradersTable handleTable={handleTable} />}
        </Grid>
        <Grid xs={12} sm={12} borderRadius={2}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}
