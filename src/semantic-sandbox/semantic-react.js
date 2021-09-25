import React from "react";
// import ReactDOM from "react-dom";
import {
  Header,
  Container,
  Button,
  Icon,
  Label,
  Form,
  Divider,
  Breadcrumb,
  Segment,
} from "semantic-ui-react";

function SemanticReact() {
  const sections = [
    { key: "Home", content: "Home", link: true },
    { key: "Store", content: "Store", link: true },
    { key: "Shirt", content: "T-Shirt", active: true },
  ];

  return (
    <div>
      <Container>
        <Header as="h1">Semantic React Sandbox</Header>

        <hr />

        <Breadcrumb icon="right angle" sections={sections} />

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
        <Button basic size="massive" color="green" content="Green" />
        <Button basic size="huge" color="teal" content="Teal" />
        <Button basic size="big" color="blue" content="Blue" />
        <Button basic size="large" color="violet" content="Violet" />
        <Button basic size="medium" color="purple" content="Purple" />
        <Button basic size="small" color="pink" content="Pink" />
        <Button basic size="tiny" color="brown" content="Brown" />
        <Button basic size="mini" color="grey" content="Grey" />
        <Button basic loading color="black" content="Black" />

        <hr />

        <Button active>Active</Button>
        <Button disabled>Disabled</Button>

        <hr />

        <Button basic color="pink">
          Read More
        </Button>

        <hr />

        <Header as="h3">Same as block-level button in Bootstrap</Header>
        <Button fluid>Fits to Container</Button>

        <hr />

        <Button icon>
          <Icon name="recycle" />
        </Button>

        <hr />

        <Label as="a" content="Mail" icon="mail" />

        <hr />

        <Form>
          <Form.Field inline>
            <input type="text" placeholder="Username" />
            <Label pointing="left">Enter a value</Label>
          </Form.Field>
          <Divider />
        </Form>

        <hr />

        <Segment>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          corporis voluptatibus laboriosam veritatis dolore ipsum fugiat
          voluptatem cumque nulla ad quibusdam quam cum, expedita aspernatur
          dolores beatae natus perspiciatis ut!
        </Segment>
      </Container>
    </div>
  );
}

export default SemanticReact;
