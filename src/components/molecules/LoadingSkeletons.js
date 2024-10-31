import React from 'react';
import LoadingSkeleton from '../atoms/LoadingSkeleton';


const LoadingSkeletons = ({numberofCards}) => {
  return (
    <div className="text-center text-lg border-black min-h-[40vh] flex flex-col items-center justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {Array.from({ length: numberofCards }, (_, index) => (
        <LoadingSkeleton key={index}/>
      ))}
    </div>
  </div>
  );
};

export default LoadingSkeletons;
