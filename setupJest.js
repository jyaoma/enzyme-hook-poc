import '@babel/polyfill';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('@testing-library/jest-dom/extend-expect');

configure({ adapter: new Adapter() });