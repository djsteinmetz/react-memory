import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
import './Images.css'

class Images extends React.Component {
    state = {
        ready: false
    }
    componentDidMount() {
        this.timeout()
    }
    timeout() {
        console.log('hi')
        setTimeout(() => {
            console.log('hellooooo')
            this.setState({
                ready: true
            })
        }, 300)
    }
    render() {
        return (
            <ReactPlaceholder showLoadingAnimation={true} type='rect' ready={this.state.ready} color='#E0E0E0' style={{ width: 200, height: 300, margin: 25 }}>
                <img onClick={() => this.props.handleClick(this.props.id)}
                    className="images" src={this.props.src}
                    value={this.props.id}
                    alt="Alphonse Mucha" id={this.props.id} />
            </ReactPlaceholder>
        )
    }
}

export default Images