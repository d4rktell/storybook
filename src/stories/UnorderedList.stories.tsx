import {Meta, StoryObj} from '@storybook/react';

import {UnorderedList} from "../entites/unordered-list";

const meta: Meta<typeof UnorderedList> = {
    component: UnorderedList,
    title: 'Entities/UnorderedList'
}

export default meta;

type Story = StoryObj<typeof meta>

export const Vertical: Story = {
    args: {
        listItems: ['a', 'b', 'c'],
        direction: 'flex-row'
    }
}

export const Horizontal: Story = {
    args: {
        listItems: ['a', 'b', 'c'],
        direction: 'flex-col'
    }
}

export const Hover: Story = {
    args: {
        listItems: ['a', 'b', 'c']
    }
}

Hover.parameters = { pseudo: {hover: true} }

export const Active: Story = {
    args: {
        listItems: ['a', 'b', 'c']
    }
}

Active.parameters = { pseudo: {active: true} }

export const Wrap: Story = {
    args: {
        listItems: Array(50).fill(50),
        wrap: 'flex-wrap'
    }
}

export const NoWrap: Story = {
    args: {
        listItems: Array(50).fill(50),
        wrap: 'flex-nowrap'
    }
}
