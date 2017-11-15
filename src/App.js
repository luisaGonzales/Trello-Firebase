import React, { Component } from 'react';
import './css/main.css';
import {Column} from './Column';
import {connect} from 'redux-zero/react';
import {Grid} from 'react-bootstrap';

const App = ({toDo, doing, done}) => {
  return (
    <Grid className="allColumns">
      <Column title="To Do"/>
      <Column title="Doing"/>
      <Column title="Done"/>
    </Grid>

  );
}

const mapToProps = ({toDo, doing, done}) => ({toDo, doing, done})
export default connect(mapToProps)(App);


