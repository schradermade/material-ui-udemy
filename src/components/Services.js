import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({

}))

export default function Services() {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Grid container
      direction="column">
        <Grid item>
          <Grid container 
            direction="row" 
            className={classes.serviceContainer}
            justify={matchesSM ? "center" : undefined}
            >
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
              <Typography variant="h4">
                Custom Software Development
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{" "}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button 
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/customsoftware"
                onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow width={10} height={10}
                fill={theme.palette.common.blue}/>
              </Button>
            </Grid>
            <Grid item>
              <img 
                className={classes.icon} 
                alt="custom software icon" 
                src={customSoftwareIcon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
}