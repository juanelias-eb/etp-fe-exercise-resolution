import {
    makeValidator,
    joinValidators,
} from 'eventbrite_design_system/utils/validation/validation';
import {
    isProvided,
    makeHasMaxLength,
} from 'js-utils/validators';

const validators = makeValidator({
    'name': [
        {
            validator: isProvided,
            errorMessage: 'Name is required',
        },
        {
            validator: makeHasMaxLength(20),
            errorMessage: 'only 20 chars',
        },
    ],
    'street': [
        {
            validator: isProvided,
            errorMessage: 'Street is required'
        },
        {
            validator: makeHasMaxLength(20),
            errorMessage: 'only 20 chars',
        },
    ],
    'city': [
        {
            validator: isProvided,
            errorMessage: 'City is required'
        },
        {
            validator: makeHasMaxLength(20),
            errorMessage: 'only 20 chars',
        },
    ],
    'websiteUrl': [
        {
            validator: isProvided,
            errorMessage: 'Web Site URL is required'
        },
        {
            validator: makeHasMaxLength(40),
            errorMessage: 'only 40 chars',
        },
    ]
});

export default joinValidators(validators);
