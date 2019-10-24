import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CardWeather from "./cardWeather";
import { connect } from "react-redux";
import { WeatherCurrentAction, WeatherForcastAction } from "../Redux/Actions";

const mapStateToProps = state => {
  return {
    weatherCurrentInfo: state.current.weatherCurrentInfo,
    errorMassageCurrentInfo: state.current.errorMassage,
    weatherForcastInfo: state.forcast.weatherForcastInfo,
    errorMassageForcast: state.forcast.errorMassage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCurrentInfo: cityKey => dispatch(WeatherCurrentAction(cityKey)),
    getForcastInfo: cityKey => dispatch(WeatherForcastAction(cityKey))
  };
};

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
class TabsOptions extends Component {
  constructor(props) {
    super(props);
    console.log("city key in tabs ", this.props.cityKey);
    this.state = {
      cityKey: props.cityKey,
      value: 0
    };
  }

  async componentDidMount() {
    await this.props.getCurrentInfo(this.props.cityKey);
    await this.props.getForcastInfo(this.props.cityKey);
  }

  handleChangeIndex = index => {
    this.setState({
      value: index
    });
  };

  handleChange = async (event, newValue) => {
    if (newValue === 0) {
      this.setState({
        value: newValue
      });
    } else if (newValue === 1) {
      this.setState({
        value: newValue
      });
    }
  };
  render() {
    return (
      <Paper className={useStyles.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          centered
        >
          <Tab label="Current weather" {...a11yProps(0)} />
          <Tab label="Forcast weather" {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={this.state.value} index={0}>
          <div>
            <h1>Current weather for today</h1>

            {this.props.weatherCurrentInfo.lenght > 0 &&
              this.props.weatherCurrentInfo.map((data, index) => (
                <CardWeather
                  key={index}
                  content={data.WeatherText}
                  title={"Temperature : " + data.Temperature.Value}
                  date={data.LocalObservationDateTime}
                />
              ))}
          </div>
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <div>
            <h1>Forcast weather for the next 5 days</h1>
            <div>
              {this.props.weatherForcastInfo.lenght > 0 &&
                this.props.weatherForcastInfo.map((data, index) => (
                  <CardWeather
                    key={index}
                    content={
                      "Day: " +
                      data.Day.IconPhrase +
                      " Night: " +
                      data.Night.IconPhrase
                    }
                    title={"Temperature :" + data.Temperature.value}
                    date={data.Date}
                  />
                ))}
            </div>
          </div>
        </TabPanel>
      </Paper>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsOptions);
