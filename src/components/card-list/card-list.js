import React from 'react';
import './card-list.css';

export const CardList = (props) => {
    return (   
        <div className='card-list'>
            {props.covid.map(covid => (
                <div key={covid.statecode} className='card-container'>
                    <h3>{covid.state}</h3>
                    <div>{'Confirmed:  '}{covid.confirmed}<span className="new-r-case">{' (+' + covid.deltaconfirmed + ')'}</span></div>
                    <div>{'Recovered:  '}{covid.recovered}<span className="new-g-case">{' (+' + covid.deltarecovered + ')'}</span></div>
                    <div>{'Deaths:  '}{covid.deaths}<span className="new-r-case">{' (+' + covid.deltadeaths + ')'}</span></div>
                    <div>{'Active:  '}{covid.active}</div>
                </div>
            ))}
        </div>
    )
}