import React from 'react';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MediumIcon from '@mui/icons-material/MenuBook'; // Use appropriate icon or import custom
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Grid, IconButton, Link, Typography } from '@mui/material';

export default function Footer(): React.JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        // Decreased height
        flexDirection: { xs: 'column', sm: 'row' }, // Flex direction column if screen size is small
        gap: 5,
      }}
    >
      {/* Left Side - Trustpilot */}
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Image src="/assets/footer/Vector.svg" alt="Trustpilot" height={25} width={25} />
        <Typography
          variant="h5"
          sx={{
            background: 'linear-gradient(to right, #81CBEC , #00AEEF )',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          <Link href="https://www.trustpilot.com" target="_blank" underline="none" fontWeight="bold">
            Trustpilot
          </Link>
        </Typography>
      </Box>

      {/* Center - Social Media Icons */}
      <Grid container justifyContent="center" spacing={1} wrap="nowrap" >
        <Grid item>
          <IconButton
        href="https://instagram.com"
        target="_blank"
        sx={{
          backgroundColor: '#ffffff',
          color: '#5FA3C6',
          padding: '7px', // Add padding to create space around the icon
          borderRadius: '50%', // Makes the icon container circular

          '&:hover': {
            backgroundColor: '#f0f0f0', // Optional: Changes background on hover
          },
        }}
          >
        <InstagramIcon />
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton
        href="https://twitter.com"
        target="_blank"
        sx={{
          backgroundColor: '#ffffff',
          color: '#5FA3C6',
          padding: '7px', // Add padding to create space around the icon
          borderRadius: '50%', // Makes the icon container circular

          '&:hover': {
            backgroundColor: '#f0f0f0', // Optional: Changes background on hover
          },
        }}
          >
        <TwitterIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
        href="https://facebook.com"
        target="_blank"
        sx={{
          backgroundColor: '#ffffff',
          color: '#5FA3C6',
          padding: '7px', // Add padding to create space around the icon
          borderRadius: '50%', // Makes the icon container circular

          '&:hover': {
            backgroundColor: '#f0f0f0', // Optional: Changes background on hover
          },
        }}
          >
        <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
        href="https://linkedin.com"
        target="_blank"
        sx={{
          backgroundColor: '#ffffff',
          color: '#5FA3C6',
          padding: '7px', // Add padding to create space around the icon
          borderRadius: '50%', // Makes the icon container circular

          '&:hover': {
            backgroundColor: '#f0f0f0', // Optional: Changes background on hover
          },
        }}
          >
        <LinkedInIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
        href="https://medium.com"
        target="_blank"
        sx={{
          backgroundColor: '#ffffff',
          color: '#5FA3C6',
          padding: '7px', // Add padding to create space around the icon
          borderRadius: '50%', // Makes the icon container circular

          '&:hover': {
            backgroundColor: '#f0f0f0', // Optional: Changes background on hover
          },
        }}
          >
        <MediumIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
        href="https://telegram.org"
        target="_blank"
        sx={{
          backgroundColor: '#ffffff',
          color: '#5FA3C6',
          padding: '7px', // Add padding to create space around the icon
          borderRadius: '50%', // Makes the icon container circular

          '&:hover': {
            backgroundColor: '#f0f0f0', // Optional: Changes background on hover
          },
        }}
          >
        <TelegramIcon />
          </IconButton>
        </Grid>
      </Grid>

      {/* Right Side - Privacy Policy */}
      <Grid>
        <Typography
          variant="caption"
          sx={{
            background: 'linear-gradient(to right, #81CBEC , #00AEEF )',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            whiteSpace: 'nowrap', // Ensure text stays in one line
          }}
        >
          <Link href="#" target="_blank" underline="none">
            Privacy Policy
          </Link>
        </Typography>
      </Grid>
    </Box>
  );
}
