// import React, { useState } from "react";
// import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { withKnobs, text } from "@storybook/addon-knobs";
// import { withReadme, withDocs, doc } from "storybook-readme";
// import { ThemeProvider } from "styled-components";

// import { GlobalStyle, theme } from "../../theme/src";
import ButtonReadme from "../README.md";

// import Button from ".";

// const onClickHandler = e => action("clicked")(e);

// const StoryComponent = () => {
//   // Declare a new state variable, which we'll call "count" with inital state 0
//   const [count, setCount] = useState(0);

//   const buttonText = text("text", "Click me");
//   // the only reason onClick was written like this, and not just
//   // `onClick = action('clicked')` is due to a cleaner export in the JSX tab
//   const onClick = e => {
//     setCount(count + 1);
//     onClickHandler(e);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <div style={{ margin: "0 auto", width: "300px" }}>
//         <GlobalStyle />
//         <p>You clicked {count} times</p>
//         <Button onClick={onClick}>{buttonText}</Button>
//       </div>
//     </ThemeProvider>
//   );
// };

// // storiesOf('Button', module)
// //   // add multiple READMEs (also supports only one)
// //   .add(
// //     'Default',
// //     withReadme(ButtonReadme, () => {
// //       return <Button onClick={action('clicked')} label="Hello Button" />;
// //     }),
// //   );

// storiesOf("Button", module)
//   .addDecorator(withKnobs)
//   // .add('Docs', doc(ButtonReadme))
//   // .add(
//   //   'Default',
//   //   withReadme(ButtonReadme, () => {
//   //     return <Button onClick={action('clicked')} label="Hello Button" />;
//   //   }),
//   // )
//   .addParameters({
//     readme: {
//       codeTheme: 'duotone-sea',
//       // content: ButtonReadme,
//       sidebar: ButtonReadme,
//     },
//   })
//   // .addDecorator(withReadme(ButtonReadme))
//   .addWithJSX("default", () => {
//     const buttonText = text("Title", "Click me");
//     return (
//       <ThemeProvider theme={theme}>
//         <div style={{ margin: "0 auto", width: "300px" }}>
//           <GlobalStyle />
//           <Button onClick={onClickHandler}>{buttonText}</Button>
//         </div>
//       </ThemeProvider>
//     );
//   })
//   .addWithJSX("with click counter", () => <StoryComponent />);

// export default {
//   title: 'CustomDescription',
//   component: Button,
//   parameters: {
//     docs: { 
//         description: { 
//             component: 'some component _markdown_' 
//         } 
//     },
//   }
// };

// // export default {
// //   title: 'Button',
// //   component: Button,
// //   argTypes: {
// //     // assigns the argTypes to the Colors category
// //     backgroundColor: {
// //       control: 'color',
// //       table: {
// //         category: 'Colors'
// //       }
// //     }
// //   }
// // };

import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withKnobs],
  parameters: {
    readme: {
      content: ButtonReadme,
      sidebar: ButtonReadme,
    }
  }
};

const Template = (args) => <Button {...args} />;

// Knobs for React props
// export const Primary = () => (
//   <Button label={text('label', 'Hello Storybook')}>{text('label', 'Hello Storybook')}</Button>
// );

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
