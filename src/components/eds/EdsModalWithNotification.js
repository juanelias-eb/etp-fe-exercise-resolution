import React, { Component } from "react";

import withOverlayControls from "eventbrite_design_system/structure/hoc/withOverlayControls";
import Button from "eventbrite_design_system/button/Button";
import Illustration from 'eventbrite_design_system/illustration/Illustration';
import BlueMoneyIllustrationSvg from 'eventbrite_design_system/iconography/icons/BlueMoneyIllustration';
import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";

const modalContent = (onNotificationAdd) => ({
    primaryText: 'Close',
    primaryType: 'fill',
    secondaryText: 'Secondary',
    secondaryType: 'follow',
    children: (
        <div className=" eds-g-cell eds-g-cell-1-1 eds-l-pad-top-2 eds-l-pad-vert-2">
            <h3>This is the modal Content!!!</h3>
            <div className="eds-l-pad-top-20">
                <Button type="submit" onClick={onNotificationAdd}>
                    Show Notification
                 </Button>
            </div>
        </div>
    ),
    illustration: (
        <Illustration
            type={<BlueMoneyIllustrationSvg />}
            height="420px"
            width="220px"
        />
    ),
});

const notificationContent = {
    type: TYPE_ERROR,
    children: "This an error notification in the modal",
    iconType: <AlertChunkySvg />,
    hasCloseButton: true,
    shouldFloatAboveContent: true,
    shouldAnimate: true,
};

class EdsModalWithNotification extends Component {
    handleNotificationAdd = () => {
        this.props.addOverlayNotification(notificationContent);
    }
    handleShowOverlay = () => {
        this.props.showOverlay(
            'modal',
            modalContent(this.handleNotificationAdd),
        );
    }
    render() {
        return (
            <section className="eds-l-pad-top-10">
                <div className="eds-align--space-between eds-l-pad-top-10">
                    {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={() => this.handleShowOverlay()}>
                        Show Modal!!!
                    </Button>
                </div>
            </section>
        );
    }
}

export default withOverlayControls(EdsModalWithNotification);
