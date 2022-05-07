import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const container = render(<Main title="Addi" />)
    expect(screen.getByRole('heading', { name: /addi/i })).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
