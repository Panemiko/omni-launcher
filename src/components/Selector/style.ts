import { styled } from '@stitches/react'

export const Container = styled('div', {
    height: 'fit-content',
    width: '35%',
    minHeight: 'calc(100vh - 30px)',
    maxWidth: '450px',

    backgroundColor: '$secondary'
})

export const InstancesContainer = styled('div', {
    height: 'calc(100% - 70px)',
    width: '100%',

    display: 'block',

    overflowY: 'scroll'
})

export const InstanceSeparator = styled('h1', {
    margin: '10px 0',

    color: '$contrast',
    fontSize: '16px',
    textAlign: 'center'
})

export const SeparatorLine = styled('hr', {
    border: '1px solid $contrast'
})
