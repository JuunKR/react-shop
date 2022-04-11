import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import '../CSS/Detail.scss';

let Box = styled.div`
    padding : 20px;
`;
let Bbox = styled.h4`
    font-size : 25px;
    color : ${ props => props.color}
`

function Detail(props){

    
    let [alert, alertSate] = useState(true);

    useEffect(()=>{
        let timer = setTimeout(()=>{
            alertSate(false)
        }, 2000);
        return ()=>{ clearTimeout(timer)} //2초지나기전에 뒤로가기하면 버그 생길 수도 있어서 제거
        
    }, [alert]);

    // alertstate 가 변할때만 변경, [] 만 주면 로드가 됐을때만 실행됨

    // useEffect(()=>{
    //     return function bye(){
            // 언마운트할때 실행할 내용
    //     }
    // });

    // useEffect는 여러개 작성 가능 적은 순서대로 실행




    let { id } = useParams();
    let navigate = useNavigate();
    let cProduction = props.shoes.find(function(Production){
        return Production.id == id
    })

    return(
        <div className="container">
            <Box> 
                <Bbox color={'red'}> Detail </Bbox> 
            </Box>
            {
                alert === true 
                ? (
                    <div className='my-alert'>
                    <p> 재고가 얼마 남지 않았습니다.</p>
                    </div>
                )
                : null
            }
            <div className="row">
            <div className="col-md-6">
                <img src={cProduction.img} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{cProduction.title}</h4>
                <p>{cProduction.content}</p>
                <p>{cProduction.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
                <button className="btn btn-danger" onClick={()=>{ navigate(-1); }}>뒤로가기</button> 

            </div>
            </div>
    </div>
    )
}

export default Detail;