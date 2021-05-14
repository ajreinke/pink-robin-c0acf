import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {markdownify} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <article className="page">
              <div className="container container--md">
                <header className="page__header">
                  <h1 className="page__title">{_.get(this.props, 'page.frontmatter.title', null)}</h1>
                </header>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScSmgZr3x7PppRMv0ZJuTPAzdCB31K4mdAUfibLXcrwf6dABw/viewform" />
              </div>
            </article>
            </Layout>
        );
    }
}
