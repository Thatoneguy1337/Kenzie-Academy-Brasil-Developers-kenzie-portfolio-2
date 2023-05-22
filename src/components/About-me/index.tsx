import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import { AboutMeSectionContent, AboutMeTitle, AboutMeTxt } from "./style";

export const AboutMe = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <>
      <AboutMeSectionContent>
        <AboutMeTitle>Sobre Mim</AboutMeTitle>
        
        <AboutMeTxt>
          Sou Desenvolvedor Fullstack, com +1000 horas/aula de aprendizado
          constante, projetos em equipe e formação certificada. Desde cedo fui
          fascinado por entender o que há por trás do funcionamento da máquina,
          me levando a entrar nesse universo de códigos, a principio por
          intermédio dos games e inspirações dentro da minha família. Busco
          utilizar minha experiência para impulsionar o desenvolvimento de
          projetos de forma consistente, superando a qualidade esperada e de
          acordo com as melhores práticas de desenvolvimento.
        </AboutMeTxt>
        
        <AboutMeTxt>
          Já trabalhei como tradutor freelancer, e hoje estou me formando na
          Kenzie Academy Brasil como desenvolvedor FullStack, atualmente e
          completei o último módulo de desenvolvimento front-end. Até o momento,
          estou estudando desenvolvimento backend com python e suas respectivas
          bibliotecas.
        </AboutMeTxt>
        
        <AboutMeTxt>
          Principais competências: ▪ JavaScript (ES6) | TypeScript | React |
          NodeJs | Python | NextJs | HTML5 | CSS3 | PostgreSQL | Django |
          Express | TypefORM | Rest | Hooks | POO | Componentização, uso de
          bibliotecas de componentes | Metodologias Ágeis | Consumo de APIs |
          DevOps | Notions| Scrum | JIRA |Trello | Github & Git.
        </AboutMeTxt>
      
      </AboutMeSectionContent>
    </>
  );
};
