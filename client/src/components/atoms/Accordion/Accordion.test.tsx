import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('Accordion Component', () => {
  const title = 'Accordion Title';
  const content = 'This is the content of the accordion.';

  it('renders with the correct title', () => {
    render(<Accordion title={title}>{content}</Accordion>);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('displays content when opened', () => {
    render(<Accordion title={title}>{content}</Accordion>);

    fireEvent.click(screen.getByText(title));
    expect(screen.getByText(content)).toBeVisible();
  });

  it('has a rotating caret icon when opened', () => {
    render(<Accordion title={title}>{content}</Accordion>);

    const caretIcon = screen.getByRole('img');
    expect(caretIcon).toHaveClass('rotate-0');

    fireEvent.click(screen.getByText(title));
    expect(caretIcon).toHaveClass('rotate-180');
  });
});
