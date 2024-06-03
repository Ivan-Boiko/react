function ButtonReset({onClick, count}) {

    return !!count && (
        <div>
          <button style={{ backgroundColor: 'red' }} onClick={onClick}>
            Reset
          </button>
        </div>
      )
}
export default ButtonReset;