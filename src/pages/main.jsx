import React from 'react';
import HeaderCrud from '../components/header';
import RegisterTeacherDialog from '../components/register_teacher_dialog';
import { db } from '../firebase';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore/lite';

import Swal from 'sweetalert2';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { mdiDeleteOutline } from '@mdi/js';
import { mdiPencil } from '@mdi/js';
import IconMd from '@mdi/react'

import Button from '@material-ui/core/Button';
import Grid from '@mui/material/Grid';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


const MainCrud = () => {
    const [openFormRegisterDialog, setOpenFormRegisterDialog] = React.useState(false);

    const [dataFirebase, setDataFirebase] = React.useState([]);
    const [flagEdit, setFlagEdit] = React.useState(false);
    const [dataEdit, setDataEdit] = React.useState({});
    const [currentId, setCurrentId] = React.useState("");

    React.useEffect(() => {
        getDataTeacher();
    }, []);



    const handleOpenFormDialog = () => {
        setOpenFormRegisterDialog(true);
    }

    const handleCloseFormDialos = () => {
        setFlagEdit(false);
        setOpenFormRegisterDialog(false);
    }





    const getDataTeacher = async () => {
        const teacherCollection = collection(db, 'teacher');
        const teacherSnapshot = await getDocs(teacherCollection);
        const getData = [];

        const teacherList = teacherSnapshot.docs.map((doc) =>
            getData.push({
                "id": doc.id,
                ...doc.data(),
            }));

        setDataFirebase(getData);
        // console.log("getData: ", getData);
        return teacherList;
    };

    const postDataTeacher = async (data) => {

        if (currentId === "") {
            const docRef = await addDoc(collection(db, "teacher"), data);
            // console.log("Document written with ID: ", docRef.id);
        } else {
            const docRef = doc(db, "teacher", currentId);
            await updateDoc(docRef, data);
        }

        setCurrentId("");
        getDataTeacher();
    }



    const deleteDataTeacher = async (id) => {
        await deleteDoc(doc(db, "teacher", id));
        getDataTeacher();
    }

    const handleDelete = (id) => {
        console.log('Eliminar: ', id);

        const swalWithBootstrapButtons = Swal.mixin({
            buttonsStyling: true
        })
        swalWithBootstrapButtons.fire({
            title: 'CONFIRMAR ELIMINACIÓN',
            text: "¿Está seguro de eliminar?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FE0C19',
            cancelButtonColor: '#70A3C3',
            cancelButtonText: 'No',
            confirmButtonText: 'Si',

        }).then((result) => {
            if (result.isConfirmed) {
                deleteDataTeacher(id);
                swalWithBootstrapButtons.fire(
                    'Eliminado!',
                    'Haz eliminado un dato.',
                    'success'
                )
            }
        })
    }

    const handleEdit = (element) => {
        console.log("editar: ", element);
        setFlagEdit(true);
        setDataEdit(element);
        setCurrentId(element.id);

        setOpenFormRegisterDialog(true);
    }

    return (
        <div>
            <HeaderCrud />
            <br />
            <Button variant="outlined"  className="btnSuccess" onClick={handleOpenFormDialog}>Agregar</Button>

            <Grid container spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={8}>
                    <MaterialTable
                        icons={tableIcons}
                        style={{ boxShadow: 'unset', borderBottom: 'unset' }}
                        title=''
                        columns={[
                            { title: 'Nombres', field: 'nameTeacher' },
                            { title: 'Apellidos', field: 'lastNameTeacher' },
                            { title: 'DNI', field: 'dniTeacher' },
                            { title: 'Sexo', field: 'genderTeacher.name_gender' },
                        ]}
                        data={dataFirebase}
                        actions={[
                            rowData => ({
                                icon: () => <IconMd path={mdiPencil} size={1} />,
                                tooltip: 'Editar',
                                onClick: (event, rowData) => { handleEdit(rowData) }

                            }),

                            rowData => ({
                                icon: () => <IconMd path={mdiDeleteOutline} size={1} />,
                                tooltip: 'Eliminar',
                                onClick: (event, rowData) => { handleDelete(rowData.id) }

                            }),
                        ]}
                        options={{
                            actionsColumnIndex: -1,
                            selection: false,
                            search: false,
                            headerStyle: {
                                backgroundColor: '#f8f8f8',
                            },
                        }}
                        localization={{
                            header: {
                                actions: ''
                            },
                            pagination: {
                                firstAriaLabel: 'Primera página',
                                firstTooltip: 'Primera página',
                                labelDisplayedRows: '{from}-{to} de {count}',
                                labelRowsPerPage: 'Filas por página:',
                                labelRowsSelect: 'filas',
                                lastAriaLabel: 'Ultima página',
                                lastTooltip: 'Ultima página',
                                nextAriaLabel: 'Pagina siguiente',
                                nextTooltip: 'Pagina siguiente',
                                previousAriaLabel: 'Pagina anterior',
                                previousTooltip: 'Pagina anterior',
                            },
                        }}
                    />
                </Grid>
            </Grid>



            <RegisterTeacherDialog
                open={openFormRegisterDialog}
                handleClose={handleCloseFormDialos}
                // getData={getDataTeacher}
                postData={postDataTeacher}
                flagEdit={flagEdit}
                dataEdit={dataEdit}
            />
        </div>
    )
}

export default MainCrud;