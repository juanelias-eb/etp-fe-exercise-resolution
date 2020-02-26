import React, { PureComponent } from 'react';

import Pagination from 'eventbrite_design_system/pagination/Pagination';
import ProgressIndicator from 'eventbrite_design_system/progressIndicator/ProgressIndicator';
import BreweryTableHeader from './BreweryTableHeader';
import BreweryTableBody from './BreweryTableBody';

export default class Brewery extends PureComponent {
    state = {
        breweryList: [],
        currentPage: 1,
        isLoading: true,
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

        return (
            <section className="eds-l-pad-top-10">
                <BreweryTableHeader />
                {isLoading
                    ? <ProgressIndicator shape="linear" style="gradient" />
                    : (
                        <>
                            <BreweryTableBody breweryList={breweryList} />
                            <Pagination
                                pageNumber={currentPage}
                                resultsPerPage={5}
                                pageCount={10}
                                size="small"
                                onSelected={this.handleFetchData}
                            />
                        </>
                    )
                }
            </section>
        );
    }
}
