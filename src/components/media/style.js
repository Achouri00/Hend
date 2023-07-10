import styled from 'styled-components';

export const SocialMedia = styled.div`
  height: auto;
  overflow: hidden;
`;

export const Social = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
`;

export const Face = styled(Social)`
  background: #3b5998;
`;

export const Twitter = styled(Social)`
  background: #498cbf;
`;

export const Pin = styled(Social)`
  background: #cc2127;
`;

export const Icon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px;
`;

export const SocialText = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 8px;
`;

export const Info2 = styled.span`
  font-weight: normal;
`;
