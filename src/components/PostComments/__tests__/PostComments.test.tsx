import { fireEvent, render, screen } from '@testing-library/react'

import PostComment from '..'

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })


    test('Renderizar dois comentarios', () => {
        render(<PostComment/>)

        const commentInput = screen.getByTestId('comment-textarea')
        const commentButton = screen.getByTestId('comment-button')

        fireEvent.change(commentInput, {
            target: {
                value: 'Que massa!',
            }
        })
        fireEvent.click(commentButton)
        expect(screen.getByText('Que massa!')).toBeInTheDocument()

        fireEvent.change(commentInput, {
            target: { 
                value: 'Super demais!'
            }
        })
        fireEvent.click(commentButton)

        expect(screen.getByText('Super demais!')).toBeInTheDocument()

        const comments = screen.getAllByTestId('comment-text')
        expect(comments).toHaveLength(2)
    })
});