import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter'
import { BrowserRouter } from 'react-router-dom'



// Mockup has to be created to wrap the test subject with BrowserRouter
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

describe('TodoFooter', () => {

    it('should render the correct amount of incomplete tests', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    it('should render task singular whewn the number of incomplete texts is 1', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });

})

// it('should render task singular whewn the number of incomplete texts is 1', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks= {1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toBeTruthy();
// });

// it('should render task singular whewn the number of incomplete texts is 1', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks= {1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toBeVisible();
// });

// it('should render task singular whewn the number of incomplete texts is 1', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks= {1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toContainHTML("p");
// });

// it('should render task singular whewn the number of incomplete texts is 1', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks= {1} />);
//     const paragraphElement = screen.getByTestId('para');
//     expect(paragraphElement).toHaveTextContent("1 task left");
// });

// it('should render task singular whewn the number of incomplete texts is 1', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks= {1} />);
//     const paragraphElement = screen.getByTestId('para');
//     expect(paragraphElement.textContent).toBe('1 task left');
// });