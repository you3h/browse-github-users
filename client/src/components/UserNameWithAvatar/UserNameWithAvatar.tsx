interface UserNameWithAvatarProps {
  userName: string;
  avatarUrl: string;
}

export const UserNameWithAvatar = ({
  userName,
  avatarUrl,
}: UserNameWithAvatarProps) => {
  return (
    <div className='flex gap-2 items-center'>
      <img className='rounded-full h-8 w-8' src={avatarUrl} alt='avatar`' />
      <span>{userName}</span>
    </div>
  );
};
