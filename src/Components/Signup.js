import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Signup(props) {
    return (
        <div className="sign-up">
            <Form>
                <div className="login-title">Sign Up</div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="username"
                        placeholder="Enter Username"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="switch-login">
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>

                    <div className="login-link" onClick={() => props.switch()}>
                        Login
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default Signup
