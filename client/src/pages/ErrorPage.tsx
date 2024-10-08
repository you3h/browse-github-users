type ErrorPageProps = {
  isFatal?: boolean;
};

export const ErrorPage: React.FC<ErrorPageProps> = ({ isFatal = false }) => {
  return (
    <div className='flex flex-col items-center gap-4 justify-center h-screen'>
      <span>
        {isFatal
          ? 'Something went wrong with the server, please refresh the page'
          : '404: The page you are looking for is not existing'}
      </span>
      <span
        className='border bg-gray-200  p-2 rounded-md hover:bg-gray-300 cursor-pointer'
        onClick={() => (window.location.href = '/')}
      >
        Go back home
      </span>
    </div>
  );
};
