import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <h1>Oops! Do you want to go <Link to="/">home</Link>?</h1>
  )
}