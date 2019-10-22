import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Autocomplete from "react-autocomplete";
import PlacesAutocomplete from "react-places-autocomplete";
import getAutoCompleteCity from "../Redux/Actions/AutoCompleteAction";
import TabsOptions from "./tabsOptions";

export default function SearchForm() {
  const [city, setCity] = useState("");
  const [cityKey, setCityKey] = useState("");
  const [AutoCompleteCities, setAutoCompleteCities] = useState([]);

  const autoSelector = useSelector(state => state);
  const dispatch = useDispatch();
  const getAutoInfo = city => dispatch(getAutoCompleteCity(city));

  const retrieveDataAsynchronously = searchText => {
    if (searchText == "") {
      console.log("no city selected");
    } else {
      getAutoInfo(searchText);

      setCityKey(autoSelector.autoCompleteInfo.autoCompleteInfo[0].Key);
      console.log(cityKey);
    }
  };

  const onChange = e => {
    setCity(e.target.value);
    retrieveDataAsynchronously(e.target.value);
  };

  const onSelect = val => {
    setCity(val);
  };

  const getItemValue = item => {
    return `${item.value} - ${item.label}`;
  };

  const renderItem = (item, isHighlighted) => {
    return (
      <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
        {item.label}
      </div>
    );
  };

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
            <input
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center"
              }}
              items={AutoCompleteCities}
              placeholder="Enter city name"
              onChange={onChange}
              onSelect={onSelect}
            />

            <ul></ul>

            <div
              style={{
                width: "100%",

                alignItems: "center",
                textAlign: "center"
              }}
            >
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </nav>
      </div>

      <div>
        <TabsOptions cityKey />
      </div>
    </div>
  );
}
