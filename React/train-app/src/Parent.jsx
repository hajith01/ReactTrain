import Child from "./Child";

function Parent() {
  const message = "How's the message from parent?";

  return (
    <div>
      <Child info={message} />
    </div>
  );
}

export default Parent;
