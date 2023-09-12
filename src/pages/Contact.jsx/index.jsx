
import ButtonStyled from "../../components/Button";
import "./style.css";

export default function Contact() {

   


    return(
        <div>
            <div className="mainSectionContactPage">
                
                <aside>
                    <h4>Telefone</h4>
                    <p>+55 (15) 99777-4433</p>
                    <h4>Email</h4>
                    <p>giovannassdias@gmail.com</p>
                </aside>
                
                
                <form action="">
                    <h3>Entre em contato!</h3>
                    <ul>
                        <li>
                            <label htmlFor="nome">Escreva seu nome</label>
                            <input type="text" name="nome" placeholder="Nome" />
                        </li>
                        <li>
                            <label htmlFor="email">Escreva seu email</label>
                            <input type="text" name="email" placeholder="email@email.com" />
                        </li>
                        <li>
                            <label htmlFor="email">Escreva seu telefone</label>
                            <input type="text" name="email" placeholder="Telefone" />
                        </li>
                        <li>
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea type="textarea" cols="47" rows="30" name="mensagem" placeholder="Escreva me!" />
                        </li>

                    </ul>   
                    
                   <ButtonStyled />
                    
                </form>


            </div>
        </div>
    )
}