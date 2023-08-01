interface hdmProps {
  house: number;
  degrees: number;
  minutes: number;
  classList?: string[];
}

export default function ColorSquare(props: hdmProps) {
  // TO-DO: HSL to RGB conversion, adding that background color to the classlist

  // minutes translate to hue
  // degrees translate to saturation
  // house translates to brightness/lightness

  const minutesHueRatio = 360 / 59;
  const degreeSaturationRatio = 100 / 29;
  const houseBrightnessRatio = 100 / 13;

  const hue = () => {
    return Math.min(props.minutes * minutesHueRatio, 360);
  };

  const sat = () => {
    return Math.min(props.degrees * degreeSaturationRatio, 100);
  };

  const bright = () => {
    return Math.min(props.house * houseBrightnessRatio, 100);
  };

  return (
    <div
      className={`big-color-square ${
        props.classList ? props.classList.join(" ") : ""
      }`}
    ></div>
  );
}
