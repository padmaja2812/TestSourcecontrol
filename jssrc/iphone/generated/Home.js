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
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
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
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        }
    });
};