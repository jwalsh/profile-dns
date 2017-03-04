import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';

class Document extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
  }

  render() {
    return (
        <article key={this.props.link} className={s.newsThis.Props}>
        <h4 className={s.newsTitle}><a href={this.props.link}>{this.props.title}</a> {!this.props.signed ? '*' : ''}</h4>
        <blockquote>
        {this.props.content}
        </blockquote>
        <button>Sign</button>
        <button>Reject</button>
        </article>
    );
  }
}

export default withStyles(s)(Document);
