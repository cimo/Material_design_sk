"use strict";

/* global */

let helper = null;
let ajax = null;
let flashBag = null;
let loader = null;
let materialDesign = null;
let popupEasy = null;
let widgetDatePicker = null;
let widgetSearch = null;

$(document).ready(() => {
    helper = new Helper();
    ajax = new Ajax();
    flashBag = new FlashBag();
    loader = new Loader();
    materialDesign = new MaterialDesign();
    popupEasy = new PopupEasy();
    widgetDatePicker = new WidgetDatePicker(window.setting.language);
    widgetSearch = new WidgetSearch();
    
    helper.checkMobile();
    helper.linkPreventDefault();
    helper.accordion("button");
    helper.menuRoot();
    helper.uploadFakeClick();
    helper.blockMultiTab();
    helper.bodyProgress();
    
    materialDesign.button();
    materialDesign.fabButton();
    materialDesign.iconButton();
    materialDesign.chip();
    materialDesign.dialog();
    materialDesign.drawer();
    materialDesign.checkbox();
    materialDesign.radioButton();
    materialDesign.select();
    materialDesign.slider();
    materialDesign.textField();
    materialDesign.linearProgress(".linear_progress_b", 0.5, 1, 0.75);
    materialDesign.linearProgress(".linear_progress_c", 0.5, 1);
    materialDesign.list();
    materialDesign.menu();
    materialDesign.snackbar();
    materialDesign.tabBar();
    materialDesign.fix();

    flashBag.setElement = materialDesign.getSnackbarMdc;
    flashBag.sessionActivity();

    widgetDatePicker.setInputFill = ".widget_datePicker_input";
    widgetDatePicker.create();

    widgetSearch.action();
    widgetSearch.changeView();
    
    $(window).on("resize", "", (event) => {
        materialDesign.refresh();
        materialDesign.fix();
        
        widgetSearch.changeView();
    });
    
    $(window).on("orientationchange", "", (event) => {
        materialDesign.refresh();
        materialDesign.fix();

        widgetSearch.changeView();
    });
});