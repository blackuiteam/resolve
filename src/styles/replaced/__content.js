
// ===> CONTENT WRAPPER

import styled from 'styled-components';
import { size, position } from './_mixins';

export const Wrapper = styled.div `
	${size('100%', 'calc(100% - 30px)')};
	${position('0px', '', '', '0px')};
	background-color: #28282E;
`

export const Content = styled.div `
	${size('100%', 'calc(100% - 36px)')};
	${position('35px', '', '', '0px')};
	background-color: #28282E;
`
