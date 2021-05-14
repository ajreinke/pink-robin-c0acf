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
                <iframe height="800px" src="https://docs.google.com/forms/d/e/1FAIpQLScSmgZr3x7PppRMv0ZJuTPAzdCB31K4mdAUfibLXcrwf6dABw/viewform" width="100%"/>
              </div>
            </article>
            </Layout>
        );
    }
}
