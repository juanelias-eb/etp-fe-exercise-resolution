import React, { PureComponent } from 'react';

import withOverlayControls from "eventbrite_design_system/structure/hoc/withOverlayControls";
import Button from "eventbrite_design_system/button/Button";
import TrashSvg from "eventbrite_design_system/iconography/icons/TrashChunky";

const dialogContent = {
    headerIconType: <TrashSvg />,
    title: 'This is the title',
    message: 'This is the internal notification message',
    primaryText: 'Primary action',
    primaryType: 'danger',
    secondaryText: 'Secondary Action',
    secondaryType: 'link',
};

class EdsDialog extends PureComponent {

    handleShowOverlayDialog = () => {
        this.props.showOverlay(
            'dialog',
            dialogContent,
        );
    }

    render() {
        return (
            <section className="eds-l-pad-top-10">
                <div className="eds-align--space-between eds-l-pad-top-10">
                    {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={() => this.handleShowOverlayDialog()}>
                        Show Dialog!!!
                    </Button>
                </div>
            </section>
        );
    }
};

export default withOverlayControls(EdsDialog);
