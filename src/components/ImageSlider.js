import React from 'react'

export default class ImageSlider extends React.Component {
    state = {
        images: [
            "https://i.pinimg.com/736x/43/c2/6c/43c26c041c9c9cb86387457c11785a9a.jpg",
            "https://img2.freepng.es/20181027/eqt/kisspng-coffee-clip-art-cafe-kawaii-tea-starbucks-clipart-drawing-starbucks-drawing-trans-5bd42e70d0a252.6371770215406321768546.jpg",
            "https://mundokawaii.store/wp-content/uploads/2019/09/imagenes-de-dibujos-kawaii.png",
            "https://i.ytimg.com/vi/9W06EgNlEJI/maxresdefault.jpg"
        ],
        index: 0
    };
    handleNextImage = () => {
        this.setState(
            { index: this.state.index + 1 }
        );
    }
    render() {
        return (
            <div>
                <img
                    style={{
                        width: 300,
                        height: 300,
                        borderRadius: 50
                    }}
                    src={this.state.images[this.state.index]} />
                <button onClick={this.handleNextImage}>next</button>
            </div>
        )
    }
}