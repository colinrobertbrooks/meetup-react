// import react
import React from 'react';

// import tags from spectacle core
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';

// import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// import theme
import createTheme from 'spectacle/lib/themes/default';

// import customized component from spectacle-code-slide
import CodeSlide from '../assets/components/CodeSlide/index';

// import components from assets
import Component from '../assets/components/Component';
import ComponentWithPropsContainer from '../assets/components/ComponentWithPropsContainer';
import ComponentWithState from '../assets/components/ComponentWithState';
import ComponentWithEvent from '../assets/components/ComponentWithEvent';

// require css
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

// require and load images
const images = {
  react: require('../assets/images/react-logo.png')
};
preloader(images);

// configure theme
const theme = createTheme({
  primary: '#f9f9f9', // white
  secondary: '#2d2d2d', // gray
  tertiary: '#61dafb', // blue
  quartenary: '#cc7a6f' // red
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress={'bar'}
        theme={theme}
        transition={['zoom', 'slide']}
        transitionDuration={500}
      >
        {/* cover */}
        <Slide
          bgColor="secondary"
          transition={['fade']}
        >
          <Image
            height={275}
            src={images.react}
          />
          <Heading
            size={2}
            lineHeight={1}
            textColor="tertiary"
          >
            React.js
          </Heading>
          <Text
            caps
            margin='15px 0 0'
            size={6}
            textColor="primary"
          >
            An introduction
          </Text>
        </Slide>
        {/* what is react? (quote) */}
        <Slide
          bgColor="secondary"
          transition={['fade']}
        >
          <Heading
            caps
            size={5}
            textColor="tertiary"
          >
            What is React?
          </Heading>
          <BlockQuote>
            <Quote>
              React is a declarative, efficient and flexible JavaScript{' '}
              library for building user interfaces.
            </Quote>
            <Cite>
              <Link
                href="https://facebook.github.io/react/docs/"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Docs
              </Link>
            </Cite>
          </BlockQuote>
        </Slide>
        {/* benefits (list) */}
        <Slide
          bgColor="secondary"
          textColor="primary"
          transition={['fade']}
        >
          <Heading
            caps
            size={5}
            textColor="tertiary"
          >
            Benefits
          </Heading>
          <List>
            <ListItem style={{ fontSize: '1.6rem' }}>
              It&apos;s a library (not a framework)
            </ListItem>
            <ListItem style={{ fontSize: '1.6rem' }}>
              It&apos;s (mostly) JavaScript (no templates, domain-specific language, etc)
            </ListItem>
            <ListItem style={{ fontSize: '1.6rem' }}>
              It&apos;s declarative (code describes &quot;what&quot; not &quot;how&quot;)
            </ListItem>
            <ListItem style={{ fontSize: '1.6rem' }}>
              It&apos;s component-based (composable, reusable, stateful)
            </ListItem>
            <ListItem style={{ fontSize: '1.6rem' }}>
              It&apos;s easy to maintain (markup and view logic live together)
            </ListItem>
            <ListItem style={{ fontSize: '1.6rem' }}>
              It has a unidirectional data flow (predictable)
            </ListItem>
            <ListItem style={{ fontSize: '1.6rem' }}>
              It updates automatically (as data changes over time)
            </ListItem>
            <ListItem style={{ fontSize: '1.6rem' }}>
              Its virtual DOM (imperative manipulations are fast and eficient)
            </ListItem>
            <ListItem style={{ fontSize: '1.6rem' }}>
              Its developer experience (excellent ecosystem and community)
            </ListItem>
          </List>
        </Slide>
        {/* prerequisites (list) */}
        <Slide
          bgColor="secondary"
          textColor="primary"
          transition={['fade']}
        >
          <Heading
            caps
            size={5}
            textColor="tertiary"
          >
            Prerequisites
          </Heading>
          <Text
            bold
            margin="25px 0 0"
            size={6}
            textAlign={'left'}
            textColor="primary"
          >
            Knowledge of (required):
          </Text>
          <List>
            <ListItem>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                HTML
              </Link>
              {' '}(including the{' '}
              <Link
                href="https://developer.mozilla.org/en-US/docs/Using_Web_Standards_in_your_Web_Pages/Using_the_W3C_DOM"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                DOM
              </Link>
              )
            </ListItem>
            <ListItem>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                JavaScript
              </Link>
              {' '} (including{' '}
              <Link
                href="https://babeljs.io/learn-es2015/"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                ES6
              </Link>
              )
            </ListItem>
          </List>
          <Text
            bold
            size={6}
            textAlign={'left'}
            textColor="primary"
          >
            Familiarity with (recommended):
          </Text>
          <List>
            <ListItem>
              <Link
                href="https://nodejs.org/"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Node.js
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://babeljs.io/"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Babel
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://webpack.github.io/"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                webpack
              </Link>
            </ListItem>
          </List>
        </Slide>
        {/* core concepts (list) */}
        <Slide
          bgColor="secondary"
          textColor="primary"
          transition={['fade']}
        >
          <Heading
            caps
            size={5}
            textColor="tertiary"
          >
            Core Concepts
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://facebook.github.io/react/docs/react-dom.html#render"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Render
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://facebook.github.io/react/docs/introducing-jsx.html"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                JSX
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href=" https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Component
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://facebook.github.io/react/docs/components-and-props.html#props-are-read-only"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Props
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://facebook.github.io/react/docs/lifting-state-up.html"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                State
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Lifecycle Methods
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://facebook.github.io/react/docs/events.html"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Synthetic Events
              </Link>
            </ListItem>
          </List>
          <Text
            fit
            italic
            margin="20px 0 0"
            style={{
              color: '#949494'
            }}

          >
            The examples that follow use React v15.5.4, which was the latest{' '}
            release at the time of this presentation.
          </Text>
        </Slide>
        {/* render (intro) */}
        <Slide
          bgColor="secondary"
          transition={['fade']}
        >
          <Heading
            size={1}
            lineHeight={1}
            textColor="primary"
          >
            Render
          </Heading>
          <Text
            italic
            fit
            margin='15px 0 0'
            textColor="tertiary"
          >
            The primary API for rendering into the DOM.
          </Text>
        </Slide>
        {/* render(code) */}
        <CodeSlide
          bgColor="secondary"
          code={require('raw-loader!../assets/code/render.example')}
          lang="js"
          ranges={[
            {
              loc: [0, 4],
              title: 'Render (code)'
            },
            {
              loc: [1, 2],
              title: 'Render (code)',
              note: 'Define a new element (in this case an <h1> with the innerHTML of "Hello, World!" using JSX).'
            },
            {
              loc: [2, 3],
              title: 'Render (code)',
              note: 'Specify a container in the DOM (in this case an existing element, such as a <div>, that has the id of "root").'
            },
            {
              loc: [0, 1],
              title: 'Render (code)',
              note: 'Mount the new element into the DOM as a child of the existing container element...'
            },
            {
              loc: [0, 1],
              title: 'Render (code)',
              note: '...unless it was previously mounted, in which case it will be updated if it changed (using the fewest mutations possible).'
            }
          ]}
          transition={['fade']}
        />
        {/* render (output) */}
        <Slide
          bgColor="secondary"
          textColor="primary"
          transition={['fade']}
        >
          <Heading
            caps
            size={5}
            textColor="tertiary"
          >
            Render (output)
          </Heading>
          <p
            style={{
              color: '#f9f9f9',
              marginBottom: '5px',
              textAlign: 'left'
            }}
          >
            Result:
          </p>
          <div
            style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              color: '#2d2d2d',
              padding: '1px 40px',
              textAlign: 'left'
            }}
          >
            <h1>Hello, World!</h1>
          </div>
        </Slide>
        {/* jsx (intro) */}
        <Slide
          bgColor="secondary"
          transition={['fade']}
        >
          <Heading
            size={1}
            lineHeight={1}
            textColor="primary"
          >
            JSX
          </Heading>
          <Text
            italic
            fit
            margin="15px 0 0"
            textColor="tertiary"
          >
            An optional, XLM/HTML-like syntactic sugar used to describe what the UI should look like.
          </Text>
        </Slide>
        {/* jsx (code panes) */}
        <Slide
          bgColor="secondary"
          textColor="primary"
          transition={['fade']}
        >
          <Heading
            caps
            size={5}
            textColor="tertiary"
          >
            JSX
          </Heading>
          <Layout>
            <Fill>
              <p
                style={{
                  color: '#f9f9f9',
                  marginBottom: '5px',
                  marginLeft: '10px',
                  textAlign: 'left'
                }}
              >
                Raw:
              </p>
              <div
                style={{
                  border: '1px solid #f9f9f9',
                  borderRadius: '6px',
                  margin: '0 10px'
                }}
              >
                <CodePane
                  lang="jsx"
                  source={require('raw-loader!../assets/code/jsxRaw.example')}
                />
              </div>
            </Fill>
            <Fill>
              <p
                style={{
                  color: '#f9f9f9',
                  marginBottom: '5px',
                  marginLeft: '10px',
                  textAlign: 'left'
                }}
              >
                Transformed:
              </p>
              <div
                style={{
                  border: '1px solid #f9f9f9',
                  borderRadius: '6px',
                  margin: '0 10px'
                }}
              >
                <CodePane
                  lang="js"
                  source={require('raw-loader!../assets/code/jsxTransformed.example')}
                />
              </div>
            </Fill>
          </Layout>
          <Text
            fit
            italic
            margin="20px 0 0"
            style={{
              color: '#949494'
            }}

          >
            JSX needs to be transformed (by a compiler like {' '}
            <Link
              href="https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-0&targets=&browsers=&builtIns=false&debug=false&code=%3Ch1%0D%0A%20%20className%3D%22your-class%22%0D%0A%3E%0D%0A%20%20Hello%2C%20World!%0D%0A%3C%2Fh1%3E"
              style={{
                color: 'inherit'
              }}
              target="_blank"
            >
              Babel
            </Link>
            ) before it can be used in the browser.
          </Text>
        </Slide>
        {/* component (intro) */}
        <Slide
          bgColor="secondary"
          transition={['fade']}
        >
          <Heading
            size={1}
            lineHeight={1}
            textColor="primary"
          >
            Component
          </Heading>
          <Text
            italic
            fit
            margin="15px 0 0"
            textColor="tertiary"
          >
            An independent, reusable piece of UI.
          </Text>
        </Slide>
        {/* component (code) */}
        <CodeSlide
          bgColor="secondary"
          code={require('raw-loader!../assets/code/Component.example')}
          lang="js"
          ranges={[
            {
              loc: [0, 10],
              title: 'Component (code)'
            },
            {
              loc: [0, 1],
              title: 'Component (code)',
              note: 'Use an ES6 class to subclass Component as a child of the React.Component class.'
            },
            {
              loc: [1, 3],
              title: 'Component (code)',
              note: 'Implement the render lifecycle method, which is required and will return a virtual representation of what should appear on the screen.'
            },
            {
              loc: [3, 7],
              title: 'Component (code)',
              note: 'Use JSX to define what the DOM for this piece of UI will look like, which needs to be transformed into a tree of React elements prior to being returned.'
            },
            {
              loc: [11, 15],
              title: 'Component (code)',
              note: 'Render the tree of React elements for this instance of Component into the DOM as children of the existing container element that has the id of "root".'
            }
          ]}
          transition={['fade']}
        />
        {/* component (output) */}
        <Slide
          bgColor="secondary"
          textColor="primary"
          transition={['fade']}
        >
          <Heading
            caps
            size={5}
            textColor="tertiary"
          >
            Component (output)
          </Heading>
          <p
            style={{
              color: '#f9f9f9',
              marginBottom: '5px',
              textAlign: 'left'
            }}
          >
            Result:
          </p>
          <div
            style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              color: '#2d2d2d',
              padding: '1px 40px',
              textAlign: 'left'
            }}
          >
            <Component />
          </div>
        </Slide>
        {/* props (intro) */}
        <Slide
          bgColor="secondary"
          transition={['fade']}
        >
          <Heading
            size={1}
            lineHeight={1}
            textColor="primary"
          >
            Props
          </Heading>
          <Text
            italic
            fit
            margin='15px 0 0'
            textColor="tertiary"
          >
            External, immutable data that is accepted by, and configures, a component.
          </Text>
        </Slide>
        {/* props (code) */}
        <CodeSlide
          bgColor="secondary"
          code={require('raw-loader!../assets/code/ComponentWithProps.example')}
          lang="js"
          ranges={[
            {
              loc: [0, 10],
              title: 'Component w/ props (code)'
            },
            {
              loc: [16, 19],
              title: 'Component w/ props (code)',
              note: 'Pass the initial value of name into the component\'s React element in the render method of either ReactDOM or another component.'
            },
            {
              loc: [5, 6],
              title: 'Component w/ props (code)',
              note: 'Embed name into the output of the render method by wrapping this.props.name in curly braces inside the JSX.'
            },
            {
              loc: [11, 14],
              title: 'Component w/ props (code)',
              note: 'Props can be validated in development using the PropTypes library.'
            }
          ]}
          transition={['fade']}
        />
        {/* props (output) */}
        <Slide
          bgColor="secondary"
          textColor="primary"
          transition={['fade']}
        >
          <Heading
            caps
            size={5}
            textColor="tertiary"
          >
            Component w/ props (output)
          </Heading>
          <ComponentWithPropsContainer />
          <Text
            fit
            italic
            margin="20px 0 0"
            style={{
              color: '#949494'
            }}

          >
            Name is being updated inside a parent component, which is passing{' '}
            it to ComponentWithProps.
          </Text>
        </Slide>
        {/* state (intro) */}
        <Slide
          bgColor="secondary"
          transition={['fade']}
        >
          <Heading
            size={1}
            lineHeight={1}
            textColor="primary"
          >
            State
          </Heading>
          <Text
            italic
            fit
            margin="15px 0 0"
            textColor="tertiary"
          >
            Internal, mutable data that is private to, and managed by, a component.
          </Text>
        </Slide>
        {/* state (code) */}
        <CodeSlide
          bgColor="secondary"
          code={require('raw-loader!../assets/code/ComponentWithState.example')}
          lang="js"
          ranges={[
            {
              loc: [0, 7],
              title: 'Component w/ state (code)'
            },
            {
              loc: [1, 2],
              title: 'Component w/ state (code)',
              note: 'Add a class constructor method.'
            },
            {
              loc: [3, 6],
              title: 'Component w/ state (code)',
              note: 'Assign the initial value of time inside the constructor using this.state.'
            },
            {
              loc: [18, 19],
              title: 'Component w/ state (code)',
              note: 'Embed time into the output of the render method by wrapping this.state.time in curly braces inside the JSX.'
            },
            {
              loc: [9, 12],
              title: 'Component w/ state (code)',
              note: 'Update time by calling this.setState with the new value inside a custom or lifecycle method (excluding render).'
            }
          ]}
          transition={['fade']}
        />
        {/* state (output) */}
        <Slide
          bgColor="secondary"
          textColor="primary"
          transition={['fade']}
        >
          <Heading
            caps
            size={5}
            textColor="tertiary"
          >
            Component w/ state (output)
          </Heading>
          <p
            style={{
              color: '#f9f9f9',
              marginBottom: '5px',
              textAlign: 'left'
            }}
          >
            Result:
          </p>
          <div
            style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              color: '#2d2d2d',
              padding: '1px 40px',
              textAlign: 'left'
            }}
          >
            <ComponentWithState />
          </div>
          <Text
            fit
            italic
            margin="20px 0 0"
            style={{
              color: '#949494'
            }}

          >
            Time is being updated by a setInterval configured in{' '}
            ComponentWithState&apos;s componentDidMount lifecycle method.
          </Text>
        </Slide>
        {/* lifecycle methods (intro) */}
        <Slide
          bgColor="secondary"
          transition={['fade']}
        >
          <Heading
            size={1}
            lineHeight={1}
            textColor="primary"
          >
            Lifecycle Methods
          </Heading>
          <Text
            italic
            fit
            margin="15px 0 0"
            textColor="tertiary"
          >
            Hooks to run code at particular times in the life of a component instance.
          </Text>
        </Slide>
        {/* lifecycle methods (code) */}
        <CodeSlide
          bgColor="secondary"
          code={require('raw-loader!../assets/code/ComponentLifecycle.example')}
          lang="js"
          ranges={[
            {
              loc: [0, 1],
              title: 'Lifecycle Methods (code)',
              note: 'Methods are called in a specific order and at specific times during mounting, updating and unmounting...'
            },
            // mounting...
            {
              loc: [1, 4],
              title: 'Lifecycle methods (mounting)',
              note: 'Methods called when a component is being initialized and inserted into the DOM. Only called once.'
            },
            // CWM
            {
              loc: [4, 7],
              title: 'Lifecycle methods (mounting)',
              note: 'Invoked immediately before mounting occurs. Does not have access to the DOM. Cannot trigger a re-render.'
            },
            // CDM
            {
              loc: [7, 12],
              title: 'Lifecycle methods (mounting)',
              note: 'Invoked immediately after a component is mounted. Has access to the DOM. Calling setState will trigger a re-render.'
            },
            // updating...
            {
              loc: [12, 15],
              title: 'Lifecycle methods (updating)',
              note: 'Methods called when a mounted component is being re-rendered, which can occur when props or state change. Not called for the initial render.'
            },
            // CWR
            {
              loc: [15, 19],
              title: 'Lifecycle methods (updating)',
              note: 'Invoked before receiving new props. Can call setState.'
            },
            // SCU
            {
              loc: [19, 23],
              title: 'Lifecycle methods (updating)',
              note: 'Invoked before re-rendering when new props or state are being received. Opportunity to determine if a re-render is needed. Defaults to true. Cannot call setState.'
            },
            // CWU
            {
              loc: [23, 26],
              title: 'Lifecycle methods (updating)',
              note: 'Invoked before re-rendering when new props or state are being received. Cannot call setState.'
            },
            // CDU
            {
              loc: [26, 29],
              title: 'Lifecycle methods (updating)',
              note: 'Invoked immediately after re-rendering occurs. Can call setState.'
            },
            // unmounting...
            {
              loc: [29, 32],
              title: 'Lifecycle methods (unmounting)',
              note: 'Methods called when a component is being removed from the DOM. Only called once.'
            },
            // CWUN
            {
              loc: [32, 37],
              title: 'Lifecycle methods (unmounting)',
              note: 'Invoked immediately before a component is unmounted and destroyed.'
            },
          ]}
          transition={['fade']}
        />
        {/* synthetic events (intro) */}
        <Slide
          bgColor="secondary"
          transition={['fade']}
        >
          <Heading
            size={1}
            lineHeight={1}
            textColor="primary"
          >
            Synthetic Events
          </Heading>
          <Text
            italic
            fit
            margin="15px 0 0"
            textColor="tertiary"
          >
            A cross-browser wrapper around native browser events.
          </Text>
        </Slide>
        {/* synthetic events (code)*/}
        <CodeSlide
          bgColor="secondary"
          code={require('raw-loader!../assets/code/ComponentWithEvent.example')}
          lang="js"
          ranges={[
            {
              loc: [0, 1],
              title: 'Component w/ event (code)'
            },
            {
              loc: [8, 14],
              title: 'Component w/ event (code)',
              note: 'Add a custom event handler as a method on the class that...'
            },
            {
              loc: [9, 10],
              title: 'Component w/ event (code)',
              note: 'gets the button\'s innerText using the synthetic event (e)...'
            },
            {
              loc: [10, 13],
              title: 'Component w/ event (code)',
              note: 'and uses it to update the isToggleOn state.'
            },
            {
              loc: [16, 19],
              title: 'Component w/ event (code)',
              note: 'Pass the event handler to the button element\'s onClick attribute'
            },
            {
              loc: [6, 7],
              title: 'Component w/ event (code)',
              note: 'Bind the context of this to the event handler in the constructor.'
            }
          ]}
          transition={['fade']}
        />
        {/* synthetic events (output) */}
        <Slide
          bgColor="secondary"
          textColor="primary"
          transition={['fade']}
        >
          <Heading
            caps
            size={5}
            textColor="tertiary"
          >
            Component w/ event (output)
          </Heading>
          <p
            style={{
              color: '#f9f9f9',
              marginBottom: '5px',
              textAlign: 'left'
            }}
          >
            Result:
          </p>
          <div
            style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              color: '#2d2d2d',
              padding: '40px 40px',
              textAlign: 'left'
            }}
          >
            <ComponentWithEvent />
          </div>
          <Text
            fit
            italic
            margin="20px 0 0"
            style={{
              color: '#949494'
            }}

          >
            Inside ComponentWithEvent, the isToggleOn state is being updated{' '}
            by a handleClick method on button click.
          </Text>
        </Slide>
        {/* demos */}
        <Slide
          bgColor="quartenary"
          transition={['fade']}
        >
          <Heading
            size={1}
            lineHeight={1}
            textColor="primary"
          >
            Demos!
          </Heading>
        </Slide>
        {/* more (intro) */}
        <Slide
          bgColor="secondary"
          transition={['fade']}
        >
          <Heading
            size={1}
            lineHeight={1}
            textColor="primary"
          >
            More...
          </Heading>
          <Text
            italic
            fit
            margin="15px 0 0"
            textColor="tertiary"
          >
            Additional concepts, resources and tools.
          </Text>
        </Slide>
        {/* more (list) */}
        <Slide
          bgColor="secondary"
          textColor="primary"
          transition={['fade']}
        >
          <Heading
            caps
            size={6}
            textColor="tertiary"
          >
            More...
          </Heading>
          <Text
            bold
            margin="25px 0 0"
            size={6}
            textAlign={'left'}
            textColor="primary"
          >
            Concepts:
          </Text>
          <List>
            <ListItem style={{ fontSize: '1.3rem' }}>
              <Link
                href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Presentational and container components
              </Link>
            </ListItem>
            <ListItem style={{ fontSize: '1.3rem' }}>
              <Link
                href="https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Components, instances and elements
              </Link>
            </ListItem>
            <ListItem style={{ fontSize: '1.3rem' }}>
              <Link
                href="https://facebook.github.io/react/docs/react-dom-server.html"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Server-side rendering (ReactDOMServer)
              </Link>
            </ListItem>
            <ListItem style={{ fontSize: '1.3rem' }}>
              <Link
                href="https://github.com/gaearon/react-hot-loader"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Hot reloading (React Hot Loader)
              </Link>
            </ListItem>
            <ListItem style={{ fontSize: '1.3rem' }}>
              <Link
                href="http://redux.js.org/"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Flux architecture (Redux)
              </Link>
            </ListItem>
          </List>
          <Text
            bold
            margin="25px 0 0"
            size={6}
            textAlign={'left'}
            textColor="primary"
          >
            Resources:
          </Text>
          <List>
            <ListItem style={{ fontSize: '1.3rem' }}>
              <Link
                href="https://facebook.github.io/react/community/videos.html"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Videos
              </Link>
            </ListItem>
            <ListItem style={{ fontSize: '1.3rem' }}>
              <Link
                href="https://github.com/airbnb/javascript/tree/master/react"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Style guides (Airbnb)
              </Link>
            </ListItem>
            <ListItem style={{ fontSize: '1.3rem' }}>
              <Link
                href="https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Linting
              </Link>
            </ListItem>
          </List>
          <Text
            bold
            margin="25px 0 0"
            size={6}
            textAlign={'left'}
            textColor="primary"
          >
            Tools:
          </Text>
          <List>
            <ListItem style={{ fontSize: '1.3rem' }}>
              <Link
                href="https://github.com/facebook/react-devtools"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                React Developer Tools
              </Link>
            </ListItem>
            <ListItem style={{ fontSize: '1.3rem' }}>
              <Link
                href="https://github.com/facebookincubator/create-react-app"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Boilerplates (Create React App)
              </Link>
            </ListItem>
            <ListItem style={{ fontSize: '1.3rem' }}>
              <Link
                href="https://github.com/airbnb/enzyme"
                style={{
                  color: 'inherit'
                }}
                target="_blank"
              >
                Unit testing (Enzyme)
              </Link>
            </ListItem>
          </List>
        </Slide>
        {/* thank you TODO */}
        <Slide
          bgColor="secondary"
          transition={['fade']}
        >
          <Heading
            size={2}
            lineHeight={1}
            textColor="tertiary"
          >
            Thank you!
          </Heading>
          <Text
            margin='15px 0 0'
            size={6}
            textColor="quartenary"
          >
            <Link
              href="ttps://twitter.com/colinrcummings"
              style={{
                color: 'inherit'
              }}
              target="_blank"
            >
              @colinrcummings
            </Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
