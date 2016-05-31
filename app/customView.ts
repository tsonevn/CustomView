import {Observable, EventData} from "data/observable";
import {StackLayout} from "ui/layouts/stack-layout";
import {Label} from "ui/label";
import {Button} from "ui/button";

export class MyControl extends StackLayout {
    private lbl:Label;
    constructor() {
        super();

        var counter: number = 0;
        // this.lbl = new Label({"text" : "Select Matter"});
        //var lbl:Label = new Label();
        this.lbl = new Label();
        var btn:Button = new Button();
        this.lbl.text="Tap";
        btn.text = "Tap me!";
        btn.on(Button.tapEvent, (args: EventData) => {
            this.lbl.text = "Tap " + counter++;
        });

        this.addChild(this.lbl);
        this.addChild(btn);
    }
}