import Accordion from 'react-bootstrap/Accordion';


const Experience = () => {
    return (
        <div>
        <hr></hr>
        <h2>Experience</h2>
        <p>Here you can find out more about my work and volounteering experience.</p>
        <Accordion defaultActiveKey={['0']} style={{marginTop:"1%"}} alwaysOpen>
        <Accordion.Item eventKey="0">
            <Accordion.Header><b>A-level Tutor | Private & MyTutor.co.uk | London | 2022-2023</b></Accordion.Header>
            <Accordion.Body style={{textAlign: "left"}}>
            Delivered lessons to A-level students in Mathematics and Computer Science. Privately, this involved managing my
schedule, coordinating the flow of information between parents and students, and managing payments.
In both settings, this involved planning lessons, setting up the learning environment and ensuring the students are
engaged.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header><b>R&D Intern | Eppendorf Cryotech Ltd. | Maldon, Essex | July-September 2022</b></Accordion.Header>
            <Accordion.Body style={{textAlign: "left"}}>
            Involved in the pre-launch performance testing of 50+ ULT freezers and validation of new ideas for existing products;
worked and closely collaborated with the Global Marketing team in Germany on certifying Cryotech freezers with a
renowned laboratory sustainability label. Made use of Solidworks, MS Office, Grant data-loggers and oscilloscopes.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
    )
}

export default Experience