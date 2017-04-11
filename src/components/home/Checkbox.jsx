import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    if (this.props.data) {
      if (this.props.data.selectedCheckboxes.has(this.props.item)) {
        this.state = {
          isChecked: true
        };  
      }
    }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange() {
    const { handleCheckboxChange, item } = this.props;
    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));
    handleCheckboxChange(item);
  }

  render() {
    const { item } = this.props;
    const { isChecked } = this.state;

    return (
      <div className='checkbox'>
        <label>
          <input
            type='checkbox'
            aria-label='...'
            value={item.label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {item.label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  item: PropTypes.object.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired
};

export default Checkbox;
