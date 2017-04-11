import React, { Component } from 'react';

import Checkbox from './Checkbox.jsx';

const items = [
  {
    label: 'События',
    content: 'Все события тут'
  },
  {
    label: 'Аналитика',
    content: 'Аналитика тут'
  },
  {
    label: 'Итоги',
    content: 'Итоги тут'
  },
  {
    label: 'Новости',
    content: 'Новости всего мира тут'
  },
  {
    label: 'Контакты',
    content: 'Личные данные'
  }
];

class HomePage extends Component {
  
  constructor(props) {
    super(props);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount() {
    this.selectedCheckboxes = this.props.data ? this.props.data.selectedCheckboxes : new Set();
  }

  toggleCheckbox(item) {
    if (this.selectedCheckboxes.has(item)) {
      this.selectedCheckboxes.delete(item);
    } else {
      this.selectedCheckboxes.add(item);
    }
  }

  handleFormSubmit(e) {
    this.props.setData({ selectedCheckboxes: this.selectedCheckboxes });
  }

  createCheckboxes() {
    return items.map(item => 
      <Checkbox 
        key = {item.label}
        item = {item}
        handleCheckboxChange={this.toggleCheckbox}
        data = {this.props.data}
      />);
  }

  render() {
    return (
      <div className='jumbotron'>
            <form onChange={this.handleFormSubmit}>
              {this.createCheckboxes()}
            </form>
      </div>
    );
  }
}

export default HomePage;
