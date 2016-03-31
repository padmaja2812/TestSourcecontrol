function addWidgetsForm0090ad0e0b76f4f() {
    Form0090ad0e0b76f4f.setDefaultUnit(kony.flex.DP);
    var Button04b51c532001f47 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button04b51c532001f47",
        "isVisible": true,
        "left": "140dp",
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "267dp",
        "width": "260dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    Form0090ad0e0b76f4f.add(
    Button04b51c532001f47);
};

function Form0090ad0e0b76f4fGlobals() {
    Form0090ad0e0b76f4f = new kony.ui.Form2({
        "addWidgets": addWidgetsForm0090ad0e0b76f4f,
        "enabledForIdleTimeout": false,
        "id": "Form0090ad0e0b76f4f",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
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
        },
        "titleBarSkin": "slTitleBar"
    });
};