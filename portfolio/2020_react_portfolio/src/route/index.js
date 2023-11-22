import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pageList from './pageList'
//
class Pages extends React.Component {
  render() {
    return (
      <Switch>
        {pageList.map((item, index) => { return (<Route path={item.path} key={index}>{item.component}</Route>);})}
      </Switch>
    );
  }
}

export default Pages;
