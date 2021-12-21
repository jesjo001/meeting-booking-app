import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 720,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function PreviewModal({ toggleModal, open }) {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div>

            <Modal
                open={open}
                onClose={toggleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '80ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Meeting Title" variant="outlined" />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '39ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField
                            id="date"
                            label="Meeting Date"
                            type="date"
                            defaultValue="2017-05-24"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true,
                            }}

                        />

                        <TextField
                            id="time"
                            label="Meeting Time"
                            type="time"
                            defaultValue="07:30"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            sx={{ width: 150 }}
                        />

                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '80ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-multiline-static"
                            label="Meeting Description"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                        />

                        <TextField
                            id="outlined-multiline-static"
                            label="Emails to invite to the meeting, separate by newline or comma (,)"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                        />

                        <div>

                            <FormControlLabel control={<Switch />} label="15Min  before" />
                            <FormControlLabel control={<Switch />} label="30Min before" />
                            <FormControlLabel control={<Switch />} label="45Min before" />
                        </div>


                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',

                    }} >
                        <Button onClick={toggleModal} variant="outlined">Cancel</Button>
                        <Button variant="secondary" color="#FAED98" style={{ backgroundColor: "#FAED98" }} endIcon={<SendIcon />} >Create</Button>
                    </Box>

                </Box>



            </Modal>
        </div>
    );
}
