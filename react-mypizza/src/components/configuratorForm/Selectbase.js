import React from "react"
import styled from "styled-components"
import base1 from '../../assets/images/base1.png'
import base2 from '../../assets/images/base2.png'
import {useDispatch, useSelector} from 'react-redux'
import {Nextstep} from '../../actions/stepper'
import {UpdateBase} from '../../actions/stepper'
import {BsFillBackspaceFill, BsArrowLeft} from 'react-icons/bs'
import {useTranslation} from 'react-i18next'

const SelectBase = ()=>{
    const {t, i18n} = useTranslation()
    const dispatch = useDispatch()
    const Baseliste = useSelector(state=>state.step.Base)

    const SelectBase = (e,base)=>{
     dispatch( UpdateBase(base))
     dispatch(Nextstep(3))
    }

    const Previous = (e)=>{
        dispatch(Nextstep(1))
       }


    return (
        <Container>
            <Row>
                    <ConfigTaille>
                        <Config_slide_title><span onClick={(e)=>Previous(e)}><BsFillBackspaceFill/> </span>{i18n.t('configurateurform.selectbase.title')}</Config_slide_title>
                        {
                        Baseliste.map( base=>
                        <Item onClick={(e)=>SelectBase(e,base)}>
                            <Item_large>
                                <Icone>eeee</Icone>
                                <Item_image src={base.img}/>
                                <Zone_texte>
                                <Texte>
                                {base.name}
                                </Texte>
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
    top: 0;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    list-style-type:none;
    `
const Config_slide_title = styled.li`
    color: white;
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
    width:200px;
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
const Back = styled.a`
position: absolute;
left: 0;
top: 0;
height: auto;
line-height: 20px;
color: #6e626c;
`

















export default SelectBase


