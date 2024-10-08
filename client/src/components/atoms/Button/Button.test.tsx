import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with the correct text', () => {
    render(<Button text='Click Me' onClick={() => {}} />);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button text='Click Me' onClick={handleClick} />);

    const button = screen.getByText(/click me/i);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when the disabled prop is true', () => {
    render(<Button text='Click Me' onClick={() => {}} disabled={true} />);

    const button = screen.getByText(/click me/i);
    expect(button).toBeDisabled();
  });

  it('does not call the onClick handler when disabled', () => {
    const handleClick = vi.fn();
    render(<Button text='Click Me' onClick={handleClick} disabled={true} />);

    const button = screen.getByText(/click me/i);
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies the correct variant classes', () => {
    const { rerender } = render(
      <Button text='Primary' onClick={() => {}} variant='primary' />
    );
    expect(screen.getByText(/primary/i)).toHaveClass('bg-blue-500');

    rerender(
      <Button text='Secondary' onClick={() => {}} variant='secondary' />
    );
    expect(screen.getByText(/secondary/i)).toHaveClass('bg-green-500');
  });

  it('applies fluid class when isFluid is true', () => {
    render(<Button text='Click Me' onClick={() => {}} isFluid={true} />);

    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass('w-full');
  });

  it('merges additional classes correctly', () => {
    render(
      <Button text='Click Me' onClick={() => {}} className='extra-class' />
    );

    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass('extra-class');
  });
});
