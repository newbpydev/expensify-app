import React from "react";
import { shallow } from "enzyme";
import {Header} from "../../components/Header";

test("should render header correctly", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});


//! with spies
test("should call startLogout on button action", () => {
  const startLogout = jest.fn() //! spy to monitor click event
  const wrapper = shallow(<Header startLogout={startLogout} />);
  
  // expect(wrapper).toMatchSnapshot()
  wrapper.find("#btn-logout").simulate("click");
  expect(startLogout).toHaveBeenCalled()
})
