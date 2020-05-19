import React from 'react';
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import '../App.scss'

//The Demo User's data
const DemoUser = {
    name: 'John Smith'
}

//Other demo person with the data
const DemoPerson = {
    matchPercent: '99.23%',
    name: 'Joe Mama',
    email: 'joemama3241@gmail.com',
    sleepPref: '3am',
    wakingPref: 'Just in Time',
    visitorPref: 'Only a few',
    personalSpace: 'Mostly Neat',
    messyFloor: '14%',
    sharing: 'All my stuff is yours!',
    bio: 'we chillin',
    timeInRoom: 'I do be a roomrat doe',
    doingInRoom: 'gamesgamesgames'
}
//Array filled with multiple demo people
const SampleDataArray = [DemoPerson, DemoPerson, DemoPerson, DemoPerson, DemoPerson, DemoPerson, DemoPerson]

//Person Information Modal
class PersonModal extends React.Component {
    closeModal = e => {
        this.props.closeModal && this.props.closeModal(e)
    }

    render(){
        if(!this.props.show){
            return null
        }
        return(
            <Modal show={this.props.show} onHide={this.closeModal} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.person.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid>
                        <Row>
                            <Col>
                                <Row className="mb-3">
                                    <div className='rounded-pill bg-warning text-center text-dark' style={{'width': '100px'}}>
                                        <p className='my-auto'>{this.props.person.matchPercent}</p>
                                    </div>
                                </Row>
                                <Row className="mb-3">
                                    Sleep Preference: {this.props.person.sleepPref} <br/>
                                    Waking Preference: {this.props.person.wakingPref} <br/>
                                    Visitor Preference: {this.props.person.visitorPref} <br/>
                                    Personal Space: {this.props.person.personalSpace} <br/>
                                    Messy Floor: {this.props.person.messyFloor} <br/>
                                    Sharing: {this.props.person.sharing} <br/>
                                </Row>
                                <Row>
                                    <strong>Time Spent in Room: </strong> &nbsp;
                                    <p>{this.props.person.timeInRoom}</p>
                                </Row>
                                <Row>
                                    <strong>What Doing in Room: </strong> &nbsp;
                                    <p>{this.props.person.doingInRoom}</p>
                                </Row>
                            </Col>
                            <Col>
                                <Row className='justify-content-center mb-3'>
                                    <h3 className='text-center' style={{'width': '100%'}}>{this.props.person.name}</h3>
                                    <small className='text-muted'>{this.props.person.email}</small>
                                </Row>
                                <Row className='justify-content-center'>
                                    <strong>Bio:</strong> <br /> &nbsp;
                                    <p>{this.props.person.bio}</p>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        )
    }
}

//Should pass in personData prop
class PersonInfo extends React.Component {
    state = { modalShow: false }
    showModal = e => {
        this.setState(
            { modalShow: !this.state.modalShow }
        )
    }

    render(){
        return(
            <div>
                <PersonModal show={this.state.modalShow} person={this.props.personData} closeModal={this.showModal}/>
                <Card className='bg-primary text-white' onClick={e => {this.showModal()}}>
                    <Card.Body>
                        <Card.Title className='float-right'>{this.props.personData.name}</Card.Title>
                        <div className='rounded-pill bg-warning text-center text-dark' style={{'max-width': '100px'}}>
                            <p>{this.props.personData.matchPercent}</p>
                        </div>
                        <Card.Text>
                            Sleep Preference: {this.props.personData.sleepPref} <br/>
                            Waking Preference: {this.props.personData.wakingPref} <br/>
                            Visitor Preference: {this.props.personData.visitorPref} <br/>
                            Personal Space: {this.props.personData.personalSpace} <br/>
                            Messy Floor: {this.props.personData.messyFloor} <br/>
                            Sharing: {this.props.personData.sharing} <br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

//default props for person info
PersonInfo.defaultProps = {
    personData: { //Same info as Demo Person
        matchPercent: '99.23%',
        name: 'Joe Mama',
        email: 'joemama3241@gmail.com',
        sleepPref: '3am',
        wakingPref: 'Just in Time',
        visitorPref: 'Only a few',
        personalSpace: 'Mostly Neat',
        messyFloor: '14%',
        sharing: 'All my stuff is yours!',
        bio: 'we chillin',
        timeInRoom: 'I do be a roomrat doe',
        doingInRoom: 'gamesgamesgames'
    }
 }

function Dashboard() {
    return (
    <div>
        {/**Header Content*/}
        <Container fluid>
            <Row>
                <Col>
                    <Row>
                        <Col>matchTAMS</Col>
                    </Row>
                    <Row>
                        <Col><h1 className='display-5'>{DemoUser.name}</h1></Col>
                    </Row>
                </Col>
                <Col>
                    <Button variant="outline-primary" size='lg' className='float-right'>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                </Col>
            </Row>
        </Container>

        {/** Main Dashboard Content*/}
        <Container fluid>
            <Row>
                {SampleDataArray.map((person, i) => {
                    return(
                        <Col md='4' s='12' className='mt-3'>
                            <PersonInfo personData={person} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </div>)
}

export default Dashboard;