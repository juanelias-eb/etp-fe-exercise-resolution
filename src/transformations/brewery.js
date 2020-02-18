export const transformBreweries = (breweriesList = []) => (
    breweriesList.map(
        ({
            id,
            name,
            website_url: websiteUrl,
            street,
            city,
        }) => ({
            id,
            name,
            websiteUrl,
            street,
            city
        })
    )
);
