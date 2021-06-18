import React  from 'react'

import Card from './Card';
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        items: [
            {
                id: 0,
                title: 'Dev Grub',
                subTitle: 'The  Cookbook for developers',
                imgSrc: '',
                link: 'https://devgrub.com',
                selected:false,
            },
            {
                id: 1,
                title: 'Sebastian Silva',
                subTitle: 'Github',
                imgSrc: '',
                link: 'https://devgrub.com',
                selected:false,
            },
            {
                id: 2,
                title: 'Evverest',
                subTitle: 'The  Cookbook for developers',
                imgSrc: '',
                link: 'https://devgrub.com',
                selected:false,
            }
        ]
        }
    }

    handleCardClick= (id,card) => {
        let items = [...this.state.items];

        items[id].selected=items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            };
        })
        this.setState({
            items
        });
    }

    makeItems(items) {
        return items.map(item => {
           return  <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item} />
        })
    }


    render() {

      
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>

            </Container>
        );
    }

}

export default Carousel;