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
import Grid from "@material-ui/core/Grid";

const mapStateToProps = state => {
  console.log("global state of weather", state);
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
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            {JSON.stringify(this.props.weatherCurrentInfo).length > 0 && (
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <div>
                  {this.props.weatherCurrentInfo.map((data, index) => {
                    return (
                      <div>
                        <CardWeather
                          key={index}
                          i={index}
                          Temperature={data.Temperature.Metric.Value}
                          WeatherText={data.WeatherText}
                          Link={data.Link}
                          Date={data.LocalObservationDateTime}
                          Icon={data.WeatherIcon}
                        />
                      </div>
                    );
                  })}
                </div>
              </Grid>
            )}
          </div>
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <div>
              {JSON.stringify(this.props.weatherForcastInfo).length > 0 && (
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}
                >
                  {this.props.weatherForcastInfo.map((data, index) => {
                    return (
                      <CardWeather
                        key={index}
                        i={index}
                        Temperature={
                          ("Minimum: ",
                          data.Temperature.Minimum.Value,
                          ", Maximum: ",
                          data.Temperature.Maximum.Value)
                        }
                        WeatherText={
                          ("Day: ",
                          data.Day.IconPhrase,
                          " Night: ",
                          data.Night.IconPhrase)
                        }
                        Link={data.Link}
                        Date={data.Date}
                        Icon={data.Day.Icon}
                      />
                    );
                  })}
                </Grid>
              )}
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
