import * as React from 'react';
import listGender from './../dataConstant/gender.json';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const FormRegisterTeacher = (props) => {

    const [nameTeacher, setNameTeacher] = React.useState("");
    const [lastNameTeacher, setLastNameTeacher] = React.useState("");
    const [dniTeacher, setDniTeacher] = React.useState("");
    const [genderTeacher, setGenderTeacher] = React.useState("");
    const [genderSelect, setGenderSelect] = React.useState({});

    const [nameTeacherError, setNameTeacherError] = React.useState(false);
    const nameTeacherHelperText = "Ingrese nombre";

    const [lastNameTeacherError, setLastNameTeacherError] = React.useState(false);
    const lastNameHelperText = "Ingrese apellidos";

    const [dniTeacherError, setDniTeacherError] = React.useState(false);
    const dniHelperText = "Ingrese DNI";

    const [genderTeacherError, setGenderTeacherError] = React.useState(false);
    const genderHelperText = "Seleccione sexo";

    // const dataInitial = {
    //     nameTeacher: "",
    //     lastNameTeacher: "",
    //     dniTeacher: "",
    //     genderTeacher: {}
    // }

    // const [dataTeacher, setDataTeacher] = React.useState(dataInitial);

    React.useEffect(() => {

        if (props.flagEdit) {
            setNameTeacher(props.dataEdit.nameTeacher);
            setLastNameTeacher(props.dataEdit.lastNameTeacher);
            setDniTeacher(props.dataEdit.dniTeacher);
            setGenderTeacher(props.dataEdit.genderTeacher.id);
            setGenderSelect(searchTypeRegister(parseInt(props.dataEdit.genderTeacher.id)));
        }

    }, []);

    const handleChangeName = (e) => {
        setNameTeacher(e.target.value);
    }

    const handleChangeDniTeacher = (e) => {
        setDniTeacher(e.target.value);
    }

    const handleChangeLastNameTeacher = (e) => {
        setLastNameTeacher(e.target.value);
    }

    const handleChangeGenderTeacher = (e) => {
        setGenderTeacher(e.target.value);
        setGenderSelect(searchTypeRegister(e.target.value));
    };

    const handleSaveService = async () => {
        var countEmpty = 0;
        if (nameTeacher === "") {
            setNameTeacherError(true);
            countEmpty++;
        }
        if (lastNameTeacher === "") {
            setLastNameTeacherError(true);
            countEmpty++;
        }
        if (dniTeacher === "") {
            setDniTeacherError(true);
            countEmpty++;
        }

        if (genderTeacher === "0" || genderTeacher === "") {
            setGenderTeacherError(true);
            countEmpty++;
        }

        if (countEmpty === 0) {
            setNameTeacherError(false);
            setLastNameTeacherError(false);
            setDniTeacherError(false);
            setGenderTeacherError(false);

            const data = {
                "nameTeacher": nameTeacher,
                "lastNameTeacher": lastNameTeacher,
                "dniTeacher": dniTeacher,
                "genderTeacher": genderSelect,
            };

            props.postData(data);
            handleCancel();
        }

    };

    const searchTypeRegister = (code) => {
        let typeRegister = {
            "id": "",
            "name_gender": ""
        };

        for (var i = 0; i < listGender.length; i++) {
            if (listGender[i].id === code) {
                typeRegister.name_gender = listGender[i].name_gender;
                typeRegister.id = listGender[i].id.toString();
            }
        }

        return typeRegister;
    }

    const handleCancel = () => {
        setNameTeacher("");
        setLastNameTeacher("");
        setDniTeacher("");
        setGenderTeacher("");

        // cerrando dialog
        if (props.handleClose != null) {
            props.handleClose();
        }
    }

    return (
        <div
            style={{ paddingLeft: "15px", paddingRight: "15px" }}
        >
            <h1>{props.title}</h1>
            <p style={{ marginBottom: 5, paddingRight: 10 }}>Nombre:</p>
            <TextField
                placeholder="Ingrese nombre"
                variant="outlined"
                style={{ width: '100%'}}
                size="small"
                error={nameTeacherError}
                helperText={nameTeacherError ? nameTeacherHelperText : ""}
                value={nameTeacher}
                onChange={handleChangeName}
            />
            <p style={{ marginBottom: 5, paddingRight: 10 }}>Apellidos:</p>
            <TextField
                placeholder="Ingrese apellidos"
                variant="outlined"
                style={{ width: '100%' }}
                size="small"
                error={lastNameTeacherError}
                helperText={lastNameTeacherError ? lastNameHelperText : ""}
                value={lastNameTeacher}
                onChange={handleChangeLastNameTeacher}
            />

            <p style={{ marginBottom: 5, paddingRight: 10 }}>DNI:</p>
            <TextField
                placeholder="Ingrese DNI"
                variant="outlined"
                style={{ width: '100%' }}
                size="small"
                error={dniTeacherError}
                helperText={dniTeacherError ? dniHelperText : ""}
                value={dniTeacher}
                onChange={handleChangeDniTeacher}
            />

            <p style={{ marginBottom: 5, paddingRight: 10 }}>Sexo:</p>
            <FormControl
                style={{ width: '100%', paddingTop: 5 }}
                // sx={{ m: 1, minWidth: "100%" }} 
                size="small">
                <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                    value={genderTeacher}
                    onChange={handleChangeGenderTeacher}
                    error={genderTeacherError}
                >
                    <MenuItem className="MuiButtonBase-root2" value="0">
                        <em>Seleccione</em>
                    </MenuItem>
                    <br/>
                    {
                        listGender.map((element) => {
                            return (<MenuItem className="MuiButtonBase-root2" value={element.id} key={element.id}>{element.name_gender.toUpperCase()}</MenuItem>);
                        })
                    }
                </Select>
                {
                    genderTeacherError ? (
                        <FormHelperText error>{genderHelperText}</FormHelperText>
                    ) : null
                }

            </FormControl>

            <Stack spacing={2} direction="row" justifyContent="space-around" style={{ marginTop: "15px" }}>
                <Button variant="outlined" color="success" className="btnSuccess" onClick={handleSaveService}>{props.flagEdit ? "Editar" : "Grabar"}</Button>
                <Button variant="outlined" color="error" className="btnCancel" onClick={handleCancel}>Cancelar</Button>
            </Stack>

        </div>
    );


}

export default FormRegisterTeacher;