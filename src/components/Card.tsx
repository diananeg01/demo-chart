import "./Card.css";

export default function Card(props: any) {
  const classes = "card " + props.className
  return <div className={classes}>{props.children}</div>;
}
