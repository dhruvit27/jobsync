import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';


const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle password reset
    console.log('Password reset:', { newPassword, confirmPassword });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '500px' }}>
      <Card className="p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <h2 className="text-center mb-3 mt-0">Password Reset</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="new-password" className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="confirm-password" className="mb-3">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <div className="text-center mb-3">
              <small className="text-muted">
                At least 16 characters OR at least 8 characters including a number and a letter.
              </small>
            </div>
            <Button className="w-100" type="submit">Set Password</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PasswordReset;
