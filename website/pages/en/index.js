/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashSnapshooterContainer = props => (
      <div className="homeContainer homeSnapshooterContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const SnapshooterLogo = props => (
      <div className="section logo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className={props.className} href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashSnapshooterContainer>
        <div className="inner">
          <SnapshooterLogo
            img_src={`${baseUrl}img/logo_sl_snapshooter_glow.png`}
          />
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button className="button button-primary" href={docUrl("get-started")}>Get Started</Button>
            <Button className="button button-secondary" href={docUrl("introduction")}>Learn More</Button>
          </PromoSection>
        </div>
      </SplashSnapshooterContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        margin={props.margin}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align={props.align}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: "center" }}
      >
        <h1>A snapshot test utility to simplify your tests</h1>
        <MarkdownBlock>
          Snapshooter is a flexible .Net testing tool to simplify the validation
          of your test results in your unit / integration tests. It creates
          simply a snapshot of your test result and stores it alongside of your
          test. When the test is executed again, the snapshooter will compare
          the actual test result with the stored snapshot. If both are the same,
          the test will pass.
        </MarkdownBlock>
        <MarkdownBlock>
          Snapshooter is based on the idea of **[Jest Snapshot
          Testing](https://jestjs.io/docs/en/snapshot-testing/)**
        </MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block layout="threeColumn" align="left" margin="30">
        {[
          {
            content: `\`\`\`csharp

// arrange
var serviceClient = new ServiceClient();

// act
TestPerson person = serviceClient.CreatePerson(...);

// assert
Assert.IsEqual(person.Firstname, "David");
Assert.IsEqual(person.Lastname, "Smith");
Assert.IsEqual(person.Age, 30);
Assert.IsEqual(person.Size, 182.5214);
Assert.IsEqual(person.CreationDate, DateTime.Parse(...));
Assert.IsEqual(person.DateOfBirth, DateTime.Parse(...));

\`\`\`
`
          },
          {
            title: "**Reduce your asserts in your test**",
            content: `Instead of writing multiple asserts within your test assert
            section, just reduce it to one assert.

Sometimes we receive a test result object with several properties, 
and all of them have to be checked... Now instead of writing for each property 
an assert, just validate all properties at once with a snapshot.`
          },
          {
            content: `\`\`\`csharp

// arrange
var serviceClient = new ServiceClient();

// act
TestPerson person = serviceClient.CreatePerson(...);

// assert
Snapshot.Match(person);






\`\`\`
`
          }
        ]}
      </Block>
    );

    const GetStarted = () => (
      <Block layout="twoColumn" background="light" align="left">
        {[
          {
            title: "**Get started in seconds**",
            content: `With Snapshooter you need just two commands to get a 
            snapshot test validation running in your test project.

Install the snapshooter nuget package within your test project:

\`\`\`sh
dotnet add package Snapshooter.Xunit
\`\`\`


Assert the result in your test with the **Snapshot.Match** command:
\`\`\`csharp
[Fact]
public void CreatePerson_VerifyPersonBySnapshot_SuccessfulVerified()
{
    // arrange
    var serviceClient = new ServiceClient();

    // act
    TestPerson person = serviceClient.CreatePerson(
        Guid.Parse("2292F21C-8501-4771-A070-C79C7C7EF451"), "David", "Mustermann");

    // assert
    Snapshot.Match(person);
}
\`\`\`
`
          },
          {
            image: `${baseUrl}img/SnapshotJson.jpg`,
            imageAlign: "right"
          }
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <TryOut />
          <GetStarted />
        </div>
      </div>
    );
  }
}

module.exports = Index;
