import React from 'react'
import './body.css'
import {Select,InputLabel,FormControl,RadioGroup,FormControlLabel,Radio,Button,Checkbox,FormGroup, MenuItem }from '@mui/material';


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
                                style={{padding:"0px 5px", width:"345px",heigth:"505px",margin:"10px",}}
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="FullStack"
                                    name="radio-buttons-group"
                                    
                            >
                                <FormControlLabel value="FullStack" control={<Radio sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="FullStack Development"  />
                                <FormGroup style={{marginLeft:"20px", position:"static"}}>
                                    <FormControlLabel control={<Checkbox defaultChecked sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="Software Development Lifecycle" />
                                    <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="Programing" />
                                    <FormControlLabel control={<Checkbox defaultChecked sx={{ '&.Mui-checked':{color: "#5723dc"}}} />} label="Mobile App Development" />
                                    
                                    <FormControlLabel control={<Checkbox defaultChecked sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="Backend" />
                                </FormGroup>                                                            
                            </RadioGroup>
                            


                            <RadioGroup
                                style={{padding:"0px 5px", width:"345px",margin:"10px"}}
                            >                                
                                <FormControlLabel value="ui/ux" control={<Radio />} label="Ui/Ux Development" />
                                <FormGroup style={{marginLeft:"20px",position:"static"}}>
                                <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="WireFraming" />
                                <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="Figma" />
                                <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="User Research" />
                                <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked':{color: "#5723dc"}}}/>} label="Problem Sloving" />
                                </FormGroup> 
                                
                            </RadioGroup>

                            <p style={{color: "#646464", position:"absolute", padding:"0px 10px", marginTop:"15px"}}>Clear</p>
                            
                            
                            <Button  type="submit" variant="contained" style={{left:"270px" ,background:"#5723dc"}}>
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
                        <MenuItem value={1}> I Year </MenuItem>
                        <MenuItem value={2}> II Year </MenuItem>
                        <MenuItem value={3}> III Year </MenuItem>
                        <MenuItem value={4}> IV Year </MenuItem>
                        </Select>
                       
                </FormControl>

                <FormControl style={{width:"149px", height:"44px", top:"40px",paddingRight:"25px" }}>
                    <InputLabel>Location</InputLabel>
                    <Select
                        label="Select Career"
                        style={{border:" 1px solid #B8B298",borederRadius:"8px" ,background:"#FFFFFF" }}
                        >
                            <MenuItem value={1}> Chennai </MenuItem>
                        <MenuItem value={2}> Bangalore </MenuItem>
                        <MenuItem value={3}>Madurai </MenuItem>
                        <MenuItem value={4}> Dindigul </MenuItem>
                        </Select>
                </FormControl> 
                
        </div>
       
    
    
  )
}

export default Body