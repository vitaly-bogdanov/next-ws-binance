import { DepthPage } from '../core/depth';
import { reduxSsr } from '../main/redux';

export default DepthPage;

export const getStaticProps = reduxSsr;