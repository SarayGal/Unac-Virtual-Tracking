import { Helmet } from 'react-helmet';
import {
  Box,
  Card,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfile from 'src/components/account/AccountProfile';
import AccountProfileDetails from 'src/components/account/AccountProfileDetails';
import SurveyComp from 'src/components/survey/survey';

const Account = () => (
  <>
    <Helmet>
      <title>Perfil</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            direction="column"
            justify="space-evenly"
          >
            <AccountProfile />
            <Box
              sx={{
                py: 3
              }}
            >
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
              >
                <Card>
                  <Container>
                    <SurveyComp />
                  </Container>
                </Card>
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Account;
