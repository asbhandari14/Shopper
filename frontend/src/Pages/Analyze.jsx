import React from 'react'
import axios from 'axios';
import { useState ,useEffect} from 'react';
import { useMemo } from 'react';
import "./Analyze.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { useMemo } from 'react'
import {Line} from 'react-chartjs-2';
import {Chart as ChartJs ,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js/auto";

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
const Analyze = () => {
    const [products,setProducts]=useState([]);
    const [analyzed,setAnalyzed]=useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
  axios.defaults.withCredentials = true;

  const options ={
  };

  useMemo(()=>{
    return sendreq();
  },[])


  
  async function sendreq(){
    setProducts( await axios.get('http://localhost:5000/products').then((res)=>{
      console.log(res.data.data)
    //   getProductApiArray(res.data.data);
      return res.data.data;
    }).catch((e)=>{
      alert('an error has occured')
      console.log(e)
    }))
  }
  const [dataPresent,setdataPresent]=useState(false);
    const [chartData,setChartData] = useState([])
    const [Data,setData] = useState(null)

  async function fetchProduct(ProductId){
    setOpen(true)
    // setChartData(await axios.get(`http://localhost:5000/ProductAnalysis/${ProductId}`).then((res)=>{
    //         setdataPresent(true);
    //         console.log('hello')
    //         console.log(res.data)
    //         return res.data
    //         // console.log(chartData)
    //     }).catch((e)=>{
    //         alert('An error has happened check console')
    //         console.log(e)
    //     }))
    axios.get(`http://localhost:5000/ProductAnalysis/${ProductId}`).then((res)=>{
      if(res.data.length>0){
          setData({
              labels:res.data.map((obj)=>obj.date),
              datasets:[{
                  label:"order",
                  data:res.data.map((obj)=>obj.count)
              }]
          })
          console.log("analyzer",res.data)
          console.log(res.data.map(obj=>obj.date))
      }
      else{
          console.log('no data recieved')
      }
  }).catch((e)=>{
      alert('An error has happened check console')
      console.log(e)
  })
    console.log("hello world",ProductId)
  }
  return (
    <div className='Analyze'>
        <h1 id='analyze_heading'>Analyze all the Products</h1>
        <hr id="analyze_heading_bar" />
        {products.map((obj)=>{
        return <div key={obj.ProductId} className='myProducts'>
            <div className='ProductId'>{obj.ProductId}</div>
            <div className='ProductName' style={{color : (obj.stockSize<25)?"red":"black"}}>{obj.ProductName}</div>
            <div className='stockSize'>{obj.stockSize}</div>
            <button className='analyze-button' value={obj.ProductId} onClick={()=>fetchProduct(obj.ProductId)}>Analyze</button>
            
            </div>
        })}
        <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {
            Data!==null?(

                <Line options={options} data={Data}/>
            ):<div>no data found</div>
        }
        </Box>
      </Modal>
    </div>
  )
}

export default Analyze