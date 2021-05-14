import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {markdownify} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <article className="page" height="800px">
              <div className="container container--md">
              </div>
            </article>
            </Layout>
        );
    }
}
