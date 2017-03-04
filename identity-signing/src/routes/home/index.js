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
          link: '/promissorynote',
          title: 'Promissory Note 1',
          signed: false,
          rejected: false,
          content: 'Suspendisse accumsan fermentum neque, ullamcorper consectetur odio varius eget. Nunc et interdum massa. Mauris vel diam eget nibh dapibus mollis quis id sapien. Nulla ac magna non leo pretium facilisis eu ut tellus. Proin metus tortor, consequat ac leo nec, lacinia pharetra nisl. Ut vulputate pharetra diam, at mollis nisi fermentum vitae. Nunc tincidunt tempor diam, eget tempor ligula varius sed. Aliquam vitae arcu sem. Integer blandit quis velit in pharetra. Morbi posuere, libero non gravida porttitor, neque nunc congue urna, vel finibus massa neque vitae ipsum.'
        },
        {
          link: '/contract/0',
          title: 'Contract 1',
          signed: false,
          rejected: true,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at vestibulum sapien, sit amet consectetur nisl. Aliquam maximus pulvinar ex vel euismod. Vestibulum in euismod leo. Phasellus vulputate odio in lectus mollis euismod. Morbi quis augue vel enim luctus sodales. Curabitur sed tincidunt magna. Donec vel sagittis tellus.'
        },
        {
          link: '/contract/1',
          title: 'Contract 2',
          signed: false,
          rejected: false,
          content: 'Etiam bibendum laoreet pretium. Phasellus ac augue quis mauris ultrices pellentesque at id ante. Morbi rutrum nisl a mi ultricies, et porta dui imperdiet. Integer elementum, nibh at tincidunt consectetur, turpis tellus lobortis arcu, vel molestie orci lectus non tortor. In purus neque, tempor sed arcu vitae, pretium rutrum metus. Integer lacus ex, posuere id sem eu, tincidunt elementum sapien. Nunc quis rutrum nulla. Nullam sit amet est vel turpis aliquam accumsan. Donec molestie sapien vehicula cursus sollicitudin. Praesent lorem magna, sagittis id diam a, vestibulum semper mauris.'
        },
        {
          link: '/contract/2',
          title: 'Contract 3',
          signed: false,
          rejected: false,
          content: 'Quisque vehicula auctor nibh. Cras aliquam nec massa ac convallis. Donec aliquam nisl sit amet tortor mattis, ac ornare ex vehicula. Ut ut congue erat. Ut feugiat pulvinar nibh, rhoncus rutrum augue sagittis eget. Nullam eget dui mattis, ullamcorper est quis, congue ex. Etiam tellus est, interdum eu bibendum at, tempor molestie leo. Quisque aliquam vel elit consequat egestas. Suspendisse feugiat augue massa, ac commodo urna commodo non. Ut orci justo, aliquam quis lobortis at, eleifend a metus. Aliquam sit amet vulputate tortor. Vestibulum pellentesque suscipit libero, ut gravida felis condimentum vel. Maecenas accumsan libero vitae bibendum varius. Aenean placerat tortor neque, non lacinia lectus feugiat eu.'
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
          signed: false,
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
