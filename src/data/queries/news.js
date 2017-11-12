/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
// import fetch from 'node-fetch';
import NewsItemType from '../types/NewsItemType';

// React.js News Feed (RSS)
// const url = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml`;

// let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const news = {
  type: new List(NewsItemType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = [
        {
          title: '! 111 Hi there',
          link: '! 111 Yoba, lol',
          content: '<h2> ! 111  Yo hello this is content!!!</h2>',
        },
        {
          title: '! 222 Hi there',
          link: '! 222 Yoba, lol',
          content: '<h2> ! 222 Yo hello this is content!!!</h2>',
        },
        {
          title: 'Hi there',
          link: 'Yoba, lol',
          content: '<h2>Yo hello this is content!!!</h2>',
        },
      ];

      // if (items.length) {
      //   return items;
      // }
      return lastFetchTask;
    }

    return lastFetchTask;
  },
};

export default news;
