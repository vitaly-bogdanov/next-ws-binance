import { SymbolPage } from '../core/symbol';
import { reduxSsr } from '../main/redux';

export default SymbolPage;

export const getStaticProps = reduxSsr;