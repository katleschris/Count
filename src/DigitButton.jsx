import { ACTIONS } from "./Calculator"

export default function DigitButton({ dispatch, digit }) {
  const buttonStyle = {
    position: "relative",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#c9d5e0",
    borderRadius: "15px",
    boxShadow: "10px 10px 10px -5px rgba(0, 0, 0, 0.15),inset 7px 7px 5px rgba(255, 255, 255, 0.5), -7px -7px 18px rgba(255, 255, 255, 0.35), inset -1px -1px 5px rgba(0,0,0,0.2)"
  };

  return (
    <button
      style={buttonStyle} // Apply the CSS rules here
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}
