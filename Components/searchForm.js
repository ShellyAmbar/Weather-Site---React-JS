import React, { Component } from "react";
import { connect } from "react-redux";
import { AutoCompleteAction } from "../Redux/Actions";
import TabsOptions from "./tabsOptions";
import Alert from "react-bootstrap/Alert";
import { flexbox } from "@material-ui/system";

const mapStateToProps = state => {
  console.log("global state", state);
  return {
    autoCompleteInfo: state.auto.autoCompleteInfo,
    errorMassage: state.auto.errorMassage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAutoInfo: searchText => dispatch(AutoCompleteAction(searchText))
  };
};

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      cityKey: "623"
    };
  }

  retrieveDataAsynchronously = searchText => {
    // console.log(searchText);
    if (searchText === "") {
      console.log("no city has been selected");
    } else {
      console.log(searchText + " text");
      this.props.getAutoInfo(searchText); // this.props.getAutoInfo(searchText.toLowerCase());
    }
  };

  onChange = e => {
    console.log(e.target.value + " value");
    this.setState({ city: e.target.value });
    this.retrieveDataAsynchronously(e.target.value);
  };

  onChangeSelect = event => {
    const selectedIndex = event.target.options.selectedIndex;
    const cityKeyNumber = event.target.options[selectedIndex].getAttribute(
      "data-key"
    );
    console.log(cityKeyNumber, "City Key");
    this.setState({
      cityKey: cityKeyNumber,
      city: event.target.value
    });
  };

  render() {
    const tempArray = [];
    console.log(this.props.autoCompleteInfo);
    if (this.props.autoCompleteInfo != null) {
      const AutoCompleteCitiesObject = this.props.autoCompleteInfo;

      if (AutoCompleteCitiesObject.length > 0) {
        AutoCompleteCitiesObject.map((obj, index) => {
          tempArray.push({ label: obj.LocalizedName, value: obj.Key });
        });
      }
    }

    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "10%",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            marginTop: "30px"
          }}
        >
          <nav
            className="SearchForm"
            style={{
              background: "linear-gradient(135deg, 	#00FFFF 30%, 	#00BFFF 90%)",
              borderRadius: "15px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              flexbox: 1
            }}
          >
            <form
              className="form-inline"
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center"
              }}
            >
              <div>
                <Alert.Link style={{ height: 10 }}>
                  Showing data for city :{this.state.city}{" "}
                </Alert.Link>
                <input
                  value={this.state.city}
                  onChange={this.onChange}
                  type="text"
                />

                {tempArray.length > 0 && (
                  <select
                    style={{ display: "block" }}
                    onChange={this.onChangeSelect}
                    value={this.state.city}
                  >
                    {tempArray.map((item, index) => (
                      <option
                        key={index}
                        value={item.label}
                        data-key={item.value}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <div
                style={{
                  width: "100%",
                  height: 50,
                  alignItems: "center",
                  textAlign: "center"
                }}
              ></div>
            </form>
          </nav>
        </div>
        <div>
          <TabsOptions cityKey={this.state.cityKey} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
