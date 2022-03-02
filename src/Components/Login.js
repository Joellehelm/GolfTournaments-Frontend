import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login(props) {
    return (
        <div className="login">
            <Form>
                <div className="login-title">Login</div>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="username"
                        placeholder="Enter Username"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="switch-login">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                    <div className="login-link" onClick={() => props.switch()}>
                        Sign Up
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default Login
