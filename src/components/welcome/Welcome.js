import { StyledText, StyledImage } from './styled';
import image from './history-complete.png';

function Welcome() {
    return (
        <StyledText>
            <h2>Sprint 6 - Intro React</h2>
            <p>Ja has arribat al teu primer lliurament de React! Una vegada tenint els conceptes clars de javascript, veuràs que amb l'ajuda de React, podràs fer de manera fàcil i ràpida aplicacions més potents del que podíem fer amb Javascript pla (vanilla Javascript).</p>
            <p>Pren-te amb calma aquest lliurament, els primers passos en React costen una mica, ja que has d'entendre la manera en la qual les aplicacions en React es construeixen. No oblidis que en React, la web la dividim en petits trossos o components, que són mòduls reutilitzables que representen una part de la nostra aplicació. Aquestes parts poden ser grans o petites, però, generalment, estan ben definides: tenen un propòsit únic i obvi.</p>
            <p>En aquest lliurament posarem en pràctica els conceptes bàsics que has après de React.</p>
            <p>Un/a client/a que té com a producte principal una web de gestió empresarial desenvolupada amb React, ens ha demanat que desenvolupem un tutorial, en el qual mitjançant dos botons els nous usuaris puguin avançar i retrocedir en els consells, modificant-se el text d'ajuda i la imatge de fons.</p>
            <p>Com de moment no tenim el material necessari per crear el tutorial, li mostrarem al client/a els següents 4 passos:</p>
            <StyledImage src={image} alt="history-complete" />
            <p>Començarem creant una web en React des de zero, incloent-hi tots els passos necessaris, per a passar després a crear els nostres primers components i fer ús de props.</p>
            <p>Després, modificarem la pàgina per convertir-la en una web interactiva que mostrarà una història. Aplicarem les tècniques fonamentals per aplicar estils a la web i afegirem accions que l'usuari/ària pugui interactuar amb la nostra aplicació.</p>
        </StyledText>
    );
}

export default Welcome;