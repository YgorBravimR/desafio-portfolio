import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 3.75rem;        
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .my-projects {
    display: flex;
    justify-content:space-between;
  }

  .recent-projects{
    display: flex;
    gap: 1.25rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      }
    }
    span {
      font-size: 0.8rem; 
    }

    .recent-post-hashtag{
      display:flex;
      gap: 0.875rem;
    }
  }
`

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  
  .user-profile-card {
    align-items: center;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      border: 2px solid var(--base-img-green);
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 1.45rem;
      line-height: 1.85rem;
      margin-bottom: 0.225rem;
    }
  }
  .user-info-description {
    gap: 1.25rem;
  }

  .user-techs, .user-experience, .user-scholarship {
    h2 {
      margin-bottom: 1.25rem;
      margin-left: -1.25rem;
    }
  }

  .user-techs-tags {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  gap: 1rem;
  }

  .user-experience, .user-scholarship {
    ul {
      margin-left: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
  }

`

export const CardBox = styled.div`
  background-color: var(--base-card-bg);
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`

export const UserInfoDescriptionContent = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items:center;
  gap: 1.25rem;
`

export const UserTechTag = styled.div`
  background-color: var(--base-tag-bg);
  color: var(--base-bg);
  border-radius: 30px;
  text-transform: uppercase;
  padding: 0.5rem;
  font-size: 0.75rem;
`

export const ProjectCardBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
`