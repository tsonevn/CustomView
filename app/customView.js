"use strict";
var stack_layout_1 = require("ui/layouts/stack-layout");
var label_1 = require("ui/label");
var button_1 = require("ui/button");
var MyControl = (function (_super) {
    __extends(MyControl, _super);
    function MyControl() {
        var _this = this;
        _super.call(this);
        var counter = 0;
        // this.lbl = new Label({"text" : "Select Matter"});
        //var lbl:Label = new Label();
        this.lbl = new label_1.Label();
        var btn = new button_1.Button();
        this.lbl.text = "Tap";
        btn.text = "Tap me!";
        btn.on(button_1.Button.tapEvent, function (args) {
            _this.lbl.text = "Tap " + counter++;
        });
        this.addChild(this.lbl);
        this.addChild(btn);
    }
    return MyControl;
}(stack_layout_1.StackLayout));
exports.MyControl = MyControl;
//# sourceMappingURL=customView.js.map