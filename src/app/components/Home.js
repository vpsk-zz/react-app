import React from "react";
import {ImageUploader} from "./ImageUploader";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
                <p>Upload Image from yyour Computer!!!</p>
                <ImageUploader />
            </div>
        );
    }
}