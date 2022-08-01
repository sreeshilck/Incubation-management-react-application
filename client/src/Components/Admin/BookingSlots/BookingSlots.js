import React, { useEffect, useState } from 'react'

import "./BookingSlots.css"
import { Box, Paper, Divider, Modal, Typography, FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material'
import { getSlotsData } from '../../../features/Slots/SlotsSlice'
import { getApplicationData} from '../../../features/Application/ApplicationSlice'
import { useDispatch, useSelector } from 'react-redux'


function BookingSlots() {


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


    const dispatch = useDispatch()

    const slotsData = useSelector((state) => state.slots.data)
    //console.log(slotsData, "<======slotsDataaaaaaaaaaa");
    const applicationData = useSelector((state) => state.application.data)

    useEffect(() => {
        console.log("in useEffect");
        dispatch(getSlotsData())
        dispatch(getApplicationData())
    }, [])








    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [slotId, setSlotid] = useState()
    const [selectedCompany,setSelectedCompany] = useState('')
   // console.log(slotId," <=======slotidddd");




    // const selectSlot = (id) => {
    //     if(selectedCompany === ''){
    //         console.log("qwertyuiop");
    //         setErrorMassage("select a company")
    //     }else{
    //         setErrorMassage('')
    //         const dataid = { 
    //             _id: slotId,
    //             company:selectedCompany
    //          }
    //         axios.post(`${serverURL}/admin/select`, dataid).then((res) => {
    //             console.log(res);
    //             setRefresh(res)
    //         })
    //     }
    // }

     const selectSlot = async (id) => {
    //     const dataid = { 
    //         _id: slotId,
    //         company:selectedCompany
    //      }
    //      console.log(dataid,"===== dataidd");
    //     //dispatch(pendingStatus(id))

     }


    return (
        <>



            <div className='main '>
                <div className='main2 '>
                    {/* <Box className='box' 
                        sx={{
                            display: 'flex', flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 2,
                                width: 90,
                                height: 90,
                                 backgroundColor: '#d6ffc7'
                               

                            }
                        }} >
                        {slotsData.A.map((rows) => (
                            <Paper className='paper' style={{ backgroundColor: rows.selected && '#416e31',backgroundColor:"416e31" }} elevation={3} />
                        ))}
                    </Box>
                    </div> 
                    <hr className='hrline' />
                        <hr className='hrline' /> */}

                    <div className='bottom' style={{ display: 'flex' }}>
                        <div className='boxdown1'>
                            <Box className='box'
                                sx={{
                                    display: 'flex', flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        m: 2,
                                        width: 90,
                                        height: 90,
                                        backgroundColor: '#d6ffc7'
                                    }
                                }} >
                                {slotsData && slotsData.A.map((rows) => (
                                    <Paper className='paper' style={{ backgroundColor: rows.selected && '#416e31' }} elevation={3}
                                        onClick={!rows.selected ? () => {
                                            handleOpen()
                                            setSlotid(rows._id)
                                        } : ''} />
                                ))}
                            </Box>

                        </div>
                        <Divider className='divider' orientation="vertical" flexItem />
                        <div className='boxdown2'>
                            <Box className='box'
                                sx={{
                                    display: 'flex', flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        m: 2,
                                        width: 90,
                                        height: 90,
                                        backgroundColor: '#d6ffc7'
                                    }
                                }} >
                                {slotsData   && slotsData.B.map((rows) => (
                                    <Paper className='paper' style={{ backgroundColor: rows.selected && '#416e31' }} elevation={3}
                                        onClick={!rows.selected ? () => {
                                            handleOpen()
                                            setSlotid(rows._id)
                                        } : ''} />
                                ))}
                            </Box>
                        </div>
                        <Divider className='divider' orientation="vertical" flexItem />
                        <div className='boxdown3'>
                            <Box className='box'
                                sx={{
                                    display: 'flex', flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        m: 2,
                                        width: 90,
                                        height: 90,
                                        backgroundColor: '#d6ffc7'
                                    }
                                }} >
                                {slotsData &&  slotsData.C.map((rows) => (
                                    <Paper className='paper' style={{ backgroundColor: rows.selected && '#416e31' }} elevation={3}
                                        onClick={!rows.selected ? () => {
                                            handleOpen()
                                            setSlotid(rows._id)
                                        } : ''} />
                                ))}
                            </Box>
                        </div>
                        <Divider className='divider' orientation="vertical" flexItem />
                        <div className='boxdown4'>

                            <Box className='box'
                                sx={{
                                    display: 'flex', flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        m: 2,
                                        width: 90,
                                        height: 90,
                                        backgroundColor: '#d6ffc7'
                                    }
                                }} >

                                {slotsData  && slotsData.D.map((rows) => (
                                    <Paper className='paper' style={{ backgroundColor: rows.selected && '#416e31' }} elevation={3}
                                        onClick={!rows.selected ? () => {
                                            handleOpen()
                                            setSlotid(rows._id)
                                        } : ''} />
                                ))}
                            </Box>

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description">
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Choose a company
                                    </Typography>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">name</InputLabel>
                                            <Select
                                            value={selectedCompany}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Company">
                                                    onChange={(e) => setSelectedCompany(e.target.value)}
                                                {applicationData.map((data) => (

                                                    <MenuItem value={data._id}>{data.status === 'Approved' && data.name}</MenuItem>
                                                ))}

                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Button variant="contained" sx={{ mt: 4, float: "right" }} 
                                    // onClick={()=>{
                                    //     handleClose()
                                    //     selectSlot()
                                    //     }}
                                    >Select</Button>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default BookingSlots