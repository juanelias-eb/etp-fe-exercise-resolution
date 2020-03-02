import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';
import ClassNames from 'classnames';
import flowRight from 'lodash/flowRight';

import withFocusDrawerControls from 'eventbrite_design_system/structure/hoc/withFocusDrawerControls';
import Button from 'eventbrite_design_system/button/Button';
import InputField from 'eventbrite_design_system/inputField/InputField';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import {
    STYLE_STATIC,
} from 'eventbrite_design_system/inputField/constants';
import withReduxForm from 'eventbrite_design_system/form/withReduxForm';
import { NOTIFICATION_TYPE_FOCUS_PANEL } from 'eventbrite_design_system/form/withReduxForm/constants';

import validate from '../../validators/breweryFormValidator';

class BreweryForm extends PureComponent {
    componentDidMount() {
        const {
            showFocusDrawer,
        } = this.props;
        showFocusDrawer({
            onClose: this.handleCloseFocusDrawer
        });
    }

    componentWillUnmount() {
        const {
            closeFocusDrawer,
        } = this.props;
        closeFocusDrawer();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const result = this.props.handleSubmit();
        
        if (result && result.then) {
            result.then(this.handleCloseFocusDrawer);
        }
        
    }
    handleCloseFocusDrawer = () => {
        browserHistory.goBack();
    }

    render() {
        const formClasses = ClassNames(
            'eds-g-cell',
            'eds-g-cell-1-1',
            'eds-l-pad-top-4',
            'eds-l-lg-pad-right-4',
            'eds-l-ln-pad-right-4',
            'eds-l-lw-pad-right-4',
            'eds-l-md-pad-right-4',
            'eds-l-mn-pad-right-4',
            'eds-l-mw-pad-right-4'
        )

        return (
            <div className="eds-l-pad-top-10 eds-l-pad-hor-2">
                <h1>Create your own brewery!!!</h1>
                <form 
                    onSubmit={this.handleSubmit}
                    className={formClasses}
                >
                    <div>
                        <div>
                            <ValidationFormField
                                v2={true}
                                name="name"
                                required={true}
                            >
                                <InputField
                                    id="name"
                                    style={STYLE_STATIC}
                                    label="Brewery Name"
                                    placeholder="My brewery..."
                                    maxLength={20}
                                    required={true}
                                    hasCharacterCount={true}
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-l-pad-top-3">
                            <ValidationFormField
                                v2={true}
                                name="street"
                                required={true}
                            >
                                <InputField
                                    id="street"
                                    style={STYLE_STATIC}
                                    label="Street name"
                                    placeholder="Fake 123..."
                                    required={true}
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-l-pad-top-3">
                            <ValidationFormField
                                v2={true}
                                name="city"
                                required={true}
                            >
                                <InputField
                                    id="city"
                                    style={STYLE_STATIC}
                                    label="City name"
                                    placeholder="My city..."
                                    required={true}
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-l-pad-top-3">
                            <ValidationFormField
                                v2={true}
                                name="websiteUrl"
                                required={true}
                            >
                                <InputField
                                    id="websiteUrl"
                                    style={STYLE_STATIC}
                                    label="Brewery url"
                                    placeholder="www.brewery.com..."
                                    required={true}
                                />
                            </ValidationFormField>
                        </div>
                    </div>
                    <div className="eds-align--right">
                        {/* eslint-disable-next-line */}
                        <Button style="fill" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default flowRight(
    withFocusDrawerControls,
    withReduxForm({
        form: 'breweryForm',
        notificationType: NOTIFICATION_TYPE_FOCUS_PANEL,
        validate,
    })
)(BreweryForm);
