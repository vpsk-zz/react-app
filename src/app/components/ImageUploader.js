import React from "react";

export class ImageUploader extends React.Component {
    constructor(props) {
        super();
        this.state = {
            file: '',
            imagePre: ''
        };
    }

    imageUploadHandle(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
        debugger
        if(file.type === 'image/jpeg') {
            alert("This file type is not allowed");
            e.preventDefault();
        } else {
            reader.onloadend = () => {
              this.setState({
                file: file,
                imagePre: reader.result
              });
            }
            reader.readAsDataURL(file);
        }
    }

    render() {
        let {imagePre} = this.state;
        let $imagePreview = null;
        if (imagePre) {
          $imagePreview = (<img accept="image/gif, image/jpeg" width="304" height="236" className="img-responsive" src={imagePre} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <div>
                <input type="file" onChange={this.imageUploadHandle.bind(this)}/>
                <div>{$imagePreview}</div>
            </div>
        );
    }
}

