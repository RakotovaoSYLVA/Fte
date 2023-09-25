import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { FaRegEdit, FaSearch, FaTrashAlt } from 'react-icons/fa';

import "./pGame.css";

export default function BasicTable() {
  const [data1, setData1] = useState([]);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const dark = false;
  const [formValues, setFormValues] = useState({
    id_lg: '',
    name_pg: '',
    number_pg: '',
    photo_pg: '',
    mail_pg: '',
    phone_pg: '',
    payment_pg: '',
    nom_game: ''
  });

  const handleViewClick = (item) => {
    setSelectedItem(item);
    setOpenViewModal(true);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setFormValues({
      id_pg: item.id_pg,
      id_lg: item.id_lg,
      name_pg: item.name_pg,
      number_pg: item.number_pg,
      photo_pg: item.photo_pg,
      mail_pg: item.mail_pg,
      phone_pg: item.phone_pg,
      payment_pg: item.payment_pg,
      nom_game: item.nom_game
    });
    setOpenEditModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(`Champ ${name} mis à jour avec la valeur : ${value}`);
  };
  
  const handleEdit = (event) => {
    event.preventDefault();
    const data = {
      id_lg: formValues.id_lg,
      name_pg: formValues.name_pg,
      number_pg: formValues.number_pg,
      photo_pg: formValues.photo_pg,
      mail_pg: formValues.mail_pg,
      phone_pg: formValues.phone_pg,
      payment_pg: formValues.payment_pg,
      nom_game: formValues.nom_game
    };
        axios.put(`http://localhost:8081/tsirionantsoa_fte/edit_participant/${selectedItem.id_pg}`, data)
        .then(res => {
            console.log('Données mises à jour avec succès', res.data);
            setOpenEditModal(false); // Fermer le modal après la modification
            alert('Données mises à jour avec succès'); // Afficher une alerte
            navigate('/participant_game')
        })
        .catch(err => {
            console.error('Erreur lors de la mise à jour des données :', err);
        });

  };


  useEffect(() => {
    axios.get('http://localhost:8081/tsirionantsoa_fte/participant_game')
      .then((response) => {
        setData1(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  const handleCreate = () =>{
    setOpenCreateModal(true);
  }

  return (
    <div className="Table">
      <h3>Liste des Participants jeux</h3>
      <div style={{
                display: 'flex', flexDirection: 'row', fontSize: 15, color: dark ? 'white' : 'black',
                gap: 5, background: dark ? '#00000067' : '#ffffff67', padding: 10, borderRadius: 15,
                justifyContent: 'space-between', paddingInline: 25, alignItems: 'center', height: 50,
            }}>
                <div>
                    <button style={{
                        border: 'none', outline: 'none', cursor: 'pointer',
                        fontSize: 14, height: 40, paddingInline: 15, borderRadius: 8,
                        backgroundColor: dark ? '#00000067' : '#ffffff67', color: dark ? 'white' : 'black',
                    }} type="submit" onClick={() => handleCreate()}>Nouveau Participants Games</button>
                </div>
                
                <div>
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        height: 40, width: 220, paddingInline: 10, background: dark ? '#00000067' : '#ffffff67',
                        borderRadius: 50,
                    }}>
                        <FaSearch />
                        <input placeholder='Recherche ...' style={{
                            width: '80%', height: 30, border: 'none', outline: 'none', color: dark ? 'white' : 'black',
                            fontSize: 12, background: 'transparent', paddingInline: 8, borderRadius: 3,
                        }} />
                    </div>
                </div>
                
            </div>
      
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 920 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom_Game</TableCell>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="left">Téléphone</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {Array.isArray(data1) && data1.map((row) => (
              <TableRow
                key={row.id_lg}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id_lg}
                </TableCell>
                <TableCell align="left">{row.name_pg}</TableCell>
                <TableCell align="left">{row.number_pg}</TableCell>
                <TableCell align="left">{row.phone_pg}</TableCell>
                <TableCell align="left">{row.mail_pg}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell align="left">
                  <IconButton color="primary" aria-label="Voir" onClick={() => handleViewClick(row)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="Modifier" onClick={() => handleEditClick(row)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" aria-label="Supprimer" >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal pour voir les détails */}
      <Dialog open={openViewModal} onClose={() => setOpenViewModal(false)}>
        <DialogTitle>Voir</DialogTitle>
        <DialogContent>
          <form>
            <div>
              <label htmlFor="nom">Nom_du_jeu :</label>
              <input type="text" id="nom" name="nom" value={selectedItem ? selectedItem.id_lg : ''} readOnly />
            </div>
            <div>
              <label htmlFor="prenom">Nom de Participant :</label>
              <input type="text" id="prenom" name="prenom" value={selectedItem ? selectedItem.name_pg : ''} readOnly />
            </div>
            <div>
              <label htmlFor="adresse">Nombre de participant :</label>
              <input type="text" id="adresse" name="adresse" value={selectedItem ? selectedItem.number_pg : ''} readOnly />
            </div>
            <div>
              <label htmlFor="telephone">Photos de participant :</label>
              <input type="text" id="telephone" name="telephone" value={selectedItem ? selectedItem.photo_pg : ''} readOnly />
            </div>
            <div>
              <label htmlFor="email">email de Participant :</label>
              <input type="email" id="email" name="email" value={selectedItem ? selectedItem.mail_pg : ''} readOnly />
            </div>
            <div>
              <label htmlFor="number">Telephone de Participant :</label>
              <input type="number" id="phone_pg" name="email" value={selectedItem ? selectedItem.phone_pg : ''} readOnly />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenViewModal(false)} color="primary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal pour modifier les données */}
      <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <DialogTitle>Modifier</DialogTitle>
        <DialogContent>
          <form onSubmit={handleEdit}>
            <div>
              <label htmlFor="id_lg">Nom_du_jeu :</label>
              <input type="text" id="id_lg" name="id_lg" value={selectedItem ? selectedItem.id_lg : ''} readOnly />
            </div>
            <div>
              <label htmlFor="name_pg">Nom de Participant :</label>
              <input type="text" id="name_pg" name="name_pg" value={formValues.name_pg} onChange={handleFormChange} />
            </div>
            <div>
              <label htmlFor="number_pg">Nombre de participant :</label>
              <input type="number" id="number_pg" name="number_pg" value={formValues.number_pg} onChange={handleFormChange} />
            </div>
            <div>
              <label htmlFor="photo_pg">Photos de participant :</label>
              <input type="text" id="photo_pg" name="photo_pg" value={formValues.photo_pg} onChange={handleFormChange} />
            </div>
            <div>
              <label htmlFor="mail_pg">Email de Participant :</label>
              <input type="email" id="mail_pg" name="mail_pg" value={formValues.mail_pg} onChange={handleFormChange} />
            </div>
            <div>
              <label htmlFor="phone_pg">Telephone de Participant :</label>
              <input type="number" id="phone_pg" name="phone_pg" value={formValues.phone_pg} onChange={handleFormChange} />
            </div>
            <DialogActions>
              <Button onClick={() => setOpenEditModal(false)} className="primary">
                Annuler
              </Button>
              <Button type="submit" className="secondary">
                Enregistrer
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Modal pour voir les Creations */}
      <Dialog open={openCreateModal} onClose={() => setOpenCreateModal(false)}>
        <DialogTitle>Nouveau Participants</DialogTitle>
        <DialogContent>
          <form>
            <div>
              <label htmlFor="nom">Nom_du_jeu :</label>
              <input type="text" id="nom" name="nom" value={selectedItem ? selectedItem.id_lg : ''} readOnly />
            </div>
            <div>
              <label htmlFor="prenom">Nom de Participant :</label>
              <input type="text" id="prenom" name="prenom" value='' readOnly />
            </div>
            <div>
              <label htmlFor="adresse">Nombre de participant :</label>
              <input type="text" id="adresse" name="adresse" value='' readOnly />
            </div>
            <div>
              <label htmlFor="telephone">Photos de participant :</label>
              <input type="text" id="telephone" name="telephone" value='' readOnly />
            </div>
            <div>
              <label htmlFor="email">email de Participant :</label>
              <input type="email" id="email" name="email" value='' readOnly />
            </div>
            <div>
              <label htmlFor="number">Telephone de Participant :</label>
              <input type="number" id="phone_pg" name="email" value='' readOnly />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCreateModal(false)} color="primary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function makeStyle(status) {
  return {
    color: status === 'Payé' ? 'green' : 'red',
    fontWeight: 'bold'
  };
}
