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
      length: 1,
      india: [],
      vaccine: [],
      input: ''
    }
  }

  componentDidMount() {
    fetch('https://api.covid19india.org/data.json')
    .then(response => response.json())
    .then(users => {
      this.setState({length: users.cases_time_series.length})
      this.setState({india: users.cases_time_series[users.cases_time_series.length-1]})
      this.setState({covid: users.statewise.slice(1,users.statewise.length-1)})
      this.setState({vaccine: users.tested[users.tested.length-2]})
      this.setState({covidindia: users.statewise})
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
        <Search 
          placeholder = 'Search here'
          handleChange = {this.handleChange}
        />
        <CardIndia 
          covid={this.state.covidindia}
          india={this.state.india}
          vaccine={this.state.vaccine}
          length={this.state.length}
        />
        <CardList 
          covid={filteredInput}
        />
     </div>
    )
  } 
}

export default App;
