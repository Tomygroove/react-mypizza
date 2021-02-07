import React, {useEffect, useState,} from 'react';
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {Nextstep, DeleteIngredients} from '../../actions/stepper'
import axios from 'axios'
import {BsFillBucketFill } from 'react-icons/bs'
import {useTranslation} from 'react-i18next'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const ConfiguratorRecap = () => {
    const {t, i18n} = useTranslation()
    const dispatch = useDispatch()
    const SizeBasket = useSelector(state=>state.step.SizeBasket)
    const BaseListe = useSelector(state=>state.step.BaseListi)
    const IngredientsListeBasket = useSelector(state=>state.step.IngredientsBasket)
    

    const [NewPizza,SetNewPizza]= useState({
        "regular_price":"",
        "description":"",
        "name":"",
        "type":""
    })

    const [error,Seterror]= useState(false) 
    const [NewIng, SetNewIng]= useState([])
    const [Total, SetTotal]= useState(0)
    const history = useHistory()

     const AddPizza = (e)=>{
        
         e.preventDefault();
        // List of ingrefients select : IngredientsListeBasket
        // Base Value: BaseListe
        // Pizza size: SizeBasket
        let uniq ={}
        let arrFiltered = IngredientsListeBasket.filter(obj => !uniq[obj.value.name] && (uniq[obj.value.name] = true));
         let IngredientTostore="";

         // pizza description contain
          let baseTostore   =  "Taille: "+SizeBasket+" | ";
          IngredientTostore += baseTostore
          IngredientTostore += " Base: "+BaseListe.name+" | "
          IngredientTostore += " Ingredients: "

            // pizza price calculating
            let price = parseInt( BaseListe.price)
            SetTotal( parseInt( price ) )
            IngredientsListeBasket.map( i=>{
                price = price + parseInt(i.value.price)
               
            })
            

            let FinalPrice = ""
            FinalPrice += price
           

            //Add => inredient Data
            arrFiltered.forEach( x=>{
                IngredientTostore+=x.value.name+" , "
            })

            
                let data =JSON.stringify({"name":NewPizza.name,"type":"simple","regular_price":FinalPrice,"description":IngredientTostore,
                    "images":[{"src":"https://dev.ona-itconsulting.com/pizzasimulator/wp-content/uploads/2021/01/C-8528.png"}]});
                if( NewPizza.name !=="" && FinalPrice!=="" )
                    axios({
                        method: 'post',
                        url: 'https://dev.ona-itconsulting.com/pizzasimulator/wp-json/wc/v3/products?consumer_key=ck_3addb4df2eda7ea81545635fc44703f5bd24002a&consumer_secret=cs_c1b54bd4bfda5f69fa0a204f0227d2e0317fa614',
                        data:data,
                        headers: {
                            'Content-Type': 'application/json' 
                        }
                    }).then((response) => {
                        history.push("/pizzas")
                        SizeBasket = ""
                        BaseListe = []
                        IngredientsListeBasket =[]
                    })
                    .catch((response) =>{});
                else{
                    Seterror( true )
                }
        }

        

                
    const DeleteIngredient=(e,id)=>{
        dispatch(DeleteIngredients(id))
    }

    return(
        <>
            <FormStyled onSubmit={(e)=>AddPizza(e)}>
                <Recap>
                    <Row>
                        <Etape_New>
                            <Label_new>{i18n.t('configurateurform.configurator.taille')}</Label_new>
                                <Recap_ul>
                                    <li>{SizeBasket}</li>
                                </Recap_ul>
                        </Etape_New>
                    </Row>
                    <Row>
                         <Etape_New>
                            <Label_new>Base</Label_new>
                            <Recap_ul>
                                <li><ImgSize src={BaseListe.img}></ImgSize></li>
                            </Recap_ul>
                        </Etape_New>
                    </Row>
                    <Row>
                    <Etape_New>
                        <Label_new>{i18n.t('configurateurform.configurator.ingredients')}</Label_new>
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
                                     <Label_new>{i18n.t('configurateurform.configurator.nom')}</Label_new>
                                     <br></br>
                                         <PizzaName type="text" name="name" onChange={e=>SetNewPizza({...NewPizza,name:e.target.value})}></PizzaName>
                                     </Etape_New>
                                </Row>
                                <Row>
                                    <CreateButton type="submit">{i18n.t('configurateurform.configurator.ajout')}<BsFillBucketFill/></CreateButton>
                                </Row>
                            {
                                !error?null:
                                <Row>
                                    <Etape_New>
                                        <span>Veuillez remplir les champs obligatoires</span>
                                    </Etape_New>
                                </Row>
                            }

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
           