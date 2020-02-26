import React from 'react';

import Tabs from 'eventbrite_design_system/tabs/Tabs';
import Brewery from './Brewery';

export default class BreweryLayout extends React.PureComponent {
    render() {
        const {
            onLoadBrewery,
            onAddBrewery,
        } = this.props;

        return (
            <>
                <Tabs
                    items={
                        [
                            {
                                value: 0,
                                displayName: 'Online Breweries',
                                content: (
                                    <Brewery
                                        key={0}
                                        onLoadBrewery={onLoadBrewery}
                                    />
                                )
                            },
                            {
                                value: 1,
                                displayName: 'Our Breweries',
                                content: (
                                    <Brewery
                                        key={1}
                                        onLoadBrewery={() => Promise.resolve()}
                                        onAddBrewery={onAddBrewery}
                                        isCustom={true}
                                    />
                                )
                            },
                        ]
                    }
                />
            </>
        );
    }
};
