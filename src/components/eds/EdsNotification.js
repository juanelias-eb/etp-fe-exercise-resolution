import React, { PureComponent } from 'react';

import withMainControls from "eventbrite_design_system/structure/hoc/withMainControls";
import Button from "eventbrite_design_system/button/Button";
import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";

const ERROR_NOTIFICATION = {
    type: TYPE_ERROR,
    children: "This an error notification",
    iconType: <AlertChunkySvg />,
    shouldScrollTo: true,
    hasCloseButton: true
};

class EdsNotification extends PureComponent {
    handleAddNotification = () => {
        this.props.addMainNotification(ERROR_NOTIFICATION);
    }

    handleHideNotification = () => {
        this.props.hideMainNotification();
    }

    render() {
        return (
            <section className="eds-g-grid eds-g-cell eds-g-cell-1-1">
                <div className="eds-align--space-between eds-l-pad-top-10">
                    {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={this.handleAddNotification}>
                        Show Notification
                    </Button>
                    <Button onClick={this.handleHideNotification}>
                        Hide Notification
                    </Button>
                </div>
            </section>
        )
    }
};

export default withMainControls(EdsNotification);
