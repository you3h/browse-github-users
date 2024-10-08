import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  const name = 'test-input';
  const label = 'Test Label';
  const placeholder = 'Enter text here';

  it('renders with the correct label', () => {
    render(<Input name={name} label={label} />);
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it('renders with the correct placeholder', () => {
    render(<Input name={name} label={label} placeholder={placeholder} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('renders with the correct type', () => {
    render(<Input name={name} label={label} type='email' />);
    expect(screen.getByLabelText(label)).toHaveAttribute('type', 'email');
  });

  it('calls onChange handler when input value changes', () => {
    const handleChange = vi.fn();
    render(<Input name={name} label={label} onChange={handleChange} />);

    const input = screen.getByLabelText(label);
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('displays an error message when provided', () => {
    const errorMessage = 'This field is required';
    render(<Input name={name} label={label} error={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('does not display an error message when none is provided', () => {
    render(<Input name={name} label={label} />);
    expect(
      screen.queryByText(/This field is required/i)
    ).not.toBeInTheDocument();
  });
});
