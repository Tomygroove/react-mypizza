import React from "react"
import styled from "styled-components"
import {useDispatch, useSelector} from 'react-redux'
import {Nextstep} from '../../actions/stepper'
import {Updatesize} from '../../actions/stepper'
import {useTranslation} from 'react-i18next'


const Selesizestepper = ()=>{
    const {t, i18n} = useTranslation()
    const dispatch = useDispatch()
    const First = useSelector(state=>state.step.First_step)
    const Pizzasize = useSelector(state=>state.step.Pizzasize)

    const bucketsize = useSelector(state=>state.step.SizeBasket)

    const SelectSize = (e,size)=>{
        
        const sizevalue = size.name +" "+ size.size;
        dispatch(Updatesize(sizevalue))
        dispatch(Nextstep(2))
        
    }
    return (
        <Container>
            <Row>
                <ConfigTaille>
                    <Config_slide_title>{i18n.t('configurateurform.selectsize.title')}</Config_slide_title>
                        {
                            Pizzasize.map(size=>
                        <Item onClick={(e)=>SelectSize(e,size)} key={size.id}>
                            <Item_large>
                                <Icone>eeee</Icone>
                                <Item_image src={size.img} width={size.width}/>
                                <Zone_texte>
                                    <Texte>{ size.size }</Texte>
                                </Zone_texte>
                            </Item_large>
                        </Item>
                        )
                         }
                    </ConfigTaille>
            </Row>
        </Container>
    )
}

const Container = styled.div`
display:flex;
flex-direction: column;
`

const Row = styled.div `
display:flex;

`

const ConfigTaille = styled.ul`
    text-align: center; 
    margin: 0;
    list-style: none;
    list-style-type: none;
    width: 100%;
    top: 0;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    padding:0;
    `
const Config_slide_title = styled.li`
    color: #d34836;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 30px;
    text-align: center;
    position: relative;
    line-height: 32px;
    width:100%;
    `
 const Item = styled.li`
    background: #f0f0f0;
    vertical-align: top;
    border-radius: 20px;
    box-shadow: 0px 5px 0px 0px #d0d0d0;
    margin: 0 30px 30px;
 `

const Item_large = styled.a`
display: block;
transition: border 0.2s ease-in, background-color 0.2s ease-in;
border: 3px solid #f0f0f0;
border-radius: 20px;
position: relative;
`


const Icone = styled.i`
    opacity: 0;
    position: absolute;
    top: -3px;
    left: -3px;
    color: white;
    background: #f0423b;
    width: 30px;
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    font-weight: 900;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 100px;
    border-top-left-radius: 95px;
    border-top-right-radius: 30px;
    text-indent: 0px;
    transition: opacity 0.2s ease-in 0.1s;
`

const Item_image = styled.img`
    min-width: 60px;
    display: inline-block;
    vertical-align: bottom;
    position: relative;
    z-index: 2;
`

const Zone_texte = styled.div`
    height: 82px;
`
const Texte = styled.span`
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    padding: 5px;
    color: #70626f;
    transition: color ease-in 0.2s;
    line-height: 1.1;
    font-size: 19px;
    font-weight: 500;
`


export default Selesizestepper


