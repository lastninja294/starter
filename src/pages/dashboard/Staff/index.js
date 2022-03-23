import React, {Component} from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

class Staff extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoad: true,
    };
  }
  componentDidMount() {
    fetch('https://axiosuchunsinovapi.herokuapp.com/staff')
      .then((res) => res.json())
      .then((data) => this.setState({data: data}));
  }
  render() {
    console.log(this.state.data);
    return (
      <div className='container-data'>
        <AppPageMetadata title='Staff' />
        <div className='row'>
          {this.state.data.map((item) => (
            <div className='column' key={item.id}>
              <span>{item.id}</span>
              <span>{item.title}</span>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Staff;
