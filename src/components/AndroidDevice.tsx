import React from 'react'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Pixel from '../assets/pixel.png'; 

interface Props {
    imageWidth?: number | string;
    containerStyle?: React.CSSProperties;
    children?: React.ReactNode
}

function AndroidDevice(props: Props) {
    console.log(props);
    return (
        <Container fluid style={props.containerStyle}>
          <Image src={Pixel} width={props.imageWidth} />
          {props.children}
        </Container>
    )
}

export default AndroidDevice;
