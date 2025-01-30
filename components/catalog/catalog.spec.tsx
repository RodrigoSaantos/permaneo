import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Catalog } from '.'
import { useUserStore } from '@/store/userStore'

describe('Catalog component', () => {
  it('should be display catalog purchased', async () => {
    useUserStore.setState({
      user: {
        "id": "1",
        "name": "John Doe",
        "courses": [
          {
            "courseId": "1",
            "dateJoined": "2023-02-15"
          }
        ]
      }
    })
    
    vi.mock("axios", () => ({
      default: {
        create: vi.fn(() => ({
          get: vi.fn(() => ({
            data: [
              {
                id: "1",
                title: "Introdução à Programação com Python",
                description: "Aprenda os fundamentos da programação utilizando Python, uma das linguagens mais populares e versáteis.",
                purchased: true,
                img: "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80"
              },
            ]
          })),
        })),
      },
    }));


    await act(async () => {
      render(<Catalog />);
    });

    expect(screen.getByText("Introdução à Programação com Python")).toBeInTheDocument();
    expect(screen.getByText("Acessar Curso")).toBeInTheDocument();
  })

  it('should be display in the catalog to purchase', async () => {
    useUserStore.setState({
      user: {
        "id": "1",
        "name": "John Doe",
        "courses": [
          {
            "courseId": "2",
            "dateJoined": "2023-02-15"
          }
        ]
      }
    })
    
    vi.mock("axios", () => ({
      default: {
        create: vi.fn(() => ({
          get: vi.fn(() => ({
            data: [
              {
                id: "1",
                title: "Introdução à Programação com Python",
                description: "Aprenda os fundamentos da programação utilizando Python, uma das linguagens mais populares e versáteis.",
              },
            ]
          })),
        })),
      },
    }));


    await act(async () => {
      render(<Catalog />);
    });

    expect(screen.getByText("Introdução à Programação com Python")).toBeInTheDocument();
    expect(screen.getByText("Adquirir Curso")).toBeInTheDocument();
  })

  it('should be redirect the course to purchase', async () => {
    const user = userEvent.setup()
    useUserStore.setState({
      user: {
        "id": "1",
        "name": "John Doe",
        "courses": [
          {
            "courseId": "2",
            "dateJoined": "2023-02-15"
          }
        ]
      }
    })
    
    vi.mock("axios", () => ({
      default: {
        create: vi.fn(() => ({
          get: vi.fn(() => ({
            data: [
              {
                id: "1",
                title: "Introdução à Programação com Python",
                description: "Aprenda os fundamentos da programação utilizando Python, uma das linguagens mais populares e versáteis.",
              },
            ]
          })),
        })),
      },
    }));


    await act(async () => {
      render(<Catalog />);
    });

    const nextPageLink = screen.getByRole('link')

    await user.click(nextPageLink)

    expect(screen.getByText("Introdução à Programação com Python")).toBeInTheDocument();
    expect(screen.getByText("Adquirir Curso")).toBeInTheDocument();
    expect(nextPageLink).toHaveAttribute('href', 'course/1')
  })

  it('should be redirect the course purchased', async () => {
    const user = userEvent.setup()
    useUserStore.setState({
      user: {
        "id": "1",
        "name": "John Doe",
        "courses": [
          {
            "courseId": "1",
            "dateJoined": "2023-02-15"
          }
        ]
      }
    })
    
    vi.mock("axios", () => ({
      default: {
        create: vi.fn(() => ({
          get: vi.fn(() => ({
            data: [
              {
                id: "1",
                title: "Introdução à Programação com Python",
                description: "Aprenda os fundamentos da programação utilizando Python, uma das linguagens mais populares e versáteis.",
              },
            ]
          })),
        })),
      },
    }));


    await act(async () => {
      render(<Catalog />);
    });

    const nextPageLink = screen.getByRole('link')

    await user.click(nextPageLink)

    expect(screen.getByText("Introdução à Programação com Python")).toBeInTheDocument();
    expect(screen.getByText("Acessar Curso")).toBeInTheDocument();
    expect(nextPageLink).toHaveAttribute('href', 'classroom/1')
  })
})

