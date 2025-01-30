import { act, render, screen } from '@testing-library/react'
import { Menu } from '.'

describe('Herder component', () => {
  it('should display user name', async () => {
    vi.mock("next/headers", () => ({
      cookies: vi.fn().mockResolvedValue({
        get: vi.fn(),
        set: vi.fn()
      })
    }));
    
    vi.mock("axios", () => ({
      default: {
        create: vi.fn(() => ({
          get: vi.fn(() => ({
            data: {
              id: "1",
              "name": "John Doe",
            }
          })),
        })),
      },
    }));
    
    await act(async () => {
      render(<Menu />);
    });
  
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("JD")).toBeInTheDocument();
  })
})