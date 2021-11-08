import { render, screen } from '@testing-library/react';
import Header from '../Header'

it('should render same text passed into title prob', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

// getByRole
it('check if it is a heading', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByRole('heading', { name: 'My Header' });
    expect(headingElement).toBeInTheDocument();
});

// getByTestId
it('check if it is a heading', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByTestId('header-1')
    expect(headingElement).toBeInTheDocument();
});

// findBy
it('should render same text passed into title prob', async () => {
    render(<Header title="My Header" />);
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

//queryBy
it('should render same text passed into title prob', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
});

it('should render same text passed into title prob', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement.length).toBe(2);
});