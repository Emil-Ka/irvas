import "../modules/slider";
import {modal, modalTimeout} from "../modules/modal";
import tabs from "../modules/tabs";

window.addEventListener("DOMContentLoaded", () => {
   modal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close"); //(triggerSelector, modalSelector, closeSelector)
   modal(".phone_link", ".popup", ".popup .popup_close");
   modalTimeout(".popup", 60000); //(modalSelector, time)
   tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
   tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});