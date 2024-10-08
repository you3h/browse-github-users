import { render, screen } from '@testing-library/react';
import { UserNameWithAvatar } from './UserNameWithAvatar';

describe('UserNameWithAvatar Component', () => {
  const userName = 'John Doe';
  const avatarUrl = 'https://example.com/avatar.jpg';

  it('renders with the correct user name', () => {
    render(<UserNameWithAvatar userName={userName} avatarUrl={avatarUrl} />);
    expect(screen.getByText(userName)).toBeInTheDocument();
  });

  it('renders with the correct avatar image', () => {
    render(<UserNameWithAvatar userName={userName} avatarUrl={avatarUrl} />);
    const avatarImage = screen.getByAltText('avatar`');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', avatarUrl);
  });

  it('renders with the correct structure', () => {
    const { container } = render(
      <UserNameWithAvatar userName={userName} avatarUrl={avatarUrl} />
    );
    expect(container.firstChild).toHaveClass('flex gap-2 items-center');
  });
});
