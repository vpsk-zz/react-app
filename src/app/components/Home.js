import React from "react";
import {ImageUploader} from "./ImageUploader";
import {RangeBasedAreaWidth} from "./RangeBasedAreaWidth";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
                <p>Upload Image from yyour Computer!!!</p>
                <ImageUploader />
                <hr/>
                <RangeBasedAreaWidth />
            </div>
        );
    }
}