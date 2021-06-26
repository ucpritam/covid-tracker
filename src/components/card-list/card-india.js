import React from "react";
import "./card-list.css";

export const CardIndia = (props) => {
  return (
    <div className="card-list-india">
      {props.covid.slice(0, 1).map((covid) => (
        <div key={covid.statecode} className="card-container-india">
          <h3>
            {"Covid-19 Cases"}
            <img
              alt="India"
              src={
                "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/188px-Flag_of_India.svg.png"
              }
              className="flag"
            />
          </h3>
          <div className="card-body">
            <div>
              {"Confirmed  "}
              <div className="total-num">
                {(covid.confirmed*1).toLocaleString('en-IN')}
                <span className="newcase">
                  {" (+" + (props.india.dailyconfirmed*1).toLocaleString('en-IN') + ")"}
                </span>
              </div>
            </div>
            <div>
              {"Recovered  "}
              <div className="total-num">
                {(covid.recovered*1).toLocaleString('en-IN')}
                <span className="newcase">
                  {" (+" + (props.india.dailyrecovered*1).toLocaleString('en-IN') + ")"}
                </span>
              </div>
            </div>
            <div>
              {"Deaths  "}
              <div className="total-num">
                {(covid.deaths*1).toLocaleString('en-IN')}
                <span className="newcase">
                  {" (+" + (props.india.dailydeceased*1).toLocaleString('en-IN') + ")"}
                </span>
              </div>
            </div>
            <div>
              {"Active  "}
              <div className="total-num">{(covid.active*1).toLocaleString('en-IN')}</div>
            </div>
          </div>
        </div>
      ))}
      <div key={props.vaccine.aefi} className="card-container-india">
        <h3>
          {"Vaccination"}
          <img
            alt="India"
            src={
              "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/188px-Flag_of_India.svg.png"
            }
            className="flag"
          />
        </h3>
        <div className="card-body">
          <div>
            {"At least 1 dose  "}
            <div className="total-num">
              {(props.vaccine.totalindividualsvaccinated*1).toLocaleString('en-IN')}
              <span className="newcase">
                {" (" +
                  (
                    props.vaccine.totalindividualsvaccinated / 13955700
                  ).toPrecision(3) +
                  "%)"}
              </span>
            </div>
          </div>
          <div>
            {"Fully vaccinated  "}
            <div className="total-num">
              {(props.vaccine.seconddoseadministered*1).toLocaleString('en-IN')}
              <span className="newcase">
                {" (" +
                  (props.vaccine.seconddoseadministered / 13955700).toPrecision(
                    3
                  ) +
                  "%)"}
              </span>
            </div>
          </div>
        </div>
        <div>
          {"Samples tested  "}
          <div className="total-num">
            {(props.vaccine.totalsamplestested*1).toLocaleString('en-IN')}
            <span className="newcase">
              {" (+" + (props.vaccine.samplereportedtoday*1).toLocaleString('en-IN') + ")"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
