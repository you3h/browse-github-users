import { twMerge } from 'tailwind-merge';

export type SkeletonLoadingProps = {
  className?: string;
};

export const SkeletonLoading = ({ className }: SkeletonLoadingProps) => {
  return (
    <div
      className={twMerge(
        `animate-pulse bg-gray-200 dark:bg-gray-300 rounded `,
        className
      )}
    />
  );
};
