import React from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormRegisterTeacher from './form_register_teacher';

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

const RegisterTeacherDialog = (props) => {

    return (
        <div>
            <Dialog
                onClose={props.handleClose}
                open={props.open}
                maxWidth="md"
            >

                {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={props.handleClose}>
                    {props.flagEdit ? "Editar registro" : "Registrar nuevo docente"}
                </BootstrapDialogTitle> */}

                <DialogTitle>
                    {props.flagEdit ? "Editar registro" : "Registrar nuevo docente"}
                </DialogTitle>

                <DialogContent>
                    <div className="popUp">
                        <FormRegisterTeacher 
                            handleClose={props.handleClose} 
                            getData={props.getData} 
                            postData={props.postData} 
                            flagEdit={props.flagEdit}
                            dataEdit={props.dataEdit}
                        />
                    </div>
                </DialogContent>

            </Dialog>
        </div>
    )
}

export default RegisterTeacherDialog
