import { Meta, StoryObj } from '@storybook/react';

import {Button, ButtonVariants} from "../shared/components/button";

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Shared/Button'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary',
        variant: ButtonVariants.PRIMARY
    }
}
export const Secondary: Story = {
    args: {
        children: 'Secondary',
        variant: ButtonVariants.SECONDARY
    }
}

export const Utility: Story = {
    args: {
        children: 'Utility',
        variant: ButtonVariants.UTILITY
    }
}

export const Hover: Story = {
    args: {
        children: 'Hover',
    }
}

Hover.parameters = {pseudo: {hover: true}}

