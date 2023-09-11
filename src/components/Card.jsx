export default function Card({url, isVisible, isFinished}){
    const classCard = `card 
    ${isVisible ? 'card-show':''} 
    ${isFinished ? 'card-finished':''} `

    return(
    <li className={classCard}>
        <img src={url} width="204" height="144" alt=""/>
    </li>
    )
}