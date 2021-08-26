import styled from 'styled-components'

export const DayItem = styled.div`
  position: relative;
  font-size: 1.1rem;
  padding: 0.9rem 0.3rem;
  text-align: center;
`

export const TodosCount = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  width: 1.1rem;
  heigth: 1.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: ${props => props.dark ? "Gainsboro" : "palevioletred"};
  color: ${props => props.dark ? "MidnightBlue" : "white"};
  border: 0.1rem solid ${props => props.dark ? "Gainsboro" : "palevioletred"};
  border-radius: 50%;
`