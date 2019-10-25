import React, { Component } from "react";
import { connect } from "react-redux";
import { AutoCompleteAction } from "../Redux/Actions";
import TabsOptions from "./tabsOptions";

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
      value: "",
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
    this.setState({ value: e.target.value });
    this.retrieveDataAsynchronously(e.target.value);
  };

  onChangeSelected = event => {
    const selectedIndex = event.target.options.selectedIndex;
    const cityKeyNumber = event.target.options[selectedIndex].getAttribute(
      "data-key"
    );
    console.log(cityKeyNumber, "City Key");
    this.setState({
      cityKey: cityKeyNumber,
      value: event.target.value
    });
  };
  onSelectCity = event => {
    const selectedIndex = event.target.options.selectedIndex;
    const cityKeyNumber = event.target.options[selectedIndex].getAttribute(
      "data-key"
    );
    this.setState({
      cityKey: cityKeyNumber,
      value: event.target.value
    });
  };

  onSubmit = () => {
    this.setState({
      value: "",
      city: "",
      cityKey: ""
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
              borderRadius: "15px"
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
                <input
                  value={this.state.value}
                  onChange={this.onChange}
                  type="text"
                />

                {tempArray.length > 0 && (
                  <select
                    style={{ display: "block" }}
                    onChange={this.onChangeSelected}
                    onSelect={this.onSelectCity}
                    value={this.state.value}
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

                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  onSubmit={this.onSubmit}
                >
                  Clear
                </button>
              </div>
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
