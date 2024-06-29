const CardLists = ({ tittle, image, description }) => {
 return (
    <li className="concept">
      <img src= { image } alt={ tittle } />
      <h2>{ tittle }</h2>
      <p>{ description }</p>
    </li>
  );
}
export default CardLists;