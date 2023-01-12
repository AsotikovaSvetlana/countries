import styled from "styled-components";

export const Details = styled.section`
  width: 100%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

export const DetailsImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;

export const DetailsTitle = styled.h1`
  margin-bottom: 0.67em;
  font-size: 2em;
  font-weight: var(--fw-normal);
`;

export const DetailsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

export const DetailsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const DetailsListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const DetailsTags = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;
