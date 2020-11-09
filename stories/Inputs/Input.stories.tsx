import React from 'react';
import { Input, InputProps } from '../../src';
import { createStoryTitle } from '../Constants';
import { Meta, Story } from '@storybook/react';

export default {
    title: createStoryTitle('Input'),
    component: Input,
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        description: 'Description',
    },
} as Meta;

export const Basic: Story<InputProps> = (args) => <Input {...args}></Input>;

export const WithSuccess = Basic.bind({});
WithSuccess.args = {
    ...WithSuccess.args,
    success: true,
};

export const WithError = Basic.bind({});
WithError.args = {
    ...WithError.args,
    error: 'Error message!',
};

export const WithDisabled = Basic.bind({});
WithDisabled.args = {
    ...WithDisabled.args,
    disabled: true,
};
