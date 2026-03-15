import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../sections/About';

describe('About section', () => {
  it('renders the heading and subheading correctly', () => {
    render(<About />);

    expect(screen.getByText(/Engineering reliable/i)).toBeInTheDocument();
    expect(screen.getByText(/backend systems for real-world business workflows/i)).toBeInTheDocument();
  });

  it('includes key stats and uses the correct responsive column layout', () => {
    const { container } = render(<About />);

    expect(screen.getByText(/Years of Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Mentored/i)).toBeInTheDocument();

    // The layout should be a 2-column grid on large screens
    expect(container.querySelector('.lg\:grid-cols-2')).toBeTruthy();
  });

  it('renders the highlight list as a bulleted list with the expected items', () => {
    render(<About />);

    expect(screen.getByText(/Backend API development/i)).toBeInTheDocument();
    expect(screen.getByText(/Database optimization using Oracle \/ PL-SQL/i)).toBeInTheDocument();

    const list = screen.getByRole('list');
    expect(list).toHaveClass('list-disc');
  });
});
