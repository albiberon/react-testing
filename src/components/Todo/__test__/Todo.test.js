import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo'

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i) //Input element selected
    const buttonElement = screen.getByRole('button', {name: /Add/i}) //Button element selected by using getByRole
    tasks.forEach( task => {
        fireEvent.change(inputElement,{target: {value: task}}) //Input element populated with text
        fireEvent.click(buttonElement)  // button click action triggered on button element
    })
}


describe('Todo', () => {
    it('should render same text passed into title prob', () => {
        render(<MockTodo />);
        addTask(['Go Grocery Shopping', 'Pet my Cat', 'Why my Hands'])
        const divElement = screen.getAllByTestId("task-container") // Div element selected
        //expect(divElement).toBeInTheDocument() //  Div element exists in the document
        expect(divElement.length).toBe(3)      
    });
})