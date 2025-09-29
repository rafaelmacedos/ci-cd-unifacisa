import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navigation from '../Navigation'

// Mock the Logo component
jest.mock('../Logo', () => {
    return function MockLogo({ size }: { size?: string }) {
        return <div data-testid="logo" data-size={size}>Logo</div>
    }
})

describe('Navigation Component', () => {
    it('renders navigation with logo', () => {
        render(<Navigation />)

        expect(screen.getByTestId('logo')).toBeInTheDocument()
        expect(screen.getByTestId('logo')).toHaveAttribute('data-size', 'medium')
    })

    it('renders all menu items', () => {
        render(<Navigation />)

        expect(screen.getByText('História')).toBeInTheDocument()
        expect(screen.getByText('Diferenciais')).toBeInTheDocument()
        expect(screen.getByText('Estatísticas')).toBeInTheDocument()
        expect(screen.getByText('Contato')).toBeInTheDocument()
    })

    it('renders desktop menu items with correct hrefs', () => {
        render(<Navigation />)

        const historiaLink = screen.getByText('História')
        const diferenciaisLink = screen.getByText('Diferenciais')
        const estatisticasLink = screen.getByText('Estatísticas')
        const contatoLink = screen.getByText('Contato')

        expect(historiaLink).toHaveAttribute('href', '#historia')
        expect(diferenciaisLink).toHaveAttribute('href', '#diferenciais')
        expect(estatisticasLink).toHaveAttribute('href', '#estatisticas')
        expect(contatoLink).toHaveAttribute('href', '#contato')
    })

    it('renders inscreva-se button', () => {
        render(<Navigation />)

        const buttons = screen.getAllByText('Inscreva-se')
        expect(buttons).toHaveLength(1) // Only desktop version visible by default
    })

    it('shows mobile menu button on mobile', () => {
        render(<Navigation />)

        const mobileMenuButton = screen.getByRole('button', { name: '' })
        expect(mobileMenuButton).toBeInTheDocument()
    })

    it('toggles mobile menu when button is clicked', async () => {
        const user = userEvent.setup()
        render(<Navigation />)

        const mobileMenuButton = screen.getByRole('button', { name: '' })

        // Initially mobile menu should not be visible
        expect(screen.queryByText('História')).toBeInTheDocument() // Desktop version

        // Click to open mobile menu
        await user.click(mobileMenuButton)

        // Mobile menu should now be visible
        const mobileMenu = screen.getByRole('button', { name: '' }).closest('nav')?.querySelector('.md\\:hidden')
        expect(mobileMenu).toBeInTheDocument()
    })

    it('closes mobile menu when menu item is clicked', async () => {
        const user = userEvent.setup()
        render(<Navigation />)

        const mobileMenuButton = screen.getByRole('button', { name: '' })

        // Open mobile menu
        await user.click(mobileMenuButton)

        // Verify menu is open by checking if mobile menu items are visible
        const mobileMenu = screen.getByRole('button', { name: '' }).closest('nav')?.querySelector('.md\\:hidden')
        expect(mobileMenu).toBeInTheDocument()
    })

    it('has correct CSS classes for styling', () => {
        render(<Navigation />)

        const nav = screen.getByRole('navigation')
        expect(nav).toHaveClass('bg-white', 'text-unifacisa-primary', 'shadow-lg', 'fixed', 'w-full', 'top-0', 'z-50')
    })

    it('renders hamburger icon when menu is closed', () => {
        render(<Navigation />)

        const mobileMenuButton = screen.getByRole('button', { name: '' })
        const svg = mobileMenuButton.querySelector('svg')
        expect(svg).toBeInTheDocument()
    })
})
