/* eslint-disable array-callback-return */
import React from "react";
import "./card-list.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      <div className="card-container">
        <div className="box">
          <span className="p1">{"State"}</span>
          <span className="p1">{"Confirmed"}</span>
          <span className="p1">{"Recovered"}</span>
          <span className="p1">{"Deaths"}</span>
          <span className="p1">{"Active"}</span>
        </div>
      </div>

      {props.covid.map((covid) => {
        if (covid.confirmed !== "0") {
          return (
            <div key={covid.statecode} className="card-container">
              <div>
                {covid.deltaconfirmed !== "0" ? (
                  <div className="box">
                    <span className="state-name">{covid.state}</span>
                    <p>
                      {covid.confirmed}
                      <span className="new-r-case">
                        {" (+" + covid.deltaconfirmed + ")"}
                      </span>
                    </p>
                    <p>
                      {covid.recovered}
                      <span className="new-g-case">
                        {" (+" + covid.deltarecovered + ")"}
                      </span>
                    </p>
                    <p>
                      {covid.deaths}
                      <span className="new-r-case">
                        {" (+" + covid.deltadeaths + ")"}
                      </span>
                    </p>
                    <p>{covid.active}</p>
                  </div>
                ) : (
                  <div className="box">
                    <span className="state-name">{covid.state}</span>
                    <p>{covid.confirmed}</p>
                    <p>{covid.recovered}</p>
                    <p>{covid.deaths}</p>
                    <p>{covid.active}</p>
                  </div>
                )}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
