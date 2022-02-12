import React from 'react'
import './body.css'
import {Select,InputLabel,FormControl,RadioGroup,FormControlLabel,Radio,Button,Checkbox,FormGroup }from '@mui/material';



const Body=() => {
  return (
      <div className="body">
          <p className="head"> Requriter Dashboard</p>
           
                <FormControl style={{width:"169px", height:"44px",  top:"40px", paddingRight:"25px",borderSizing:"border-box" }}>
                    <InputLabel>Select Career</InputLabel>
                    <Select
                        label="Select Career"
                        style={{border:" 1px solid #B8B298",background:"#FFFFFF",borederRadius:"8px"  }}
                        >
                            <RadioGroup
                                style={{padding:"0px 5px", width:"345px",heigth:"505px",margin:"10px"}}
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="FullStack"
                                    name="radio-buttons-group"
                            >
                                <FormControlLabel value="FullStack" control={<Radio/>} label="FullStack Development"  />
                                <FormGroup style={{marginLeft:"20px", position:"static"}}>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Software Development Lifecycle" />
                                    <FormControlLabel control={<Checkbox />} label="Programing" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Mobile App Development" />
                                   
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Backend" />
                                </FormGroup>                                                            
                            </RadioGroup>


                            <RadioGroup
                                style={{padding:"0px 5px", width:"345px",margin:"10px"}}
                            >                                
                                <FormControlLabel value="ui/ux" control={<Radio />} label="Ui/Ux Development" />
                                <FormGroup style={{marginLeft:"20px",position:"static"}}>
                                <FormControlLabel control={<Checkbox />} label="WireFraming" />
                                <FormControlLabel control={<Checkbox />} label="Figma" />
                                <FormControlLabel control={<Checkbox />} label="User Research" />
                                <FormControlLabel control={<Checkbox />} label="Problem Sloving" />
                                </FormGroup> 
                               
                            </RadioGroup>

                            <p style={{color: "#646464", position:"absolute", padding:"0px 10px", marginTop:"15px"}}>Clear</p>
                            <Button  type="submit" variant="contained" style={{left:"270px"}}>
                                    Submit
                            </Button>
                    </Select>
                </FormControl>
                <FormControl style={{width:"169px", height:"44px", top:"40px",paddingRight:"25px" }}>
                    <InputLabel>College year</InputLabel>
                    <Select
                        label="Select Career"
                        style={{border:" 1px solid #B8B298",background:"#FFFFFF",borederRadius:"8px", borderSizing:"border-box"  }}
                        >
                     </Select>
                </FormControl>

                <FormControl style={{width:"149px", height:"44px", top:"40px",paddingRight:"25px" }}>
                    <InputLabel>Location</InputLabel>
                    <Select
                        label="Select Career"
                        style={{border:" 1px solid #B8B298",borederRadius:"8px" ,background:"#FFFFFF" }}
                        >
                     </Select>
                </FormControl>

          
          

        </div>
      
     
    
  )
}

export default Body