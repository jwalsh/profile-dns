/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Document from '../../components/Document/index';

class Home extends React.Component {
  static propTypes = {
    documents: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      signed: PropTypes.bool.isRequired,
      rejected: PropTypes.bool.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  constructor(props) {
    super(props);

    this.showPrivate = this.showPrivate.bind(this);
    this.hidePrivate = this.hidePrivate.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      identity: {
        name: 'Jason Walsh',
        public: '033927f487c1c648b7bbcdcf5f02b3c25128e3727ec66cf50954753c4f73c0a877',
        private: '0123456789abcdef0123456789abcdef0123456789abcdefff0123456789abcdef'.split('').map((v,i,a) => { return i>80 ? null : a[Math.floor(Math.random()*16)] }).join(''),
        showPrivate: true,
      }
    }
  }

  hidePrivate(e) {
    console.log(e)
    this.setState({identity: {showPrivate: false}})
  }

  showPrivate(e) {
    console.log(e)
    this.setState({identity: {showPrivate: true}})
  }

  handleClick() {
    console.log('click')
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        <h1>Identity</h1>
        <h2>Name</h2>
        <h3>{this.state.identity.name}</h3>
        <h2>Public Key</h2>
        <tt>{this.state.identity.public}</tt>
        <h2>Private Key</h2>
        <tt>{this.state.identity.showPrivate ? this.state.identity.private : '**********************************' }</tt>
        {this.state.identity.showPrivate ? <button onClick={this.hidePrivate}>hide</button> : <button onClick={this.showPrivate}>show</button>}
          <h1>Documents</h1>
          <h2>In Progress</h2>
        {this.props.documents.filter(item => !item.signed).map(item => (
            <li key={item.link} className={s.newsItem}>
              <b className={s.newsTitle}><a href={item.link}>{item.title}</a> </b>
            <button>Sign</button>
            <button>Reject</button>
              <blockquote>
              {item.content}
              </blockquote>
            </li>

        ))}
        <h2>Signed</h2>
        {this.props.documents.filter(item => item.signed).map(item => (

            <li key={item.link} className={s.newsItem}>
              <b className={s.newsTitle}><a href={item.link}>{item.title}</a> </b>
            <button>Sign</button>
            <button>Reject</button>
              <blockquote>
              {item.content}
              </blockquote>
            </li>

          ))}
        <h2>Rejected</h2>
        {this.props.documents.filter(item => item.rejected).map(item => (

            <li key={item.link} className={s.newsItem}>
              <b className={s.newsTitle}><a href={item.link}>{item.title}</a> </b>
            <button>Sign</button>
            <button>Reject</button>
              <blockquote>
              {item.content}
              </blockquote>
            </li>

          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
