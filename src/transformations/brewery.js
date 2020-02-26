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
            city,
            logoUrl: `https://i.picsum.photos/id/${id}/200/300.jpg`
        })
    )
);
