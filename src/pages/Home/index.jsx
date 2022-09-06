import {
  HomeContainer,
  AsideContainer,
  MainContainer,
  CardBox,
  UserInfoDescriptionContent,
  UserTechTag,
  ProjectCardBoxContainer,
} from "./styles";

import {
  MapPin,
  Suitcase,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  Globe,
  EnvelopeSimple,
} from "phosphor-react";

import { ProjectCard } from "../../components/ProjectCard";

export function Home() {
  return (
    <HomeContainer>
      <AsideContainer>
        <CardBox className="user-profile-card">
          <img src="http://github.com/ygorbravimr.png" />
          <h2>Ygor Bravim Ribeiro</h2>
          <p>Front End Developer</p>
        </CardBox>
        <CardBox className="user-info-description">
          <UserInfoDescriptionContent href="#">
            <MapPin size={24} />
            <span>Brasil</span>
          </UserInfoDescriptionContent>

          <UserInfoDescriptionContent href="#">
            <Suitcase size={24} />
            <span>Bravo Enterprise</span>
          </UserInfoDescriptionContent>

          <UserInfoDescriptionContent href="#">
            <GithubLogo size={24} />
            <span>YgorBravimR</span>
          </UserInfoDescriptionContent>

          <UserInfoDescriptionContent href="#">
            <LinkedinLogo size={24} />
            <span>ygorbravimr</span>
          </UserInfoDescriptionContent>

          <UserInfoDescriptionContent href="#">
            <TwitterLogo size={24} />
            <span>BravimYgor</span>
          </UserInfoDescriptionContent>

          <UserInfoDescriptionContent href="#">
            <Globe size={24} />
            <span>https://ygorbravim.dev</span>
          </UserInfoDescriptionContent>

          <UserInfoDescriptionContent href="#">
            <EnvelopeSimple size={24} />
            <span>ygorbravimr@gmail.com</span>
          </UserInfoDescriptionContent>
        </CardBox>

        <CardBox className="user-techs">
          <h2>Tecnologias</h2>
          <div className="user-techs-tags">
            <UserTechTag>Javascript</UserTechTag>
            <UserTechTag>Node JS</UserTechTag>
            <UserTechTag>React</UserTechTag>
            <UserTechTag>Typescript</UserTechTag>
            <UserTechTag>Javascript</UserTechTag>
            <UserTechTag>Node JS</UserTechTag>
            <UserTechTag>React</UserTechTag>
            <UserTechTag>Typescript</UserTechTag>
          </div>
        </CardBox>
        <CardBox className="user-experience">
          <h2>Experiências</h2>
          <ul>
            <li>
              <strong>Rocketseat</strong>
              <p>2019 - Hoje</p>
              <p>FrontEnd React Dev</p>
            </li>
            <li>
              <strong>Rocketseat</strong>
              <p>2019 - Hoje</p>
              <p>FrontEnd React Dev</p>
            </li>
            <li>
              <strong>Rocketseat</strong>
              <p>2019 - Hoje</p>
              <p>FrontEnd React Dev</p>
            </li>
            <li>
              <strong>Rocketseat</strong>
              <p>2019 - Hoje</p>
              <p>FrontEnd React Dev</p>
            </li>
          </ul>
        </CardBox>
        <CardBox className="user-scholarship">
          <h2>Experiências</h2>
          <ul>
            <li>
              <strong>Rocketseat</strong>
              <p>2022 - 2022</p>
              <p>Ignite ReactJS</p>
            </li>
            <li>
              <strong>Curso em Vídeo</strong>
              <p>2022 - 2022</p>
              <p>HTML5 | CSS3</p>
            </li>
          </ul>
        </CardBox>
      </AsideContainer>
      <MainContainer>
        <CardBox>
          <div className="my-projects">
            <h2>Meus projetos</h2>
            <a href="#">Veja todos</a>
          </div>
        </CardBox>
        <ProjectCardBoxContainer>
          <CardBox>
            <ProjectCard />
          </CardBox>
          <CardBox>
            <ProjectCard />
          </CardBox>
          <CardBox>
            <ProjectCard />
          </CardBox>
        </ProjectCardBoxContainer>
        <CardBox>
          <h2>Mais recentes posts</h2>
        </CardBox>
        <CardBox>
          <div className="recent-projects">
            <img src="http://github.com/ygorbravimr.png" />
            <div>
              <div>
                <h2>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h2>
                <span>2 anos atrás</span>
              </div>
              <div className="recent-post-description">
                <p>
                  Erro adv devices Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Alias ipsa deserunt nihil. no ghenyumotion e
                  adntroind studio
                </p>
                <div className="recent-post-hashtag">
                  <span>#react-native</span>
                  <span>#motion</span>
                  <span>#javascript</span>
                  <span>#Angular</span>
                </div>
              </div>
            </div>
          </div>
        </CardBox>
      </MainContainer>
    </HomeContainer>
  );
}
