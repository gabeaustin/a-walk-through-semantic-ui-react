import React from "react";
// import ReactDOM from "react-dom";
import { Header, Container, Button } from "semantic-ui-react";

function SemanticReact() {
  return (
    <div>
      <Container>
        <Header as="h1">Semantic React Sandbox</Header>

        <hr />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quo,
          distinctio molestias odit officia, quis delectus ipsam alias beatae
          eos voluptas blanditiis. Modi, magnam repudiandae ut laudantium
          debitis suscipit quae?
        </p>

        <hr />

        <Button>Read More</Button>
        <Button primary>Read More</Button>
        <Button secondary>Read More</Button>
        <Button positive>Read More</Button>
        <Button negative>Read More</Button>
      </Container>
    </div>
  );
}

export default SemanticReact;
