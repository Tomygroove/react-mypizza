import React,{useState} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {Nextstep, DeleteIngredients} from '../../actions/stepper'
import base1 from '../../assets/images/base1.png'

const ConfiguratorRecap = () => {

    const dispatch = useDispatch()
    const SizeBasket = useSelector(state=>state.step.SizeBasket)
    const BaseListe = useSelector(state=>state.step.BaseListi)
    const IngredientsListeBasket = useSelector(state=>state.step.IngredientsBasket)
    
    const DeleteIngredient=(e,id)=>{

        dispatch(DeleteIngredients(id))
    }

    return(
        <>
            <FormStyled>
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
                                         <Recap_ul>
                                         <li>
                                             <ImgSize src={BaseListe.img}></ImgSize>
                                         </li>
                                         </Recap_ul>
                                     </Etape_New>
                                </Row>
                                <Row>
                                     <Etape_New>
                                         <Label_new>Ingredients choisis</Label_new>
                                         <IngredientsChoisi>
                                            <Recap_ul >
                                            {
                                                IngredientsListeBasket.map(ing=>
                                                    <IngredientsLi key={ing.id}>
                                                         <ImgSize src={ing.value.img}  onClick={(e)=> {DeleteIngredient(e,ing.id)}}></ImgSize>
                                                     </IngredientsLi>
                                                )
                                            }
                                            </Recap_ul>
                                         </IngredientsChoisi>
                                     </Etape_New>
                                </Row>
                                <Row>
                                     <Etape_New>
                                     <Label_new>Nom de la pizza</Label_new>
                                     <br></br>

                                         <PizzaName></PizzaName>
                                     </Etape_New>
                                </Row>
                                <RecaPrice>Prix</RecaPrice>
                                <Row>
                                    <CreateButton type="submit">Créer</CreateButton>
                                </Row>
                            </Recap>
                        </FormStyled>
                

        </>
    )
}


const FormStyled = styled.form`
    width: 100%;
    @media  screen and (min-width: 768px) {
        width:20%;
    }
`


const Recap = styled.div`
    margin:0;
    padding:0;
    display: block;
`

const Row = styled.div`
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
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
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 12px 0px 12px 0px;
`
const ImgSize = styled.img`
    height: 50px;
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
const PizzaName = styled.input`
        width:100%;
        border: none;
        background:#f0f0f0;
        border-radius: 10px;
        margin: 5px 0 0 0;
        display: inline-block;
        height:55px;
`
const RecaPrice = styled.div`
    text-align: center;
    margin: 10px 0 15px;
    font: 500 42px/1 "BebasNeue","Roboto",Verdana,Arial,sans-serif;
    font-size: 42px;
    font-size: 3rem;
    color: #f0423b;
`
const CreateButton = styled.button`
    background: #f0423b;
    font-size: 26px;
    line-height: 40px;
    border: 0px aliceblue;
    font-size: medium;
    width: 60%;
    margin: 0 20% auto
`




export default ConfiguratorRecap
           