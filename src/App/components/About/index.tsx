// react
// material components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

// material utils
import { makeStyles, Theme } from '@material-ui/core';

// styles
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(10, 0),
    textAlign: 'center',
    margin: '0 auto',
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
  },
  title: {
    color: theme.palette.primary.main,
  },
  button: {
    marginTop: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(8),
  },
}));

function About() {
  const classes = useStyles();

  return (
    <section id="about">
      <Container>
        <Container maxWidth="md">
          <div className={classes.container}>
            <Typography variant="h4" className={classes.title}>
              About US
            </Typography>
            <Typography>
              GlobalEdVentures provides comprehensive job assistance services guiding international teachers through the U.S. exchange visitor program. 
              Our experienced team offers personalized coaching on resumes, interviews, documentation, and visa requirements. </Typography>
            <Typography>
            We streamline the entire employment and visa application process, ensuring no detail is overlooked. 
            With a commitment to our clients' success, GlobalEdVentures makes American teaching dreams a reality through seamless end-to-end support.

            </Typography>
            <Button
              href="https://drive.google.com/file/d/1ydjdQwhLnGBIL77wLUBSWemLqN-KC7D2/view?usp=sharing"
              target="blank"
              variant="contained"
              size="large"
              color="secondary"
              className={classes.button}
            >
              Access Information Package
            </Button>
          </div>
        </Container>
        <Divider />
      </Container>
    </section>
  );
}

export default About;
