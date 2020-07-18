import React from 'react';

export default function withContext(WrappedComponent) {
  return function() {
    return (
      <>
        <WrappedComponent />
      </>
    );
  };
}