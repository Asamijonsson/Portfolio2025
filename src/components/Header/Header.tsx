'use client';

interface HeaderI {
  title: string;
}

export const Header = ({
  title }: HeaderI) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}