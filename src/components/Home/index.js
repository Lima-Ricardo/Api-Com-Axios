import './home.css';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


function Home() {
  return (
    <div className="App">
      <header>
      <section className="main">
            <div className="layer"></div>
            <div className="center">
              <header>
                <div className="icons-social">
                  <a href="https://www.linkedin.com/school/blue-edtech/"><i><FaLinkedin/></i></a>
                  <a href="https://github.com/Lima-Ricardo"><i><FaGithub/></i></a>
                  <a href="https://www.facebook.com/BlueEdTechBr"><i><FaFacebook/></i></a>
                </div>{/*icons-social*/}
                <div className="clear"></div>
                <div className="logo">
                  <h3>Kapuha</h3>
                </div>{/*logo*/}
                <nav className="desktop">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                  </ul>
                </nav>
                <nav className="mobile">
                  <i className="fa fa-bars"></i>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                  </ul>	
                </nav>
                <div className="clear"></div>
              </header>
              <div className="conteudo-header">
                <h2>Bem-vindo(a) ao nosso <span>website!</span></h2>
                <p>Kapuha é uma plataforma que dá acesso a revisão de conteúdos educacionais de forma complementar, exclusiva para estudantes da Blue EdTech</p>
                <p>O enorme benefício didático observado com o consumo de objetos educacionais digitais, em especial aqueles em vídeo, foi a principal motivação para o desenvolvimento e implementação da plataforma. O emprego da linguagem audiovisual e a facilidade de acesso aos conteúdos por meio da internet têm demonstrado ser grandes aliados na formação de profissionais na área da tecnologia.</p>
                
                <a href="https://blueedtech.com.br/">Saiba mais!</a>
              </div>{/*conteudo-header*/}
            </div>{/*center*/}
          </section>{/*--main*/}

          <section className="planos">
            <div className="chamada-planos">
              <div className="center">
                <h2>Conteúdo</h2>
              </div>	
            </div>{/*chamada-planos*/}
            <section className="box-planos">
              <div className="center">
                <div className="box-planos-single">
                  <div className="box-planos-wraper">
                  <h2>Front-End</h2>
                  <div className="pontos-plano">
                    <p><i className="fa fa-check-square"></i> </p>
                    <p><i className="fa fa-check-square"></i> HTML - CSS - SCSS</p>
                    <p><i className="fa fa-check-square"></i> Bootstrap - JavaScrpit - ReactJS</p>
                    <p><i className="fa fa-check-square"></i> React Native - NextJS - Cloud AWS</p>
                  </div>{/*planos*/}
                  <div className="aulas">
                    <br/>
                  </div>{/*preco*/}
                  </div>
                </div>{/*box-planos-single */}
              
              <div className="box-planos-single">
              <div className="box-planos-wraper">
                  <h2>Back-End</h2>
                  <div className="pontos-plano">
                    <p><i className="fa fa-check-square"></i> .NET Core - C#</p>
                    <p><i className="fa fa-check-square"></i> ASP.NET - EF Core</p>
                    <p><i className="fa fa-check-square"></i> Web API - Websocket</p>
                    <p><i className="fa fa-check-square"></i> Azure - Git - Github</p>
                  </div>{/*pontos-plano*/}
                  <div className="aulas">
                    <br/>
                  </div>{/*aulas*/}
                </div>
              </div>{/*box-planos-single*/}

              <div className="box-planos-single">
              <div className="box-planos-wraper">
                  <h2>Full Stack</h2>
                  <div className="pontos-plano">
                    <p><i className="fa fa-check-square"></i> HTML - CSS - SCSS </p>
                    <p><i className="fa fa-check-square"></i> Bootstrap - JS - Angular</p>
                    <p><i className="fa fa-check-square"></i> NodeJS - MongoDB - SQL</p>
                    <p><i className="fa fa-check-square"></i> AWS - Heroku - Git</p>
                  </div>{/*pontos-plano*/}
                  <div className="aulas">
                    <br/>
                  </div>{/*aulas*/}
                  </div>
                </div>{/*box-planos-single*/}

              </div>{/*center*/}
            </section>{/*box-planos*/}
          </section>

            <section className="parallax">
              <div className="overlay-parallax"></div>
              <div className="center">
                <h2>Sobre o projeto <span></span></h2>
                <p>A plataforma foi desenvolvida de aluno para aluno, visando auxiliar e complementar o aprendizado tanto daqueles estudantes novos ou já experientes, quanto dos profissionais já formados, pois a tecnologia está em constante evolução e temos que acompanhá-la.</p>
                <p>Usar a força revolucionária da tecnologia para conectar pessoas e expandir seus horizontes através de conhecimentos adquiridos através dos módulos.</p>
              </div>
            </section>
          
          <div className="final-section">
            <div className="center">
              <div className="w50 contato">
                <div className="form">
                  <h2>Login</h2>
                  <form>
                    <div class="input-container">
                      <span>Usuário*</span>
                      <input type="text" name="nome" required />
                    </div>

                    <div className="input-container">
                      <span>E-mail*</span>
                      <input type="text" name="password" required />
                    </div>

                    <div className="input-submit-container">
                      
                      <br></br>
                      <input type="submit" name="acao" value="Conectar"></input>
                      <span></span>
                    </div>
                      <p className="warning">*Campos obrigatórios</p>
                  </form>
                </div>
              </div>
              
              <div className="w50 time">
                <h2><div className="borda-efeito"></div>Desenvolvedores</h2>
                
                <div className="w50 equipe-single">
                  <div className="topo-box-usuario">
                    <div className="box-avatar1"></div><div className="info-usuario">
                      <p>Ricardo Lima</p>
                      <p>Desenvolvedor | Aluno</p>
                    </div>
                  </div>{/*topo-box-usuario*/}
                  <div className="descricao-usuario-box">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit</p>
                  </div>{/*descricao-usuario-box*/}
                </div>
                
                <div className="w50 equipe-single">
                  <div className="topo-box-usuario">
                    <div className="box-avatar2"></div><div className="info-usuario">
                      <p>Gustavo Cervera</p>
                      <p>Desenvolvedor | Aluno</p>
                    </div>
                  </div>{/*topo-box-usuario*/}
                  <div className="descricao-usuario-box">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit</p>
                  </div>{/*descricao-usuario-box*/}
                </div>

                <div className="w50 equipe-single">
                  <div className="topo-box-usuario">
                    <div className="box-avatar3"></div>
                    <div className="info-usuario">
                      <p>Pessoa 3 </p>
                      <p>Desenvolvedor | Desenvolvedor</p>
                    </div>
                  </div>{/*topo-box-usuario*/}
                  <div className="descricao-usuario-box">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit</p>
                  </div>{/*descricao-usuario-box*/}
                </div>
                
                <div className="w50 equipe-single">
                  <div className="topo-box-usuario">
                    <div className="box-avatar4"></div>
                    <div className="info-usuario">
                      <p>Pessoa 4 </p>
                      <p>Desenvolvedor | Desenvolvedor</p>
                    </div>
                  </div>{/*topo-box-usuario*/}
                  <div className="descricao-usuario-box">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit</p>
                  </div>{/*descricao-usuario-box*/}
                </div>
                <div className="clear"></div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
          <footer>
            <p>Todos os direitos reservados ao Projeto</p>
          </footer>
          <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
          <div id="fb-root"></div>

      </header>
    </div>
    
  
  );
}

export default Home;
