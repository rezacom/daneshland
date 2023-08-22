import { render } from '../../utils/test-utils';
import Header from '.';

describe('Header component', () => {
  test('renders title and user icon', () => {
    const { getByText } = render(<Header />);
    const title = getByText(/React/i);
    expect(title).toBeInTheDocument();
  });
});
