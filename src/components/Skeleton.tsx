interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className = '' }: SkeletonProps) => {
  return (
    <div className={`bg-dark-surface animate-pulse rounded-xl ${className}`} />
  );
};

export const SkeletonCard = () => (
  <div className="bg-dark-card border border-white/5 rounded-2xl p-6 space-y-4">
    <Skeleton className="w-14 h-14 rounded-xl" />
    <Skeleton className="h-5 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
);

export const SkeletonImage = ({ className = '' }: SkeletonProps) => (
  <div className={`relative overflow-hidden rounded-2xl ${className}`}>
    <Skeleton className="w-full h-full" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
  </div>
);

export const SkeletonHero = () => (
  <div className="min-h-screen flex items-center justify-center bg-dark-bg px-6">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <Skeleton className="h-8 w-48 rounded-full" />
        <Skeleton className="h-16 w-3/4" />
        <Skeleton className="h-16 w-1/2" />
        <Skeleton className="h-20 w-full" />
        <div className="flex gap-4">
          <Skeleton className="h-12 w-40 rounded-lg" />
          <Skeleton className="h-12 w-36 rounded-lg" />
        </div>
        <div className="flex gap-8 pt-8 border-t border-white/10">
          <div className="space-y-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>
      <SkeletonImage className="aspect-[4/3]" />
    </div>
  </div>
);

export default Skeleton;
