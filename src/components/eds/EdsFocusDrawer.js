import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';

import Button from 'eventbrite_design_system/button/Button';

export default class EdsFocusDrawer extends PureComponent {
    handleNavigate = () => browserHistory.push('/exercises/eds-focus-component');

    render() {
        return (
            <div className="eds-l-pad-top-2">
                {/* eslint-disable-next-line */}
                <Button style="fill" size="block" onClick={() => this.handleNavigate()}>
                    Show Focus Drawer
                </Button>
            </div>
        )
    }
};
