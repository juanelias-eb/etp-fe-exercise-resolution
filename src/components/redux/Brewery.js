import React, { PureComponent } from 'react';
import isEmpty from 'lodash/isEmpty';

import Pagination from 'eventbrite_design_system/pagination/Pagination';

export default class Brewery extends PureComponent {
    state = {
        breweryList: [],
        currentPage: 1,
    }
    
    componentDidMount() {
        this.handleFetchData();
    }

    handleFetchData = (page = 1) => {
        const {
            onLoadBrewery,
        } = this.props;

        onLoadBrewery(page).then(
            (breweryList) => this.setState({ breweryList, currentPage: page })
        );
    }
    
    render() {
        const {
            breweryList,
            currentPage,
        } = this.state;

        if (isEmpty(breweryList)) {
            return (
                <section>
                    <div> Loading Brewery </div>
                </section>
            )
        }
        return (
            <section>
                <h1>Brewery List</h1>
                <ul>
                    {breweryList.map(
                        ({ name, id }) => (<li key={id}>{name}</li>)
                    )}
                </ul>
                <Pagination
                    pageNumber={currentPage}
                    resultsPerPage={5}
                    pageCount={10}
                    size="continuous"
                    onSelected={this.handleFetchData}
                />
            </section>
        );
    }
}
