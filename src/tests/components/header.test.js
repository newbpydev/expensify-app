import React from "react";
import { shallow } from "enzyme";
import {Header} from "../../components/Header";

test("should render header correctly", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});


test("should call startLogout on button action", () => {
  
})
