import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

import { Stack,  } from '@mui/material';
import delivery from '../components/imgs/delivery.jpg'
import slice from '../components/imgs/slice.jpg'
import character from '../components/imgs/character.jpg'
import zombies from '../components/imgs/zombies.jpg'

import { CardMedia } from '@mui/material';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};


function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 3, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src={"/static/themes/onepirate/productCurvyLines.png"}
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
         <Box sx={item} display='flex' flexDirection='row'>
              <Box>
                    <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>
                        <CardMedia
                            component="img"
                            src={delivery}
                            alt="delivery car"
                            sx={{ height: 200, borderRadius: 5, mt: 5, boxShadow: 3  }}>
                        </CardMedia>
                        <CardMedia
                            component="img"
                            src={slice}
                            alt="slice"
                            sx={{ height: 200, borderRadius: 5, boxShadow: 3 }}>
                        </CardMedia>
                    </Stack>
                
                </Box>
              <Typography variant="h6" sx={{ my: 5 }}>
                Distinct Art Style
              </Typography>
              <Typography variant="h5">
                {
                  'Hand drawn art on unique cards offers a compelling'
                }

                {
                  ' and artistic experience.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={character}
                alt="character"
                sx={{ height: 200, borderRadius: 5, mt: 2, boxShadow: 5 }}
              />
              <Typography variant="h6" sx={{ my: 5, mt: 8 }}>
                Meet the Pizza Crew
              </Typography>
              <Typography variant="h5">
                {
                  'Playable characters with special abilities and '
                }

                {'fun personalities'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={zombies}
                alt="zombies"
                sx={{ height: 200, boxShadow: 3, borderRadius: 5, mt: 2 }}
              />
              <Typography variant="h6" sx={{ my: 5, mt: 4 }}>
                A New Twist on the Zombie Apocalypse
              </Typography>
              <Typography variant="h5">
                {'No played out tropes here, a real sense of adventure '}
                {'that you will not find anywhere else.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;