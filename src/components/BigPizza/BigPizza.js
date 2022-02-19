import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import {BigPizzaContainer, BigPizzaContent, BigPizzaItems, BigPizzaH1, BigPizzaP, BigPizzaBtn} from './BigPizzaElements'

export default function BigPizza() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
        
    return (
        <BigPizzaContainer>
            <Navbar toggle={toggle}/>
            <Sidebar toggle={toggle} isOpen={isOpen} />

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
