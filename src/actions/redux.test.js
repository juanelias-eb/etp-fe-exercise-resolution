import { stub, getMockDispatchTools } from "js-utils/test";

import * as api from "../api/brewery";
import { fetchBreweries, SET_BREWERIES } from "./redux";

describe("actions", () => {
    let dispatch;
    let getDispatchedAction;

    beforeEach(() => {
        ({ dispatch, getDispatchedAction } = getMockDispatchTools());
        stub(api, "fetchBreweries", Promise.resolve([]));
    });

    it("should set breweries with api response", async () => {
        api.fetchBreweries.mockReturnValueOnce(Promise.resolve([]));
        await fetchBreweries(1)(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
            type: SET_BREWERIES,
            payload: [],
        });
    });
});
