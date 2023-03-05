import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from '../components/ProductHeroLayout';

const backgroundImage = 'https://images.unsplash.com/photo-1634065115548-f3787c6cf120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Serve humanity its last slice
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 2, mt: { xs: 4, sm: 10 } }}
      >
        The debut board game from Band Meeting Games - Last Pizza on Earth. Join your friends for a cooperative experience slingin pipin hot 'zas to the last remaining survivors during the zombie apocalypse. An endearing and irreverent table top experience.
      </Typography>
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button> */}
      <Typography variant="body2" color="inherit" sx={{ mt: 20 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}