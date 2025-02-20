import { styled } from '../../stitches.config.ts';
import ButtonLink from '../ButtonLink';
import ArrowLink from '../ArrowLink';
import Wrapper from "../Wrapper";
import bgImage from '../../public/stars.jpg';
import Image from 'next/image'

export default function Collaborate() {
  return (
    <Container id="passports">
      <Image
        src={bgImage}
        alt="A stary night sky in Texas hill country"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 100%"
        quality={50}
      />
      <Wrapper>
        <Content>
          <h2>
            Meet up and collaborate <abbr title="in real life">IRL</abbr>
          </h2> 
          <p>
            Access the high-bandwidth nature of IRL collaboration by purchasing a passport for your DAO, guild, team or squad and help us fund our vision of growing cabins into decentralized internet-first cities.
          </p>
          <Actions>
            <ButtonLink external target="_blank" href="https://creators.mirror.xyz/wY-a-RYJ7Av2YnaSZ0vM8s5dsIhXC9PXDOBftBJRA1g" label="Purchase a passport" />
            <ArrowLink external target="_blank" href="https://creators.mirror.xyz/wY-a-RYJ7Av2YnaSZ0vM8s5dsIhXC9PXDOBftBJRA1g" color="wheat" label="Learn more" />
          </Actions>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled('section', {
  position: 'relative',
  bc: '$forest',
  color: '$sand',
  pt: '$20',
  pb: '$32',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$forest',
    opacity: '0.50',
  },
  img: {
    filter: 'grayscale(0.75) contrast(0.75) brightness(0.25)',
  },
  '@md': {
    pt: '$32',
    pb: '20rem',
  },
});

const Content = styled('div', {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '40rem',
  margin: '0 auto',
  position: 'relative',
  zIndex: '$1',
  h2: {
    m: 0,
    fontSize: '$xxl',
    fontFamily: '$mono',
    fontWeight: '$600',
    lineHeight: '1.4',
    abbr: {
      textDecoration: 'none',
    },
  },
  '@md': {
    h2: {
      fontSize: '$xxxl',
    },
  },
});

const Actions = styled('div', {
  mt: '$8',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '> *': {
    mb: '$6',
  },
  '@md': {
    mt: '$10',
    flexDirection: 'row',
    '> *': {
      mb: '0',
      mr: '$6',
    },
  },
});