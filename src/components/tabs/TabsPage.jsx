import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsPage extends Component {
  constructor() {
    super();
  }

  render() {

    if(!this.props.data || this.props.data.selectedCheckboxes.size === 0) {
      return (
        <div className='counter-label'>
          <h1>Tabs will be here...</h1>
        </div>
      );
    }
    
    let tabs = [], tabPanels = [];
    for (const checkbox of this.props.data.selectedCheckboxes) {
      tabs.push(<Tab key={checkbox.label}>{checkbox.label}</Tab>);
      tabPanels.push(<TabPanel key={checkbox.content}><h2>{checkbox.content}</h2></TabPanel>);
    } 

    return (
      <div>
        <Tabs>
          <TabList>
            { 
              tabs
            }
          </TabList>
          {
            tabPanels
          }
        </Tabs>
      </div>
    );
  }
}

export default TabsPage;
