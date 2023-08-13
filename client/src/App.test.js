import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

test('submit button works', () => {
  const { getByText } = render(<TaskForm />);
  const submitButton = getByText('Submit');
  fireEvent.click(submitButton);
});
