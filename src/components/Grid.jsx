import Card from "./Card";

export default function Grid({images, visibleItems, finishedItems}){
    return (
<ul className='cards'>
{
    images.map((item)=>(
        <Card 
        key={item.id} 
        url={item.url} 
        isVisible = {visibleItems.includes(item.id)}
        isFinished = {finishedItems.includes(item.id)}
        />
    ))
}
</ul>
    )

}