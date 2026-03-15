import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../components/Footer';
import { contact, hero } from '../data';

describe('Footer section', () => {
  it('renders contact links and attribution', () => {
    render(<Footer />);

    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();

    // check that the links point to the correct URLs
    expect(screen.getByText(/LinkedIn/i).closest('a')).toHaveAttribute('href', contact.linkedin);
    expect(screen.getByText(/GitHub/i).closest('a')).toHaveAttribute('href', 'https://github.com/nitin264/');
    expect(screen.getByText(/Email/i).closest('a')).toHaveAttribute('href', `mailto:${contact.email}`);

    expect(screen.getByText(new RegExp(`${hero.name}`, 'i'))).toBeInTheDocument();
  });
});
