import React, { PureComponent } from 'react';
import isEmpty from 'lodash/isEmpty';
import noop from 'lodash/noop';

import ProgressIndicator from 'eventbrite_design_system/progressIndicator/ProgressIndicator';
import EmptyState from 'eventbrite_design_system/emptyState/EmptyState';
import GhostGraphicSvg from 'eventbrite_design_system/iconography/icons/GhostGraphic';

import BreweryTableHeader from './BreweryTableHeader';
import BreweryTableBody from './BreweryTableBody';
import BreweryTableFooter from './BreweryTableFooter';

const BreweryTable = ({
    breweryList,
    currentPage,
    onSelected,
    onAddBrewery,
    pageCount,
    isCustom,
}) => (
    <>
        {
            isEmpty(breweryList)
                ? 
                    <div className="eds-l-pad-top-20">
                        <EmptyState
                            graphicType={<GhostGraphicSvg />}
                            title="No Breweries!!!"
                            primaryText={isCustom ? "Add Breweries" : null}
                            onPrimaryAction={isCustom ? onAddBrewery : null}
                        />
                    </div>
                :
                    <>
                        <BreweryTableBody breweryList={breweryList} />
                        <BreweryTableFooter currentPage={currentPage} onSelected={onSelected} pageCount={pageCount} />
                    </>
        }
    </>
);

export default class Brewery extends PureComponent {
    state = {
        breweryList: [],
        currentPage: 1,
        isLoading: true,
    }

    static defaultProps = {
        onAddBrewery: noop,
        pageCount: 10,
    }
    
    componentDidMount() {
        this.handleFetchData();
    }

    handleFetchData = (page = 1) => {
        const {
            onLoadBrewery,
        } = this.props;

        this.setState({ isLoading: true});

        onLoadBrewery(page).then(
            (breweryList) => this.setState({ breweryList, currentPage: page, isLoading: false })
        );
    }
    
    render() {
        const {
            breweryList,
            currentPage,
            isLoading,
        } = this.state;
        const {
            onAddBrewery,
            pageCount,
            isCustom,
        } = this.props;

        return (
            <section>
                <BreweryTableHeader />
                {isLoading
                    ? <ProgressIndicator shape="linear" style="gradient" />
                    : (
                        <BreweryTable
                            breweryList={breweryList}
                            onSelected={this.handleFetchData}
                            currentPage={currentPage}
                            onAddBrewery={onAddBrewery}
                            pageCount={pageCount}
                            isCustom={isCustom}
                        />
                    )
                }
            </section>
        );
    }
}
