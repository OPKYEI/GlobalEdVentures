// material components
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// material utils
import { makeStyles, Theme } from '@material-ui/core';

// components
import { Form } from './Form';
import { Layout } from '../../common';

// styles
const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: theme.palette.primary.main,
  },
  mapGridItem: {
    position: 'relative',
  },
  mapOverlay: {
    height: 200,
    width: '80%',
    position: 'absolute',
    top: 'calc(50% - 100px)',
    left: 'calc(50% - 40%)',
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.9,
    color: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
  },
  overlayContent: {
    display: 'flex',
    flexDirection: 'column',
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  overlayText: {
    textAlign: 'left',
    marginLeft: theme.spacing(3),
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <section id="contact">
      <Container>
        <Container maxWidth="sm">
          <Layout>
            <Typography variant="h4" className={classes.title}>
            Start Your American Teaching Adventure
            </Typography>
            <Typography>
            Let us guide you through the journey of securing a teaching position in the United States and obtaining the necessary visa. 
            Fill out the form below to get started - our team of experts will reach out to discuss your goals and provide a personalized roadmap.
            </Typography>
            <Form />
          </Layout>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
