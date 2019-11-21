import styled from 'styled-components';
import {device} from '../../helpers/device/device';
import {size} from '../../helpers/device/size'

const Page = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  @media ${device.laptop} {  // -> "@media (min-width: ${size.laptop})" -> "@media (min-width: 1024px)"
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1800px;
  }
`;
export default Page;