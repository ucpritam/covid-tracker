/* eslint-disable array-callback-return */
import React from 'react';
import './card-list.css';

export const CardList = (props) => {
    return (   
        <div className='card-list'>
            {props.covid.map(covid => {
                if(covid.confirmed !== '0') {
                    return (
                    <div key={covid.statecode} className='card-container'>
                    
                    <div>
                    {covid.deltaconfirmed !== '0' ? 
                    <div>
                        <h3>{covid.state}</h3>
                        <div>{'Confirmed:  '}{covid.confirmed}<span className="new-r-case">{' (+' + covid.deltaconfirmed + ')'}</span></div>
                        <div>{'Recovered:  '}{covid.recovered}<span className="new-g-case">{' (+' + covid.deltarecovered + ')'}</span></div>
                        <div>{'Death:  '}{covid.deaths}<span className="new-r-case">{' (+' + covid.deltadeaths + ')'}</span></div>
                        <div>{'Active:  '}{covid.active}</div>
                    </div> 
                    : 
                    <div>
                        <h3>{covid.state}</h3>
                        <div>{'Confirmed:  '}{covid.confirmed}</div>
                        <div>{'Recovered:  '}{covid.recovered}</div>
                        <div>{'Deaths:  '}{covid.deaths}</div>
                        <div>{'Active:  '}{covid.active}</div>
                    </div>
                    } 
                        
                    </div>
                    
                    
                    
                    </div>
                )
                }              
            }           
            )}
        </div>
    )
}

