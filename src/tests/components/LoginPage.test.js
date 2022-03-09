import React from "react";
import { shallow } from "enzyme";
import {LoginPage} from "../../components/LoginPage";

test("should render the LoginPage correctly", () => {
  const wrapper = shallow(<LoginPage />)

  expect(wrapper).toMatchSnapshot()
})


test("should call startLogin on button action", () => {
  const startLogin = jest.fn(); //! spy to monitor click event
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);

  // expect(wrapper).toMatchSnapshot()
  wrapper.find("#btn-login").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});







