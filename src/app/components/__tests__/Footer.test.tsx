import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

// Mock the Logo component
jest.mock('../Logo', () => {
    return function MockLogo({ size }: { size?: string }) {
        return <div data-testid="logo" data-size={size}>Logo</div>
    }
})

describe('Footer Component', () => {
    it('renders footer with logo', () => {
        render(<Footer />)

        expect(screen.getByTestId('logo')).toBeInTheDocument()
        expect(screen.getByTestId('logo')).toHaveAttribute('data-size', 'medium')
    })

    it('displays current year in copyright', () => {
        render(<Footer />)

        const currentYear = new Date().getFullYear()
        expect(screen.getByText(`© ${currentYear} Unifacisa - Centro Universitário. Todos os direitos reservados.`)).toBeInTheDocument()
    })

    it('renders quick links section', () => {
        render(<Footer />)

        expect(screen.getByText('Links Rápidos')).toBeInTheDocument()
        expect(screen.getByText('Nossa História')).toBeInTheDocument()
        expect(screen.getByText('Diferenciais')).toBeInTheDocument()
        expect(screen.getByText('Estatísticas')).toBeInTheDocument()
        expect(screen.getAllByText('Contato')).toHaveLength(2) // Link and section title
        expect(screen.getByText('Vestibular')).toBeInTheDocument()
        expect(screen.getByText('Portal do Aluno')).toBeInTheDocument()
    })

    it('renders courses section', () => {
        render(<Footer />)

        expect(screen.getByText('Cursos')).toBeInTheDocument()
        expect(screen.getByText('Sistemas de Informação')).toBeInTheDocument()
        expect(screen.getByText('Análise e Desenvolvimento de Sistemas')).toBeInTheDocument()
        expect(screen.getByText('Inteligência Artificial')).toBeInTheDocument()
        expect(screen.getByText('Pós-Graduação')).toBeInTheDocument()
        expect(screen.getByText('Cursos Técnicos')).toBeInTheDocument()
    })

    it('renders contact information', () => {
        render(<Footer />)

        expect(screen.getByText('Av. Senador Argemiro de Figueiredo, 1901')).toBeInTheDocument()
        expect(screen.getByText('José Pinheiro - Campina Grande/PB')).toBeInTheDocument()
        expect(screen.getByText('(83) 2101-8888')).toBeInTheDocument()
        expect(screen.getByText('contato@unifacisa.edu.br')).toBeInTheDocument()
    })

    it('renders social media links', () => {
        render(<Footer />)

        const socialLinks = screen.getAllByRole('link')
        const instagramLink = socialLinks.find(link =>
            link.querySelector('svg') &&
            link.getAttribute('href') === '#'
        )
        expect(instagramLink).toBeInTheDocument()
    })

    it('renders legal links in bottom footer', () => {
        render(<Footer />)

        expect(screen.getByText('Política de Privacidade')).toBeInTheDocument()
        expect(screen.getByText('Termos de Uso')).toBeInTheDocument()
        expect(screen.getByText('Mapa do Site')).toBeInTheDocument()
    })

    it('has correct href attributes for quick links', () => {
        render(<Footer />)

        const historiaLink = screen.getByText('Nossa História')
        const diferenciaisLink = screen.getByText('Diferenciais')
        const estatisticasLink = screen.getByText('Estatísticas')
        const contatoLinks = screen.getAllByText('Contato')
        const contatoLink = contatoLinks.find(link => link.getAttribute('href') === '#contato')

        expect(historiaLink).toHaveAttribute('href', '#historia')
        expect(diferenciaisLink).toHaveAttribute('href', '#diferenciais')
        expect(estatisticasLink).toHaveAttribute('href', '#estatisticas')
        expect(contatoLink).toHaveAttribute('href', '#contato')
    })

    it('applies custom className when provided', () => {
        const customClass = 'custom-footer-class'
        render(<Footer className={customClass} />)

        const footer = screen.getByRole('contentinfo')
        expect(footer).toHaveClass('bg-unifacisa-primary', 'text-white', customClass)
    })

    it('uses default className when no custom className is provided', () => {
        render(<Footer />)

        const footer = screen.getByRole('contentinfo')
        expect(footer).toHaveClass('bg-unifacisa-primary', 'text-white')
    })

    it('renders institution description', () => {
        render(<Footer />)

        expect(screen.getByText(/Centro Universitário de referência em tecnologia, inovação e empreendedorismo/)).toBeInTheDocument()
    })
})
