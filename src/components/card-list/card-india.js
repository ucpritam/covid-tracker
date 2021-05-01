import React from 'react';
import './card-list.css';

export const CardIndia = (props) => {
    return (   
            <div className='card-list-india'>
            {props.covid.slice(0,1).map(covid => (
                <div key={covid.statecode} className='card-container-india'>
                    <h3>
                        {'Covid-19 Cases'}
                        <img alt='India' src={'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/188px-Flag_of_India.svg.png'} className='flag'/>
                    </h3>
                    <div>{'Confirmed:  '}{covid.confirmed}<span className="newcase">{' (+' + props.india.dailyconfirmed + ')'}</span></div>
                    <div>{'Recovered:  '}{covid.recovered}<span className="newcase">{' (+' + props.india.dailyrecovered + ')'}</span></div>
                    <div>{'Deaths:  '}{covid.deaths}<span className="newcase">{' (+' + props.india.dailydeceased + ')'}</span></div>
                    <div>{'Active:  '}{covid.active}</div>
                </div>
            ))}
            <div key={props.vaccine.aefi} className='card-container-india'>
                    <h3>
                        {'Vaccination'}
                        <img alt='India' src={'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/188px-Flag_of_India.svg.png'} className='flag'/>
                    </h3>
                    <div>{'At least 1 dose:  '}{props.vaccine.totalindividualsvaccinated}<span className="newcase">{' (' + (props.vaccine.totalindividualsvaccinated/13955700).toPrecision(3) + '%)'}</span></div>
                    <div>{'Fully vaccinated:  '}{props.vaccine.seconddoseadministered}<span className="newcase">{' (' + (props.vaccine.seconddoseadministered/13955700).toPrecision(3) + '%)'}</span></div>
                    <div>{'Total samples tested:  '}{props.vaccine.totalsamplestested}<span className="newcase">{' (+' + props.vaccine.samplereportedtoday + ')'}</span></div>
                </div>
        </div>
    )
}