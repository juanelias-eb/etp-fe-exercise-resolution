import React from 'react';

import Tabs from 'eventbrite_design_system/tabs/Tabs';
import Brewery from './Brewery';

const fixPageCount = (count) => (
    parseInt(count / 5) +  (count % 5 > 1 ? 1 : 0)
);

export default class BreweryLayout extends React.Component {
    handleCurrentTab = (fn, index) => (...args) =>{
        const {
            setBreweryTab,
        } = this.props;

        setBreweryTab(index);
        return fn(...args);
    };


    render() {
        const {
            onLoadBrewery,
            onAddBrewery,
            customBreweryList,
            breweryTabIndex,
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
                                        onLoadBrewery={this.handleCurrentTab(onLoadBrewery, 0)}
                                    />
                                )
                            },
                            {
                                value: 1,
                                displayName: 'Our Breweries',
                                content: (
                                    <Brewery
                                        key={1}
                                        breweryList={customBreweryList}
                                        onAddBrewery={this.handleCurrentTab(onAddBrewery, 1)}
                                        isCustom={true}
                                        pageCount={fixPageCount(customBreweryList.length)}
                                    />
                                )
                            },
                        ]
                    }
                    initialSelectedTab={breweryTabIndex}
                />
            </>
        );
    }
};
