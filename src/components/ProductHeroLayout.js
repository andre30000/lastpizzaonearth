import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import logoTitle from '../components/imgs/logoTitle.png'
import downArrow from '../components/imgs/productHeroArrowDown.png'


const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

function ProductHeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 10,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box 
          component="img"
          src={logoTitle}
          alt="wonder"
          width="294"
          height="160"
          sx={{ height: 160, borderRadius: 5, mt: {lg: 20, xs: 2}, mb: 5, boxShadow: 3 }}
        ></Box>
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.7,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
        <Box
          component="img"
          src={downArrow}
          height="16"
          width="12"
          alt="arrow down"
          sx={{ position: 'absolute', bottom: 32 }}
        />
      </Container>
    </ProductHeroLayoutRoot>
  );
}

ProductHeroLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default ProductHeroLayout;