import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    color: var(--dark5);
    margin-bottom: 6px;
`;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    >strong{
        width: 75%;
        font-weight: bold;
        line-height: 18px;
    }
`;

interface IImageContent{
    ImageContente: string;
}

export const ImageContent = styled.div<IImageContent>`
    width: 22%;
    height: 70px;
    border-radius: 12px;
    background: url(${props => props.ImageContente});

`;
export const What = styled.div`
    font-size: 14px;
    margin-right: 5px ;
    line-height: 16px;
`;
export const Dot = styled.div`
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: var(--dark5);
`;

export const Time = styled.div`
    margin-left: 5px ;

`;

export const Trend = styled.div`
    display: flex;
    margin-top: 6px;
    color: var(--dark5);

    >h1{
        margin-right: 5px;

    }

    >h2{
        color: var(--primaryblue);
    }
`;