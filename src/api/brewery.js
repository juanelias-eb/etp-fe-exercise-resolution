import { formatUrl } from 'url-lib';

const BREWERY_URL = 'https://api.openbrewerydb.org/breweries';

const sdkRequestBuilder = (url, params) => {
    if (!params) {
        return url;
    }
    return formatUrl(url, params);
};

const sdkRequest = async (page) => {
    const fetchResult = await fetch(
        sdkRequestBuilder(BREWERY_URL, {'per_page': 5, page})
    );

    return await fetchResult.json();
} 

export const fetchBreweries = (page) => sdkRequest(page);