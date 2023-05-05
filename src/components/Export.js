import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './StyleExport.css';
import banniere from '../images/baniere.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

export default function Export() {
    return (
        <div>
            {/* Banniere */}
            <div id='Banniere'>
                <img id='banniere' src={banniere} alt='Banniere' />
            </div>

            {/* Titre */}
            <center>
                <div id='titre'>
                    <h1>Nous exportons vers les 5 continents avec 10 ans d'expériences</h1>
                    <p>Vers les Etats-Unis, l'Europe et le Moyen-Orient.</p>
                </div>
            </center>

            <Container id='Container'>
                <Row>
                    <Col><text>Exportons vers les 5 continents avec une expérience de plus de 10 ans.
                        Nous avons développé un réseau de partenaires d'une grande expérience et de savoir-faire.
                        Un écosystème qui regroupe à la fois des spécialistes en cosmétique,
                        des spécialistes en logistique (transporteurs, Transitaire, Déclarants en Douane...)</text></Col>
                    <Col><img src={img1} alt='Image 1' /></Col>
                </Row>

                <Row>
                    <Col><img src={img2} alt='Image 2' /></Col>
                    <Col><text>Bénéficions d'une grande notoriété auprès des instances étatiques qui encadrent
                        le processus à l'export : Douanes Maroc, Douanes Pays de destination, EACCE, Chambres de Commerce,
                        Services économiques des consulats, ONSSA, DMP ...</text></Col>
                </Row>

                <Row>
                    <Col><img src={img3} alt='Image 3' /></Col>
                    <Col><h1>Formalités</h1>
                        <text>Nous répondons à toutes conditions d'export exigées par l'Administration marocaine :
                            <span id='text_bold'> Enregistrement auprès de la DMP <br></br>
                                EACCE<br></br>
                                Enregistrement au niveau de la base de données de la douane<br></br>
                                Chambre de Commerce ...</span></text></Col>
                </Row>
            </Container>


        </div>
    )
}
