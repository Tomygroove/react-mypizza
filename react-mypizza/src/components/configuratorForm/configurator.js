import React,{useState} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {Nextstep} from '../../actions/stepper'
import base1 from '../../assets/images/base1.png'

const ConfiguratorRecap = () => {

    const dispatch = useDispatch()
    const SizeBasket = useSelector(state=>state.step.SizeBasket)
    const BaseListe = useSelector(state=>state.step.BaseListi)
    console.log ( BaseListe )

    return(
        <>
                <div>
                        <form>
                            <Recap>
                                <Row>
                                     <Etape_New>
                                     <Label_new>Taille</Label_new>
                                     <Recap_ul>
                                         <li>{SizeBasket}</li>
                                     </Recap_ul>
                                     </Etape_New>
                                </Row>
                                <Row>
                                     <Etape_New>
                                         <Label_new>Base</Label_new>
                                         <li>
                                             <ImgSize src={BaseListe.img}></ImgSize>
                                         </li>
                                     </Etape_New>
                                </Row>
                                <Row>
                                     <Etape_New>
                                         <Label_new>Ingredients choisis</Label_new>
                                         <IngredientsChoisi>
                                            
                                            <IngredientsLi>
                                            <ImgSize src={base1}></ImgSize>
                                            </IngredientsLi>

                                            <IngredientsLi>
                                             <ImgSize src={base1}></ImgSize>
                                             </IngredientsLi>

                                             <IngredientsLi>
                                             <ImgSize src={base1}></ImgSize>
                                             </IngredientsLi>

                                             <IngredientsLi>
                                             <ImgSize src={base1}></ImgSize>
                                             </IngredientsLi>

                                             <IngredientsLi>
                                             <ImgSize src={base1}></ImgSize>
                                             </IngredientsLi>
                                             
                                             
                                        
                                         </IngredientsChoisi>
                                     </Etape_New>
                                </Row>
                                <Row>
                                     <Etape_New>vvvvvvvvvvv</Etape_New>
                                </Row>
                            </Recap>
                        </form>
                </div>

        </>
    )
}


const Recap = styled.div`
    margin:0;
    padding:0;
`

const Row = styled.div`
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    max-width: 100%;
`

const Etape_New = styled.div`
    position: relative;
    padding: 23px 16px 19px 16px;
    background-color: transparent;
    color: #000s;
    margin-bottom: 11px;
    min-height: 57px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1em;
    border: 2px dashed #dadada;
    border-radius: 10px;
`

const Label_new = styled.label`
    float:left;
`
const Recap_ul = styled.ul`
    margin: 0 0 0 60px;
    list-style: none;
    line-height: 1em;
    font-weight: 500;
    line-height: 1em;
`
const ImgSize = styled.img`
    height: 36px;
    margin-top: -36px;
    position: relative;
    top: 16px;
`
const IngredientsChoisi = styled.div`
    display: block;
    overflow: hidden;
    margin: 0;
    clear: left;
`

const IngredientsLi = styled.li`
float: left;
margin: 10px 1%;
text-align: center;
`


export default ConfiguratorRecap
           