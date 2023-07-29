import Accordion from 'react-bootstrap/Accordion';


const Education = () => {
    return (
        <div>
            <hr></hr>
            <h2>Education</h2>
            <p>Here you can find out more about my education.</p>
            <Accordion defaultActiveKey={['0']} style={{marginTop:"1%"}} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header><b>MEng Design Engineering | Imperial College London | 2022-present</b></Accordion.Header>
                <Accordion.Body style={{textAlign: "left"}}>
                Recent modules include:
                <ul>
                    <li>Computing 1 (Git, Linux Command Line, Python) – OOP in Python, version control and collaboration using GitHub.</li>
                    <li>Computing 2 (JavaScript, HTML, CSS, node.js) – functional programming full-stack development, API development, professional documentation with JSDoc, unit testing and UI and UX design.</li>
                    <li>Electronics 1 (microPython, ESP32/ESP8266) – foundations of circuit design and analysis, practical projects using Wi-Fi, BLE and an array of digital and analog sensors.</li>
                    <li>Human Centred Design Engineering (Fusion 360, Adobe CC, Arduino IDE) – group project comprising of user research, ideation, development, and the delivery of a final works-like and a looks-like prototype.</li>
                    <li>Engineering Mathematics (Wolfram Alpha, MATLAB) – foundations of mathematics in engineering, including: PDEs, optimisation, Laplace & Fourier transforms and finite methods.</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><b>A-levels | Sixth Form College Colchester | 2020-2022</b></Accordion.Header>
                <Accordion.Body style={{textAlign: "left"}}>
                Below are the qualifications gained during my studies at sixth form:
                <ul>
                    <li> A-level Mathematics – A*</li>
                    <li> A-level Computer Science – A*</li>
                    <li> A-level Physics – A*</li>
                    <li> A-level Design and Technology – A*</li>
                    <li> As-level Further Mathematics – A</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Education