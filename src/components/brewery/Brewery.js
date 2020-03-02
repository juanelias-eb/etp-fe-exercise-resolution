import React, { PureComponent } from 'react';
import isEmpty from 'lodash/isEmpty';
import noop from 'lodash/noop';

import ProgressIndicator from 'eventbrite_design_system/progressIndicator/ProgressIndicator';
import EmptyState from 'eventbrite_design_system/emptyState/EmptyState';
import GhostGraphicSvg from 'eventbrite_design_system/iconography/icons/GhostGraphic';
import Button from 'eventbrite_design_system/button/Button';

import BreweryTableHeader from './BreweryTableHeader';
import BreweryTableBody from './BreweryTableBody';
import BreweryTableFooter from './BreweryTableFooter';

const AddNewBrewery = ({
    isCustom,
    onAddBrewery,
}) => (
        <>
            {
                isCustom
                    ? (
                        <div className="eds-align--right" >
                            {/* eslint-disable-next-line */}
                            <Button style="fill" onClick={onAddBrewery} >
                                Add more Breweries!!!
                            </Button>
                        </div>
                    )
                    : null
            }
        </>
);

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
                        <AddNewBrewery isCustom={isCustom} onAddBrewery={onAddBrewery} />
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

    componentDidUpdate({ breweryList: oldBreweryList }) {
        const {
            breweryList,
            isCustom,
        } = this.props;

        if (isCustom && breweryList.length !== oldBreweryList.length) {
            this.handleCustomUpdate(this.state.currentPage);
        }
    }

    handleFetchData = (page = 1) => {
        const {
            onLoadBrewery,
            isCustom,
        } = this.props;
        
        if (isCustom) {
            return this.handleCustomUpdate(page);
        }
        
        this.setState({ isLoading: true });

        onLoadBrewery(page).then(
            (breweryList) => this.setState({ breweryList, currentPage: page, isLoading: false })
        );

    }

    handleCustomUpdate = (page) => {
        const {
            breweryList,
        } = this.props;

        this.setState({
            breweryList: breweryList.slice(page - 1, page * 5),
            currentPage: page,
            isLoading: false,
        });
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
                // eslint-disable-next-line
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
