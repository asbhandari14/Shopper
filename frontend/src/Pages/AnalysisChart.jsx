import React from 'react'
import axios from 'axios'
export const AnalysisChart = () => {

    axios.defaults.withCredentials = true;
    const ProductId=2;
    // axios.get('http://localhost:5000/ProductAnalysis/'+ProductId).then((res)=>{
    //       console.log(res.data)
    //     }).catch((e)=>{
    //         alert('An error has happened check console')
    //         console.log(e)
    //       });
    axios.get('http://localhost:5000/ProductAnalysis').then((res)=>{
          console.log(res.data.data)
        }).catch((e)=>{
            alert('An error has happened check console')
            console.log(e)
          },[]);


  return (
    <div>AnalysisChart</div>
  )
}
