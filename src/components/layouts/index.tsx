import React, { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="">{children}</div>;
};

const Header = () => {
  return (
    <header>
      <button>Account</button>
    </header>
  );
};

export const Layout = {
  Container,
  Header,
};
