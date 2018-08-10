import React from 'react'
import {Link} from 'react-router-dom'
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
} from 'spectacle'
import Terminal from 'spectacle-terminal'
import { push } from 'gatsby-link'
import KeyHandler from 'react-key-handler'
// import { Image } from 'react-bootstrap'
//IMAGES
import exampleImage1 from './737px-Equipe_A.svg.png'
import exampleImage2 from './632px-Equipe_B.svg.png'
import exampleImage3 from './737px-Equipe_C.svg.png'
import exampleImage4 from './601px-Equipe_D.svg.png'
import exampleImage5 from './601px-Equipe_E.svg.png'
import exampleImage6 from './542px-Equipe_F.svg.png'
import gitFlowImage from './how-to-use-git-flow.jpg'
import branchesWorkflow from './Gitflow-workflow.png'
import vcsImage from './maxresdefault.jpg'
import equipImage from './20131108-PIVOTAL-231edit1.jpg'
import bigClassDiragramImage from './big-class-diagram-without-beans1.png'
import programmerImage from './crazy-work-guy-o.gif'
import remoteRepositoryImage from './02-setup-git-standard.png'
import githubImage from './github.jpg'
import gitGithubLogo from './gitgithub.jpg'
import gitLogo from './Git-logo.svg.png'
import linusImage from './linus_torvalds.jpg'
import remoteWorkflowImage from './basic-remote-workflow.png'
import apollo11GithubImage from './apollo11.png'
import freeCodeCampGithubImage from './freeCodeCamp.png'
import linuxGithubImage from './linux.png'
import lisenceGithubImage from './lisenca.png'
import repositoriesImage from './repositorios.png'
import languagesImage from './linguagens.png'
import reactblogImage from './reactblog.png'
import newRepositoryImage from './newrepository.png'
import repositoryNameImage from './repositoryname.png'
import createRepositoryImage from './createrepository.png'
import githubPagesRepositoryImage from './githubpages.png'
import createNewFileImage from './createnewfile.png'
import fileNameImage from './filename.png'
import commitImage from './commit.png'
import contentImage from './conteudo.png'
import oodoImage from './oodo.png'

//SPECTACLE
import createTheme from 'spectacle/lib/themes/default';
// import 'spectacle/lib/themes/default/index.css';


// if (typeof window !== `undefined`) {
//     const {
//         BlockQuote,
//         Cite,
//         Deck,
//         Heading,
//         ListItem,
//         List,
//         Quote,
//         Slide,
//         Text,
//     } = require('spectacle')
//     const KeyHandler = require('react-key-handler')
    
// }

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE",
    green: "#24CA24",
    orange: "#F29035",
    blackBlue:  "#0C1A22"
}, {
    primary: "Lato",
    secondary: "Arial"
})

const iconStyle = {
    margin: '15px',
    color: '#F05134'
}

const listStyle = {
    fontSize: '28px'
}

const Image = (props) => (
    <img style={{
        maxHeight: 500,
        ...props.style
    }} src={props.src} height={props.height} width={props.width} />
);

const Presentation = () => (
    <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        contentHeight={500}
        contentWidth={600}
        theme={theme}
        controls={true}>
        <Slide transition={["zoom"]} bgColor="primary">
            <Image src={gitGithubLogo} responsive/>
        </Slide>
        <Slide bgColor="green" transition={["fade"]}>
        <Heading size={3}>Começando uma vida de programador . . .
        </Heading>
        <Image src={programmerImage} responsive style={{ margin: '20px auto' }}></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={3} textColor="primary" caps>Como você guarda o seus programas ?</Heading>
            <i className="fa fa-dropbox fa-5x" style={iconStyle}></i>
            <i className="fa fa-google fa-5x" style={iconStyle}></i>
            <i className="fa fa-usb fa-5x" style={iconStyle}></i>
            <i className="fa fa-hdd-o fa-5x" style={iconStyle}></i>
        </Slide>
        <Slide transition={["fade"]} bgImage={bigClassDiragramImage} >
            <div style={{ backgroundColor: 'white', padding: '10px'}}>
            <Heading size={2}>Programas maiores</Heading>
            </div>
        </Slide>
         <Slide transition={["fade"]} bgImage={equipImage} >
            <div style={{ backgroundColor: 'white', padding: '10px'}}>
            <Heading size={2}>Equipes maiores</Heading>
            </div>
        </Slide>
         <Slide  transition={["fade"]} bgImage={vcsImage} >
            <div style={{ backgroundColor: 'white', padding: '50px'}}>
            <Heading size={4}>Sistemas de controle de Versões</Heading>
            <Text textAlign="justify"> sistema de controle de versões (ou versionamento), VCS (do inglês version control system) ou ainda SCM (do inglês source code management)</Text>
            </div>
        </Slide>
        <Slide transition={["fade"]}>
            <List>
            <Heading size={1}>Principais vantagens</Heading>
                <ListItem>Controle do histórico</ListItem>
                <ListItem>Trabalho em equipe</ListItem>
                <ListItem>Marcação e resgate de versões estáveis</ListItem>
                <ListItem>Ramificação de projeto</ListItem>
            </List>
        </Slide>
        <Slide bgColor="tertiary" transition={["fade"]}>
            <List textColor="primary">
                <ListItem>Git</ListItem>
                <ListItem>BitKeeper  (2002 – Abril 2005)</ListItem>
                <ListItem>Subversion</ListItem>
                <ListItem>Mercurial</ListItem>
                <ListItem>Concurrent Versions System (CVS, CVSNT, OpenCVS, TortoiseCVS)</ListItem>
                <ListItem>Autodesk Vault</ListItem>
                <ListItem>IBM Rational Team Concert</ListItem>
                <ListItem>Visual Studio Team Services</ListItem>
            </List>
        </Slide>
        <Slide bgColor="orange" transition={["fade"]}>
            <Heading size={5} textColor="primary">Como functiona ? </Heading>
            <Image src={gitFlowImage} responsive></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={exampleImage1} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={exampleImage2} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
          <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={exampleImage3} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={exampleImage4} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={exampleImage5} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={exampleImage6} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={branchesWorkflow} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={gitLogo} responsive/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
             <BlockQuote>
                <Quote> <Image src={linusImage} responsive height="250px" width="150"></Image></Quote>
                <Cite>Linus Torvalds</Cite>
            </BlockQuote>
            <List >
                <ListItem style={listStyle}>Velocidade</ListItem>
                <ListItem style={listStyle}>Design simples</ListItem>
                <ListItem style={listStyle}>Suporte robusto a desenvolvimento não linear (milhares de branches paralelos)</ListItem>
                <ListItem style={listStyle}>Totalmente distribuído</ListItem>
                <ListItem style={listStyle}>Capaz de lidar eficientemente com grandes projetos como o kernel do
                    Linux (velocidade e volume de dados)</ListItem>
            </List>
        </Slide>
        <Slide bgColor="quartenary"  transition={["fade"]}>
            <Heading>Como usar ?</Heading>
        </Slide>
        <Slide transition={["fade"]}>
            <Heading size={4}>Faça o download em: <br /><a href="https://git-scm.com/downloads">git-scm.com/downloads</a></Heading>
        </Slide>
        <Slide transition={["spin"]}>
        <Heading size={5}>Após instalado abra um terminal de comando (cmd.exe , bash, shz)</Heading>
          <Terminal title="1. alexandre@alexandre: ~(zsh)" output={[
              'git config --global user.name "Alexandre Magno Monteiro"',
              "git config --global user.email amagnomonteiro@gmail.com",
              "cd <diretório-do-programa>",
              "git init",
              "Initialized empty Git repository in <diretório-do-programa>/.git/",
              "git add test.txt",
              'git commit -m "Meu primeiro commit" ',
              <div>
              [master (root-commit) 82b0dc4] Meu primeiro commit <br />
              1 file changed, 0 insertions(+), 0 deletions(-) <br />
              create mode 100644 test.txt
              </div>]}
            />
        </Slide>
        <Slide transition={["fade"]}>
        <Image src={remoteWorkflowImage} width={820} responsive></Image>
        </Slide>
        <Slide transition={["fade"]}>
            <Heading size={4}>Upload em repositórios remotos</Heading>
            <Image src={remoteRepositoryImage} width={700} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
         <Slide transition={["fade"]}>
            <List>
            <Heading>Hosts de repositórios</Heading>
                <ListItem>Github <i className="fa fa-github"></i></ListItem>
                <ListItem>Bitbucket <i className="fa fa-bitbucket"></i></ListItem>
                <ListItem>Google Code <i className="fa fa-google"></i></ListItem>
                <ListItem>Sourceforge, Gitlab, SourceRepo, Unfunddle etc...</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]}>
            <Image src={githubImage} responsive style={{margin: '0 auto 100px auto'}}></Image>
        </Slide>

        <Slide bgColor="quartenary" transition={["fade"]}>
            <Heading size={4} textColor="orange">O Github, é na verdade uma rede social ou uma fábrica social de software, que desenvolve e promove milhares de códigos fontes pré armazenados, para as mais diversas finalidades.</Heading>
            <Text>As of April 2017, GitHub reports having almost <b>20 million users and 57 million repositories</b>, making it the largest host of source code in the world.</Text>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Heading>O que existe dentro do github ?</Heading>
        </Slide>
        <Slide transition={["fade"]}>
            <Image src={apollo11GithubImage} responsive style={{margin: '0 auto 100px auto'}}></Image>
            <a href="https://github.com/chrislgarry/Apollo-11">github.com/chrislgarry/Apollo-11</a>
        </Slide>
        <Slide transition={["fade"]}>
            <Image src={freeCodeCampGithubImage}  width={700} responsive style={{margin: '0 auto 100px auto'}}></Image>
            <a href="https://github.com/freeCodeCamp/freeCodeCamp">github.com/freeCodeCamp/freeCodeCamp</a>
        </Slide>
        <Slide transition={["fade"]}> 
            <Image src={linuxGithubImage}  width={800} responsive style={{margin: '0 auto 100px auto'}}></Image>
            <a href="https://github.com/torvalds/linux">github.com/torvalds/linux</a>
        </Slide>
        <Slide transition={["fade"]}> 
            <Image src={oodoImage}  width={800} responsive style={{margin: '0 auto 100px auto'}}></Image>
            <a href="https://github.com/odoo/odoo">github.com/odoo/odoo</a>
        </Slide>
        <Slide transition={["fade"]}> 
            <Image src={reactblogImage}  width={800} responsive style={{margin: '0 auto 100px auto'}}></Image>
            <a href="https://github.com/amagno/react-blog">github.com/amagno/react-blog</a>
        </Slide>
         <Slide transition={["fade"]}> 
            <Heading size={4}>As bibliotecas usadas para construir este site</Heading>
            <List>
                <ListItem style={{ fontSize: '28px' }}>Facebook React <a href="https://github.com/facebook/react">github.com/facebook/react</a></ListItem>
                <ListItem style={{ fontSize: '28px' }}>Bootstrap <a href="https://github.com/twbs/bootstrap">github.com/twbs/bootstrap</a></ListItem>
                <ListItem style={{ fontSize: '28px' }}>Font-Awesome <a href="https://github.com/FortAwesome/Font-Awesome">github.com/FortAwesome/Font-Awesome</a></ListItem>
                <ListItem style={{ fontSize: '28px' }}>Slides: Formidable Spectacle <a href="https://github.com/FormidableLabs/spectacle">github.com/FormidableLabs/spectacle</a></ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="orange">
            <Heading size={4}>Open-source != Free-software = Open-source</Heading>
            <Heading size={5}>Veja a licença</Heading>
        </Slide>
        <Slide transition={["fade"]}> 
            <Image src={lisenceGithubImage} responsive style={{margin: '0 auto 100px auto'}}></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="blackBlue"> 
            <Heading size={6} textColor="primary">Empresas que usam o Github e repositórios populares.</Heading>
            <Image src={repositoriesImage} responsive style={{margin: '0 auto 100px auto'}}></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="blackBlue"> 
            <Heading size={6} textColor="primary">Linguagens populares.</Heading>
            <Image src={languagesImage} responsive style={{margin: '0 auto 100px auto'}}></Image>
        </Slide>
        <Slide transition={["fade"]} >
            <Heading>Importância deste conteúdo.</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
            <Text>
                Agora que sabemos o que é, e o que existe dentro do Github, vamos abordar uma breve explicação de como fazer o upload do condigo nele.
            </Text>
        </Slide>
        <Slide transition={["fade"]}>
            <Heading size={6}>Crie uma conta no <a href="https://github.com/">github.com</a></Heading>
            <Heading size={6}>Crie um repositório conforme imagens <a href="https://github.com/new">github.com/new</a></Heading>
            <Image src={newRepositoryImage} responsive style={{margin: '10px auto', border: '2px solid', borderColor: '#0CE3AC', padding: '10px'}}></Image>
            <Image src={repositoryNameImage} responsive style={{margin: '10px auto', border: '2px solid', borderColor: '#0CE3AC', padding: '10px'}}></Image>
            <Image src={createRepositoryImage} responsive style={{margin: '10px auto', border: '2px solid', borderColor: '#0CE3AC', padding: '10px'}}></Image>
        </Slide>
        <Slide transition={["spin"]}>
          <Heading size={5}>Seguindo os passos anteriores abra um terminal e digite os seguintes comandos:</Heading>
          <Terminal title="1. alexandre@alexandre: ~(zsh)" output={[
              "cd <diretório-do-programa>",
              "git log",
              <div>
              <div style={{ color: 'yellow' }}>commit 82b0dc4192e56714d303415d4d5f2b8afeb7552b</div>
              Author: Alexandre Magno Monteiro {'<amagnomonteiro@gmail.com.br>'} <br />
              Date:   Fri May 12 15:59:03 2017 -0300 <br />
              Meu primeiro commit
              </div>,
              "git remote add origin https://github.com/amagno/meu-primeiro-repositorio.git",
              "git push -u origin master",
              <div>
             Username for 'https://github.com': amagno <br />
             Counting objects: 3, done. <br />
             Writing objects: 100% (3/3), 224 bytes | 0 bytes/s, done. <br />
             Total 3 (delta 0), reused 0 (delta 0) <br />
             To https://github.com/amagno/meu-primeiro-repositorio.git <br />
             * [new branch]      master -> master <br />
             Branch master set up to track remote branch master from origin.
              </div>]}
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary">
           <Heading>Github Desktop</Heading>
           <Heading size={4}> Pra quem não gosta do terminal, existem interfaces: <a href="https://desktop.github.com/">desktop.github.com</a></Heading>
        </Slide>
        <Slide transition={["fade"]}>
            <Heading><b>Github</b> Pages</Heading>
        </Slide>
        <Slide transition={["fade"]}>
            <div className='embed-container'><iframe src='https://www.youtube.com/embed/2MsN8gpT6jY' frameborder='0' allowfullscreen></iframe></div>
        </Slide>
        <Slide transition={["fade"]}>
            <Heading size={5}>Criando um repositório para página do Github Pages</Heading>
            <Image src={githubPagesRepositoryImage} responsive style={{margin: '0 auto 100px auto'}}></Image>
        </Slide>
        <Slide transition={["fade"]}>
            <Heading size={5}>Criando o arquivo index.html</Heading>
            <Heading size={6} textColor="orange">Crie um novo arquivo conforme a imagem</Heading>
            <Image src={createNewFileImage} responsive style={{margin: '10px auto', border: '2px solid', borderColor: '#0CE3AC', padding: '10px'}}></Image>
            <Heading size={6} textColor="orange">Nomeie pra index.html</Heading>
            <Image src={fileNameImage} responsive style={{margin: '10px auto', border: '2px solid', borderColor: '#0CE3AC', padding: '10px'}}></Image>
        </Slide>
        <Slide transition={["fade"]}>
            <Heading size={6} textColor="orange">Conteúdo:</Heading>
            <Image src={contentImage} responsive style={{margin: '10px auto', border: '2px solid', borderColor: '#0CE3AC', padding: '10px'}}></Image>
            <Heading size={6} textColor="orange">Commit</Heading>
            <Image src={commitImage} responsive style={{margin: '10px auto', border: '2px solid', borderColor: '#0CE3AC', padding: '10px'}}></Image>
        </Slide>
        <Slide transition={["fade"]}>
            <List>
            <Heading size={5} textColor="orange">Mais documentação: </Heading>
                <ListItem><a href="https://github.com/jlord/git-it-electron">Git-it</a></ListItem>
                <ListItem><a href="https://git-scm.com/book/pt-br/v2">Git-Book</a></ListItem>
                <ListItem><a href="https://guides.github.com/activities/hello-world/">Github Guides</a></ListItem>
                <ListItem><a href="https://help.github.com/">Github Help</a></ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading>Acesse: <a href="https://amagno.github.io/palestra">amagno.github.io</a> para rever os slides</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
                <Quote>Obrigado</Quote>
                <Cite>Alexandre Magno Monteiro</Cite>
            </BlockQuote>
            <div style={{ padding: '30px', textAlign: 'center', marginTop: '50px' }}>
            <Link to="/">Clique para voltar para o site</Link>
            </div>
        </Slide>
    </Deck>
)

class PresentationWithState extends React.Component {

    redirect(e) {
        e.preventDefault()
        push('/talks-git-github/')
    }
    render() {
        return (
            <div>
                <KeyHandler keyEventName="keydown" keyValue="Escape" onKeyHandle={this.redirect} />
                <Presentation />
            </div>
        )
    }
}

export default PresentationWithState