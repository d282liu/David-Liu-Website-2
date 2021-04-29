import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  content: {
    marginLeft: '20px',
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>IT Support & Quality Assurance</Typography>
          <Typography className={classes.secondaryHeading}>Pillar to Post Inc. - <em>January 2021 - April 2021</em></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className = {classes.content}>
              <li>Designed, developed and iterated through smoke and regression test
              scripts before, during and after releases and deployments</li>
              <li>Ensured a smooth SDLC by maintaining an open and clear
              communication with developers within Azure DevOps. Logged
              detailed write ups to verify fixes, or log new bugs found in
              investigations. Used Salesforce to perform IT tasks.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>President</Typography>
          <Typography className={classes.secondaryHeading}>
            AY Jackson Student Council - <em>September 2019 - June 2020</em> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className = {classes.content}>
              <li>Led a council to run weekly events to bolster school spirit</li>
              <li>Organized semi-formal and homecoming for 1500 students</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Co-Founder</Typography>
          <Typography className={classes.secondaryHeading}>
            AY Jackson Engineers Without Borders - <em>September 2019 - June 2020</em>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className = {classes.content}>
              <li>Ochestrated weekly discussions and workshops to introduce
              students to engineering in order to adress root causes of
              global poverty and inequality in areas of need</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Barista</Typography>
          <Typography className={classes.secondaryHeading}>
            Gong Cha - <em>June 2020 - Present</em>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className = {classes.content}>
              <li>Working in a team to fulfill orders with quality while
              maintaining exemplary customer service under pressure</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

