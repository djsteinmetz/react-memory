import React from "react";
import Container from '../../Container'
import Row from '../../Row'
import Column from '../../Column'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
import "./Title.css";

class Title extends React.Component {
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
            <Container>
                <Row>
                    <Column size="md-12">
                        <ReactPlaceholder showLoadingAnimation={true} type='text' ready={this.state.ready} color='#E0E0E0' rows={2} style={{ marginBottom: 35 }}>
                            <h1 className="title">{this.props.children}</h1>
                        </ReactPlaceholder>
                    </Column>
                </Row>
            </Container>
        )
    }
}

export default Title;
