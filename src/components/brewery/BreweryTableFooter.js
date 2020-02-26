import React from 'react';

import Pagination from 'eventbrite_design_system/pagination/Pagination';

const BreweryTableFooter = ({
    currentPage,
    pageCount,
    onSelected
}) => (
        pageCount > 1
            ? (
                <Pagination
                    pageNumber={currentPage}
                    resultsPerPage={5}
                    pageCount={pageCount}
                    size="small"
                    onSelected={onSelected}
                />
            )
            : null
    );

export default BreweryTableFooter;
