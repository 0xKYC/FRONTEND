import React from "react";

export type ContainerProps = {
  border?: boolean;
  padding?: boolean;
  children: React.ReactNode;
};

export type ButtonProps = {
  color?: string;
  fixedWidth?: boolean;
  name?: string;
  type?: string;
  href?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type SvgIconProps = {
  src: string;
  width: string;
  height: string;
};

export type InputProps = {
  name: string;
  placeholder: string;
  t: any;
  type?: string;
  value?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
};
