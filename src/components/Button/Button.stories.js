import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const handleClick = () => {
  console.log('clicked');
}

storiesOf('Button', module)
  .add('default', () => <Button handleClick={handleClick}>Click</Button>)
  .add('primary', () => <Button primary handleClick={handleClick}>Click</Button>)
