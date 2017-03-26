import React from "react";
import { browserHistory } from "react-router";

export class Search extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchString : '',
            file: '',
            imagePre: ''
        };
    }

    onNavigateHome() {
        browserHistory.push("/home");
    }

    handleChange(e) {
        this.setState({searchString:e.target.value});
    }

    imageUploadHandle(e) {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePre: reader.result
          });
        }
        reader.readAsDataURL(file)
    }

    render() {
        let {imagePre} = this.state;
        let $imagePreview = null;
        if (imagePre) {
          $imagePreview = (<img width="304" height="236" className="img-responsive" src={imagePre} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        var libraries = [
            {id: 1, name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
            {id: 2, name: 'AngularJS', url: 'https://angularjs.org/'},
            {id: 3, name: 'jQuery', url: 'http://jquery.com/'},
            {id: 4, name: 'Prototype', url: 'http://www.prototypejs.org/'},
            {id: 5, name: 'React', url: 'http://facebook.github.io/react/'},
            {id: 6, name: 'Ember', url: 'http://emberjs.com/'},
            {id: 7, name: 'Knockout.js', url: 'http://knockoutjs.com/'},
            {id: 8, name: 'Dojo', url: 'http://dojotoolkit.org/'},
            {id: 9, name: 'Mootools', url: 'http://mootools.net/'},
            {id: 10,id: 1, name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
            {id: 11, name: 'Lodash', url: 'http://lodash.com/'},
            {id: 12, name: 'Moment', url: 'http://momentjs.com/'},
            {id: 13, name: 'Express', url: 'http://expressjs.com/'},
            {id: 14, name: 'Koa', url: 'http://koajs.com/'}
        ];

        var searchString = this.state.searchString.trim().toLowerCase();
            if(searchString.length > 0){

            //searching and filtering the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }
        return (
            <div>
                <input type="file" onChange={this.imageUploadHandle.bind(this)}/>
                <div>{$imagePreview}</div>
                <input type="text"  defaultValue={this.state.searchString} onChange={this.handleChange.bind(this)} 
                placeholder="Type here" />
                <ul> 
                    { libraries.map((l, index) =>
                         <li key={index}>{l.name} <a href={l.url}>{l.url}</a></li>
                    )}
                </ul>
            </div>
        );
    }
}

