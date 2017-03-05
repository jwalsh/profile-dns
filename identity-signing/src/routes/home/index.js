/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default {

  path: '/',

  async action() {
    // const resp = await fetch('/graphql', {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     query: '{news{title,link,content}}',
    //   }),
    //   credentials: 'include',
    // });
    const data = {
      documents: [
        {
          link: '/verificationrequest',
          type: 'AUTHORIZATION',
          title: 'Blanket Authorization Form 04-01-2017',
          lender: 'DCU',
          date: '04-01-2017',
          signed: false,
          rejected: false,
          content: 'The lender obtains the borrower’s signature on the following Blanket Authorization form to obtain the  documentation needed to evaluate the borrower’s creditworthiness.  This borrower-signed document gives the lender blanket authorization to request the information needed to document  the borrower’s creditworthiness. I hereby authorize ___________________________ (the “lender”) to verify my past and  present employment earnings records, bank accounts, stock holdings, and any other asset balances that are needed to  process my mortgage loan application. I further authorize ______________________ (the “lender”) to order a consumer  credit report and verify other credit information, including past and present mortgage and landlord references. It is  understood that a photocopy of this form also will serve as authorization. The information the lender obtains is only to be  used in the processing of my application for a mortgage loan.'
        },

        {
          link: '/promissorynote',
          type: 'CLOSINGPACKAGE',
          title: 'Closing Package 01-01-2017 - Promissory Note', //  $1000 USD 01-01-2017',
          lender: 'DCU',
          notice: 'To complete the mortgage closing please sign the promissory note and affirm all other documents are true and correct.',
          signed: ['Promissory Note',
                   'Application',
                   'Verification of Insurance',
                   'Closing Disclosure'
                  ],
          dependency: ['Promissory Note',
                   'Application',
                   'Verification of Insurance',
                   'Closing Disclosure'
                  ],
          date: '01-01-2017',
          amount: '$2000 USD',
          signed: false,
          rejected: false,
          content: 'Promissory Note  __________________   ___________________________      _______________    City  			                 State  				   Date                                (Borrower)          agrees and promises to pay to                        (Lender)       the sum of  ($                     )   Dollars for value received, with interest at the annual rate of                % payable after          (Date)           . If this note is in default and is placed for collection,       (Borrower)            shall pay all reasonable costs of collection and attorneys fees.   ____________________________ By_________________________________ (Borrower)                          (Date) ____________________________  By_________________________________ (Lender)                              (Date) _________________________________ (Witness)                             (Date) '
},

        {
          link: '/contract/2',
          type: 'CLOSINGPACKAGE',
          lender: 'DCU',
          title: 'Closing Package 01-01-2017 - Confirmation of Deposits, Employment, Credit History',
          date: '01-01-2017',
          deadline: '04-01-2017',
          amount: '$2000 USD',
          signed: false,
          rejected: false,
          content: 'The factual attestation provided by Wells Fargo Bank is accurate and complete. Employment verification is correct. Credit information is correct.  '
        },

        {
          link: '/contract/0',
          type: 'CLOSINGPACKAGE',
          lender: 'DCU',
          title: 'Closing Package 01-01-2016 - Compliance Agreement',
          signed: false,
          rejected: true,
          content: 'The undersigned borrower(s) for and in consideration of the above referenced Lender this date agrees, if requested by Lender or Closing Agent for Lender, to fully cooperate and adjust for clerical errors, any or all loan closing documentation if deemed necessary or desirable in the reasonable discretion of Lender to enable Lender to sell, convey, seek guaranty or market said loan to any entity, including but not limited to an investor, Federal National Mortgage Association, Federal Home Loan Mortgage Corporation, Federal Housing Authority or the Department of Veterans Affairs. The undersigned borrower(s) do hereby so agree and covenant in order to assure that the loan documentation executed this date will conform and be acceptable in the market place in the instance of transfer, sale or conveyance by Lender or its interest in and to said loan documentation.'
        },

        {
          link: '/contract/1',
          title: 'Initial Disclosure 03-01-2017',
          signed: true,
          rejected: false,
          content: 'Etiam bibendum laoreet pretium. Phasellus ac augue quis mauris ultrices pellentesque at id ante. Morbi rutrum nisl a mi ultricies, et porta dui imperdiet. Integer elementum, nibh at tincidunt consectetur, turpis tellus lobortis arcu, vel molestie orci lectus non tortor. In purus neque, tempor sed arcu vitae, pretium rutrum metus. Integer lacus ex, posuere id sem eu, tincidunt elementum sapien. Nunc quis rutrum nulla. Nullam sit amet est vel turpis aliquam accumsan. Donec molestie sapien vehicula cursus sollicitudin. Praesent lorem magna, sagittis id diam a, vestibulum semper mauris.'
        },

        {
          link: '/contract/4',
          title: 'Contract 4',
          signed: true,
          rejected: false,
          content: 'Fusce pulvinar, enim vel mollis placerat, nibh mauris sollicitudin nunc, ut finibus odio augue quis lectus. Ut leo ex, vestibulum a nisi vitae, vehicula volutpat tellus. Pellentesque commodo leo ut massa consequat, vel tempor enim congue. Duis venenatis venenatis enim at tincidunt. Sed dignissim faucibus ultricies. Sed vestibulum ipsum ut volutpat aliquet. Quisque eu placerat nibh. Nullam diam neque, commodo eu congue molestie, fringilla a diam. Etiam iaculis egestas lobortis. Donec sed eros vitae justo vulputate malesuada ac sed neque.'
        },

        {
          link: '/disclosure/1',
          title: 'Disclosure 1',
          signed: true,
          rejected: true,
          content: 'Fusce pulvinar, enim vel mollis placerat, nibh mauris sollicitudin nunc, ut finibus odio augue quis lectus. Ut leo ex, vestibulum a nisi vitae, vehicula volutpat tellus. Pellentesque commodo leo ut massa consequat, vel tempor enim congue. Duis venenatis venenatis enim at tincidunt. Sed dignissim faucibus ultricies. Sed vestibulum ipsum ut volutpat aliquet. Quisque eu placerat nibh. Nullam diam neque, commodo eu congue molestie, fringilla a diam. Etiam iaculis egestas lobortis. Donec sed eros vitae justo vulputate malesuada ac sed neque.'
        }



      ]
    }
    if (!data || !data.documents) throw new Error('Failed to load documents.');
    return {
      title: 'React Starter Kit',
      component: <Layout><Home documents={data.documents} /></Layout>,
    };
  },

};
