import React, { Component } from 'react';

import withMainControls from 'eventbrite_design_system/structure/hoc/withMainControls';
import Button from 'eventbrite_design_system/button/Button';

class EdsActionBar extends Component {
    handleShowActionBar = () => {
        this.props.showMainBottomBar({
            barContent: (
                <div className="eds-avatar__background--has-border eds-g-cell eds-g-cell-1-1 eds-l-pad-top-2 eds-l-pad-vert-2">
                    <div className="eds-align--space-around">
                        <span className="eds-text-bm"> This is the action footer bar</span>
                        {/* eslint-disable-next-line */}
                        <Button style="fill" onClick={this.handleCloseActionBar}>
                            Close Bar
                        </Button>
                    </div>
                </div>
            )
        });
    };
    handleCloseActionBar = () => {
        this.props.closeMainBottomBar();
    };
    render() {
        return (
            <section className="eds-l-pad-top-10">
                <div className="eds-align--space-between eds-l-pad-top-10">
                    {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={() => this.handleShowActionBar()}>
                        Show action bar
                            </Button>
                    <Button onClick={() => this.handleCloseActionBar()}>
                        Hide action bar
                            </Button>
                </div>
            </section>
        );
    }
}

export default withMainControls(EdsActionBar);
