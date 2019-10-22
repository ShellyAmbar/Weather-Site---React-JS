import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import getCurrentWeather from "../Redux/Actions/weatherCurrentAction";
import getWeeklytWeather from "../Redux/Actions/WeatherForcastAction";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={2}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
export default function TabsOptions(cityKey) {
  const weatherSelector = useSelector(state => state);
  const dispatch = useDispatch();
  const getCurrentInfo = cityKey => dispatch(getCurrentWeather(cityKey));
  const getForcastInfo = cityKey => dispatch(getWeeklytWeather(cityKey));

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [weatherList, setWeatherList] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      getCurrentInfo(cityKey);

      setWeatherList(weatherSelector.weatherCurrentInfo);
      console.log(weatherSelector.weatherCurrentInfo);
    } else if (newValue === 1) {
      getForcastInfo(cityKey);
      setWeatherList(weatherSelector.weatherForcastInfo);
      console.log(weatherSelector.weatherForcastInfo);
    }
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        centered
      >
        <Tab label="Current weather" {...a11yProps(0)} />
        <Tab label="Forcast weather" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <div>
          <h1>Current weather for today</h1>
          <p>the weather is...</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <h1>Forcast weather for the next 5 days</h1>
          <p>the weather is...</p>
        </div>
      </TabPanel>
    </Paper>
  );
}
