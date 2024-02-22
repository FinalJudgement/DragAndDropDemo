import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
    backgroundColor: "purple",
    width: "70px",
    height: "30px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}