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

        <hr />

        <Button content="Standard" basic />
        <Button basic color="red" content="Red" />
        <Button basic color="orange" content="Orange" />
        <Button basic color="yellow" content="Yellow" />
        <Button basic color="olive" content="Olive" />
        <Button basic color="green" content="Green" />
        <Button basic color="teal" content="Teal" />
        <Button basic color="blue" content="Blue" />
        <Button basic color="violet" content="Violet" />
        <Button basic color="purple" content="Purple" />
        <Button basic color="pink" content="Pink" />
        <Button basic color="brown" content="Brown" />
        <Button basic color="grey" content="Grey" />
        <Button basic color="black" content="Black" />

        <hr />

        <Button active>Active</Button>
        <Button disabled>Disabled</Button>
      </Container>
    </div>
  );
}

export default SemanticReact;
