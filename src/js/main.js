import "../modules/slider";
import {modal, modalTimeout} from "../modules/modal";
import form from "../modules/form";
import tabs from "../modules/tabs";
import calc from "../modules/calc";

window.addEventListener("DOMContentLoaded", () => {
   modal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close"); //(triggerSelector, modalSelector, closeSelector, clickOverlay)
   modal(".phone_link", ".popup", ".popup .popup_close");
   modal(".popup_calc_profile_button", ".popup", ".popup .popup_close", false);
   modal(".glazing_price_btn", ".popup_calc", ".popup_calc_close");
   modal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
   modalTimeout(".popup", 60000); //(modalSelector, time)
   tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active"); //(headerSelector, tabSelector, contentSelector, activeClass)
   tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
   form(".form", "http://localhost:3000/data", "user_phone"); //(formSelector, url, nameDigitalInput)
   tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline"); //(headerSelector, tabSelector, contentSelector, activeClass, display = "block")
   calc("[data-input-balcon]", ".popup_calc_button", "http://localhost:3000/balcon"); //(inputSelector, buttonSelector, url)
});