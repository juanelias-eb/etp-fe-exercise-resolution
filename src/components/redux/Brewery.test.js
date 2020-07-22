import React from "react";
import { shallow } from "enzyme";
import { stub } from "js-utils/test";
// import * as api from "../../api/brewery";

import Brewery from "./Brewery";

describe("Brewery", () => {
    beforeEach(() => {
        stub(api, "fetchBreweries", []);
    });

    describe("rendering", () => {
        it("should render properly", () => {
            expect(shallow(<Brewery />)).toBeDefined();
        });

        it("shouldn't render li when no breweries", () => {
            expect(shallow(<Brewery />).find("li")).toEqual({});
        });

        it("should fetch breweries on click", () => {
            const onLoadBrewery = jest.fn();
            const wrapper = shallow(<Brewery onLoadBrewery={onLoadBrewery} />);
            const button = wrapper.find("button");
            button.simulate("click");
            expect(onLoadBrewery).toHaveBeenCalledTimes(1);
        });
    });

    describe("api utils", () => {
        it("should fetch breweries", () => {});
    });
});
