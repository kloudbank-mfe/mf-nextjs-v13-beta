'use client'
// import '@module-federation/nextjs-mf/src/include-defaults';;

import Button from '#/ui/Button';
import React from 'react';

export default function BuggyButton() {
  const [clicked, setClicked] = React.useState(false);

  if (clicked) {
    throw new Error('Oh no! Something went wrong.');
  }

  return (
    <Button
      kind="error"
      onClick={() => {
        setClicked(true);
      }}
    >
      Trigger Error
    </Button>
  );
}
