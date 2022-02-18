import React from 'react'
import Navbar from '../Navbar/Navbar'
import {BigPizzaContainer, BigPizzaContent, BigPizzaItems, BigPizzaH1, BigPizzaP, BigPizzaBtn} from './BigPizzaElements'

export default function BigPizza() {
  return (
    <BigPizzaContainer>
        <Navbar />
        
        <BigPizzaContent>
            <BigPizzaItems>
                <BigPizzaH1>
                    Greatest Pizza
                </BigPizzaH1>
                <BigPizzaP>
                    Ready in 60 seconds
                </BigPizzaP>
                <BigPizzaBtn>
                    Order Now
                </BigPizzaBtn>
            </BigPizzaItems>
        </BigPizzaContent>
    </BigPizzaContainer>
  )
}
