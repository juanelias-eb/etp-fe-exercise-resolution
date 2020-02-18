import React, { PureComponent } from 'react';
import isEmpty from 'lodash/isEmpty';

export default class Brewery extends PureComponent {
    handleFetchData = () => {
        const {
            onLoadBrewery,
        } = this.props;

        onLoadBrewery();
    }
    
    render() {
        const {
            breweryList,
        } = this.props;

        if (isEmpty(breweryList)) {
            return (
                <section>
                    <div> No Data </div>
                    <button onClick={this.handleFetchData}> Fetch data now!!!</button>
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
            </section>
        );
    }
}
