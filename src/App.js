import React, { Component } from 'react';
import { Title } from './components/title/title';
import { Search } from './components/search/search';
import { CardIndia } from './components/card-list/card-india';
import { CardList } from './components/card-list/card-list';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      covid: [],
      covidindia: [],
      length: 0,
      india: [],
      vaccine: [],
      input: ''
    }
  }

  componentDidMount() {
    fetch('https://api.covid19india.org/data.json')
    .then(response => response.json())
    .then(users => {
      this.setState({length: users.cases_time_series.length}) //length
      this.setState({india: users.cases_time_series[users.cases_time_series.length-1]}) //india data
      this.setState({covid: users.statewise.slice(1,users.statewise.length).sort((a, b) => b.confirmed - a.confirmed)}) //statewise data
      this.setState({vaccine: users.tested[users.tested.length-1]}) //vaccine data
      this.setState({covidindia: users.statewise}) //state data
      this.setState({dailycases: users.cases_time_series[this.state.length-1].dailyconfirmed})
    }
    );
  }

  handleChange = (e) => {
    this.setState({input: e.target.value});
  }


  render () {
    const covid = this.state.covid;
    const input = this.state.input;
    const filteredInput = covid.filter(covid => covid.state.toLowerCase().includes(input.toLowerCase())); //state=state name

    return (
     <div className='App'>
        <Title />
        <CardIndia 
          covid={this.state.covidindia}
          india={this.state.india}
          vaccine={this.state.vaccine}
          length={this.state.length}
        />
        <div className='list'>
        <Search 
          placeholder = 'Search by state'
          handleChange = {this.handleChange}
        />
        <CardList 
          covid={filteredInput}
        />
        </div>   
     </div>
    )
  } 
}

export default App;
