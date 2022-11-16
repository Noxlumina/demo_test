import React from "react";

export type CardProps = {
  title: string;
  body: string;
  footer?: string;
  buttonLabel?: string;
  buttonAction: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Card = ({
  title,
  body,
  footer,
  buttonLabel,
  buttonAction,
}: CardProps) => {
  return (
    <>
      <div className="card-title">{title}</div>
      <div className="card-body">{body}</div>
      {footer && <div className="card-footer">{footer}</div>}
      {buttonLabel && <button onClick={buttonAction}>{buttonLabel}</button>}
      
    </>
  );
};

//
