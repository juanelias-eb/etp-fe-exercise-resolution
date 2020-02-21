import React from 'react';
import { browserHistory } from 'react-router';

import ExpansionPanel from 'eventbrite_design_system/expansionPanel/ExpansionPanel';
import TextList from 'eventbrite_design_system/textList/TextList';
import ReactChunkySvg from 'eventbrite_design_system/iconography/icons/ReactChunky';


const items = [
    {
        content: 'Redux Basic',
        value: 'exercises/redux-basic',
        iconType: <ReactChunkySvg />,
    },
    {
        content: 'Redux thunk-1',
        value: 'exercises/redux-thunk',
        iconType: <ReactChunkySvg />,
    },
];

const edsItems = [
    {
        content: 'Eds - Main Controls - notifications',
        value: 'exercises/eds-notification',
        iconType: <ReactChunkySvg />,
    },
    {
        content: 'Eds - Main Controls - Action Bar',
        value: 'exercises/eds-action-bar',
        iconType: <ReactChunkySvg />,
    },
    {
        content: 'Eds - Overlay Controls - Dialog',
        value: 'exercises/eds-dialog',
        iconType: <ReactChunkySvg />,
    },
    {
        content: 'EDS - Overlay Controls - Modal with Notification bar',
        value: 'exercises/eds-modal',
        iconType: <ReactChunkySvg />,
    },
    {
        content: 'EDS - Focus Drawer Controls - Focus drawer & router',
        value: 'exercises/eds-focus-drawer',
        iconType: <ReactChunkySvg />,
    },
];

const reduxForm = [
    {
        content: 'Redux Form - Basic',
        value: 'exercises/redux-form-basic',
        iconType: <ReactChunkySvg />,
    },
]

export default class ExercisesList extends React.Component {
    handleNavigate = (route) => {
        browserHistory.push(route);
    };

    render() {
        return (
            <section className="eds-best-practices eds-l-mar-vert-10 etp-expansion-panel">
                <h1 className="eds-text-hm eds-l-pad-bot-6">List of exercises</h1>
                <ExpansionPanel
                    linkText="Redux - Exercises"
                    verticalMargin="both"
                    //eslint-disable-next-line react/style-prop-object
                    style="container"
                >
                    <TextList items={items} onItemSelect={this.handleNavigate}/>
                </ExpansionPanel>
                <ExpansionPanel
                    linkText="EDS - Exercises"
                    verticalMargin="both"
                    //eslint-disable-next-line react/style-prop-object
                    style="container"
                >
                    <TextList items={edsItems} onItemSelect={this.handleNavigate}/>
                </ExpansionPanel>
                <ExpansionPanel
                    linkText="Redux Form - Basic"
                    verticalMargin="both"
                    //eslint-disable-next-line react/style-prop-object
                    style="container"
                >
                    <TextList items={reduxForm} onItemSelect={this.handleNavigate}/>
                </ExpansionPanel>
            </section>
        )
    }
}