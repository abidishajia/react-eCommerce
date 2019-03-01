import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

class Modal extends Component {
    render() { 
        return ( 
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct

                    if (!modalOpen){
                        return null
                    } 
                    else{
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize">
                                            <h5> Item added to the cart</h5>
                                            <img src={img} alt="product" className="img-fluid" />
                                            <h5> {title} </h5>
                                            <h5 className="text-muted"> <span>$</span>{price} </h5>
                                            <Link to='/'>
                                                <ButtonContainer
                                                    onClick={() => closeModal()}
                                                >
                                                Continue Shopping
                                                </ButtonContainer>
                                            </Link>

                                            <Link to='/cart'>
                                                <ButtonContainer
                                                    cart 
                                                    onClick={() => closeModal()}
                                                >
                                                Go to the Cart
                                                </ButtonContainer>
                                            </Link>


                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
         );
    }
}

const ModalContainer = styled.div`
    position:fixed;
    top: 0;
    left:0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: enter;

    #modal{
        background: var(--mainWhite);
    }
`;
export default Modal;