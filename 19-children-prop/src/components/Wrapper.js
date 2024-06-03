function Wrapper(props) {
    console.log(props)
  return (
    <div style={{backgroundColor:props.color}}>
      {props.children[1]}
    </div>
  );
}
export default Wrapper;
