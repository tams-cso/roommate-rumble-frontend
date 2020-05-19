import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap'
import '../App.scss'

//The Demo User's data
const DemoUser = {
    name: 'John Smith'
}

//Other demo person with the data
const DemoPerson = {
    name: 'Joe Smith',
    sleepPref: '3am',
    wakingPref: 'Just in Time',
    visitorPref: 'Only a few',
    personalSpace: 'Mostly Neat',
    messyFloor: '14%',
    sharing: 'All my stuff is yours!',
    bio: 'I just be boolin rn',
    matchPercent: '99.23%'
}
//Array filled with multiple demo people
const SampleDataArray = [DemoPerson, DemoPerson, DemoPerson, DemoPerson, DemoPerson, DemoPerson, DemoPerson]

//Should pass in personData prop
class PersonInfo extends React.Component {
    render(){
        return(
            <Card className='bg-primary text-white'>
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
        )
    }
}
//default props for person info
PersonInfo.defaultProps = {
    personData: { //Same info as Demo Person
        name: 'Joe Smith',
        sleepPref: '3am',
        wakingPref: 'Just in Time',
        visitorPref: 'Only a few',
        personalSpace: 'Mostly Neat',
        messyFloor: '14%',
        sharing: 'All my stuff is yours!',
        matchPercent: '99.23%'
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
                        <Col><h1>{DemoUser.name}</h1></Col>
                    </Row>
                </Col>
                <Col>
                    <button className='float-right'>
                        OKAY MATE
                    </button>
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