import React from 'react';

import { Container,
         Wrapper,
         Content,
         What,
         Dot,
         Time,
         Trend,
         ImageContent,
         } from './style';

interface Props {
    text: string;
    time: string;
    what: string;
    trend: string;
    ImageContente: string;
}

const New: React.FC<Props> = ({text, time, what, trend, ImageContente}) => {
  return (
    <Container>
        <Wrapper>
            <What>{what}</What>
            <Dot/>
            <Time>{time}</Time>
        </Wrapper>
        <Content>
            <strong>{text}</strong>
            <ImageContent ImageContente={ImageContente}/>
        </Content>

        <Trend>
            <h1>Trending with </h1>
            <h2>{trend}</h2> 
        </Trend>
    </Container>
  );
};

export default New;