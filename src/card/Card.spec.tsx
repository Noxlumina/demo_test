import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Card, CardProps } from "./Card";

describe("first", () => {
  const cardProps: CardProps = {
    body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    At, maiores nobis ad similique, molestiae delectus reiciendis possimus ipsa sunt impedit ut tempore,
    itaque dolorem voluptatem repellat! Excepturi quo magnam dolore.`,
    title: "maCarte",
    footer:"monFooter",
    buttonLabel:"monBoutton"
  };
  it("doit fournir un rendu", () => {
    render(<Card title={cardProps.title} body={cardProps.body} />);
    const card = screen.getByText("maCarte");
    expect(card).toBeInTheDocument();
  });
  it("doit afficher un titre dans une section avec classe card-title", () => {
    render(<Card title={cardProps.title} body={cardProps.body} />);
    const card = document.getElementsByClassName("card-title")[0];
    expect(card.textContent).toBe(cardProps.title);
  });
  it("doit afficher le body avec une section card-body", () => {
    render(<Card title={cardProps.title} body={cardProps.body} />);
    const card = document.getElementsByClassName("card-body")[0];
    expect(card.textContent).toBe(cardProps.body);
});
it("doit afficher le footer avec une section card-footer", () => {
    render(<Card title={cardProps.title} body={cardProps.body} footer={cardProps.footer}/>);
    const card = document.getElementsByClassName("card-footer")[0];
    expect(card.textContent).toBe(cardProps.footer);
});
it("ne doit pas  afficher le footer  si il y en a pas", () => {
    render(<Card title={cardProps.title} body={cardProps.body} />);
    const card = document.getElementsByClassName("card-footer")[0];
    expect(card).toBe(undefined);
});
it("doit afficher le bouton  dans une section card-button", () => {
    render(<Card title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel} />);
    const card = screen.getByText(cardProps.buttonLabel as string);
    expect(card).toBeInTheDocument();
});
it("ne doit pas  afficher le footer  si il y en a pas", () => {
    render(<Card title={cardProps.title} body={cardProps.body} />);
    const card = document.getElementsByTagName("button")[0];
    expect(card).toBe(undefined);
});
it("doit tester l'action du bouton qd on clique dessus", () => {
    //fonction espion
    const handleClick = jest.fn();
    render(<Card title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel} buttonAction={handleClick} />);
    const button = document.querySelector("button");
    //clique sur le bouton
    fireEvent.click(button!)
    //vérifie que la fonction a été appelé
    expect(handleClick).toBeCalled();
});
});
