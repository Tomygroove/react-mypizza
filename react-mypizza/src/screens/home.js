import React,{useState} from 'react';

import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Selesizestepper from '../components/configuratorForm/selectsize'
import SelectBase from '../components/configuratorForm/Selectbase'
import SelectIngredients from '../components/configuratorForm/selectingredients'
import {useDispatch, useSelector} from 'react-redux'
import {Nextstep} from '../actions/stepper'
import base1 from '../assets/images/base1.png'
import ConfiguratorRecap from '../components/configuratorForm/configurator'

const Home = () => {

    const dispatch = useDispatch()
    const First = useSelector(state=>state.step.First_step)
    const Second = useSelector(state=>state.step.Second_step)
    const Third = useSelector(state=>state.step.Third_step)
    
    return(
        <>
            <MainContainer>  
                <div>       
                {First?(<Selesizestepper></Selesizestepper>):null}
                {Second?(<SelectBase></SelectBase>):null}
                {Third?(<SelectIngredients></SelectIngredients>):null}
                </div>
                <ConfiguratorRecap></ConfiguratorRecap>
            </MainContainer>
        </>
    )
}

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 50% auto;
`


export default Home
           