import React from 'react';
//The purpose of this whole component logic is to try and make the image list layout pretty by calculating how many spans each individual image needs
//Instead of this component we can also just use the responsive-container css class in ImageList which will make the layout even and responsive for each cell
class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans:0};
    }

    componentDidMount(){
         // in order to use the image reference we need to wait for the image to load
         //to do that we need to add an event listener
         this.imageRef.current.addEventListener('load', this.setSpans);

    }

    setSpans = () =>{ //we want the image height to set the spans value in css
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10); //10px is the height we gave the auto-row attribute in css  
        this.setState({spans});
    }

    render() {
        const { description, urls } = this.props.image; //deconstruction the image variables 

        return (
            // span is the css attribute name not the name of the state property, also gridRowEnd is the property name of a class (image-list) in css
            <div style={{gridRowEnd:`span ${this.state.spans}`}}> 
                <img alt={description} src={urls.regular} ref={this.imageRef}></img>
            </div>
        );
    }
}
export default ImageCard;