import { render, screen } from '@testing-library/react';
import Index from '../../../app/routes/_index';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const wrappedRender = (TargetComponent: () => JSX.Element) => {
  return render(<BrowserRouter><TargetComponent/></BrowserRouter>)
}

describe('Index', () => {
  test('renders Index component', () => {
    wrappedRender(Index);

    expect(screen.getByText('MATT CORWIN')).toBeInTheDocument();
    expect(screen.getByText('I am a Full Stack Developer and lifelong learner. I\'ve been building with Typescript, NodeJs, and React on AWS, and I\'m always learning new tech. Check out a couple of my hobby projects below!')).toBeInTheDocument();
    expect(screen.getByText('FaloFofo is a site for selling digital education products. It is deployed to AWS and integrated with Stripe for payment, relying on AWS Lambda for the back end communication. I utilized S3 presigned URLs to deliver the products, and deploy with a CI/CD pipeline automatically from Github.')).toBeInTheDocument();
    expect(screen.getByText('I built Find Gifts For to play with ChatGPT. It is built on AWS, hosted from S3, and backed by Lambda and DynamoDB. I cached over 16,000 ChatGPT responses for faster response times, which was a major challenge. It is a static site built with Gatsby.')).toBeInTheDocument();

    expect(screen.getByRole('img', { name: 'Person standing in front of a tree' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Gift search website with robot' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Language learning website with rabbit' })).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links.length).toEqual(4);
  });
});


