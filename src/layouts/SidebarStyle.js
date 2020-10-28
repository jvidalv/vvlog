import styled from 'styled-components'

export const SourceDiv = styled.div`
  margin-bottom: 0.5rem;
  &:last-child {
    margin-bottom: unset;
  }
`

export const SidebarElement = styled.div`
  background: ${({ theme }) => theme.surface.level1};
  box-shadow: 1px 1px 15px rgba(67, 38, 100, 0.15);
  border: none;
  margin-bottom: 25px;
  display: grid;
  position: relative;

  &.with-icon::before {
    content: '${(props) => props.icon ?? '🔥'}';
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
    display: inline-flex;
    justify-content: center;
    position: absolute;
    right: -0.9rem;
    background: ${({ theme }) => theme.surface.level1};
    border-radius: 50%;
    align-items: center;
    top: -0.8rem;
    transition: 1s;
    box-shadow: 0 0 10px rgba(67, 38, 100, 0.15);
  }
`
