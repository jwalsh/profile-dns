import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';

export default class Document extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
            <li key={this.props.link} className={s.newsThis.Props}>
              <b className={s.newsTitle}><a href={this.props.link}>{this.props.title}</a> </b>
            <button>Sign</button>
            <button>Reject</button>
              <blockquote>
              {this.props.content}
              </blockquote>
            </li>
    );
  }
}
