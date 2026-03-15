import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Projects from '../sections/Projects';
import { projects } from '../data';

describe('Projects section', () => {
  it('renders the main heading and featured project', () => {
    render(<Projects />);

    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
    expect(screen.getByText(projects[0].title)).toBeInTheDocument();
  });

  it('renders a responsive project grid with consistent card spacing', () => {
    const { container } = render(<Projects />);

    // ensure the grid uses md:grid-cols-2 for responsive layout
    expect(container.querySelector('.md\:grid-cols-2')).toBeInTheDocument();

    // ensure the grid gap helper is present
    expect(container.querySelector('.gap-10')).toBeInTheDocument();
  });

  it('renders all project cards with tech badges', () => {
    render(<Projects />);

    projects.forEach((proj) => {
      expect(screen.getByText(proj.title)).toBeInTheDocument();
      proj.tech.forEach((tech) => {
        expect(screen.getByText(tech)).toBeInTheDocument();
      });
    });
  });
});
