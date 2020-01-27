import {shallow} from "enzyme";
import React from "react";
import {ResetModule} from "./ResetModule";
import style from "../../common/Modals/Modal.module.scss";
import {Modal} from "../../common/Modals/Modal";

describe('ResetModule component', () => {
    test('Modal window appears after link clicking',  () => {
        const component = shallow(<ResetModule />);
        expect(component.find(Modal).props().isShowing).toEqual(false);
        const link = component.find({className: style.button_link});
        link.simulate('click');
        expect(component.find(Modal).props().isShowing).toEqual(true)
    });

});