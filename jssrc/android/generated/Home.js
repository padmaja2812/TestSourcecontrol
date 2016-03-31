function addWidgetsHome() {
    Home.setDefaultUnit(kony.flex.DP);
    var CheckBoxGroup08f35de65cc484e = new kony.ui.CheckBoxGroup({
        "height": "120dp",
        "id": "CheckBoxGroup08f35de65cc484e",
        "isVisible": true,
        "left": "73dp",
        "masterData": [
            ["cbg1", "Checkbox One"],
            ["cbg2", "Checkbox Two"],
            ["cbg3", "Checkbox Three"]
        ],
        "skin": "slCheckBoxGroup",
        "top": "238dp",
        "width": "100%"
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Home.add(
    CheckBoxGroup08f35de65cc484e);
};

function HomeGlobals() {
    Home = new kony.ui.Form2({
        "addWidgets": addWidgetsHome,
        "enabledForIdleTimeout": false,
        "id": "Home",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};