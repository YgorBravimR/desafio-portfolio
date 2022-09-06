import styled from 'styled-components'

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .project-title {
    display: flex;
    align-items: center;
    gap: 0.75rem;

  }

  .project-status {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .project-status-stars {
    display: flex;
    gap: 1.25rem;
    align-items: center;

  }

  .project-status-individual {
    display: flex;
    gap: 0.75rem;
    align-items: center;

     .circle-svg {
      color: var(--icon-javascript);
      background-color: var(--base-text);
      border-radius: 50%;
    }
  }
`