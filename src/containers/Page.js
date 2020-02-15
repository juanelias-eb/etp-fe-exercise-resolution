import React, {Component} from 'react';

import Structure from 'eventbrite_design_system/structure/Structure';
import Layout from 'eventbrite_design_system/layout/Layout';
import Tabs from 'eventbrite_design_system/tabs/Tabs';


import Overview from '../components/Overview';
import ExercisesList from '../components/ExercisesList';

const items = [
    {
        value: 0,
        displayName: 'Guide',
        content: <Overview />
    },
    {
        value: 1,
        displayName: 'Exercises',
        content: <ExercisesList />
    },
];

export default class Page extends Component {
    render() {
        return (
            <Structure {...this.props}>
                <Layout
                    maxWidth="large"
                    hasHorizontalGutters={false}
                >
                    <section className="eds-l-pad-top-10">
                        <h1>User Resolution Guide</h1>
                        <Tabs
                            items={items}
                        />
                    </section>
                </Layout>
            </Structure>
        )
    }
};