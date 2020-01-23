import React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from './TextField';



storiesOf('TextField', module)
  .add('default', () => <TextField placeholder="Name">Type</TextField>)
  .add('outlined', () => <TextField placeholder="Search" variant="outlined">Type</TextField>)

