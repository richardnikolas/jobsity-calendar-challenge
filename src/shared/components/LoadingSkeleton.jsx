import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export const LoadingSkeleton = () => {

  return (
    <>
      <Skeleton animation="wave" height={250} variant="rect" />
    </>
  );
};

export default LoadingSkeleton;