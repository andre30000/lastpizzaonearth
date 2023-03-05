import * as React from 'react';
import ProductCategories from '../modules/ProductCategories';
// import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from '../modules/AppFooter';
import ProductHero from '../modules/ProductHero';
import ProductValues from '../modules/ProductValues';
// import ProductHowItWorks from './modules/views/ProductHowItWorks';
// import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from '../modules/AppAppBar';
import withRoot from '../modules/withRoot';

const Home = () => {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      {/* <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero /> */}
      <AppFooter />
    </React.Fragment>
  );
}

// export default withRoot(Index); // this is how they have it?
export default withRoot(Home);