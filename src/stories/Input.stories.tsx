import {Meta, StoryObj} from "@storybook/react";

import {Input} from "../shared/components/input";

const meta: Meta<typeof  Input> = {
    component: Input,
    title: 'Shared/Input'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Focus: Story = {
    args: {
        placeholder: 'Focus'
    }
}

Focus.parameters = {pseudo: {focus: true}};

export const Hover: Story = {
    args: {
        placeholder: 'Hover'
    }
};

Hover.parameters = {pseudo: {hover: true}};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled',
        disabled: true
    }
}

export const WithLabel: Story = {
    args: {
        placeholder: 'With Label',
        label: 'With Label'
    }
}

export const WithoutLabel: Story = {
    args: {
        placeholder: 'Without Label'
    }
}
