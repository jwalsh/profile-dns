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
  constructor(props) {
    super(props);

    this.showPrivate = this.showPrivate.bind(this);
    this.hidePrivate = this.hidePrivate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.acceptTerms = this.acceptTerms.bind(this);

    this.state = {
      name: 'Jason Walsh',
      blockstack: 'jwalsh.id',
      public: '033927f487c1c648b7bbcdcf5f02b3c25128e3727ec66cf50954753c4f73c0a877',
      private: '0123456789abcdef0123456789abcdef0123456789abcdefff0123456789abcdef'.split('').map((v,i,a) => { return i>80 ? null : a[Math.floor(Math.random()*16)] }).join(''),
      showPrivate: true,
      acceptedTerms: true,
    }
  }

  hidePrivate(e) {
    console.log(e)
    this.setState({showPrivate: false})
  }

  showPrivate(e) {
    console.log(e)
    this.setState({showPrivate: true})
  }

  acceptTerms(e) {
    console.log(e)
    this.setState({acceptedTerms: true})
  }

  acceptTerms(e) {
    console.log(e)
    this.setState({acceptedTerms: false})

    fetch
  }

  handleClick() {
    console.log('click')
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    if (!this.state.acceptedTerms) {
      return (
          <div style={{minHeight: '360px', padding: '100px'}}><p>If you want to use DCU Blockchain Identity please log in with your web identity and authorize this application.</p> <button onClick={this.acceptTerms}>Accept</button></div>
      )
    }

    if (this.state.testDocument) {
      return (
        <b>Document</b>
          // <Document link='asdf' title='asdf' signed={false} rejected={false} content='asdfasdf'/>
      )
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
        <div style={{width: '400px', border: '1px solid #ddd', margin: '20px', padding: '20px', float: 'right'}}>
        <h1>Identity</h1>
        <p style={{backgroundColor: '#ffa', border: '1px solid #ff4'}}>Hint: See the Blockstack help documentation to obtain your id, public, and private keys.</p>
        <h2>Name</h2>
        <h3>{this.state.name}</h3>
        <h2>Blockstack</h2>
        <input type='text' value={this.state.blockstack} onChange={this.handleBlockstackUpdate}/>
        <h2>Public Key</h2>
        <input type='text' width='100' value={this.state.public} />
        <h2>Private Key</h2>
        {this.state.showPrivate ? <button onClick={this.hidePrivate}>hide</button> : <button onClick={this.showPrivate}>show</button>}
        <tt>{this.state.showPrivate ? this.state.private : '**********************************' }</tt>
        </div>

        <h1>Attestations of Fact for Jason Walsh</h1>

        <dl>
        <dt>deposits:</dt>
        <dd>20170401:1233</dd>
        <dt>income</dt>
        <dd>2016:1231233</dd>
        <dt>employment</dt>
        <dd>1/2016-12/2016:mit</dd>
        <dt>address</dt>
        <dd>20170401:100 Main St., Cambridge, 02139</dd>
        </dl>

        <h1>Bundles for Jason Walsh</h1>

        <ul>
        <li>DCU: Final Signing: Loan 2016-12-30</li>
        </ul>


        <h1>Documents for Jason Walsh</h1>
        <p>These are the legal documents needed for your mortgage. Please execute your signature where indicated below.</p>

        {this.props.documents.filter(item => !item.signed).map(item => (
            <div key={item.link} className={s.newsItem}>
            <u>{item.lender}</u> <b className={s.newsTitle}><a href={item.link}>{item.title}</a> </b>
            {item.notice &&
             <div style={{backgroundColor: '#aff', border: '1px solid #4ff'}}>{item.notice}</div>
            }
              <blockquote>
              {item.content}
          </blockquote>
            <p></p>
            <p style={{textAlign: 'right'}}>Jason Walsh - &nbsp;
                        <button>Sign</button>
            <button>Reject</button>
            </p>
            </div>
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
        <button onClick={this.acceptTerms}>Reject Terms and Conditions</button>
      </div>
    );
  }
}

Home.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    signed: PropTypes.bool.isRequired,
    rejected: PropTypes.bool.isRequired,
    content: PropTypes.string,
  })).isRequired,
};

export default withStyles(s)(Home);
