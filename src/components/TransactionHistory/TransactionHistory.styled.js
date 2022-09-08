import styled from "styled-components";

export const TransactionTable = styled.table`
width: 50%;
border: none;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto;
box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
`
export const TransactionTableHead = styled.th`
text-transform: uppercase;
color: #fff;
font-weight: bold;
text-align: centre;
border: none;
padding: 10px 0;
background: #193FD5;
font-size: 14px;
border-left: 1px solid #ddd;
border-right: 1px solid #ddd;
`
export const TransactionTableBody = styled.td`
padding: 10px 0;
border-left: 1px solid #ddd;
border-right: 1px solid #ddd;
font-size: 14px;
text-align: center;
`
export const TransactionTableBodyContent = styled.tr`
background-color: #fff;
&:nth-child(even){
	background-color: #D5DDFF;
}
`